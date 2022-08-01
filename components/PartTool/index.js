import PartToolList from '../PartToolList'

const toolList = [
  { name: 'Angular', icon: false },
  { name: 'CSS', icon: false },
  { name: 'HTML', icon: false },
  { name: 'JavaScript', icon: false },
  { name: 'jQuery', icon: 'smile' },
  { name: 'Laravel', icon: false },
  { name: 'Next.js', icon: 'heart' },
  { name: 'Nuxt.js', icon: 'heart' },
  { name: 'PHP', icon: false },
  { name: 'React', icon: false },
  { name: 'TypeScript', icon: false },
  { name: 'Vue', icon: 'heart' },
  { name: 'Figma', icon: 'heart' },
  { name: 'Git', icon: false },
  { name: 'GraphQl', icon: false },
  { name: 'Netlify', icon: false },
  { name: 'Node', icon: false },
  { name: 'Parcell', icon: false },
  { name: 'Rest API', icon: false },
  { name: 'RxJS', icon: false },
  { name: 'SASS/SCSS', icon: false },
  { name: 'Vercel', icon: false },
  { name: 'Vuex', icon: false },
  { name: 'Webpack', icon: false },
]

const PartTool = () => {
  return (
    <section className="part" id="tool">
      <h2>Jezyki programowania, frameworki i biblioteki, narzędzia:</h2>

      <PartToolList list={toolList} />
    </section>
  )
}

export default PartTool
