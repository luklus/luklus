<template>
  <li class="base-label">
    <slot />
  </li>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaseParagraph',
})
</script>

<style lang="scss" scoped>
.base-paragraph {
  color: var(--text);

  p {
    margin-bottom: 1rem;
    max-width: 40rem;
    font-weight: 300;
  }
}
</style>
