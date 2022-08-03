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
  const handleLinkActive = (event) => {
    if (window && window.gtag) {
      window.gtag('event', 'Page Section', {
        event_category: 'Page Section',
        event_label: 'Page Section',
        value: event,
      })
    }
  }

  const listElem = linkList.map((item, i) => (
    <li key={i}>
      <Link
        activeClass="navi--active"
        containerId="page"
        duration={100}
        onSetActive={handleLinkActive}
        smooth
        spy
        to={item.name}
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
