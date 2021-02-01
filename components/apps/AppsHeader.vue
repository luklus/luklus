<template>
  <header class="apps-header">
    <div class="apps-header__wrap wrap">
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
  background-color: var(--bg);
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
