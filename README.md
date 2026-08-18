# WTWR (What To Wear?) — Frontend

A responsive, weather-driven wardrobe app. WTWR pulls real-time weather for the user's location and recommends clothing items suited to the current temperature, with full account support — sign up, log in, build a personal closet, and like items — backed by a custom REST API.

**Backend repository:** https://github.com/lunkant/se_project_express

**Project pitch:** [Loom video](https://www.loom.com/share/096e0ed2c333447a91da844fe386f5d7)

---

## Features

- **Live weather integration** — fetches current conditions from the OpenWeather API and classifies them into hot / warm / cold, driving which clothing items are recommended
- **Authentication** — JWT-based sign up and log in, with the session token persisted in `localStorage` so users stay logged in across page reloads
- **Protected routes** — the `/profile` page is inaccessible to unauthenticated visitors and redirects to the home page
- **Personal wardrobe** — logged-in users can add clothing items with a name, image, and weather category, and delete only the items they own
- **Likes** — any authenticated user can like or unlike an item, with the state persisted server-side and reflected instantly in the UI
- **Editable profile** — users can update their display name and avatar at any time from a pre-filled form
- **Global auth state via React Context** — a `CurrentUserContext` provider makes the logged-in user's data available anywhere in the component tree without prop drilling, driving conditional UI (header, sidebar, owner-only delete/like controls) across the app
- **Day/night and multi-condition weather art** — distinct iconography for clear, cloudy, rain, storm, snow, and fog, in both day and night variants
- **Accessible UI** — descriptive `alt` text throughout, and graceful image fallbacks (e.g. a default avatar when a user-supplied image URL fails to load)

## Tech Stack

| | |
|---|---|
| **Core** | React 18, React Router 6 |
| **Build tooling** | Vite |
| **Styling** | Plain CSS (BEM-style class naming), custom web font (Cabinet Grotesk) |
| **Data fetching** | native `fetch` API against a custom Express/MongoDB backend |
| **External API** | [OpenWeather](https://openweathermap.org/api) (current weather by coordinates) |
| **Tooling** | ESLint (React Hooks rules enforced) |

## Architecture Notes

- **Auth flow**: on login, the backend returns a signed JWT, stored in `localStorage` under `jwt`. Every subsequent request to a protected endpoint (creating/deleting items, liking, editing profile) attaches it as an `Authorization: Bearer <token>` header. On app load, a stored token is silently re-validated against the backend (`GET /users/me`) to restore the session without requiring the user to log in again.
- **State ownership**: top-level application state (weather, clothing items, current user, auth status) lives in the root `App` component and flows down via props and Context, keeping data-fetching logic out of presentational components.
- **Component reuse**: a single `ModalWithForm` component powers every modal in the app (add item, sign up, log in, edit profile), with per-modal form logic supplied via a shared `useForm` hook.

## Getting Started

This app expects the [backend](https://github.com/lunkant/se_project_express) and a local MongoDB instance to be running alongside it.

### Prerequisites

- Node.js
- A running `mongod` instance (see the backend repo for setup)
- The [backend server](https://github.com/lunkant/se_project_express) running on `http://localhost:3001`

### Installation

```bash
git clone https://github.com/lunkant/se_project_react.git
cd se_project_react
npm install
```

### Running locally

```bash
npm run dev
```

The app runs on `http://localhost:3000` by default and expects the API on `http://localhost:3001`.

### Other scripts

```bash
npm run lint      # run ESLint across the project
npm run build     # production build
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
├── assets/          # icons, fonts, weather art
├── components/       # one folder per component (JSX + CSS colocated)
├── contexts/         # React Context providers (current user, temperature unit)
├── hooks/           # reusable hooks (e.g. useForm)
└── utils/            # API clients (api.js, auth.js), weather helpers, constants
```

## Author

**Mardochee Ambroise**
Built as part of the TripleTen Software Engineering program.
