// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/a11y',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/test-utils/module',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@vercel/analytics',
    '@vercel/speed-insights',
    '@vite-pwa/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    // Security headers applied to every response (dependency-free hardening).
    '/**': {
      headers: {
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN'
      }
    }
  },

  // Fully prerender the site (static). The SQLite database is only touched at
  // build time, so no serverless runtime DB / cold-start cost on Vercel.
  nitro: {
    prerender: {
      crawlLinks: false,
      failOnError: false,
      routes: ['/', '/pl']
    }
  },

  compatibilityDate: '2026-06-30',

  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en-US', name: 'en', file: 'en.json' },
      { code: 'pl', language: 'pl-PL', name: 'pl', file: 'pl.json' }
    ]
  },

  content: {
    experimental: { sqliteConnector: 'native' }
  },

  // Static-first: no runtime OG image generation (would need a serverless
  // function + a stable NUXT_OG_IMAGE_SECRET). We ship a static og:image
  // (public/icon.png) via useSeoMeta in app.vue instead.
  ogImage: {
    enabled: false
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700, 800] },
      {
        name: 'JetBrains Mono',
        provider: 'google',
        weights: [400, 500, 600, 800]
      }
    ]
  },

  site: {
    name: 'Łukasz Łusiak — Frontend Architect & Senior Engineer',
    url: 'https://luklus.me'
  },

  // Installable PWA with offline support. Icons live in `public/` and are
  // precached together with the prerendered HTML/CSS/JS and self-hosted fonts.
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Łukasz Łusiak — Frontend Architect & Senior Engineer',
      short_name: 'll.me',
      description:
        'Senior Frontend Engineer with 8+ years of experience creating performant, maintainable web applications - from architecture to pixel-perfect execution.',
      lang: 'en',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      theme_color: '#000000',
      background_color: '#ffffff',
      icons: [
        { src: 'icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: 'icon-256x256.png', sizes: '256x256', type: 'image/png' },
        { src: 'icon-384x384.png', sizes: '384x384', type: 'image/png' },
        { src: 'icon-512x512.png', sizes: '512x512', type: 'image/png' },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}'],
      navigateFallback: '/',
      cleanupOutdatedCaches: true
    },
    client: {
      installPrompt: true
    },
    // Keep the service worker off during `nuxt dev` (avoids stale-cache
    // surprises). Test the PWA against `pnpm build && pnpm preview` instead.
    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallback: '/'
    }
  }
})
