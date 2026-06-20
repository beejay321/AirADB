# AirADB

A full-stack Airbnb-inspired property listing platform built with React. Browse, search, and manage short-term rental listings.

---

## Features

- **Browse listings** — Responsive grid of property cards with shimmer skeleton loading while images fetch
- **Listing detail page** — Full property info including host profile, amenities, location map, and reviews
- **Reservation form** — Date range picker with automatic total price calculation based on nights and guests
- **Favourites** — Toggle a heart icon on any listing card to mark favourites (per session)
- **Create a listing** — Host form with image upload, property details, and host info
- **Edit a listing** — Pre-filled form that updates the listing in place
- **Delete a listing** — Confirms before deleting and removes the card from the grid instantly
- **Search bar** — Appears on the listings page in the navbar
- **Landing page** — Hero section, feature highlights, popular destinations, and a host CTA

---

## Tech Stack

| Layer       | Technology                    |
| ----------- | ----------------------------- |
| Framework   | React 19                      |
| Routing     | React Router v7               |
| HTTP client | Axios                         |
| Date picker | react-datepicker + date-fns   |
| Icons       | react-icons                   |
| Build tool  | Vite                          |
| Styling     | Plain CSS (custom properties) |

---

## Project Structure

```
src/
├── assets/             # Static assets (logo)
├── components/
│   ├── Calendar.jsx        # Date range picker wrapper
│   ├── Footer.jsx
│   ├── ListingActions.jsx  # Edit / Delete buttons on detail page
│   ├── ListingsCard.jsx    # Property card with skeleton loader & favourite toggle
│   ├── LocationMap.jsx     # Embedded map for listing location
│   ├── Navbar.jsx          # Top nav with search bar and active tab indicator
│   ├── ReserveForm.jsx     # Date + guests + total price calculator
│   ├── Reviews.jsx         # Static review cards with show more/less toggle
│   ├── SearchBar.jsx       # Search input in the navbar
│   └── UploadImage.jsx     # Image URL input / upload helper
├── context/
│   └── Listings.context.jsx  # Global state — listings, CRUD operations
├── lib/
│   └── api.js              # Axios instance with base URL from env
├── pages/
│   ├── DetailPage.jsx      # Single listing view
│   ├── Homepage.jsx        # Listings grid
│   ├── LandingPage.jsx     # Marketing landing page
│   ├── ListingForms.jsx    # Create & edit listing form (shared)
│   └── NotFoundPage.jsx    # 404
├── App.jsx                 # Routes + layout shell
├── App.css                 # All styles
└── main.jsx                # Entry point — wraps app in BrowserRouter + ListingsProvider
```

---

## State Management

All listing data lives in `ListingsContext` (`src/context/Listings.context.jsx`). It is fetched once on mount and kept in sync after every mutation — no refetch needed.

| Function                  | What it does                                |
| ------------------------- | ------------------------------------------- |
| `getListings()`           | Fetches all listings from the API           |
| `createListing(data)`     | POSTs a new listing and appends it to state |
| `updateListing(id, data)` | PATCHes a listing and replaces it in state  |
| `deleteListing(id)`       | DELETEs a listing and removes it from state |

---

## Routes

| Path             | Component      | Description              |
| ---------------- | -------------- | ------------------------ |
| `/`              | `LandingPage`  | Marketing home page      |
| `/listings`      | `Homepage`     | Browse all listings      |
| `/listings/:id`  | `DetailPage`   | Single listing detail    |
| `/host/new`      | `ListingForms` | Create a new listing     |
| `/host/edit/:id` | `ListingForms` | Edit an existing listing |
| `*`              | `NotFoundPage` | 404 fallback             |

---

## Getting Started

### Prerequisites

- Node.js 18+
- A running backend API

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env` file in the project root:

```
VITE_API_URL=http://localhost:5005/api
```

### Run in development

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

## Environment Variables

| Variable       | Description                      |
| -------------- | -------------------------------- |
| `VITE_API_URL` | Base URL of the backend REST API |
