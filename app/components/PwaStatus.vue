<script lang="ts" setup>
// Client-only PWA prompt. `$pwa` is provided by @vite-pwa/nuxt on the client,
// so it is undefined during SSR/prerender and the template renders nothing.
const { $pwa } = useNuxtApp()
const { t } = useI18n()

const show = computed(() => $pwa?.offlineReady || $pwa?.needRefresh || $pwa?.showInstallPrompt)

const title = computed(() => {
  if ($pwa?.needRefresh) return t('pwaNewVersion')
  if ($pwa?.offlineReady) return t('pwaReadyOffline')
  return t('pwaInstallApp')
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-4 opacity-0"
    leave-active-class="transition duration-150 ease-in"
    leave-to-class="translate-y-4 opacity-0"
  >
    <UCard
      v-if="show"
      class="fixed right-4 bottom-4 z-50 max-w-sm shadow-lg"
      :ui="{ body: 'p-4 sm:p-4' }"
    >
      <div class="flex items-start gap-3">
        <span class="text-success font-mono text-sm">PWA /</span>

        <div class="flex-1">
          <p class="text-default font-medium">{{ title }}</p>

          <div class="mt-3 flex gap-2">
            <UButton
              v-if="$pwa?.needRefresh"
              color="primary"
              icon="i-lucide-refresh-cw"
              size="sm"
              @click="$pwa.updateServiceWorker()"
            >
              {{ $t('pwaReload') }}
            </UButton>

            <UButton
              v-if="$pwa?.showInstallPrompt && !$pwa?.needRefresh && !$pwa?.offlineReady"
              color="primary"
              icon="i-lucide-download"
              size="sm"
              @click="
                () => {
                  $pwa?.install()
                }
              "
            >
              {{ $t('pwaInstall') }}
            </UButton>

            <UButton
              color="neutral"
              size="sm"
              variant="ghost"
              @click="$pwa?.showInstallPrompt ? $pwa.cancelInstall() : $pwa?.cancelPrompt()"
            >
              {{ $t('pwaDismiss') }}
            </UButton>
          </div>
        </div>
      </div>
    </UCard>
  </Transition>
</template>
