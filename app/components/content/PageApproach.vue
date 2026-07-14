<script setup lang="ts">
type ApproachItem = {
  description: string
  label: string
  value?: string
}

const { description, list, title } = defineProps<{
  description: string
  list: ApproachItem[]
  title: string
}>()
</script>

<template>
  <section
    class="bg-muted py-16"
    id="approach"
  >
    <UContainer>
      <UPageHeader
        class="mb-8"
        :description
      >
        <template #title>
          <span class="text-success font-mono text-sm">01 /</span>
          {{ title }}
        </template>
      </UPageHeader>

      <section>
        <ul class="flex flex-col rounded md:flex-row">
          <li
            class="border-muted last:border-success last:bg-success/10 flex-1 border border-e-0 p-4 last:border-e"
            v-for="item in list"
            :key="item.label"
          >
            <div class="text-success mb-1 font-mono">{{ item.label }}</div>
            <div class="text-muted">{{ item.description }}</div>
          </li>
        </ul>
      </section>
    </UContainer>
  </section>
</template>
