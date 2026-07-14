<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: $t('approach'),
    onClick: () => scrollToSection('#approach')
  },
  {
    label: $t('experience'),
    onClick: () => scrollToSection('#experience')
  },
  {
    label: $t('skills'),
    onClick: () => scrollToSection('#skills')
  },
  {
    label: $t('projects'),
    onClick: () => scrollToSection('#projects')
  },
  {
    label: $t('ai'),
    onClick: () => scrollToSection('#ai')
  }
])

const scrollToSection = (sectionId: string) => {
  const section = document.querySelector(sectionId)
  if (section) section.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <UNavigationMenu
    color="neutral"
    :items="items"
    variant="link"
  >
    <template #item="{ item, index }">
      <span class="text-success font-mono">0{{ index + 1 }}</span>
      {{ item.label }}
    </template>
  </UNavigationMenu>
</template>
