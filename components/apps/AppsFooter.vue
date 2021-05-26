<template>
  <footer class="apps-footer">
    <div class="apps-footer__wrap wrap">
      <p>luklus.me</p>
      <br />
      <!-- <p>Polityka Prywatności</p> -->
      <p>© 2021 {{ $t('name') }}. {{ $t('rights') }}.</p>
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
@import '@/assets/styles/base/mixn';

.apps-footer {
  color: var(--c-gray-900);
  margin: 2rem;

  &__wrap {
    align-items: center;
    background-color: var(--primary);
    border-radius: 1.25rem 1.25rem 1.25rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    text-align: center;

    p {
      &:first-of-type {
        font-weight: bold;
      }
    }

    @include mq(sm) {
      text-align: left;
    }
  }

  @include mq(lg) {
    margin: 2rem 0;
  }
}
</style>
