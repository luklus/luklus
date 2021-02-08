<template>
  <main class="home">
    <part-home-hero />

    <part-home-me />

    <div class="wrap">
      <section class="about">
        <h2>Experience</h2>
        <base-paragraph>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            repudiandae consectetur quibusdam rerum minima distinctio esse amet,
            aut eveniet, perspiciatis, nam nesciunt dolorum delectus! Est vitae,
            omnis culpa officia ullam officiis molestias? Illo ullam eos quaerat
            ipsum, repudiandae voluptatem vel odio dicta libero deleniti quam
            iure consectetur praesentium odit veritatis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            repudiandae consectetur quibusdam rerum minima distinctio esse amet,
            aut eveniet, perspiciatis, nam nesciunt dolorum delectus! Est vitae,
            omnis culpa officia ullam officiis molestias? Illo ullam eos quaerat
            ipsum, repudiandae voluptatem vel odio dicta libero deleniti quam
            iure consectetur praesentium odit veritatis.
          </p>
        </base-paragraph>
      </section>
    </div>
  </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HomePage',
})
</script>
