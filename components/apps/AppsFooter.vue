<template>
  <footer class="apps-footer">
    <div class="apps-footer__wrap wrap">
      <p>luklus.me</p>
      <br />
      <p>Polityka Prywatności</p>
      <p>© 2021 Łukasz Łusiak. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppsFooter',
})
</script>

<style lang="scss" scoped>
.apps-footer {
  color: var(--c-gray-900);

  &__wrap {
    align-items: center;
    background-color: var(--c-yellow-400);
    border-radius: 1.25rem 1.25rem 1.25rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 2rem;
    padding: 2rem;

    p {
      &:first-of-type {
        font-weight: bold;
      }
    }
  }
}
</style>
