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
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
})

useSeoMeta(() => ({
  description: seo.value.description,
  ogDescription: seo.value.description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  ogTitle: seo.value.title,
  title: seo.value.title,
  twitterCard: 'summary_large_image'
}))
</script>

<template>
  <UApp :locale="locales[locale]">
    <AppHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <AppFooter />
  </UApp>
</template>
