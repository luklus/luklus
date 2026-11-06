<script lang="ts" setup>
import type { TimelineItem } from '@nuxt/ui'

type ExperienceItem = TimelineItem & {
  dateStart: string
  dateEnd: string
  descriptionList?: string[]
  technologies?: string[]
  skills?: string[]
}

const { list, title } = defineProps<{
  list: ExperienceItem[]
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

          <div
            v-if="item.technologies?.length || item.skills?.length"
            class="mt-3 space-y-2"
          >
            <div
              v-if="item.technologies?.length"
              class="flex flex-wrap items-center gap-1.5"
            >
              <span class="mr-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                {{ $t('experienceTechnologies') }}:
              </span>
              <span
                v-for="technology in item.technologies"
                :key="`${item.title}-${technology}`"
                class="rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300"
              >
                {{ technology }}
              </span>
            </div>
            <div
              v-if="item.skills?.length"
              class="flex flex-wrap items-center gap-1.5"
            >
              <span class="mr-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                {{ $t('experienceSkills') }}:
              </span>
              <span
                v-for="skill in item.skills"
                :key="`${item.title}-${skill}`"
                class="rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </template>

        <template #title="{ item }">
          <span class="text-lg">{{ item.title }}</span>
        </template>
      </UTimeline>
    </UContainer>
  </section>
</template>
