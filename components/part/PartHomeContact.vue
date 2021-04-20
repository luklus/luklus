<template>
  <section class="home-contact wrap">
    <h2>{{ $t('contact') }}</h2>

    <div class="part">
      <div class="home-contact-bg">
        <div class="home-contact-form">
          <div class="home-contact-form__item">
            <input type="text" />
          </div>

          <div class="home-contact-form__item">
            <input type="text" />
          </div>

          <div class="home-contact-form__item">
            <textarea
              id="message"
              name="message"
              cols="20"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HomePageContact',
})
</script>

<style lang="scss" scoped>
.home-contact {
  padding: 4rem 2rem;
}

.home-contact-bg {
  background-image: url('/images/map.png');
  background-size: cover;
  border-radius: 0.5rem;
  height: 34rem;
  padding: 2rem;
}

.home-contact-form {
  background-color: var(--bg);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  width: 40%;

  &__item {
    margin-bottom: 1rem;

    input,
    textarea {
      border: 1px solid var(--text);
      border-radius: 0.5rem;
      font-size: 1rem;
      line-height: 1.5rem;
      outline: 0;
      padding: 0.75rem 1rem;
      width: 100%;
    }
  }
}
</style>
