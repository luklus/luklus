<script lang="ts" setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
</script>

<template>
  <UButton
    v-for="targetLocale in availableLocales"
    :key="targetLocale.code"
    class="font-mono"
    @click.prevent.stop="setLocale(targetLocale.code)"
  >
    {{ targetLocale.name }}
  </UButton>
</template>
