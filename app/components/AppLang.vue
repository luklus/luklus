<script lang="ts" setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
</script>

<template>
  <UButton
    class="font-mono"
    v-for="locale in availableLocales"
    :key="locale.code"
    @click.prevent.stop="setLocale(locale.code)"
  >
    {{ locale.name }}
  </UButton>
</template>
