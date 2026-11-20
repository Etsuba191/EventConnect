# Week 3 Interactive Workflow

EventConnect now supports the complete demo journey: discover events, search and filter the listing, open event details, and submit a simulated registration.

## Discovery

The shared event source in `src/data/events.ts` supplies cards on the home page and events page. Search matches titles, descriptions, categories, keywords, and locations. Category, format, and price filters can be combined, and all filters can be cleared.

## Event details

Each card links to `/events/:eventId`. The details route reads the event from the shared data source and displays its image, description, schedule, location, format, price, and organizer. Unknown IDs show a not-found state with a link back to the listing.

## Registration demo

The details page includes a form requiring a name and a valid email address. Errors are shown inline and submitted values are trimmed. A successful submission displays an accessible confirmation and stores a small registration marker in browser `localStorage` to prevent duplicate demo registrations on that device.

This is intentionally a frontend-only demonstration. It does not send personal information, process payments, contact an organizer, or create a real registration.
