<template>
  <UFooter>
    <UPageSection title="Have a project or opportunity? Let's talk.">
      <template #description> </template>

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
          to="mailto: lukaslusiak.bussiness@outlook.com"
          variant="outline"
          size="lg"
          icon="i-lucide-mail"
        >
          {{ $t('email') }}
        </UButton>

        <UButton
          to="https://www.linkedin.com/in/%C5%82ukasz-%C5%82usiak-58868215b/"
          target="_blank"
          color="neutral"
          variant="link"
          size="lg"
          trailing-icon="i-lucide-move-up-right"
        >
          LinkedIn
        </UButton>

        <UButton
          to="https://github.com/luklus"
          target="_blank"
          color="neutral"
          variant="link"
          size="lg"
          trailing-icon="i-lucide-move-up-right"
        >
          GitHub
        </UButton>
      </template></UPageSection
    >
  </UFooter>
</template>
