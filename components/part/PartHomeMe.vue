<template>
  <section class="home-me wrap">
    <h2>{{ $t('about') }}</h2>

    <base-paragraph>
      <p>
        {{ textAbout }}
      </p>
    </base-paragraph>

    <h3>{{ $t('tools') }}</h3>
    <ul>
      <base-label v-for="item in toolsList" :key="item.name">
        {{ item.name }}
        <component :is="`${item.icon}-icon`" v-if="item.icon"></component>
      </base-label>
    </ul>

    <h3>{{ $t('toolsOther') }}</h3>
    <ul>
      <base-label v-for="item in otherList" :key="item.name">
        {{ item.name }}
        <component :is="`${item.icon}-icon`" v-if="item.icon"></component>
      </base-label>
    </ul>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

import HeartIcon from '@/assets/icons/heart.svg'
import SmileIcon from '@/assets/icons/smile.svg'

export default defineComponent({
  name: 'HomePageMe',

  components: {
    HeartIcon,
    SmileIcon,
  },

  props: {
    textAbout: {
      required: true,
      type: String,
    },
  },

  setup() {
    return {
      toolsList: [
        { name: 'Angular', icon: false },
        { name: 'CSS', icon: false },
        { name: 'HTML', icon: false },
        { name: 'JavaScript', icon: false },
        { name: 'jQuery', icon: 'smile' },
        { name: 'Laravel', icon: false },
        { name: 'Next.js', icon: 'heart' },
        { name: 'Nuxt.js', icon: 'heart' },
        { name: 'PHP', icon: false },
        { name: 'React', icon: false },
        { name: 'TypeScript', icon: false },
        { name: 'Vue', icon: 'heart' },
      ],
      otherList: [
        { name: 'Adobe XD', icon: false },
        { name: 'Axios', icon: false },
        { name: 'Figma', icon: 'heart' },
        { name: 'Git', icon: false },
        { name: 'GraphQl', icon: false },
        { name: 'InDesign', icon: false },
        { name: 'Netlify', icon: false },
        { name: 'Node', icon: false },
        { name: 'Parcell', icon: false },
        { name: 'Photoshop', icon: false },
        { name: 'Rest API', icon: false },
        { name: 'RxJS', icon: false },
        { name: 'SASS/SCSS', icon: false },
        { name: 'Vercel', icon: false },
        { name: 'Vuex', icon: false },
        { name: 'Webpack', icon: false },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.home-me {
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
