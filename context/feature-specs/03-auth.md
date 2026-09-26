Clerk  is already installed and connected. Wire it into the Next.js app provider of pages, redirects, group detection, and user menu. 

## Design

Use Clerk's dark theme from `@Clerk/UI/themes` as the base. 

Override Clerk appearance variables using the app's existing CSS variables. Do not hardcode colors. 

## Sign-in and sign-up pages 

- Large screens: simple two-panel layout
- Left: compact logo, tagline, short texts only, feature list
- Right: centered click form
- Small screens: form only
- No gradients, 
- no oversized hero sections, 
- no feature cards, 
- no scroll-heavy layouts. 

Keep the layout minimal and professional.

# Implementation

- Wrap the root layout with Clerk provider using Clerk's dark theme.
- Create sign-in and sign-up pages using Clerk components.
- Use proxy.ts at the project root, not middleware.js.
- Define public routes using the existing sign-in and sign-up environment variables.
- Protect everything else by default.

Update `/`:

- authenticated users redirect to `/editor`
- unauthenticated users redirect to `/sign-in`

Add Clerk's built-in user button to the editor nav bar right section for profile settings and logout. 

Keep Clerk's default user menu and profile flows intact. Do not rebuild or heavily customize Clerk internals. 

Use existing Clerk environment variables. Do not rename or invent new ones. 

## Dependencies

install: @clerk/ui

# Check when done

- Proxy.ts exists at the root.
- All routes are protected except public auth paths.
- Auth pages use CSS variables with no hardcoded colors.
- ClerkProvider wraps the root layout.
- `npm run build` passes.