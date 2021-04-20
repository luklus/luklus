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
      :text-side-covid="pageInfoLang.sideCovid"
      :text-side-movie="pageInfoLang.sideMovie"
    />

    <lazy-part-home-contact />
  </main>
</template>

<script>
import {
  computed,
  defineComponent,
  useAsync,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HomePage',

  setup() {
    const { $content } = useContext()
    const {
      app: { i18n },
    } = useContext()

    const pageInfo = useAsync(() => $content('home').fetch())

    const pageInfoLang = computed(
      () => pageInfo.value[i18n?.localeProperties?.code]
    )

    return { pageInfoLang }
  },
})
</script>
