# luklus

Personal portfolio of **Łukasz Łusiak — Senior Frontend Engineer**, live at
[luklus.me](https://luklus.me). A bilingual (EN/PL), content-driven,
statically-prerendered Nuxt 4 site with an installable PWA.

## Tech stack

| Area         | Choice                                                                       |
| ------------ | ---------------------------------------------------------------------------- |
| Framework    | [Nuxt 4](https://nuxt.com) (Vue 3, Nitro)                                    |
| UI           | [@nuxt/ui](https://ui.nuxt.com) v4 + Tailwind CSS v4                         |
| Content      | [@nuxt/content](https://content.nuxt.com) v3 (Markdown + MDC)                |
| i18n         | [@nuxtjs/i18n](https://i18n.nuxtjs.org) — `en` (default) + `pl`              |
| SEO          | [@nuxtjs/seo](https://nuxtseo.com)                                           |
| PWA          | [@vite-pwa/nuxt](https://vite-pwa-org.netlify.app) (Workbox)                 |
| Images/Fonts | [@nuxt/image](https://image.nuxt.com), [@nuxt/fonts](https://fonts.nuxt.com) |
| Quality      | ESLint (`@nuxt/eslint`), Prettier, `@nuxt/a11y`, `@nuxt/hints`               |
| Tests        | Vitest + `@nuxt/test-utils` (unit / component / e2e)                         |
| Analytics    | Vercel Analytics + Speed Insights                                            |
| Hosting      | Vercel (fully prerendered static output)                                     |

## Requirements

- **Node.js ≥ 22.5** (pinned to `22` in [`.nvmrc`](.nvmrc)). The native SQLite
  connector used by `@nuxt/content` needs `node:sqlite`, available from 22.5.
- **pnpm** (the repo pins `pnpm@11.11.0` via `packageManager`).

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Build and preview the real production (static) output:

```bash
pnpm build
pnpm preview
```

## Scripts

| Script              | Purpose                                     |
| ------------------- | ------------------------------------------- |
| `pnpm dev`          | Dev server with HMR                         |
| `pnpm build`        | Production build (prerenders `/` and `/pl`) |
| `pnpm preview`      | Serve the built output locally              |
| `pnpm lint`         | ESLint                                      |
| `pnpm lint:fix`     | ESLint with autofix                         |
| `pnpm format`       | Prettier write                              |
| `pnpm format:check` | Prettier check                              |
| `pnpm typecheck`    | `nuxt typecheck` (vue-tsc)                  |
| `pnpm test`         | All test suites                             |
| `pnpm test:unit`    | Node unit tests                             |
| `pnpm test:nuxt`    | Component tests (happy-dom)                 |
| `pnpm test:e2e`     | SSR end-to-end (builds + runs the server)   |

## Project structure

```
app/
  app.vue              # root: UApp shell, SEO head, PWA manifest + status
  app.config.ts        # Nuxt UI theme (primary: black, neutral: slate)
  assets/css/main.css  # Tailwind + Nuxt UI import, fonts, color tokens
  components/
    App*.vue           # header, footer, menu, logo, language switch
    content/Page*.vue  # section components rendered from Markdown (MDC)
    PwaStatus.vue      # install / update / offline-ready prompt
  pages/index.vue      # loads the locale-specific content document
content/
  en/index.md          # English page content (frontmatter drives all sections)
  pl/index.md          # Polish page content
i18n/locales/          # UI string translations (en.json, pl.json)
public/                # favicon, PWA icons (192–512), images, robots
content.config.ts      # typed content collections + Zod schema
nuxt.config.ts         # modules, security headers, prerender, i18n, PWA
```

## Content & i18n

The page is **data-driven**. Each locale has one Markdown document
(`content/<locale>/index.md`) whose **frontmatter** holds every section's copy —
hero, approach, experience, skills, projects and the AI section. The schema is
enforced by Zod in [`content.config.ts`](content.config.ts), so a missing or
mistyped field fails the build.

The body of the Markdown wires that frontmatter into components via MDC:

```md
::page-hero{:description="heroDescription" :headline="heroHeadline" :title="heroTitle"}
::
```

Each `::page-*` maps to a component in `app/components/content/`.
[`pages/index.vue`](app/pages/index.vue) picks the collection for the active
locale (`content_en` / `content_pl`) and renders it with `<ContentRenderer>`.

**To edit content:** change the frontmatter in `content/en/index.md` and/or
`content/pl/index.md`. **UI labels** (nav, buttons) live in
`i18n/locales/*.json` and are used via `$t('key')`.

## PWA

The site is an installable, offline-capable PWA (configured under `pwa` in
[`nuxt.config.ts`](nuxt.config.ts)):

- `registerType: 'autoUpdate'` — new deployments are picked up automatically.
- Manifest + icons (192/256/384/512, incl. a maskable variant) ship from
  `public/`; the manifest link is injected by `<VitePwaManifest />` in `app.vue`.
- Workbox precaches the prerendered HTML/CSS/JS, images and self-hosted fonts.
- [`PwaStatus.vue`](app/components/PwaStatus.vue) shows an install / reload /
  offline-ready prompt driven by the `$pwa` state.

The service worker is **disabled during `pnpm dev`** (`devOptions.enabled: false`)
to avoid stale-cache surprises — test the PWA against `pnpm build && pnpm preview`.

## SEO & security

- Site identity and canonical URL come from `site` in `nuxt.config.ts`;
  per-locale meta is set with `useSeoMeta` in `app.vue`.
- Baseline security headers (HSTS, `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`) are applied to every response via
  `routeRules` — no extra dependency.

## Deployment

Fully prerendered to static output and hosted on Vercel. See
[DEPLOYMENT.md](DEPLOYMENT.md) for the pre-deploy checklist, Node version,
environment variables and CI details.

## License

[MIT](LICENSE)
