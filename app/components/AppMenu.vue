<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const { t } = useI18n()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t('approach'),
    onClick: () => scrollToSection('#approach')
  },
  {
    label: t('experience'),
    onClick: () => scrollToSection('#experience')
  },
  {
    label: t('skills'),
    onClick: () => scrollToSection('#skills')
  },
  {
    label: t('projects'),
    onClick: () => scrollToSection('#projects')
  },
  {
    label: t('ai'),
    onClick: () => scrollToSection('#ai')
  }
])

const scrollToSection = (sectionId: string) => {
  if (import.meta.client) {
    const section = document.querySelector(sectionId)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <UNavigationMenu
    :items="items"
    color="neutral"
    variant="link"
  >
    <template #item="{ item, index }">
      <span
        v-if="!item.icon"
        class="text-success font-mono"
      >
        0{{ index + 1 }}
      </span>
      {{ item.label }}
    </template>
  </UNavigationMenu>
</template>
