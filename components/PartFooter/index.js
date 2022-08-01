import styles from './PartFooter.module.scss'

const PartFooter = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="part" id="footer">
      <h2>Kontakt:</h2>

      <div className={styles.contacts}>
        <p>Telefon:</p>
        <a href="tel:+48606688439" rel="noreferrer">
          +48 606 688 439
        </a>

        <p>Mail: </p>
        <a
          href="mailto:ll_code@outlook.com?subject=Wiadomość ze strony luklus.me"
          rel="noreferrer"
        >
          ll_code@outlook.com
        </a>
      </div>

      <p>©{year} Łukasz Łusiak. Wszelkie prawa zastrzeżone.</p>
    </footer>
  )
}

export default PartFooter
