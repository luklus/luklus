import Image from 'next/future/image'
import Typewriter from 'typewriter-effect'
import styles from './PartHero.module.scss'

const PartHero = () => {
  return (
    <section className="part" id="hero">
      <div className={styles.mssg}>
        <Typewriter
          options={{
            strings: ['Hello World!', 'Cześć!'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <h1>Łukasz Łusiak</h1>
      <h2>Frontend Developer</h2>

      <div className={styles.imgs}>
        <a
          aria-label="GitHub"
          href="https://github.com/luklus"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/icons/github.svg"
            alt="Github - Link"
            width={24}
            height={24}
          />
        </a>

        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/łukasz-łusiak-58868215b/"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/icons/linkedin.svg"
            alt="Linkedin - Link"
            width={24}
            height={24}
          />
        </a>

        <a aria-label="Telefon" href="tel:+47606688439">
          <Image
            src="/icons/telephone.svg"
            alt="Telefon - Link"
            width={24}
            height={24}
          />
        </a>
      </div>
    </section>
  )
}

export default PartHero
