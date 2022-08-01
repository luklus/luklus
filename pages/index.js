import Head from 'next/head'
import PartExperience from '../components/PartExperience'
import PartFooter from '../components/PartFooter'
import PartHero from '../components/PartHero'
import PartInfo from '../components/PartInfo'
import PartNavi from '../components/PartNavi'
import PartSide from '../components/PartSide'
import PartTool from '../components/PartTool'
import styles from '../styles/Page.module.scss'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Łukasz Łusiak - Frontend Developer.</title>
        <meta
          name="description"
          content="Łukasz Łusiak - Frontend Developer. HTMl, CSS, JavaScript, TypeScript, Angular, React, Vue."
        />
        <meta name="theme-color" content="#fbbf24" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <PartNavi />

      <main className={styles.page} id="page">
        <PartHero />
        <PartInfo />
        <PartTool />
        <PartExperience />
        <PartSide />
        <PartFooter />
      </main>
    </>
  )
}

export default HomePage
