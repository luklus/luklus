<script lang="ts" setup>
type ProjectCard = {
  badges?: string[]
  description: string
  featured?: boolean
  image?: string
  title: string
  to: string
}

const imageDimensions: Record<string, { height: number; width: number }> = {
  '/images/autotip.webp': { width: 640, height: 464 },
  '/images/homekeeper.webp': { width: 1376, height: 768 },
  '/images/loopmobi.webp': { width: 640, height: 464 },
  '/images/zielinskiart.webp': { width: 640, height: 464 }
}

const { list, title } = defineProps<{
  list: ProjectCard[]
  title: string
}>()

function getImageDimensions(image: string) {
  return imageDimensions[image]
}

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

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        <article
          v-for="card in list"
          :key="`${card.title}-${card.to}`"
          :class="[
            'group relative flex flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-300',
            card.featured
              ? 'border-emerald-500/40 bg-emerald-500/[0.03] shadow-sm hover:border-emerald-500/60 dark:border-emerald-500/30 dark:bg-emerald-500/[0.02]'
              : 'border-zinc-200/80 bg-white hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:hover:border-zinc-700'
          ]"
        >
          <div class="p-5 sm:p-6">
            <!-- Image with fixed aspect ratio and hover effect -->
            <div
              v-if="card.image"
              class="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800/50"
            >
              <NuxtImg
                class="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                :alt="card.description"
                :height="getImageDimensions(card.image)?.height"
                :src="card.image"
                :width="getImageDimensions(card.image)?.width"
                loading="lazy"
              />
            </div>

            <!-- Badges Strip -->
            <div
              v-if="card.badges?.length"
              class="mt-4 flex flex-wrap gap-1.5"
            >
              <UBadge
                v-for="badge in card.badges"
                :key="`${card.title}-${badge}`"
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

            <!-- Title & Description -->
            <div class="mt-3.5 space-y-2">
              <h3 class="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                <NuxtLink
                  class="focus:outline-none"
                  :to="card.to"
                  target="_blank"
                >
                  <span
                    class="absolute inset-0"
                    aria-hidden="true"
                  />
                  {{ card.title }}
                </NuxtLink>
              </h3>
              <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {{ card.description }}
              </p>
            </div>
          </div>

          <!-- Bottom Action Bar -->
          <div
            class="flex items-center justify-between border-t border-zinc-100 px-5 py-3.5 font-mono text-xs text-zinc-500 sm:px-6 dark:border-zinc-800/80 dark:text-zinc-400"
          >
            <span class="truncate">{{
              card.to.replace(/^https?:\/\//, '').replace(/\/$/, '')
            }}</span>
            <UIcon
              class="size-4 shrink-0 text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-500"
              name="i-lucide-arrow-up-right"
            />
          </div>
        </article>
      </div>
    </UContainer>
  </section>
</template>
