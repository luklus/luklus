<template>
  <div id="luklus">
    <apps-header />
    <Nuxt class="page" />
    <apps-footer />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppsPage',
})
</script>
