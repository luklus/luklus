<script lang="ts" setup>
type ProjectCard = {
  badges?: string[]
  description: string
  featured?: boolean
  image?: string
  title: string
  to: string
}

const { list, title } = defineProps<{
  list: ProjectCard[]
  title: string
}>()

function getBadgeColor(
  badge: string
): 'error' | 'info' | 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' {
  const lower = badge.toLowerCase()
  if (
    lower.includes('founder') ||
    lower.includes('twórca') ||
    lower.includes('owner') ||
    lower.includes('właściciel')
  ) {
    return 'success'
  }
  if (
    lower.includes('progress') ||
    lower.includes('rozwoju') ||
    lower.includes('realizacji') ||
    lower.includes('w toku')
  ) {
    return 'warning'
  }
  return 'neutral'
}

function isPulseBadge(badge: string): boolean {
  const lower = badge.toLowerCase()
  return (
    lower.includes('founder') ||
    lower.includes('twórca') ||
    lower.includes('progress') ||
    lower.includes('rozwoju')
  )
}
</script>

<template>
  <section
    id="projects"
    class="py-16"
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
          :key="index"
          :class="[
            card.featured &&
              'ring-success/30 border-success/40 bg-success/5 dark:bg-success/5 hover:ring-success/50 transition-all duration-300'
          ]"
          :description="card.description"
          :title="card.title"
          :to="card.to"
          reverse
          target="_blank"
        >
          <template
            v-if="card.badges?.length"
            #leading
          >
            <div class="flex flex-wrap gap-1.5">
              <UBadge
                v-for="(badge, badgeIndex) in card.badges"
                :key="badgeIndex"
                class="font-mono text-xs"
                :color="getBadgeColor(badge)"
                size="sm"
                variant="subtle"
              >
                <span
                  v-if="isPulseBadge(badge)"
                  class="relative flex size-1.5"
                >
                  <span
                    :class="[
                      'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
                      getBadgeColor(badge) === 'warning' ? 'bg-warning' : 'bg-success'
                    ]"
                  ></span>
                  <span
                    :class="[
                      'relative inline-flex size-1.5 rounded-full',
                      getBadgeColor(badge) === 'warning' ? 'bg-warning' : 'bg-success'
                    ]"
                  ></span>
                </span>
                {{ badge }}
              </UBadge>
            </div>
          </template>

          <NuxtImg
            v-if="card.image"
            class="w-full rounded-lg"
            :alt="card.description"
            :src="card.image"
            loading="lazy"
          />
        </UPageCard>
      </UPageGrid>
    </UContainer>
  </section>
</template>
