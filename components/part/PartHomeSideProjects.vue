<template>
  <section class="side-projects wrap">
    <h2>{{ $t('sideProjects') }}</h2>

    <div class="part side-projects-grid">
      <div class="side-projects-grid__item">
        <div class="side-projects-grid__imgs">
          <nuxt-img src="/images/autotip.png" />
        </div>
        <div class="side-projects-grid__data">
          <h3>AutoTip</h3>
          <base-paragraph>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ea
              illum soluta ex cupiditate alias.
            </p>
          </base-paragraph>
        </div>
      </div>
      <div class="side-projects-grid__item">
        <div class="side-projects-grid__imgs">
          <nuxt-img src="/images/covid19track.png" />
        </div>
        <div class="side-projects-grid__data">
          <h3>COVID 19 Track</h3>
          <base-paragraph>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ea
              illum soluta ex cupiditate alias.
            </p>
          </base-paragraph>
        </div>
      </div>
      <div class="side-projects-grid__item">
        <div class="side-projects-grid__imgs">
          <nuxt-img src="/images/nexttmdb.png" />
        </div>
        <div class="side-projects-grid__data">
          <h3>Next TMDB</h3>
          <base-paragraph>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ea
              illum soluta ex cupiditate alias.
            </p>
          </base-paragraph>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HomePageSideProjects',
})
</script>

<style lang="scss" scoped>
.side-projects {
  padding: 4rem 2rem;
}

.side-projects-grid {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;

  &__data {
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
      transition: 300ms transform ease;
      width: 100%;
    }

    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  }

  &__item {
    background-color: var(--c-gray-100);
    border: 2px solid var(--c-yellow-400);
    border-radius: 0.5rem;
    overflow: hidden;
  }
}
</style>
