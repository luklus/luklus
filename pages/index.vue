<template>
  <main class="home">
    <base-hero>
      <div class="home__messenger">
        <p>{{ $t('hi') }}</p>
      </div>

      <div class="home__headers">
        <h1>{{ $t('name') }}</h1>
        <h2>Frontend Developer</h2>
      </div>

      <div class="home__social">
        <github-icon />
        <twitter-icon />
        <linkedin-icon />
      </div>
    </base-hero>
  </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import GithubIcon from '@/assets/icons/github.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import TwitterIcon from '@/assets/icons/twitter.svg'

export default defineComponent({
  name: 'HomePage',

  components: {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
  },
})
</script>

<style lang="scss" scoped>
.home {
  &__headers {
    h1 {
      font-size: 4rem;
      margin: 1rem 0;
    }

    h2 {
      color: var(--text-secondary);
    }
  }

  &__messenger {
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
    margin: 2rem 0.25rem;

    svg {
      margin-right: 1rem;
    }
  }
}
</style>
