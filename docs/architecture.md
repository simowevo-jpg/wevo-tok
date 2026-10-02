```markdown name=docs/architecture.md
# WevoTok Architecture Overview

```mermaid
flowchart LR
    User[User / Creator] --> Web[Web App<br/>Next.js]
    User --> Mobile[Mobile App<br/>Expo / React Native]
    User --> Admin[Admin Dashboard<br/>Next.js]

    Web --> API[API Layer<br/>Express + Socket.IO]
    Mobile --> API
    Admin --> API

    API --> Auth[Authentication<br/>JWT / Demo Session]
    API --> Socket[Realtime Service<br/>Room Events / Chat / Audio State]
    API --> DB[(PostgreSQL / Prisma)]
    API --> Storage[(Cloud Storage / Media)]

    Socket --> Rooms[Live Voice Rooms]
    Socket --> Messages[Live Chat]
    Socket --> Presence[Presence & User State]

    DB --> Users[Users]
    DB --> RoomsData[Rooms]
    DB --> Metrics[Analytics / Reports]

    Admin --> Metrics
    Admin --> Moderation[Moderation Tools]
```
```

## Flow summary

- Web and mobile clients connect to the API and Realtime socket service.
- Authentication verifies user identity and assigns session metadata.
- Socket events manage room joins, chat, mic state, and presence.
- PostgreSQL stores persistent user, room, billing, moderation, and analytics data.
- Admin dashboard uses aggregated metrics and moderation tools for platform operations.

## Production upgrade path

- Add WebRTC signaling and media servers for live voice transport.
- Introduce Redis for pub/sub and high-frequency presence state.
- Add role-based access control for moderators and admins.
- Add CDN and object storage for avatars, voice clips, and media assets.
