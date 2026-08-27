<script lang="ts" setup>
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

const collection = computed(() => `content_${locale.value}` as keyof Collections)
const cvKey = computed(() => `cv:${locale.value}`)

const { data: page } = await useAsyncData(
  cvKey,
  () => queryCollection(collection.value).path('/').first(),
  {
    watch: [locale]
  }
)

const showRodo = ref(true)

function printCv() {
  if (import.meta.client) {
    window.print()
  }
}

function goBack() {
  router.push(localePath('/'))
}

useSeoMeta({
  title: () =>
    locale.value === 'pl'
      ? 'CV — Łukasz Łusiak | Senior Frontend Architect'
      : 'Resume / CV — Łukasz Łusiak | Senior Frontend Architect',
  description: () =>
    locale.value === 'pl'
      ? 'Oficjalne CV Łukasza Łusiaka — Senior Frontend Engineer & Architect z ponad 8-letnim doświadczeniem w Vue 3, Nuxt 3 i architekturze enterprise.'
      : 'Official Resume of Łukasz Łusiak — Senior Frontend Engineer & Architect specializing in Vue 3, Nuxt 3, and scalable enterprise architecture.'
})
</script>

<template>
  <div class="min-h-screen bg-zinc-100 py-4 dark:bg-zinc-950 print:bg-white print:py-0">
    <!-- Floating Action Toolbar (Screen only) -->
    <header class="no-print sticky top-4 z-40 mx-auto mb-6 max-w-4xl px-4">
      <div
        class="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-zinc-200/80 bg-white/90 p-3 shadow-lg backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/90"
      >
        <div class="flex items-center gap-2">
          <UButton
            color="neutral"
            icon="i-lucide-arrow-left"
            size="sm"
            variant="ghost"
            @click="goBack"
          >
            {{ $t('backToHome') }}
          </UButton>
          <div class="hidden h-4 w-px bg-zinc-300 sm:block dark:bg-zinc-700" />
          <span class="hidden font-mono text-xs text-zinc-500 sm:inline dark:text-zinc-400">
            2 × A4 · Vector PDF
          </span>
        </div>

        <div class="flex items-center gap-2">
          <label
            class="hidden cursor-pointer items-center gap-1.5 text-xs text-zinc-600 select-none md:flex dark:text-zinc-400"
          >
            <input
              v-model="showRodo"
              class="accent-success text-success size-3.5 rounded"
              type="checkbox"
            />
            <span>RODO</span>
          </label>

          <AppLang />
          <UColorModeButton />

          <UButton
            class="shadow-sm"
            color="primary"
            icon="i-lucide-printer"
            size="sm"
            variant="solid"
            @click="printCv"
          >
            {{ $t('printCv') }}
          </UButton>
        </div>
      </div>
    </header>

    <!-- Main Printable CV Sheet (2 x A4 Sheets) -->
    <CvSheet
      v-if="page"
      :show-rodo="showRodo"
      v-bind="page"
    />

    <div
      v-else
      class="flex min-h-[50vh] items-center justify-center font-mono text-sm text-zinc-500"
    >
      Loading CV data...
    </div>
  </div>
</template>

<style scoped>
@media print {
}
</style>
