<script setup>
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()
const lang = computed(() => locales[locale.value].code)

const seo = computed(() => {
  if (locale.value === 'pl') {
    return {
      description:
        'Senior Frontend Engineer z ponad 8-letnim doświadczeniem w tworzeniu wydajnych i łatwych w utrzymaniu aplikacji webowych - od architektury po detale interfejsu.',
      title: 'Łukasz Łusiak - Senior Frontend Engineer'
    }
  }

  return {
    description:
      'Senior Frontend Engineer with 8+ years of experience creating performant, maintainable web applications - from architecture to pixel.',
    title: 'Łukasz Łusiak - Senior Frontend Engineer'
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
    jobTitle: 'Senior Frontend Engineer',
    url: 'https://luklus.me',
    image: '/icon-512x512.png',
    sameAs: [
      'https://www.linkedin.com/in/%C5%82ukasz-%C5%82usiak-58868215b/',
      'https://github.com/luklus'
    ]
  }),
  defineWebSite({ name: 'Łukasz Łusiak - Senior Frontend Engineer' }),
  defineWebPage()
])
</script>

<template>
  <UApp :locale="locales[locale]">
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
