export default {
  target: 'static',

  head: {
    title: 'luklus',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/styles/main.scss'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/composition-api',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    'nuxt-svg-loader',
  ],

  modules: ['@nuxt/content', '@nuxtjs/pwa', 'nuxt-i18n'],

  colorMode: {
    preference: 'light',
    fallback: 'light',
  },

  content: {},

  i18n: {
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
    seo: true,
  },

  pwa: {
    manifest: {
      lang: 'pl',
    },
  },

  build: {},
}
