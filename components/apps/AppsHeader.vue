<template>
  <header class="apps-header">
    <apps-logo />
    <apps-color-mode-toggler />
  </header>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppsHeader',
})
</script>

<style lang="scss" scoped>
.apps-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}
</style>
