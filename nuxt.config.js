export default {
  build: {},

  buildModules: [
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    'nuxt-svg-loader',
  ],

  colorMode: {
    preference: 'light',
    fallback: 'light',
  },

  components: true,

  css: ['vuejs-noty/dist/vuejs-noty.css', '@/assets/styles/main.scss'],

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
    link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],

    script: [
      {
        'data-dnt': 'false',
        'data-host': 'https://microanalytics.io',
        async: true,
        defer: true,
        id: 'ZwSg9rf6GA',
        src: 'https://microanalytics.io/js/script.js',
      },
    ],
  },

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

  modules: [
    '@nuxt/content',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  plugins: ['@/plugins/vf.js', '@/plugins/noty.client.js'],

  pwa: {
    manifest: {
      lang: 'en',
      theme_color: '#000',
    },
  },

  sitemap: {
    hostname: process.env.BASE_PAGE,
    i18n: true,
  },

  target: 'static',
}
