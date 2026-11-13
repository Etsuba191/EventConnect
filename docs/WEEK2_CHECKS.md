# Week 2 checks and revision log

## Responsive layout record

| Viewport | Result |
|---|---|
| 360px | Navigation collapses to a labelled menu button; cards stack; no horizontal overflow expected. |
| 768px | Event cards use a two-column layout; content remains readable and navigation remains visible. |
| 1440px | Three-column event cards and centered About content use the available width without stretching. |

## Navigation and keyboard record

- Home, Events, and About use the shared `Navbar` and `Footer` components.
- The active page is indicated by the `NavLink` underline and color change.
- The mobile menu button exposes `aria-expanded` and `aria-controls`.
- Menu links are keyboard reachable, visible focus styles are provided, and Escape closes the menu.
- Links use React Router navigation instead of full-page reloads.

## Issue/revision log

| Issue found | Revision |
|---|---|
| Only the Home route was registered, so the planned pages could not be reached. | Added shared routes for Home, Events, About, and event details. |
| Header and footer markup was duplicated inside the Home page. | Moved the site shell to reusable `Navbar` and `Footer` components. |
| Mobile navigation had no usable menu state. | Added an accessible menu button with expanded state and Escape dismissal. |
| Keyboard focus and reduced-motion behavior were not explicit. | Added visible focus styles and a reduced-motion media query. |

## Validation

- `npm run lint` passed.
- `npm run build` passed.
- Content is fictional sample data for demonstration; no real user information is collected.
