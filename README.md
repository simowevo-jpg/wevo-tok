# WevoTok

WevoTok is a real-time voice chat and community platform inspired by live audio communities, with a companion admin dashboard for managing users, rooms, moderation, and analytics.

## Project structure

- `apps/web` — user-facing web app
- `apps/admin` — admin dashboard
- `apps/api` — realtime backend (Express + Socket.IO)

## Stack

- Next.js
- Tailwind CSS
- Express
- Socket.IO
- WebRTC-ready architecture
- PostgreSQL-ready data model

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Start the backend:

```bash
npm run dev:api
```

3. Start the user app:

```bash
npm run dev:web
```

4. Start the admin dashboard:

```bash
npm run dev:admin
```

5. Open:

- Web app: http://localhost:3000
- Admin: http://localhost:3001
- API: http://localhost:4000/health

## Default features

- Voice room lobby
- Live community room UI
- Real-time chat overlay
- Moderator/admin dashboard
- User and room management panel
- Metrics cards for engagement

## Notes

This is an MVP starter designed to be expanded into a full production-ready platform with authentication, WebRTC signaling, database persistence, and role-based access control.
