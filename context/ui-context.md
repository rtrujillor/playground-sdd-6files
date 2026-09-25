# UI Context

## Theme

Dark only, no light mode. The visual language is a dark technical workspace with near-black backgrounds, layered surfaces, and vivid accent colors for interactive elements. 


## Colors

All colors are defined as CSS custom properties in globals.css and mapped to Tailwind tokens via the `@theme_inline`. Components must use these tokens. No hard-coded hex values or raw Tailwind color classes like `sync-*`. 

| Role             | CSS Variable           | Hex / Value                |
|------------------|------------------------|----------------------------|
| Page background  | `--bg-base`            | `#080809`                  |
| Surface          | `--bg-surface`         | `#111114`                  |
| Elevated surface | `--bg-elevated`        | `#18181c`                  |
| Subtle surface   | `--bg-subtle`          | `#1e1e23`                  |
| Default border   | `--border-default`     | `#2a2a30`                  |
| Subtle border    | `--border-subtle`      | `#3a3a42`                  |
| Primary text     | `--text-primary`       | `#f0f0f4`                  |
| Secondary text   | `--text-secondary`     | `#c0c0cc`                  |
| Muted text       | `--text-muted`         | `#808090`                  |
| Brand accent     | `--accent-primary`     | `#00c8d4` (cyan)           |
| Brand dim        | `--accent-primary-dim` | `rgba(0, 200, 212, 0.12)`  |
| AI accent        | `--accent-ai`          | `#6457f9` (indigo-purple)  |
| AI text          | `--accent-ai-text`     | `#8b82ff`                  |
| Error            | `--state-error`        | `#ff4d4f`                  |
| Success          | `--state-success`      | `#34d399`                  |
| Warning          | `--state-warning`      | `#fbbf24`                  |

## Typography

| Role      | Font              | Variable      |
| --------- | ----------------- | ------------- |
| UI text   | Geist Sans | `--font-geist-sans` |
| Code/mono | Geist Mono | `--font-geist-mono` |

## Border Radius

| Context           | Class            |
| ----------------- | ---------------- |
| Inline / small UI | `rounded-xl` |
| Cards / panels    | `rounded-2xl` |
| Modals / overlays | `rounded-3xl` |

## Canvas

Node Color Pallette

8 definded color pirs. Each each pair specifies a dark node fill and a vivid contrasting text color tuned for readability on the dark canvas, defined in types/canvas.ts as NODE_COLORS. 

| Node fill | Text color | Character              |
|-----------|------------|------------------------|
| `#1F1F1F` | `#EDEDED`  | Neutral dark (default) |
| `#10233D` | `#52A8FF`  | Blue                   |
| `#2E1938` | `#BF7AF0`  | Purple                 |
| `#331B00` | `#FF990A`  | Orange                 |
| `#3C1618` | `#FF6166`  | Red                    |
| `#3A1726` | `#F75F8F`  | Pink                   |
| `#0F2E18` | `#62C073`  | Green                  |
| `#062822` | `#0AC7B4`  | Teal                   |

Default node  color: #1F1F1F with #EDEDED text

## Component Library

shadcn/ui on top of Tailwind. Components live
in components/ui/. Use the CLI to add new components
rather than writing from scratch.

## Layout Patterns

- Editor: full-viewport split with
  left sidebar, center canvas, right sidebar
- Sidebars: fixed width with border separator
- Modals: centered overlay with backdrop blur
- Navbar: top bar with bottom border

## Icons

Lucide React. Stroke-based icons only. Sizes:
h-4 w-4 for inline, h-5 w-5 for buttons.
