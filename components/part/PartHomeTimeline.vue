<template>
  <section class="home-timeline wrap">
    <h2>{{ $t('experience') }}</h2>

    <div class="part">
      <ul class="home-experience">
        <li v-for="item in experienceList" :key="item.name">
          <div class="home-experience__base">
            <p>{{ item.year }}</p>
            <h3>
              {{ item.role }}
              <a :href="item.companyLink" rel="noopener" target="_blank">{{
                item.company
              }}</a>
            </h3>
          </div>
          <base-paragraph>
            <p>
              {{ item.desc }}
            </p>
          </base-paragraph>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HomePageTimeline',

  props: {
    textTimelineAtos: {
      required: true,
      type: String,
    },

    textTimelineDivante: {
      required: true,
      type: String,
    },
  },

  setup(props) {
    const experienceList = [
      {
        company: 'Divante Sp. z o.o.',
        companyLink: 'https://divante.com',
        desc: props.textTimelineDivante,
        role: 'Frontend Developer',
        techList: [
          { name: 'HTML', icon: false },
          { name: 'CSS', icon: false },
          { name: 'JavaScript', icon: false },
        ],
        year: '2019 - 2021',
      },
      {
        company: 'Atos Poland Global Services Sp. z o.o.',
        companyLink: 'https://atos.net',
        desc: props.textTimelineAtos,
        role: 'Frontend Developer',
        techList: [
          { name: 'HTML', icon: false },
          { name: 'CSS', icon: false },
          { name: 'JavaScript', icon: false },
        ],
        year: '2018 - 2019',
      },
    ]

    return {
      experienceList,
    }
  },
})
</script>

<style lang="scss" scoped>
.home-timeline {
  padding: 4rem 2rem;
}

.home-experience {
  border-left: 1px solid var(--primary);
  display: flex;
  flex-wrap: wrap;
  max-width: 40rem;
  padding-left: 2rem;
  padding-top: 2rem;

  h3 {
    margin: 0.5rem 0;
  }
}

.home-experience__base {
  margin-bottom: 1rem;

  h3 {
    margin: 0.5rem 0;

    a {
      color: var(--c-gray-400);
      font-size: 0.8em;
    }
  }

  p {
    color: var(--c-gray-400);
  }
}
</style>
