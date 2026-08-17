import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import CvSheet from '~/components/CvSheet.vue'

const props = {
  contactInfo: {
    email: 'lukaslusiak.bussines@outlook.com',
    github: 'https://github.com/luklus',
    linkedin: 'https://linkedin.com/in/łukasz-łusiak-58868215b',
    location: 'Polska · Praca zdalna',
    phone: '+48 606 688 439',
    website: 'https://luklus.me'
  },
  cvSummary:
    'Senior Frontend Engineer z ponad 8-letnim doświadczeniem w projektowaniu i wdrażaniu skalowalnych aplikacji webowych.',
  education: [
    {
      dateEnd: '2018',
      dateStart: '2014',
      degree: 'Inżynieria Oprogramowania',
      school: 'Wyższa Szkoła Bankowa w Gdańsku'
    }
  ],
  experienceList: [
    {
      dateEnd: 'Obecnie',
      dateStart: '2024',
      description: 'Kieruję architekturą frontendu.',
      descriptionList: ['Decyzje architektoniczne', 'AI-assisted code review'],
      icon: 'i-lucide-briefcase-business',
      title: 'Senior Frontend Developer · ithouse.co'
    }
  ],
  experienceTitle: 'Doświadczenie',
  heroDescription: 'Opis profilu',
  heroHeadline: 'ARCHITEKT FRONTENDU — OTWARTY NA WYZWANIA',
  languages: [
    { level: 'Ojczysty', name: 'Polski' },
    { level: 'Biegły (C1)', name: 'Angielski' }
  ],
  projectsList: [
    {
      badges: ['SaaS', 'Founder'],
      description: 'Platforma do zarządzania domem',
      title: 'HomeKeeper',
      to: 'https://gethomekeeper.app/'
    }
  ],
  projectsTitle: 'Projekty',
  rodoClause: 'Wyrażam zgodę na przetwarzanie moich danych osobowych.',
  showRodo: true,
  skillsList: [
    {
      header: 'Frontend',
      items: ['TypeScript', 'Vue', 'Nuxt']
    }
  ],
  skillsTitle: 'Umiejętności'
}

describe('CvSheet', () => {
  it('renders the candidate name and title', async () => {
    const component = await mountSuspended(CvSheet, { props })
    const text = component.text()

    expect(text).toContain('Łukasz Łusiak')
    expect(text).toContain('Frontend Architect & Senior Engineer')
  })

  it('renders contact details and links', async () => {
    const component = await mountSuspended(CvSheet, { props })
    const text = component.text()

    expect(text).toContain('lukaslusiak.bussines@outlook.com')
    expect(text).toContain('+48 606 688 439')
    expect(text).toContain('Polska · Praca zdalna')
  })

  it('renders experience, skills and projects', async () => {
    const component = await mountSuspended(CvSheet, { props })
    const text = component.text()

    expect(text).toContain('Senior Frontend Developer · ithouse.co')
    expect(text).toContain('Decyzje architektoniczne')
    expect(text).toContain('HomeKeeper')
    expect(text).toContain('TypeScript')
  })

  it('renders languages, education and RODO clause', async () => {
    const component = await mountSuspended(CvSheet, { props })
    const text = component.text()

    expect(text).toContain('Polski')
    expect(text).toContain('Inżynieria Oprogramowania')
    expect(text).toContain('Wyrażam zgodę na przetwarzanie moich danych osobowych.')
  })
})
