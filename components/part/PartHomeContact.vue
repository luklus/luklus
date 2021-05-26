<template>
  <section class="home-contact wrap">
    <h2>{{ $t('contact') }}</h2>

    <div class="part">
      <div class="home-contact__link">
        <a href="mailto:ll_code@outlook.com" rel="noreferrer"
          ><MailIcon /> ll_code@outlook.com</a
        >
        <a href="tel:606688439" rel="noreferrer"><MobiIcon /> 606688439</a>
      </div>
      <div class="home-contact-bg">
        <form class="home-contact-form" @submit.prevent="sendForm">
          <div
            class="home-contact-form__item"
            :class="{ 'home-contact-form__item--erro': $v.form.name.$error }"
          >
            <input
              v-model.trim="$v.form.name.$model"
              :placeholder="$t('formName')"
              type="text"
            />
            <div v-if="$v.form.name.$error" class="home-contact-form__erro">
              <p v-if="!$v.form.name.required">{{ $t('formErroRequired') }}</p>
            </div>
          </div>

          <div
            class="home-contact-form__item"
            :class="{ 'home-contact-form__item--erro': $v.form.mail.$error }"
          >
            <input
              v-model.trim="$v.form.mail.$model"
              :placeholder="$t('formMail')"
              type="text"
            />
            <div v-if="$v.form.mail.$error" class="home-contact-form__erro">
              <p v-if="!$v.form.mail.required">{{ $t('formErroRequired') }}</p>
              <p v-if="!$v.form.mail.email">{{ $t('formErroMail') }}</p>
            </div>
          </div>

          <div
            class="home-contact-form__item"
            :class="{ 'home-contact-form__item--erro': $v.form.text.$error }"
          >
            <textarea
              id="message"
              v-model.trim="$v.form.text.$model"
              :placeholder="$t('formText')"
              cols="20"
              name="message"
              rows="8"
            ></textarea>
            <div v-if="$v.form.text.$error" class="home-contact-form__erro">
              <p>{{ $t('formErroRequired') }}</p>
            </div>
          </div>

          <div class="home-contact-form__item">
            <button type="submit">Wyślij</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators'
import MailIcon from '@/assets/icons/mail.svg'
import MobiIcon from '@/assets/icons/mobi.svg'

export default {
  name: 'HomePageContact',

  components: {
    MailIcon,
    MobiIcon,
  },

  data() {
    return {
      form: {
        _subject: 'Wiadomość ze strony luklus.me',
        _template: 'box',
        mail: '',
        name: '',
        text: '',
      },
      isFormPend: false,
    }
  },

  validations: {
    form: {
      mail: {
        required,
        email,
      },
      name: {
        required,
      },
      text: {
        required,
      },
    },
  },

  methods: {
    async sendForm() {
      this.$v.$touch()

      if (this.$v.form.$invalid) return

      try {
        this.isFormPend = true

        await fetch('https://formsubmit.co/ajax/ll_code@outlook.com', {
          body: JSON.stringify({
            ...this.form,
          }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          method: 'POST',
        })
        this.$noty.success(this.$t('formSuccess'))
      } catch (erro) {
        this.$noty.error(this.$t('formErro'))
      } finally {
        this.isFormPend = false
        this.$v.form.$reset()
        this.form = {
          _subject: 'Wiadomość ze strony luklus.me',
          _template: 'box',
          mail: '',
          name: '',
          text: '',
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/base/mixn';

.home-contact {
  padding: 4rem 2rem;

  &__link {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    a {
      align-items: center;
      color: var(--c-text);
      display: inline-flex;
      font-size: 1.25rem;
      margin-bottom: 0.5rem;

      svg {
        margin-right: 1rem;
      }
    }
  }
}

.home-contact-bg {
  background-image: url('/images/map.png');
  background-size: cover;
  border-radius: 0.5rem;
  height: 34rem;
  padding: 2rem;
}

.home-contact-form {
  background-color: transparent;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem 0;
  width: 100%;

  @include mq(sm) {
    background-color: var(--bg);
    padding: 2rem;
    width: 45%;
  }

  &__erro {
    bottom: -1.5rem;
    color: var(--c-red-600);
    left: 1rem;
    font-size: 0.75rem;
    position: absolute;
  }

  &__item {
    margin-bottom: 2.25rem;
    position: relative;

    button {
      background-color: var(--primary);
      border: 2px solid var(--primary-hover);
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      line-height: 1.25rem;
      margin-top: 0.5rem;
      min-width: 8rem;
      outline: 0;
      padding: 0.5rem 0.75rem;
      text-align: center;
      transition: background-color 300ms ease;

      &:hover {
        background-color: var(--primary-hover);
      }
    }

    input,
    textarea {
      border: 2px solid var(--primary);
      border-radius: 0.5rem;
      font-family: inherit;
      font-size: 1rem;
      line-height: 1.25rem;
      outline: 0;
      padding: 0.5rem 0.75rem;
      transition: border 300ms ease;
      width: 100%;
    }

    textarea {
      height: 100%;
      resize: none;
    }

    &--erro {
      input,
      textarea {
        border: 2px solid var(--c-red-600);
      }
    }
  }
}
</style>
