<template>
  <main class="home">
    <part-home-hero />

    <lazy-part-home-me :text-about="pageInfoLang.about" />

    <lazy-part-home-timeline
      :text-timeline-atos="pageInfoLang.timelineAtos"
      :text-timeline-divante="pageInfoLang.timelineDivante"
    />

    <lazy-part-home-side-projects
      :text-side-auto="pageInfoLang.sideAuto"
      :text-side-art="pageInfoLang.sideArt"
      :text-side-covid="pageInfoLang.sideCovid"
      :text-side-movie="pageInfoLang.sideMovie"
    />

    <lazy-part-home-contact />
  </main>
</template>

<script>
export default {
  name: 'HomePage',

  async asyncData({ $content }) {
    const pageInfo = await $content('home').fetch()

    return {
      pageInfo,
    }
  },

  head: {
    title: 'luklus.me - Łukasz Łusiak',
    meta: [
      {
        content:
          'luklus.me - Łukasz Łusiak. CV, Portfolio, Doświadczenie, Kontakt.',
        hid: 'description',
        name: 'description',
      },
    ],
  },

  computed: {
    pageInfoLang() {
      return this.pageInfo[this.$i18n.locale]
    },
  },
}
</script>
