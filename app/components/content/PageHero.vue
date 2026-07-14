<script lang="ts" setup>
const { description, headline, title } = defineProps<{
  description: string
  headline: string
  title: string
}>()
</script>

<template>
  <UPageHero
    :title
    :description
    orientation="horizontal"
    :ui="{
      title: 'text-4xl sm:text-4xl text-pretty tracking-tight font-bold text-highlighted'
    }"
  >
    <template #headline>
      <UBadge
        class="rounded-full pr-8 font-mono"
        color="success"
        variant="outline"
        size="xl"
      >
        <span class="relative flex size-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"> </span>
          <span class="relative inline-flex size-2 rounded-full bg-green-500"></span>
        </span>

        {{ headline }}
      </UBadge>
    </template>

    <template #links>
      <UButton
        to="tel:+48606688439"
        color="primary"
        variant="solid"
        size="lg"
        icon="i-lucide-phone"
      >
        {{ $t('contact') }}
      </UButton>

      <UButton
        to="https://www.linkedin.com/in/%C5%82ukasz-%C5%82usiak-58868215b/"
        target="_blank"
        color="primary"
        variant="link"
        size="lg"
        trailing-icon="i-lucide-move-up-right"
      >
        LinkedIn
      </UButton>

      <UButton
        to="https://github.com/luklus"
        target="_blank"
        color="primary"
        variant="link"
        size="lg"
        trailing-icon="i-lucide-move-up-right"
      >
        GitHub
      </UButton>
    </template>

    <div>
      <NuxtImg
        class="w-full"
        src="/images/hero-system-diagram.svg"
        alt="Hero Image"
        loading="lazy"
      />
    </div>
  </UPageHero>
</template>
