<script lang="ts" setup>
const localePath = useLocalePath()
const route = useRoute()

const isCvPage = computed(() => route.path.endsWith('/cv'))
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink :to="localePath('/')">
        <AppLogo />
      </NuxtLink>
    </template>

    <AppMenu v-if="!isCvPage" />

    <template #right>
      <UButton
        v-if="!isCvPage"
        class="font-mono text-xs"
        :to="localePath('/cv')"
        color="neutral"
        icon="i-lucide-file-text"
        variant="ghost"
      >
        {{ $t('cv') }}
      </UButton>
      <UButton
        v-else
        class="font-mono text-xs"
        :to="localePath('/')"
        color="neutral"
        icon="i-lucide-arrow-left"
        variant="ghost"
      >
        {{ $t('backToHome') }}
      </UButton>
      <AppLang />
      <UColorModeButton />
    </template>
  </UHeader>
</template>
