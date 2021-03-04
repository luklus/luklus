<template>
  <base-hero>
    <div class="part-home-hero__message">
      <p>{{ $t('hi') }}</p>
    </div>

    <div class="part-home-hero__header">
      <h1>{{ $t('name') }}</h1>
      <h2>{{ $t('role') }}</h2>
    </div>

    <div class="part-home-hero__social">
      <github-icon />
      <twitter-icon />
      <linkedin-icon />
    </div>
  </base-hero>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import GithubIcon from '@/assets/icons/github.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import TwitterIcon from '@/assets/icons/twitter.svg'

export default defineComponent({
  name: 'PartHomeHero',

  components: {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
  },
})
</script>

<style lang="scss" scoped>
.part-home-hero {
  &__header {
    h1 {
      font-size: 4rem;
    }

    h2 {
      color: var(--text-secondary);
    }
  }

  &__message {
    background-color: var(--c-yellow-400);
    border-radius: 1.25rem 1.25rem 1.25rem 0;
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    justify-content: flex-start;
    padding: 1rem;
    width: 12rem;
  }

  &__social {
    color: var(--text-secondary);
    margin: 0.25rem;

    svg {
      margin-right: 1rem;
    }
  }
}
</style>
