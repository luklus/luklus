---
# Section: Hero
heroDescription: 'Senior Frontend Engineer z ponad 8-letnim doświadczeniem w tworzeniu wydajnych i łatwych w utrzymaniu aplikacji internetowych - od decyzji architektonicznych po dopracowany w detalach interfejs.'
heroHeadline: 'FRONTEND ARCHITECT — OTWARTY NA NOWE WYZWANIA'
heroTitle: 'Projektuję i tworzę skalowalne aplikacje frontendowe w oparciu o Vue, Nuxt i AI.'

# Section: Approach
approachDescription: 'Spójny proces od etapu discovery do wdrożenia i optymalizacji produktu.'
approachTitle: 'Jak tworzę oprogramowanie?'
approachList:
  - label: '01'
    description: 'Discovery'
  - label: '02'
    description: 'Architektura'
  - label: '03'
    description: 'Projektowanie'
  - label: '04'
    description: 'Implementacja'
  - label: '05'
    description: 'Testowanie'
  - label: '06'
    description: 'Optymalizacja'
  - label: '07'
    description: 'Dostarczanie wspierane przez AI'

# Section: Experience
experienceTitle: 'Doświadczenie'
experienceList:
  - dateStart: '2024'
    dateEnd: 'Obecnie'
    description: 'Odpowiadam za architekturę frontendu w produktach headless commerce i rozwijam workflow wspierane przez AI w zespole.'
    descriptionList:
      - 'Decyzje architektoniczne dla publicznego produktu.'
      - 'Wdrożenie code review wspieranego przez AI do workflow zespołu.'
    icon: 'i-lucide-briefcase-business'
    title: 'Senior Frontend Developer · ithouse.co'
  - dateStart: '2019'
    dateEnd: '2024'
    description: 'Prowadziłem zespół frontendowy dostarczający aplikacje enterprise; odpowiadałem za architekturę i decyzje dotyczące design systemu.'
    descriptionList:
      - 'Rozwój rozwiązań w Angularze i SAP.'
      - 'Aplikacje enterprise i integracje headless commerce.'
      - 'Mentoring inżynierów i wyznaczanie standardów architektury frontendu.'
    icon: 'i-lucide-briefcase-business'
    title: 'Senior Frontend Developer · Team Lead · Cloudflight'
  - dateStart: '2018'
    dateEnd: '2019'
    description: 'Tworzyłem i utrzymywałem aplikacje klienckie w pełnym cyklu rozwoju frontendu.'
    descriptionList:
      - 'Rozwój aplikacji w Vue i Nuxt.'
      - 'Współpraca z zespołami cross-funkcjonalnymi przy dostarczaniu wysokiej jakości produktów.'
    icon: 'i-lucide-briefcase-business'
    title: 'Frontend Developer · Atos'

# Section: Skills
skillsTitle: 'Umiejętności'
skillsList:
  - header: 'Frontend'
    items: ['TypeScript', 'JavaScript', 'Vue', 'Nuxt', 'Angular', 'React']
  - header: 'Architektura'
    items: ['SSR', 'SSG', 'Headless Commerce', 'Design Systems', 'Wydajność']
  - header: 'Stan i dane'
    items: ['Pinia', 'REST', 'GraphQL', 'Supabase']
  - header: 'Testowanie'
    items: ['Vitest', 'Narzędzia jakości kodu']
  - header: 'Backend'
    items: ['Node', 'PHP', 'Laravel']
  - header: 'Projektowanie'
    items: ['Figma', 'UX', 'Współpraca projektowa']
  - header: 'AI'
    items: ['AI-assisted Development', 'Prompt Engineering', 'AI Workflows']

# Section: Projects
projectsTitle: 'Projekty poboczne'
projectsList:
  - title: 'HomeKeeper · System operacyjny dla Twojego domu'
    description: 'Kompleksowa platforma do zarządzania domem: rejestr gwarancji, harmonogram przeglądów, odczyty liczników, zadania i budżet. Zaprojektowana i stworzona od podstaw jako twórca i właściciel.'
    image: '/images/homekeeper.jpg'
    to: 'https://gethomekeeper.app/'
    badges:
      - 'Twórca & Właściciel'
      - 'W trakcie rozwoju'
    featured: true
  - title: 'Zieliński ART, Jubiler'
    description: 'Dedykowana strona portfolio dla ekskluzywnej pracowni złotniczej, akcentująca unikatowe rzemiosło, historie realizacji oraz luksusową biżuterię na zamówienie.'
    image: '/images/zielinskiart.webp'
    to: 'https://www.zielinskiart.pl/'
    badges:
      - 'Projekt komercyjny'
      - 'Showcase & Pracownia'
  - title: 'Auto TIP, Zakład Mechaniczny'
    description: 'Nowoczesna, zoptymalizowana pod kątem SEO i wydajności wizytówka dla serwisu samochodowego z ponad 30-letnim doświadczeniem w diagnostyce i mechanice.'
    to: 'https://www.autotip.pl/'
    image: '/images/autotip.webp'
    badges:
      - 'Projekt komercyjny'
      - 'Nuxt & Lokalne SEO'
  - title: 'LOOP Mobi, Fryzjer Mobilny'
    description: 'Szybka i intuicyjna strona usługowa dla mobilnego salonu fryzjerskiego z interaktywnym cennikiem, kalkulacją zasięgu dojazdu oraz bezpośrednim kontaktem.'
    to: 'https://loop-mobilny-fryzjer.pl/'
    image: '/images/loopmobi.webp'
    badges:
      - 'Projekt komercyjny'
      - 'Next.js & Tailwind'

# Section: AI
aiDescription: 'AI to narzędzie w workflow, a nie skrót omijający inżynierski osąd.'
aiTitle: 'Jak używam AI jako partnera inżynierskiego'
aiList:
  - label: '01'
    description: 'Planowanie architektury'
  - label: '02'
    description: 'Projektowanie i prototypowanie'
  - label: '03'
    description: 'Implementacja i rozwój'
  - label: '04'
    description: 'Code Review'
  - label: '05'
    description: 'Testowanie'
  - label: '06'
    description: 'Optymalizacja'
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
