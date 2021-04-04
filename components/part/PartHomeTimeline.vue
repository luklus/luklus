<template>
  <section class="part-home-timeline wrap">
    <h2>{{ $t('experience') }}</h2>

    <div class="part">
      <ul class="part-home-experience">
        <li v-for="item in experienceList" :key="item.name">
          <div class="part-home-experience__base">
            <p>{{ item.year }}</p>
            <h3>
              {{ item.role }}
              <a :href="item.companyLink" target="_blank">{{ item.company }}</a>
            </h3>
          </div>
          <base-paragraph>
            <p>
              {{ item.desc }}
            </p>
          </base-paragraph>
          <!-- <base-label v-for="icon in item.techList" :key="icon.name">
            {{ icon.name }}
            <component :is="`${icon.icon}-icon`" v-if="icon.icon"></component>
          </base-label> -->
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HomePageTimeline',

  setup() {
    return {
      experienceList: [
        {
          company: 'Divante Sp. z o.o.',
          companyLink: 'https://divante.com',
          desc:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure repudiandae consectetur quibusdam rerum minima distinctio esse amet, aut eveniet, perspiciatis, nam nesciunt dolorum delectus! Est vitae, omnis culpa officia ullam officiis molestias? Illo ullam eos quaerat ipsum, repudiandae voluptatem vel odio dicta libero deleniti quam iure consectetur praesentium odit veritatis.',
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
          desc:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure repudiandae consectetur quibusdam rerum minima distinctio esse amet, aut eveniet, perspiciatis, nam nesciunt dolorum delectus! Est vitae, omnis culpa officia ullam officiis molestias? Illo ullam eos quaerat ipsum, repudiandae voluptatem vel odio dicta libero deleniti quam iure consectetur praesentium odit veritatis.',
          role: 'Frontend Developer',
          techList: [
            { name: 'HTML', icon: false },
            { name: 'CSS', icon: false },
            { name: 'JavaScript', icon: false },
          ],
          year: '2018 - 2019',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.part-home-timeline {
  padding: 4rem 2rem;
}

.part-home-experience {
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

.part-home-experience__base {
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
