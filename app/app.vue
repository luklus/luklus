<script lang="ts" setup>
import { en, pl } from '@nuxt/ui/locale'

const { locale } = useI18n()
const uiLocales = { en, pl } as const
const activeLocale = computed(() => uiLocales[locale.value as keyof typeof uiLocales])
const lang = computed(() => activeLocale.value.code)

const seo = computed(() => {
  if (locale.value === 'pl') {
    return {
      description:
        'Inżynier i architekt frontendu z ponad 8-letnim doświadczeniem. Tworzę wydajne, dostępne aplikacje webowe w Vue i Nuxt dla dużych firm i sektora publicznego.',
      title: 'Łukasz Łusiak — Senior Frontend Engineer & Architect'
    }
  }

  return {
    description:
      'Senior frontend engineer and architect with 8+ years of experience. I build fast, accessible web applications with Vue and Nuxt for enterprise and public-sector clients.',
    title: 'Łukasz Łusiak — Senior Frontend Engineer & Architect'
  }
})

useHead({
  htmlAttrs: {
    lang
  },
  link: [
    { rel: 'icon', href: '/icon.png' },
    { rel: 'apple-touch-icon', href: '/icon-192x192.png', sizes: '192x192' }
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: '#000000', media: '(prefers-color-scheme: dark)' }
  ]
})

useSeoMeta({
  description: () => seo.value.description,
  ogDescription: () => seo.value.description,
  ogImage: 'https://luklus.me/icon.png',
  ogTitle: () => seo.value.title,
  title: () => seo.value.title,
  twitterCard: 'summary_large_image',
  twitterImage: 'https://luklus.me/icon.png'
})

// Structured data for a personal site: the author + the website itself.
useSchemaOrg([
  definePerson({
    name: 'Łukasz Łusiak',
    jobTitle: 'Senior Frontend Engineer & Architect',
    url: 'https://luklus.me',
    image: '/icon-512x512.png',
    sameAs: [
      'https://www.linkedin.com/in/%C5%82ukasz-%C5%82usiak-58868215b/',
      'https://github.com/luklus'
    ]
  }),
  defineWebSite({ name: 'Łukasz Łusiak — Senior Frontend Engineer & Architect' }),
  defineWebPage()
])
</script>

<template>
  <UApp :locale="activeLocale">
    <VitePwaManifest />
    <NuxtPwaAssets />
    <NuxtRouteAnnouncer />

    <AppHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <AppFooter />
    <PwaStatus />
  </UApp>
</template>
