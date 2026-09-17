<script lang="ts" setup>
import type { NuxtError } from '#app'
import { en, pl } from '@nuxt/ui/locale'

const props = defineProps<{
  error: NuxtError
}>()

const { locale, t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const uiLocales = { en, pl } as const
const activeLocale = computed(() => uiLocales[locale.value as keyof typeof uiLocales] ?? en)
const lang = computed(() => activeLocale.value.code)

const is404 = computed(() => props.error?.statusCode === 404 || !props.error?.statusCode)

const title = computed(() =>
  is404.value ? `${t('error404Title')} — Łukasz Łusiak` : `${t('error500Title')} — Łukasz Łusiak`
)

useHead({
  htmlAttrs: {
    lang
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: '#000000', media: '(prefers-color-scheme: dark)' }
  ],
  title
})

useSeoMeta({
  description: () => (is404.value ? t('error404Description') : t('error500Description')),
  robots: 'noindex, nofollow',
  title: () => title.value
})

const handleError = () => clearError({ redirect: localePath('/') })

const showDiagnostics = ref(false)
const requestPath = computed(
  () => route?.path || (typeof window !== 'undefined' ? window.location.pathname : '/')
)
</script>

<template>
  <UApp :locale="activeLocale">
    <NuxtRouteAnnouncer />

    <AppHeader :is-error="true" />

    <UMain class="flex min-h-[calc(100vh-14rem)] flex-col justify-center py-12 sm:py-16">
      <UContainer>
        <div class="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <!-- Left Column: Copy & Actions -->
          <div class="flex flex-col items-start lg:col-span-7">
            <UBadge
              class="mb-6 rounded-full font-mono"
              :color="is404 ? 'warning' : 'error'"
              size="lg"
              variant="outline"
            >
              <span class="relative flex size-2">
                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  :class="is404 ? 'bg-amber-400' : 'bg-red-400'"
                />
                <span
                  class="relative inline-flex size-2 rounded-full"
                  :class="is404 ? 'bg-amber-500' : 'bg-red-500'"
                />
              </span>
              {{ is404 ? $t('error404Badge') : $t('error500Badge') }}
            </UBadge>

            <h1 class="text-highlighted text-3xl font-bold tracking-tight text-pretty sm:text-5xl">
              {{ is404 ? $t('error404Title') : $t('error500Title') }}
            </h1>

            <p class="text-muted mt-4 max-w-xl text-base sm:text-lg">
              {{ is404 ? $t('error404Description') : $t('error500Description') }}
            </p>

            <!-- Navigation & Recovery Actions -->
            <div class="mt-8 flex flex-wrap items-center gap-3">
              <UButton
                color="primary"
                icon="i-lucide-arrow-left"
                size="lg"
                variant="solid"
                @click="handleError"
              >
                {{ $t('errorBackHome') }}
              </UButton>

              <UButton
                :to="localePath('/cv')"
                color="neutral"
                icon="i-lucide-file-text"
                size="lg"
                variant="outline"
              >
                {{ $t('errorViewCv') }}
              </UButton>

              <UButton
                color="neutral"
                icon="i-lucide-phone"
                size="lg"
                to="tel:+48606688439"
                variant="ghost"
              >
                {{ $t('contact') }}
              </UButton>
            </div>

            <!-- Diagnostics Toggle -->
            <div class="mt-8 w-full max-w-xl">
              <button
                class="text-muted hover:text-highlighted inline-flex cursor-pointer items-center gap-2 font-mono text-xs transition-colors select-none"
                type="button"
                @click="showDiagnostics = !showDiagnostics"
              >
                <UIcon
                  class="size-3.5"
                  :name="showDiagnostics ? 'i-lucide-chevron-down' : 'i-lucide-chevron-right'"
                />
                <span>{{ $t('errorDiagnostics') }}</span>
              </button>

              <div
                v-if="showDiagnostics"
                class="border-muted bg-muted/40 text-muted mt-3 rounded-lg border p-4 font-mono text-xs"
              >
                <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div>
                    <span class="text-highlighted">{{ $t('errorDiagnosticsStatus') }}:</span>
                    <span class="ml-1 text-amber-500 dark:text-amber-400">{{
                      error?.statusCode || 404
                    }}</span>
                  </div>
                  <div>
                    <span class="text-highlighted">{{ $t('errorDiagnosticsPath') }}:</span>
                    <span class="ml-1 truncate font-mono">{{ requestPath }}</span>
                  </div>
                  <div class="sm:col-span-2">
                    <span class="text-highlighted">{{ $t('errorDiagnosticsResolution') }}:</span>
                    <span class="ml-1">{{ $t('errorDiagnosticsResolutionText') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Vector Schematic -->
          <div class="flex items-center justify-center lg:col-span-5">
            <ErrorSchematic />
          </div>
        </div>
      </UContainer>
    </UMain>

    <AppFooter />
    <PwaStatus />
  </UApp>
</template>
