<script setup lang="ts">
type SkillsSection = {
  header: string
  items: string[]
}

const { list, title } = defineProps<{
  list?: SkillsSection[]
  title: string
}>()
</script>

<template>
  <div
    class="bg-muted py-16"
    id="skills"
  >
    <UContainer>
      <UPageHeader class="mb-8">
        <template #title> <span class="text-success font-mono text-sm">03 /</span> {{ title }} </template>
      </UPageHeader>

      <UPageGrid>
        <section
          v-for="section in list"
          :key="section.header"
        >
          <h2 class="mb-4 font-mono">{{ section.header }}</h2>

          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="item in section.items"
              :key="`${section.header}-${item}`"
              color="neutral"
              variant="subtle"
              size="lg"
            >
              {{ item }}
            </UBadge>
          </div>
        </section>
      </UPageGrid>
    </UContainer>
  </div>
</template>
