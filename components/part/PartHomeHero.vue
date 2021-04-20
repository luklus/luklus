<template>
  <base-hero>
    <div class="home-hero__message">
      <p>{{ $t('hi') }}</p>
    </div>

    <div class="home-hero__header">
      <h1>{{ $t('name') }}</h1>
      <h2>{{ $t('role') }}</h2>
    </div>

    <div class="home-hero__social">
      <a href="https://github.com/luklus" target="_blank"><github-icon /></a>
      <a
        href="https://www.linkedin.com/in/łukasz-łusiak-58868215b/"
        target="_blank"
      >
        <linkedin-icon
      /></a>
    </div>
  </base-hero>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import GithubIcon from '@/assets/icons/github.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'

export default defineComponent({
  name: 'PartHomeHero',

  components: {
    GithubIcon,
    LinkedinIcon,
  },
})
</script>

<style lang="scss" scoped>
.home-hero {
  &__header {
    h1 {
      font-size: 4rem;
    }

    h2 {
      color: var(--text-secondary);
    }
  }

  &__message {
    background-color: var(--primary);
    border-radius: 1.25rem 1.25rem 1.25rem 0;
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    justify-content: flex-start;
    padding: 1rem;
    width: 12rem;
  }

  &__social {
    a {
      color: var(--text-secondary);
      margin: 0.25rem;
      transition: color 300ms ease;

      &:hover {
        color: var(--primary-hover);
      }
    }

    svg {
      margin-right: 1rem;
    }
  }
}
</style>
