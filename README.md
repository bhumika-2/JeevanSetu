## Contributors

Anchal - Development / Project Contribution
# JeevanSetu — AI-Enabled Healthcare Assistance Platform & Government Scheme Navigator

JeevanSetu ("bridge to life") is a responsive React + Vite frontend that brings together
AI-guided health support, discovery of nearby care, government health scheme matching,
blood donation coordination, health camp alerts, emergency SOS and a family health
record portal — designed for citizens across urban and rural India, in their own
language.

Built as a final-year major-project frontend. All data is realistic mock data (see
`src/data/mockData.js`); there is no backend in this repo — it's structured so a
FastAPI/Node + PostgreSQL backend (or the ABDM sandbox APIs) can be dropped in behind
each page without restructuring the UI.

## Modules

- **AI Health Assistant** — chat-based symptom triage and guidance, voice-first input,
  multilingual, with contextual suggestions into other modules.
- **Nearby Healthcare Discovery** — hospitals, PHCs and pharmacies with live bed/wait
  data, filters and a map placeholder.
- **Government Scheme Navigator** — schemes matched to the citizen's profile with
  eligibility, required documents and match score.
- **BloodConnect** — live blood requests by urgency and blood group, donor stats and a
  donor registration flow.
- **Health Camp Alerts** — upcoming free screening/immunisation camps with
  registration.
- **Emergency Assistance** — one-tap SOS with simulated ambulance dispatch and
  emergency contacts.
- **Family Health Portal** — manage records for every household member.
- **Notifications** — unified feed across all modules.
- **Profile** — ABHA-linked identity, enrolled schemes, language/voice/notification
  settings.

## Tech stack

- React 18 + Vite 5
- React Router v6
- Tailwind CSS 3
- lucide-react icons

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    layout/      Sidebar, Topbar, MobileNav
    common/      StatCard, Badge, SectionHeader
  context/       AppContext — language, voice mode, notifications
  data/          mockData.js, navConfig.js
  pages/         one file per module (Dashboard, AIAssistant, NearbyCare, ...)
```

## Notes for evaluation

- All interactions (chat, donor registration, camp registration, SOS, notifications,
  toggles) are fully wired to React state — nothing is a static screenshot.
- Color system, typography and layout are documented as design tokens in
  `tailwind.config.js`.
- Swap `src/data/mockData.js` for real API calls to move this from prototype to
  production without touching page layouts.
