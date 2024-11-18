import Image from 'next/future/image'
import PartToolList from '../PartToolList'
import styles from './PartSide.module.scss'

const sideList = [
  {
    desc: 'Strona zakładu fryzjerskiego oferującego usługi z dojazdem do klienta.',
    imgs: 'loopmobi.png',
    link: 'https://loop-mobilny-fryzjer.pl/',
    name: 'LOOP Mobi, Fryzjer Mobilny',
    tool: [{ name: 'Next.js', icon: 'heart' }],
  },
  {
    desc: 'Strona profesjonalnego zakładu jubilerskiego oferującego luksusową biżuterię na zamówienie.',
    imgs: 'zielinskiart.png',
    link: 'https://www.zielinskiart.pl/',
    name: 'Zieliński ART, Jubiler',
    tool: [{ name: 'Nuxt.js', icon: 'heart' }],
  },
  {
    desc: 'Strona zakładu mechanicznego, który ma ponad 30 lat doświadczenia w serwisowaniu i naprawie pojazdów.',
    imgs: 'autotip.png',
    link: 'https://www.autotip.pl/',
    name: 'Auto TIP, Zakład Mechaniczny',
    tool: [{ name: 'Nuxt.js', icon: 'heart' }],
  },
  {
    desc: 'Strona wyświetlająca dane historyczne związane z epidemią COVID 19.',
    imgs: 'covid19track.png',
    link: 'https://covid19track.vercel.app/',
    name: 'COVID 19 Track, Aplikacja',
    tool: [{ name: 'Next.js', icon: 'heart' }],
  },
  {
    desc: 'Klient filmowej bazy danych TMDB..',
    imgs: 'tmdbnext.png',
    link: 'https://covid19track.vercel.app/',
    name: 'TMDB Next, Aplikacja',
    tool: [{ name: 'Next.js', icon: 'heart' }],
  },
]

const PartSide = () => {
  const listElem = sideList.map((item) => (
    <li className={styles.carousel__element} key={item.name}>
      <a
        aria-label={item.name}
        href={item.link}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          src={`/images/${item.imgs}`}
          alt={item.name}
          width={320}
          height={224}
        />

        <h3>{item.name}</h3>
        <p>{item.desc}</p>

        <PartToolList list={item.tool} />
      </a>
    </li>
  ))

  return (
    <section className="part" id="side">
      <h2>Moje Projekty:</h2>

      <ul className={styles.carousel}>{listElem}</ul>
    </section>
  )
}

export default PartSide
