<script lang="ts" setup>
type SkillsSection = {
  header: string
  highlighted?: string[]
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
          <h2 class="mb-4 font-mono font-semibold">{{ section.header }}</h2>

          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="item in section.items"
              :key="`${section.header}-${item}`"
              :class="section.highlighted?.includes(item) ? 'ring-success ring-1' : ''"
              :color="section.highlighted?.includes(item) ? 'success' : 'neutral'"
              size="lg"
              variant="subtle"
            >
              <span
                v-if="section.highlighted?.includes(item)"
                class="mr-1 size-1.5 rounded-full bg-emerald-500"
              />
              {{ item }}
            </UBadge>
          </div>
        </section>
      </UPageGrid>
    </UContainer>
  </div>
</template>
