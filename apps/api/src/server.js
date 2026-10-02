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

const demoUsers = [
  { id: 'u1', name: 'Aisha', email: 'aisha@wevotok.com', role: 'creator' },
  { id: 'u2', name: 'Yazan', email: 'yazan@wevotok.com', role: 'moderator' },
  { id: 'u3', name: 'Mona', email: 'mona@wevotok.com', role: 'admin' },
];

const demoRooms = [
  { id: 'room-1', name: 'Startup Circle', topic: 'AI product building', members: 24, live: true },
  { id: 'room-2', name: 'Creators Hangout', topic: 'Content workflow', members: 18, live: true },
  { id: 'room-3', name: 'Evening Chill', topic: 'Casual community talk', members: 31, live: true },
  { id: 'room-4', name: 'Growth Room', topic: 'Marketing ideas', members: 12, live: false },
];

const rooms = new Map();

for (const room of demoRooms) {
  rooms.set(room.id, {
    ...room,
    members: new Set(),
  });
}

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'wevotok-api', time: new Date().toISOString() });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const user = demoUsers.find(
    (item) => item.email.toLowerCase() === String(email).toLowerCase() && password === '123456'
  );

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  return res.json({
    token: `demo-token-${user.id}`,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

app.get('/api/rooms', (req, res) => {
  const roomList = Array.from(rooms.entries()).map(([id, room]) => ({
    id,
    name: room.name,
    topic: room.topic,
    members: room.members.size || room.membersCount || 0,
    live: room.live,
  }));

  res.json(roomList);
});

app.get('/api/admin/summary', (req, res) => {
  res.json({
    activeUsers: '12.4K',
    liveRooms: 482,
    avgSession: '36m',
    reports: 31,
    newUsers: '+18%',
    revenue: '$28.4K',
  });
});

app.get('/api/profile', (req, res) => {
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '');

  if (!token || !token.includes('demo-token-')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const userId = token.split('demo-token-')[1];
  const user = demoUsers.find((item) => item.id === userId) || demoUsers[0];

  return res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: 'active',
  });
});

io.on('connection', (socket) => {
  console.log('socket connected', socket.id);

  socket.on('join-room', ({ roomId, userName }) => {
    if (!roomId) return;

    if (!rooms.has(roomId)) {
      rooms.set(roomId, {
        id: roomId,
        name: 'Community Room',
        topic: 'Live room',
        live: true,
        members: new Set(),
      });
    }

    const room = rooms.get(roomId);
    room.members.add(socket.id);
    socket.join(roomId);

    io.to(roomId).emit('room-state', {
      roomId,
      members: room.members.size,
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
    rooms.forEach((room, roomIdKey) => {
      if (room.members.has(socket.id)) {
        room.members.delete(socket.id);
      }

      if (room.members.size === 0) {
        rooms.delete(roomIdKey);
      }
    });
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`WevoTok API running on http://localhost:${PORT}`);
});
