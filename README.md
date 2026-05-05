# andrewweinmann.dev

[![CI](https://github.com/AndrewWeinmann/andrewweinmann.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/AndrewWeinmann/andrewweinmann.dev/actions/workflows/ci.yml)
[![Coverage](https://codecov.io/gh/AndrewWeinmann/andrewweinmann.dev/branch/main/graph/badge.svg)](https://codecov.io/gh/AndrewWeinmann/andrewweinmann.dev)

Source for my personal site: <https://andrewweinmann.dev/>.

## Purpose

A central hub for:

- what I'm working on
- tools I use
- personal projects

## Stack

- [React 19](https://react.dev) + [React Router 7](https://reactrouter.com)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Biome](https://biomejs.dev) — lint + format
- [Vitest](https://vitest.dev) — unit tests
- [Playwright](https://playwright.dev) — E2E tests
- Deployed via [Cloudflare Workers](https://workers.cloudflare.com)

## Dev

```bash
npm install
npm run setup    # install Playwright browser (once)
npm run dev      # http://localhost:5173
```

```bash
npm run build    # tsc + vite build → dist/
```

```bash
npm run check    # lint + format
npm test         # unit tests
npm run test:e2e # E2E (needs: sudo npx playwright install-deps chromium)
```

## Notes

Simple by design. Not a portfolio; just a representation of what I'm doing.
