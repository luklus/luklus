import { Link } from 'react-scroll'
import styles from './PartNavi.module.scss'

const linkList = [
  { name: 'hero' },
  { name: 'info' },
  { name: 'tool' },
  { name: 'experience' },
  { name: 'side' },
  { name: 'footer' },
]

const PartNavi = () => {
  const listElem = linkList.map((item) => (
    <li key={item.link}>
      <Link
        activeClass="navi--active"
        containerId="page"
        duration={100}
        to={item.name}
        spy
        smooth
      ></Link>
    </li>
  ))

  return (
    <aside className={styles.navi}>
      <ul>{listElem}</ul>
    </aside>
  )
}

export default PartNavi
