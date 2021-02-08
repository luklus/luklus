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

    <div class="wrap">
      <section class="about">
        <h2>{{ $t('about') }}</h2>
        <base-paragraph>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            repudiandae consectetur quibusdam rerum minima distinctio esse amet,
            aut eveniet, perspiciatis, nam nesciunt dolorum delectus! Est vitae,
            omnis culpa officia ullam officiis molestias? Illo ullam eos quaerat
            ipsum, repudiandae voluptatem vel odio dicta libero deleniti quam
            iure consectetur praesentium odit veritatis.
          </p>
        </base-paragraph>

        <ul>
          <base-label>JavaScript</base-label>
          <base-label>TypeScript</base-label>
          <base-label>Node</base-label>
          <base-label>PHP</base-label>
        </ul>

        <ul>
          <base-label
            >Vue
            <heart-icon />
          </base-label>
          <base-label>React</base-label>
          <base-label>Angular</base-label>
          <base-label>jQuery :)</base-label>
        </ul>

        <ul>
          <base-label>Vue</base-label>
          <base-label>React</base-label>
          <base-label>Angular</base-label>
          <base-label>jQuery :)</base-label>
        </ul>
      </section>
    </div>

    <div class="wrap">
      <section class="about">
        <h2>Experience</h2>
        <base-paragraph>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            repudiandae consectetur quibusdam rerum minima distinctio esse amet,
            aut eveniet, perspiciatis, nam nesciunt dolorum delectus! Est vitae,
            omnis culpa officia ullam officiis molestias? Illo ullam eos quaerat
            ipsum, repudiandae voluptatem vel odio dicta libero deleniti quam
            iure consectetur praesentium odit veritatis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            repudiandae consectetur quibusdam rerum minima distinctio esse amet,
            aut eveniet, perspiciatis, nam nesciunt dolorum delectus! Est vitae,
            omnis culpa officia ullam officiis molestias? Illo ullam eos quaerat
            ipsum, repudiandae voluptatem vel odio dicta libero deleniti quam
            iure consectetur praesentium odit veritatis.
          </p>
        </base-paragraph>
      </section>
    </div>
  </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import GithubIcon from '@/assets/icons/github.svg'
import HeartIcon from '@/assets/icons/heart.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import TwitterIcon from '@/assets/icons/twitter.svg'

export default defineComponent({
  name: 'HomePage',

  components: {
    GithubIcon,
    HeartIcon,
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
    margin: 0.25rem;

    svg {
      margin-right: 1rem;
    }
  }
}

.about {
  height: 100vh;
  padding: 4rem 2rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    max-width: 40rem;
  }
}
</style>
