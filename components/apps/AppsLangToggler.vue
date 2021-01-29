<template>
  <div class="apps-lang-toggler">
    <nuxt-link
      v-for="lang in langList"
      :key="lang.code"
      :to="switchLocalePath(lang.code)"
      >{{ lang.code }}</nuxt-link
    >
  </div>
</template>

<script>
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppsColorModeToggler',

  setup() {
    const {
      app: { i18n },
    } = useContext()

    const langList = computed(() => i18n.locales)

    return {
      langList,
    }
  },
})
</script>

<style lang="scss" scoped>
.apps-lang-toggler {
  color: var(--c-gray-300);
  cursor: pointer;

  a {
    color: inherit;
    font-weight: bold;
    margin: 0 0.25rem;

    &.nuxt-link-exact-active {
      color: var(--c-yellow-400);
    }
  }
}
</style>
