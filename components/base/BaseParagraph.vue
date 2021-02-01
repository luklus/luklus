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

  p {
    margin-bottom: 1rem;
    max-width: 40rem;
    font-weight: 300;
  }
}
</style>
