<template>
  <header class="apps-header">
    <div class="wrap apps-header__wrap">
      <apps-lang-toggler />
      <apps-color-mode-toggler />
    </div>
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
  position: fixed;
  top: 0;
  width: 100%;

  &__wrap {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding: 2rem;
  }
}
</style>
