---
# Section: Hero
heroDescription: 'Senior Frontend Engineer with 8+ years of experience creating performant, maintainable web applications - from architecture to pixel-perfect execution.'
heroHeadline: 'FRONTEND DEVELOPER — OPEN TO NEW ROLES'
heroTitle: 'Building scalable frontend applications with Vue, Nuxt and AI.'

# Section: Approach
approachDescription: 'A consistent process from discovery to a shipped, optimized product.'
approachTitle: 'How I Build Software'
approachList:
  - label: '01'
    description: 'Discovery'
  - label: '02'
    description: 'Architecture'
  - label: '03'
    description: 'Design'
  - label: '04'
    description: 'Development'
  - label: '05'
    description: 'Testing'
  - label: '06'
    description: 'Optimization'
  - label: '07'
    description: 'AI Collaboration'

# Section: Experience
experienceTitle: 'Experience'
experienceList:
  - dateStart: '2024'
    dateEnd: 'Present'
    description: 'Owns frontend architecture for headless commerce products; drives adoption of AI-assisted workflows across the team.'
    descriptionList:
      - 'Architecture decisions for a public product.'
      - "Introduced AI-assisted code review into the team's workflow."
    icon: 'i-lucide-briefcase-business'
    title: 'Senior Frontend Developer · ithouse.co'
  - dateStart: '2019'
    dateEnd: '2024'
    description: 'Led a frontend team delivering enterprise applications; owned architecture and design-system decisions.'
    descriptionList:
      - 'Angular and SAP development.'
      - 'Enterprise applications and headless commerce integrations.'
      - 'Mentored engineers and set frontend architecture standards.'
    icon: 'i-lucide-briefcase-business'
    title: 'Senior Frontend Developer · Team Lead · Cloudflight'
  - dateStart: '2018'
    dateEnd: '2019'
    description: 'Built and maintained customer-facing applications across the full frontend development lifecycle.'
    descriptionList:
      - 'Vue and Nuxt application development.'
      - 'Collaborated with cross-functional teams to deliver high-quality products.'
    icon: 'i-lucide-briefcase-business'
    title: 'Frontend Developer · Atos'

# Section: Skills
skillsTitle: 'Skills'
skillsList:
  - header: 'Frontend'
    items: ['TypeScript', 'JavaScript', 'Vue', 'Nuxt', 'Angular', 'React']
  - header: 'Architecture'
    items: ['SSR', 'SSG', 'Headless Commerce', 'Design Systems', 'Performance']
  - header: 'State & Data'
    items: ['Pinia', 'REST', 'GraphQL', 'Supabase']
  - header: 'Testing'
    items: ['Vitest', 'Quality tools']
  - header: 'Backend'
    items: ['Node', 'PHP', 'Laravel']
  - header: 'Design'
    items: ['Figma', 'UX', 'Collaboration']
  - header: 'AI'
    items: ['AI-assisted Development', 'Prompt Engineering', 'AI Workflows']

# Section: Projects
projectsTitle: 'Side Projects'
projectsList:
  - title: 'Zieliński ART, Jeweler'
    description: 'Website of a professional jewelry workshop offering luxury custom-made jewelry.'
    image: '/images/zielinskiart.webp'
    to: 'https://www.zielinskiart.pl/'
  - title: 'Auto TIP, Mechanical Workshop'
    description: 'Website of a mechanical workshop with over 30 years of experience in vehicle service and repair.'
    to: 'https://www.zielinskiart.pl/'
    image: '/images/autotip.webp'
  - title: 'LOOP Mobi, Mobile Hairdresser'
    description: 'Website of a hair salon offering mobile services with home visits.'
    to: 'https://loop-mobilny-fryzjer.pl/'
    image: '/images/loopmobi.webp'

# Section: AI
aiDescription: 'AI is a tool in the workflow, not a shortcut around engineering judgment.'
aiTitle: 'How I use AI as an engineering partner'
aiList:
  - label: '01'
    description: 'Architecture planning'
  - label: '02'
    description: 'Designing & Prototyping'
  - label: '03'
    description: 'Implementation & Development'
  - label: '04'
    description: 'Code Review'
  - label: '05'
    description: 'Testing'
  - label: '06'
    description: 'Optimization'
---

::page-hero{:description="heroDescription" :headline="heroHeadline" :title="heroTitle"}
::

::page-approach{:description="approachDescription" :list="approachList" :title="approachTitle"}
::

::page-experience{:list="experienceList" :title="experienceTitle"}
::

::page-skills{:list="skillsList" :title="skillsTitle"}
::

::page-projects{:list="projectsList" :title="projectsTitle"}
::

::page-ai{:description="aiDescription" :list="aiList" :title="aiTitle"}
::
