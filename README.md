# WevoTok

WevoTok is a premium live voice community platform with a real-time social experience. The monorepo includes:

- `apps/web` — consumer web app
- `apps/admin` — admin dashboard
- `apps/api` — realtime backend (Express + Socket.IO)
- `apps/mobile` — cross-platform mobile app (Expo / React Native)

## Features

- Live voice rooms
- Real-time chat
- Community discovery
- Owner/admin analytics dashboard
- Cross-platform user experience
- Ready for WebRTC and production expansion

## Stack

- Next.js
- React Native / Expo
- Express
- Socket.IO
- Tailwind CSS
- WebRTC-ready architecture

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Start the backend:

```bash
npm run dev:api
```

3. Start the user web app:

```bash
npm run dev:web
```

4. Start the admin dashboard:

```bash
npm run dev:admin
```

5. Start the mobile app:

```bash
npm run dev:mobile
```

## Local URLs

- Web app: http://localhost:3000
- Admin: http://localhost:3001
- API: http://localhost:4000/health
- Mobile: Expo dev client / simulator / physical device

## Notes

This is an MVP starter designed for growth into a full production platform with authentication, WebRTC signaling, moderation controls, subscriptions, and advanced analytics.
