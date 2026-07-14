<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo />
      </NuxtLink>
    </template>

    <AppMenu />

    <template #right>
      <AppLang />
      <UColorModeButton />
    </template>
  </UHeader>
</template>
