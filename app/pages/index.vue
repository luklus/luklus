<script lang="ts" setup>
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()
const route = useRoute()

const collection = computed(() => `content_${locale.value}` as keyof Collections)
const homeKey = computed(() => `home:${locale.value}:${route.path}`)

const { data: page } = await useAsyncData(homeKey, () => queryCollection(collection.value).path('/').first(), {
  watch: [locale, () => route.path]
})
</script>

<template>
  <UPage>
    <ContentRenderer
      v-if="page"
      :value="page"
    />
    <section v-else>Home not found</section>
  </UPage>
</template>
