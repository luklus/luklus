<template>
  <div class="logo">
    <nuxt-link to="/">
      {{ $t('name') }}
    </nuxt-link>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppsLogo',
})
</script>

<style lang="scss" scoped>
.logo {
  padding: 0.25rem;

  a {
    color: inherit;
    font-size: 1.25rem;
    text-decoration: none;
  }
}
</style>
