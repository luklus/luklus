<template>
  <!-- <header>Header</header> -->
  <main class="page">
    <PartHero />
    <section class="page__part">Hello</section>
    <section class="page__part">Hello</section>
  </main>
  <!-- <footer>Footer</footer> -->
</template>

<style lang="scss" scoped>
.page {
  height: 100vh;
  overflow: auto;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;

  &__part {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    margin: 0 auto;
    max-width: 60rem;
    padding: 1.25rem;
    scroll-snap-align: start;
    width: 100%;
  }
}
</style>
