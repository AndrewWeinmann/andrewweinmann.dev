# CLAUDE.md

## Project Overview

Personal portfolio site (andrewweinmann.dev) built with Vite + React + TypeScript + Tailwind CSS v4, deployed to Cloudflare Workers.

## Commands

```bash
npm run dev          # Start dev server (port 5173)
npm run build        # TypeScript check + Vite build (output: dist/)
npm run check        # Biome lint + format with auto-fix
npm run lint         # Biome lint (read-only)
npm run typecheck    # TypeScript type check only
npm test             # Vitest unit tests (single run)
npm run test:watch   # Vitest in watch mode
npm run test:e2e     # Playwright E2E tests (browser auto-installed; system deps: sudo npx playwright install-deps chromium)
```

To run a single unit test file:

```bash
npx vitest run src/components/nav.test.tsx
```

## Architecture

**Routing:** Client-side SPA via React Router 7 (Data mode — `createBrowserRouter`, not Framework mode). Routes defined in `src/main.tsx`. The `Layout` component wraps all routes with Nav + Footer + `<Outlet />`.

**Structure:**

- `src/components/` — shared UI (nav, layout, avatar); unit tests colocated (`.test.tsx`)
- `src/pages/` — route-level page components (home, about, uses)
- `src/test/` — Vitest setup file
- `tests/` — Playwright E2E tests (Chrome only, auto-starts dev server)
- `public/` — static assets including `_headers` (security/cache policy); SPA fallback is handled by `not_found_handling` in `wrangler.jsonc`

**Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin. Custom theme in `src/index.css` — dark mode only (background `#0f0f0f`, accent lime `#a3e635`). Fonts: Space Grotesk (headings), IBM Plex Mono (body/mono) via Google Fonts.

## Tone & Content

- Copy should sound like a person, not marketing — dry and understated
- Placeholder text is intentional — do not replace with lorem ipsum or AI-generated filler
- No projects section — intentionally absent until there's something real to show
- Avatar image goes in `public/avatar.[ext]`; update `Avatar` usage in `src/pages/home.tsx` when added
- GitHub/LinkedIn/email links in `src/components/layout.tsx` footer are placeholders

## Design Constraints

- Always dark theme — no light mode toggle
- Colors and fonts live in `src/index.css` `@theme {}` block (no `tailwind.config.ts`)
- No purple gradients, nothing that looks like a generic AI-generated portfolio
- Subtle motion only

## Key Constraints

- **Strict TypeScript**: `noUnusedLocals`, `noUnusedParameters` are enforced — clean up any unused imports/variables.
- **Biome**: tab indent (indentWidth 2), 100-char line width, LF line endings. Run `npm run check` before committing.
- **Build order**: `npm run build` runs `tsc -b` first, then Vite — type errors will fail the build.
- **Cloudflare Workers**: SPA routing handled via `not_found_handling: single-page-application` in `wrangler.jsonc`. Security and cache headers in `public/_headers` — don't break these when adding new asset types.
