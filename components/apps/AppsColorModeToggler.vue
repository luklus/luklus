<template>
  <div class="apps-color-mode-toggler">
    <moon-icon
      v-if="$colorMode.preference === 'dark'"
      @click="toogleColorMode('light')"
    />
    <sun-icon v-else @click="toogleColorMode('dark')" />
  </div>
</template>

<script>
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import MoonIcon from '@/assets/icons/moon.svg'
import SunIcon from '@/assets/icons/sun.svg'

export default defineComponent({
  name: 'AppsColorModeToggler',

  components: {
    MoonIcon,
    SunIcon,
  },

  setup() {
    const { $colorMode } = useContext()

    const toogleColorMode = (mode) => ($colorMode.preference = mode)

    return { toogleColorMode }
  },
})
</script>

<style lang="scss" scoped>
.apps-color-mode-toggler {
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-left: 2rem;
  padding: 0.25rem;
}
</style>
