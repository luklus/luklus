<template>
  <section class="home-side-projects wrap">
    <h2>{{ $t('sideProjects') }}</h2>

    <div class="part home-side-projects-grid">
      <a
        v-for="item in sideProjectsList"
        :key="item.name"
        :href="item.link"
        class="home-side-projects-grid__item"
        target="_blank"
      >
        <div class="home-side-projects-grid__imgs">
          <nuxt-img :src="item.imgs" />
        </div>
        <div class="home-side-projects-grid__data">
          <h3>{{ item.name }}</h3>
          <base-paragraph>
            <p>
              {{ item.desc }}
            </p>
          </base-paragraph>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HomePageSideProjects',

  props: {
    textSideAuto: {
      required: true,
      type: String,
    },

    textSideCovid: {
      required: true,
      type: String,
    },

    textSideMovie: {
      required: true,
      type: String,
    },
  },

  setup(props) {
    const sideProjectsList = [
      {
        desc: props.textSideAuto,
        imgs: './images/autotip.png',
        link: 'https://www.autotip.pl',
        name: 'AUTO tip',
      },
      {
        desc: props.textSideCovid,
        imgs: './images/covid19track.png',
        link: 'https://covid19track.vercel.app',
        name: 'COVID 19 Track',
      },
      {
        desc: props.textSideMovie,
        imgs: './images/nexttmdb.png',
        link: 'https://next-tmdb.vercel.app',
        name: 'Next TMDB',
      },
    ]

    return { sideProjectsList }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/base/mixn';

.home-side-projects {
  padding: 4rem 2rem;
}

.home-side-projects-grid {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  @include mq(sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mq(lg) {
    grid-template-columns: repeat(3, 1fr);
  }

  &__data {
    color: var(--c-text);
    padding: 1rem;
    text-align: center;
  }

  &__imgs {
    height: 12rem;
    overflow: hidden;
    width: 100%;

    img {
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: 500ms transform ease;
      width: 100%;
    }
  }

  &__item {
    border: 2px solid var(--c-yellow-400);
    border-radius: 0.5rem;
    color: var(--c-text);
    overflow: hidden;

    &:hover {
      border-color: var(--c-yellow-500);

      .home-side-projects-grid__imgs img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
