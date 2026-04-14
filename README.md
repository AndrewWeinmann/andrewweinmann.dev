# andrewweinmann.dev

[![CI](https://github.com/AndrewWeinmann/andrewweinmann.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/AndrewWeinmann/andrewweinmann.dev/actions/workflows/ci.yml)
[![Coverage](https://codecov.io/gh/AndrewWeinmann/andrewweinmann.dev/branch/main/graph/badge.svg)](https://codecov.io/gh/AndrewWeinmann/andrewweinmann.dev)

Source for <https://andrewweinmann.dev/>.

Vite + React + TypeScript + Tailwind CSS v4. Deployed to Cloudflare Workers.

## Dev

```bash
npm install
npm run dev
```

To run E2E tests locally, install the Playwright browser after your first `npm install`:

```bash
npm run setup
```

## Build

```bash
npm run build
```

Output goes to `dist/`. Then deploy:

```bash
npx wrangler deploy
```

SPA routing is handled by `not_found_handling: single-page-application` in `wrangler.jsonc`.

## Lint & format

```bash
npm run check        # Biome lint + format (auto-fix)
npm run typecheck    # TypeScript check
```

## Tests

```bash
npm test             # Vitest unit tests
npm run test:e2e     # Playwright integration tests
```

Playwright requires system browser dependencies on first run:

```bash
sudo npx playwright install-deps chromium
```
