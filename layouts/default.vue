<template>
  <div id="luklus">
    <apps-header />
    <Nuxt class="page" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppsPage',
})
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
}
</style>
