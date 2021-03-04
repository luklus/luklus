<template>
  <main class="home">
    <part-home-hero />

    <part-home-me />
  </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HomePage',
})
</script>
