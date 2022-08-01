import PartToolList from '../PartToolList'
import styles from './PartExperience.module.scss'

const experienceList = [
  {
    company: 'Divante S.A.',
    companyLink: 'https://divante.com',
    desc: 'Udział w projektach z branży e-commerce. Praca z bibliotekami Vue Storefront, Storefront UI, Spartacus SAP. Lider zespołu Frontend w jednym z projektów.',
    role: 'Frontend Developer',
    techList: [
      { name: 'HTML', icon: false },
      { name: 'CSS', icon: false },
      { name: 'JavaScript', icon: false },
      { name: 'TypeScript', icon: false },
      { name: 'Angular', icon: false },
      { name: 'Vue', icon: false },
    ],
    year: '2019 - ....',
  },
  {
    company: 'Atos Poland Global Services Sp. z o.o.',
    companyLink: 'https://atos.net',
    desc: "Realizacja kilku małych projektów na potrzeby wewnętrzne. Udział w duym projekcie e-commerce B2C pisanym od 'zera'.",
    role: 'Frontend Developer',
    techList: [
      { name: 'HTML', icon: false },
      { name: 'CSS', icon: false },
      { name: 'JavaScript', icon: false },
      { name: 'Vue', icon: false },
      { name: 'Nuxt', icon: false },
    ],
    year: '2018 - 2019',
  },
]
const PartExperience = () => {
  const listElem = experienceList.map((item) => (
    <li className={styles.item} key={item.company}>
      <p>{item.year}</p>
      <h3>
        {item.role}, <a href={item.companyLink}>{item.company}</a>
      </h3>
      <p>{item.desc}</p>

      <PartToolList list={item.techList} />
    </li>
  ))

  return (
    <section className="part" id="experience">
      <h2>Doświadczenie Zawodowe:</h2>

      <ul className={styles.list}>{listElem}</ul>
    </section>
  )
}

export default PartExperience
