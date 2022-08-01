import styles from './PartToolList.module.scss'

const PartToolList = ({ list }) => {
  const listElem = list.map((item) => <li key={item.name}>{item.name}</li>)

  return <ul className={styles.list}>{listElem}</ul>
}

export default PartToolList
