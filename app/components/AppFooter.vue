<template>
  <UFooter class="no-print">
    <UPageSection :title="$t('footerTitle')">
      <template #description> </template>

      <template #links>
        <UButton
          color="primary"
          icon="i-lucide-phone"
          size="lg"
          to="tel:+48606688439"
          variant="solid"
        >
          {{ $t('contact') }}
        </UButton>

        <UButton
          icon="i-lucide-mail"
          size="lg"
          to="mailto:lukaslusiak.business@outlook.com"
          variant="outline"
        >
          {{ $t('email') }}
        </UButton>

        <UButton
          color="neutral"
          size="lg"
          target="_blank"
          to="https://www.linkedin.com/in/%C5%82ukasz-%C5%82usiak-58868215b/"
          trailing-icon="i-lucide-move-up-right"
          variant="link"
        >
          LinkedIn
        </UButton>

        <UButton
          color="neutral"
          size="lg"
          target="_blank"
          to="https://github.com/luklus"
          trailing-icon="i-lucide-move-up-right"
          variant="link"
        >
          GitHub
        </UButton>
      </template></UPageSection
    >
  </UFooter>
</template>
