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
      <a
        aria-label="GitHub"
        href="https://github.com/luklus"
        rel="noopener"
        target="_blank"
      >
        <GithubIcon />
      </a>
      <a
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/łukasz-łusiak-58868215b/"
        rel="noopener"
        target="_blank"
      >
        <LinkedinIcon />
      </a>
      <a
        aria-label="LinkedIn"
        download=""
        href="/file/CV.pdf"
        rel="noopener"
        target="_blank"
        @click="sendData"
        ><LoadIcon /> CV</a
      >
    </div>
  </base-hero>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import GithubIcon from '@/assets/icons/github.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import LoadIcon from '@/assets/icons/load.svg'

export default defineComponent({
  name: 'PartHomeHero',

  components: {
    GithubIcon,
    LinkedinIcon,
    LoadIcon,
  },

  methods: {
    async sendData() {
      await fetch('https://formsubmit.co/ajax/ll_code@outlook.com', {
        body: JSON.stringify({
          _subject: 'Pobrano CV ze strony luklus.me',
          _template: 'box',
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        method: 'POST',
      })
    },
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
      align-items: center;
      color: var(--text-secondary);
      display: inline-flex;
      font-weight: 700;
      margin: 0.25rem 1rem 0.25rem 0.25rem;
      transition: color 300ms ease;

      &:hover {
        color: var(--primary-hover);
      }
    }

    svg {
      margin-right: 0.25rem;
    }
  }
}
</style>
