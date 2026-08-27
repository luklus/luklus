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
- **Hybrid deployment**: portfolio pages (`/`, `/pl`, `/cv`, `/pl/cv`) are
  prerendered, while `/api/career-chat` runs as a Vercel serverless function.
  Do not use a static-only export: it would omit the Career Assistant API.
- **Sitemap & Robots**: Powered by `@nuxtjs/seo` with `zeroRuntime: true`. Sitemaps (`sitemap_index.xml`, `/__sitemap__/en-US.xml`, `/__sitemap__/pl-PL.xml`) and `robots.txt` are fully prerendered at build time.
- **Vercel Analytics & Speed Insights**: Pre-configured via `@vercel/analytics` and `@vercel/speed-insights` modules.
- **PWA & Offline**: Pre-configured via `@vite-pwa/nuxt` with service worker precaching.
- **Security headers**: Enforced on all routes via `routeRules` in `nuxt.config.ts`.
- **Renovate**: Configured for automated dependency updates with green CI gating.
- **`.env.example`**: Template for environment variables (`NUXT_PUBLIC_SITE_URL=https://luklus.me`).

## Steps for Vercel deployment

1. **Verify the production build locally**:
   ```bash
   pnpm build
   pnpm preview
   ```
2. **Connect repository on Vercel**:
   - Framework preset: **Nuxt.js**
   - Install command: `pnpm install --frozen-lockfile`
   - Build command: `pnpm build`
   - Leave **Output Directory** empty — Vercel detects the Nuxt/Nitro output.
   - Set Node.js version to **22.x** in Vercel project settings (matches `.nvmrc` and `node:sqlite`).
3. **Environment variables**:
   - `NUXT_PUBLIC_SITE_URL=https://luklus.me`
   - `AI_GATEWAY_API_KEY`
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
   Add the last three for **Production**, **Preview**, and **Development**.
4. **Branch protection**:
   - Protect `main` in GitHub repository settings to require CI checks to pass before merging.

## Additional optional integrations

- **Error monitoring**: `@sentry/nuxt` with a project DSN if server/client telemetry is desired.
- **Stricter security**: `nuxt-security` for customized Content Security Policy (CSP).
- **Lighthouse CI**: Add a performance-budget step to GitHub Actions.

## Handy commands

```bash
pnpm test        # all suites (unit + nuxt + e2e)
pnpm test:unit   # node unit tests
pnpm test:nuxt   # component tests
pnpm test:e2e    # SSR end-to-end (builds + runs the server)
pnpm lint
pnpm typecheck
```
