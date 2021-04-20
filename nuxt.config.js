export default {
  target: 'static',

  head: {
    title: 'luklus',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'luklus.me - Łukasz Łusiak',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/styles/main.scss'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    'nuxt-svg-loader',
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  colorMode: {
    preference: 'light',
    fallback: 'light',
  },

  content: {},

  i18n: {
    baseUrl: process.env.BASE_PAGE,
    defaultLocale: 'pl',
    langDir: 'locales/',
    lazy: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
      },
      {
        code: 'pl',
        iso: 'pl-PL',
        file: 'pl-PL.js',
      },
    ],
    seo: false,
  },

  pwa: {
    manifest: {
      lang: 'pl',
    },
  },

  build: {},

  sitemap: {
    hostname: process.env.BASE_PAGE,
    i18n: true,
  },
}
