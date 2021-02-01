<template>
  <section class="base-hero">
    <div class="wrap base-hero__wrap">
      <slot />
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaseHero',
})
</script>

<style lang="scss" scoped>
.base-hero {
  height: 100vh;

  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 2rem;
  }
}
</style>
