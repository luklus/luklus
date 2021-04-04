<template>
  <main class="home">
    <part-home-hero />

    <lazy-part-home-me />

    <lazy-part-home-timeline />

    <lazy-part-home-side-projects />
  </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HomePage',
})
</script>
