<template>
  <div class="wrap">
    <section class="part-home-me">
      <h2>{{ $t('about') }}</h2>

      <base-paragraph>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          repudiandae consectetur quibusdam rerum minima distinctio esse amet,
          aut eveniet, perspiciatis, nam nesciunt dolorum delectus! Est vitae,
          omnis culpa officia ullam officiis molestias? Illo ullam eos quaerat
          ipsum, repudiandae voluptatem vel odio dicta libero deleniti quam iure
          consectetur praesentium odit veritatis.
        </p>
      </base-paragraph>

      <h3>{{ $t('tools') }}</h3>
      <ul>
        <base-label>HTML</base-label>
        <base-label>CSS</base-label>
        <base-label>JavaScript</base-label>
        <base-label>TypeScript</base-label>
        <base-label>PHP</base-label>
        <base-label>Laravel</base-label>
        <base-label>Vue <heart-icon /></base-label>
        <base-label>Nuxt.js <heart-icon /></base-label>
        <base-label>React</base-label>
        <base-label>Next.js <heart-icon /></base-label>
        <base-label>Angular</base-label>
        <base-label>jQuery <smile-icon /></base-label>
      </ul>

      <h3>{{ $t('toolsOther') }}</h3>
      <ul>
        <base-label>InDesign</base-label>
        <base-label>Photoshop</base-label>
        <base-label>Adobe XD</base-label>
        <base-label>Axios</base-label>
        <base-label>Figma <heart-icon /></base-label>
        <base-label>Node</base-label>
        <base-label>Parcell</base-label>
        <base-label>RxJS</base-label>
        <base-label>SASS/SCSS</base-label>
        <base-label>Vuex</base-label>
        <base-label>Webpack</base-label>
        <base-label>Vercel</base-label>
        <base-label>Netlify</base-label>
        <base-label>Rest API</base-label>
        <base-label>GraphQl</base-label>
      </ul>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

import HeartIcon from '@/assets/icons/heart.svg'
import SmileIcon from '@/assets/icons/smile.svg'

export default defineComponent({
  name: 'HomePage',

  components: {
    HeartIcon,
    SmileIcon,
  },
})
</script>

<style lang="scss" scoped>
.part-home-me {
  padding: 4rem 2rem;

  h3 {
    margin: 1rem 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    max-width: 40rem;
  }
}
</style>
