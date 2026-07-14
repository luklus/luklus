# Deployment (Vercel)

Pre-deploy checklist and DevOps notes for shipping `luklus.me` to Vercel.

## What's already configured in the repo

- **CI** (`.github/workflows/ci.yml`) — runs on `push` to `main` and on every PR:
  lint, format check, typecheck, unit tests, component tests, build, and a
  separate e2e job. Concurrency cancels superseded runs.
- **Node pinned to 22** via `.nvmrc` and `engines.node >= 22.5.0`. This is
  required by the `native` SQLite connector used by `@nuxt/content`
  (`content.experimental.sqliteConnector: 'native'` needs `node:sqlite`,
  available from Node 22.5).
- **Full prerender** (`nitro.prerender` for `/` and `/pl`). The site ships as
  static output, so the content SQLite DB is only touched at build time — no
  serverless runtime DB and no cold-start cost.
- **Security headers** on all routes via `routeRules` (no extra dependency).
- **robots.txt** in `public/`.
- **Renovate** auto-merges minor/patch/pin/digest updates once CI is green.
- **`.env.example`** as a template for local `.env` and Vercel env vars.

## Steps to do before / during the first deploy

### 1. Verify the production build locally

```bash
pnpm build
pnpm preview   # serves the real production output with the deploy preset
```

Confirm both `/` (en) and `/pl` render correctly. If `pnpm build` reports a
sourcemap collision (seen once on `AppMenu.vue`), disable sourcemaps in
`nuxt.config.ts` (`sourcemap: { server: false, client: false }`).

### 2. Connect the repo on Vercel

- Import the GitHub repo; Vercel auto-detects Nuxt/Nitro — no build config
  needed. It uses `pnpm-lock.yaml` for install + build caching.
- Set the project **Node.js version to 22.x** (Settings > General) so it matches
  `.nvmrc` and the native SQLite connector.
- Preview deployments per PR are automatic.

### 3. Environment variables

- Add the values from `.env.example` under Settings > Environment Variables.
- Set `NUXT_PUBLIC_SITE_URL=https://luklus.me` (used for SEO / canonical /
  sitemap once enabled).

### 4. GitHub branch protection

- Protect `main`: require the `ci` checks to pass before merge, require PRs
  (no direct pushes). This is what makes Renovate auto-merge safe.

## Optional hardening (needs a dependency or an account — not installed yet)

Each of these requires `pnpm add ...`, so run install locally after adding:

- **Sitemap + robots**: `pnpm add -D @nuxtjs/sitemap`, add it to `modules`, set
  `site: { url: 'https://luklus.me' }`, then uncomment the `Sitemap:` line in
  `public/robots.txt`.
- **Vercel Analytics / Speed Insights**: enable in the Vercel dashboard (real
  Core Web Vitals from visitors). Optionally `pnpm add @vercel/analytics`.
- **Error monitoring**: `@sentry/nuxt` with a project DSN.
- **Stricter security**: `nuxt-security` for CSP and a fuller header set beyond
  the baseline already in `routeRules`.
- **Lighthouse CI**: add a performance-budget job to the workflow.

## Handy commands

```bash
pnpm test        # all suites (unit + nuxt + e2e)
pnpm test:unit   # node unit tests
pnpm test:nuxt   # component tests
pnpm test:e2e    # SSR end-to-end (builds + runs the server)
pnpm lint
pnpm typecheck
```
