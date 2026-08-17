import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import PageProjects from '~/components/content/PageProjects.vue'

const list = [
  {
    badges: ['Founder & Owner', 'In Progress'],
    description: 'All-in-one home management platform.',
    featured: true,
    image: '/images/homekeeper.jpg',
    title: 'HomeKeeper',
    to: 'https://gethomekeeper.app/'
  },
  {
    badges: ['Client Project', 'Showcase & Atelier'],
    description: 'Jewelry workshop website.',
    image: '/images/zielinskiart.webp',
    title: 'Zieliński ART',
    to: 'https://www.zielinskiart.pl/'
  }
]

describe('PageProjects', () => {
  it('renders the section title', async () => {
    const component = await mountSuspended(PageProjects, {
      props: { list, title: 'Side Projects' }
    })

    expect(component.text()).toContain('Side Projects')
  })

  it('renders all project cards with titles and descriptions', async () => {
    const component = await mountSuspended(PageProjects, {
      props: { list, title: 'Side Projects' }
    })
    const text = component.text()

    for (const project of list) {
      expect(text).toContain(project.title)
      expect(text).toContain(project.description)
    }
  })

  it('renders all badges for projects', async () => {
    const component = await mountSuspended(PageProjects, {
      props: { list, title: 'Side Projects' }
    })
    const text = component.text()

    expect(text).toContain('Founder & Owner')
    expect(text).toContain('In Progress')
    expect(text).toContain('Client Project')
    expect(text).toContain('Showcase & Atelier')
  })

  it('exposes the anchor id for in-page navigation', async () => {
    const component = await mountSuspended(PageProjects, {
      props: { list, title: 'Side Projects' }
    })

    expect(component.find('#projects').exists()).toBe(true)
  })
})
