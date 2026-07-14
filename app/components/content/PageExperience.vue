<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const { list, title } = defineProps<{
  list: TimelineItem[]
  title: string
}>()

const active = ref(0)
</script>

<template>
  <section
    class="py-16"
    id="experience"
  >
    <UContainer>
      <UPageHeader class="mb-8">
        <template #title> <span class="text-success font-mono text-sm">02 /</span> {{ title }} </template>
      </UPageHeader>

      <UTimeline
        v-model="active"
        :items="list"
        size="2xl"
        color="success"
      >
        <template #date="{ item }">
          <span class="font-mono"> {{ item.dateStart }} - {{ item.dateEnd }} </span>
        </template>

        <template #description="{ item }">
          {{ item.description }}

          <ul
            class="mt-2 list-inside list-disc"
            v-if="item.descriptionList"
          >
            <li
              v-for="(desc, index) in item.descriptionList"
              :key="index"
            >
              {{ desc }}
            </li>
          </ul>
        </template>

        <template #title="{ item }">
          <span class="text-lg">{{ item.title }}</span>
        </template>
      </UTimeline>
    </UContainer>
  </section>
</template>
