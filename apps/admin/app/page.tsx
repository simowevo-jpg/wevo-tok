const metrics = [
  { label: 'Active users', value: '12.4K', trend: '+18%' },
  { label: 'Live rooms', value: '482', trend: '+9%' },
  { label: 'Avg. session', value: '36m', trend: '+12%' },
  { label: 'Reports', value: '31', trend: '-8%' },
];

const rooms = [
  { name: 'Startup Circle', speakers: 21, status: 'Healthy' },
  { name: 'Creators Hangout', speakers: 17, status: 'Moderated' },
  { name: 'Night Community', speakers: 38, status: 'Busy' },
  { name: 'Creator Lab', speakers: 11, status: 'Healthy' },
];

const users = [
  { name: 'Aisha', role: 'Creator', country: 'UAE', status: 'Active' },
  { name: 'Yazan', role: 'Moderator', country: 'Jordan', status: 'Active' },
  { name: 'Mona', role: 'Analyst', country: 'Saudi', status: 'Pending' },
  { name: 'Samir', role: 'User', country: 'Qatar', status: 'Blocked' },
];

export default function AdminPage() {
  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <div className="brand-box">WevoTok</div>
        <nav className="side-nav">
          <span className="active">Overview</span>
          <span>Users</span>
          <span>Rooms</span>
          <span>Reports</span>
          <span>Revenue</span>
          <span>Settings</span>
        </nav>
      </aside>

      <section className="admin-main">
        <header className="admin-header">
          <div>
            <p className="muted">Dashboard</p>
            <h1>Owner overview</h1>
          </div>
          <button className="admin-btn">Create room</button>
        </header>

        <div className="stats-grid">
          {metrics.map((item) => (
            <div key={item.label} className="metric-card">
              <p>{item.label}</p>
              <h2>{item.value}</h2>
              <span>{item.trend}</span>
            </div>
          ))}
        </div>

        <div className="content-grid">
          <div className="panel-card">
            <div className="panel-head">
              <h3>Live rooms</h3>
              <button>View all</button>
            </div>
            {rooms.map((room) => (
              <div key={room.name} className="row-item">
                <div>
                  <strong>{room.name}</strong>
                  <small>{room.speakers} speakers</small>
                </div>
                <span className={`status ${room.status.toLowerCase()}`}>{room.status}</span>
              </div>
            ))}
          </div>

          <div className="panel-card">
            <div className="panel-head">
              <h3>Recent users</h3>
              <button>Manage</button>
            </div>
            {users.map((user) => (
              <div key={user.name} className="row-item">
                <div>
                  <strong>{user.name}</strong>
                  <small>{user.role} • {user.country}</small>
                </div>
                <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
