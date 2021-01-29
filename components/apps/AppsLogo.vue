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
  a {
    color: inherit;
    font-size: 1.25rem;
    font-weight: bold;
  }
}
</style>
