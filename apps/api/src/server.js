import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const rooms = new Map();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'wevotok-api', time: new Date().toISOString() });
});

app.get('/api/rooms', (req, res) => {
  const roomList = Array.from(rooms.entries()).map(([id, room]) => ({
    id,
    name: room.name,
    members: room.members.length,
    live: room.live,
  }));

  res.json(roomList);
});

io.on('connection', (socket) => {
  console.log('socket connected', socket.id);

  socket.on('join-room', ({ roomId, userName }) => {
    if (!roomId) return;

    if (!rooms.has(roomId)) {
      rooms.set(roomId, {
        name: 'Community Room',
        live: true,
        members: new Set(),
      });
    }

    const room = rooms.get(roomId);
    room.members.add(socket.id);
    socket.join(roomId);

    io.to(roomId).emit('room-state', {
      roomId,
      members: Array.from(room.members).length,
      users: [{ id: socket.id, name: userName || 'Guest' }],
    });
  });

  socket.on('send-message', ({ roomId, userName, text }) => {
    if (!roomId || !text) return;
    io.to(roomId).emit('receive-message', {
      userName: userName || 'Guest',
      text,
      time: new Date().toISOString(),
    });
  });

  socket.on('toggle-mic', ({ roomId, muted }) => {
    if (!roomId) return;
    socket.to(roomId).emit('user-mic-state', { socketId: socket.id, muted });
  });

  socket.on('disconnect', () => {
    rooms.forEach((room, roomId) => {
      if (room.members.has(socket.id)) {
        room.members.delete(socket.id);
      }

      if (room.members.size === 0) {
        rooms.delete(roomId);
      }
    });
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`WevoTok API running on http://localhost:${PORT}`);
});
