<script lang="ts" setup>
import type { TimelineItem } from '@nuxt/ui'

const { list, title } = defineProps<{
  list: TimelineItem[]
  title: string
}>()

const active = ref(0)
</script>

<template>
  <section
    id="experience"
    class="py-16"
  >
    <UContainer>
      <UPageHeader class="mb-8">
        <template #title>
          <span class="text-success font-mono text-sm">02 /</span> {{ title }}
        </template>
      </UPageHeader>

      <UTimeline
        v-model="active"
        :items="list"
        color="success"
        size="2xl"
      >
        <template #date="{ item }">
          <span class="font-mono"> {{ item.dateStart }} - {{ item.dateEnd }} </span>
        </template>

        <template #description="{ item }">
          {{ item.description }}

          <ul
            v-if="item.descriptionList"
            class="mt-2 list-inside list-disc"
          >
            <li
              v-for="desc in item.descriptionList"
              :key="`${item.title}-${desc}`"
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
