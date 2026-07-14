<script setup lang="ts">
type ProjectCard = {
  description: string
  image?: string
  title: string
  to: string
}

const { list, title } = defineProps<{
  list: ProjectCard[]
  title: string
}>()
</script>

<template>
  <section
    class="py-16"
    id="projects"
  >
    <UContainer>
      <UPageHeader class="mb-8">
        <template #title>
          <span class="text-success font-mono text-sm">04 /</span>
          {{ title }}
        </template>
      </UPageHeader>

      <UPageGrid>
        <UPageCard
          v-for="(card, index) in list"
          v-bind="card"
          :key="index"
          target="_blank"
          reverse
        >
          <NuxtImg
            class="w-full rounded-lg"
            v-if="card.image"
            loading="lazy"
            :alt="card.description"
            :src="card.image"
          />
        </UPageCard>
      </UPageGrid>
    </UContainer>
  </section>
</template>
