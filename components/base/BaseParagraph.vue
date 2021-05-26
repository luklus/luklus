<template>
  <div class="base-paragraph">
    <slot />
  </div>
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
  margin-bottom: 2rem;

  p {
    margin-bottom: 1rem;
    max-width: 38rem;
    font-weight: 300;
  }
}
</style>
