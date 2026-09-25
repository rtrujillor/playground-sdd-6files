# Code Standards

## General

- Keep modules small and single-purpose
- Fix root causes, do not layer workarounds
- Do not mix unrelated concerns in one
  component or route
- Respect the system boundaries defined in architecture-context.md. 

## TypeScript

- Strict mode is required throughout the project
- Avoid any — use explicit interfaces or narrowly
  scoped types
- Validate unknown external input at system
  boundaries before trusting it
- Use interface for object contracts. 

## Next.js

- Default to react server components
- Add `use client` only when the component needs browser interactivity, hooks, or real-time state. 
- Keep route handlers focused on a
  single responsibility
- Long-running work belongs in background tasks, not in request handlers. 

## Styling

- Use CSS custom property tokens defined in globals.css. No raw Tailwind color classes like `zinc-500`, `*`, or hardcoded values. 
- Reference tokens through the Tailwind utility names: `bg-base`, `text-copy`, `border`, `border-face`, etc. 
- Maintain the border radius scale: `rounded-sm` for small elements, `rounded-2xl` for cards, and `rounded-3xl` for models. 

## API Routes

- Validate and parse request input before
  any logic runs
- Enforce auth and ownership before any mutation
- Return consistent, predictable response shapes

## Data and Storage

- 

## File Organization

Organize code by domain and responsibility, strictly respecting the system boundaries.

Take this structure as a reference. 

- `app/` — Next.js App Router. Contains routes, layouts, and server-side page components. 
- `components/` — Shared UI components.
- `lib/` — Core infrastructure and shared utilities.
- `services/` — Business logic and external API integrations.
- `tasks/` — Durable background workflows.
- `types/` — TypeScript definitions.
- `templates/` — Static canvas snapshots for starter system designs.
- `public/` — Static assets.

If you  consider it is necessary to create additional folders, do it following  the best practices you can have knowledge of, this is a profressional application.