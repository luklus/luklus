<template>
  <section class="part tool">
    <h2>Jezyki programowania, frameworki i biblioteki, narzędzia:</h2>

    <ul class="tool__List">
      <li v-for="item in toolList" :key="item.name" class="tool__item">
        {{ item.name }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const toolList = [
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
  { name: 'Figma', icon: 'heart' },
  { name: 'Git', icon: false },
  { name: 'GraphQl', icon: false },
  { name: 'Netlify', icon: false },
  { name: 'Node', icon: false },
  { name: 'Parcell', icon: false },
  { name: 'Rest API', icon: false },
  { name: 'RxJS', icon: false },
  { name: 'SASS/SCSS', icon: false },
  { name: 'Vercel', icon: false },
  { name: 'Vuex', icon: false },
  { name: 'Webpack', icon: false },
]
</script>

<style lang="scss" scoped>
.tool {
  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    align-items: center;
    background-color: #fbbf24;
    border-radius: 0.25rem;
    color: var(--text);
    cursor: default;
    display: inline-flex;
    font-size: 0.875rem;
    font-weight: 400;
    margin: 0 1rem 1rem 0;
    padding: 0.25em 0.75rem;
    position: relative;
    width: fit-content;
  }
}
</style>
