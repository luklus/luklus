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
      <UPageHeader class="mb-3">
        <template #title>
          <span class="text-success font-mono text-sm">03 /</span> {{ title }}
        </template>
      </UPageHeader>

      <p class="text-muted mb-8 text-sm">
        <span
          class="text-rose-600"
          aria-hidden="true"
          >♥</span
        >
        {{ $t('favoriteSkillsLegend') }}
      </p>

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
              color="neutral"
              size="lg"
              variant="subtle"
            >
              <span
                v-if="section.highlighted?.includes(item)"
                class="mr-1 text-rose-600"
                aria-hidden="true"
                >♥</span
              >
              {{ item }}
            </UBadge>
          </div>
        </section>
      </UPageGrid>
    </UContainer>
  </div>
</template>
