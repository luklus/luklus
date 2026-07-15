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
    name: 'Łukasz Łusiak - Senior Frontend Engineer',
    url: 'https://luklus.me'
  }
})
