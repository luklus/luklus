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
.base-label {
  align-items: center;
  background-color: var(--c-yellow-400);
  border-radius: 0.25rem;
  color: var(--text);
  display: flex;
  font-weight: bold;
  margin: 0 1rem 1rem 0;
  padding: 0.5em 1rem 0.5rem 1.5rem;
  position: relative;

  svg {
    color: var(--c-red-600);
    margin-left: 1rem;
  }

  &::before {
    background-color: var(--bg);
    border-radius: 50%;
    content: '';
    height: 0.5rem;
    left: 0.25rem;
    position: absolute;
    top: 0.25rem;
    width: 0.5rem;
  }
}
</style>
