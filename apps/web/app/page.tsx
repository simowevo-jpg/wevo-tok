const rooms = [
  { name: 'Startup Circle', members: 24, status: 'Live', topic: 'AI product building' },
  { name: 'Creators Hangout', members: 18, status: 'Live', topic: 'Content workflow' },
  { name: 'Evening Chill', members: 31, status: 'Live', topic: 'Casual talk' },
  { name: 'Growth Room', members: 12, status: 'Queued', topic: 'Marketing ideas' },
];

const chat = [
  { user: 'Lina', text: 'Anyone experimenting with AI note-taking tools?' },
  { user: 'Hazem', text: 'I just launched a new voice room idea for founders.' },
  { user: 'Aisha', text: 'Let’s keep it concise and practical today.' },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-logo">W</div>
          <div>
            <p className="eyebrow">COMMUNITY</p>
            <h1>WevoTok</h1>
          </div>
        </div>

        <nav className="nav-list">
          <span className="active">Discover</span>
          <span>Following</span>
          <span>Rooms</span>
          <span>Messages</span>
          <span>Profile</span>
        </nav>

        <div className="panel">
          <p className="panel-label">Live rooms</p>
          {rooms.map((room) => (
            <div key={room.name} className="room-item">
              <div>
                <strong>{room.name}</strong>
                <small>{room.topic}</small>
              </div>
              <div className="room-meta">
                <span className={`pill ${room.status === 'Live' ? 'live' : 'queued'}`}>
                  {room.status}
                </span>
                <span>{room.members}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>

      <section className="main-stage">
        <header className="topbar">
          <div>
            <p className="eyebrow">NOW LIVE</p>
            <h2>Startup Circle</h2>
          </div>
          <button className="primary-btn">Join Room</button>
        </header>

        <div className="showcase-card">
          <div className="avatar-stack">
            <span>AI</span>
            <span>MO</span>
            <span>SA</span>
            <span>+12</span>
          </div>
          <div className="stage-info">
            <p className="eyebrow">ROOM TOPIC</p>
            <h3>AI product building</h3>
            <p>Grounded conversations on launch strategy, user acquisition, and founder feedback loops.</p>
          </div>
        </div>

        <div className="controls-row">
          <button className="control-button success">Mic On</button>
          <button className="control-button">Camera</button>
          <button className="control-button warning">Share</button>
          <button className="control-button danger">Leave</button>
        </div>
      </section>

      <aside className="chat-panel">
        <div className="chat-header">
          <h3>Room chat</h3>
          <span>24 online</span>
        </div>

        <div className="chat-list">
          {chat.map((item) => (
            <div key={item.user} className="chat-message">
              <strong>{item.user}</strong>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="composer">
          <input placeholder="Write a message..." />
          <button>Send</button>
        </div>
      </aside>
    </main>
  );
}
