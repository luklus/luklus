<script lang="ts" setup>
type SkillsSection = {
  header: string
  items: string[]
}

const { list = [], title } = defineProps<{
  list?: SkillsSection[]
  title: string
}>()
</script>

<template>
  <div
    id="skills"
    class="bg-muted py-16"
  >
    <UContainer>
      <UPageHeader class="mb-8">
        <template #title>
          <span class="text-success font-mono text-sm">03 /</span> {{ title }}
        </template>
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
              size="lg"
              variant="subtle"
            >
              {{ item }}
            </UBadge>
          </div>
        </section>
      </UPageGrid>
    </UContainer>
  </div>
</template>
