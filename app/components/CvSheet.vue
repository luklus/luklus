<script lang="ts" setup>
export type CvContactInfo = {
  email?: string
  github?: string
  linkedin?: string
  location?: string
  phone?: string
  website?: string
}

export type CvExperience = {
  dateEnd: string
  dateStart: string
  description: string
  descriptionList?: string[]
  icon?: string
  title: string
}

export type CvProject = {
  badges?: string[]
  description: string
  featured?: boolean
  image?: string
  title: string
  to: string
}

export type CvSkillGroup = {
  header: string
  highlighted?: string[]
  items: string[]
}

export type CvAiItem = {
  description: string
  label: string
  value?: string
}

export type CvLanguage = {
  level: string
  name: string
}

export type CvEducation = {
  dateEnd?: string
  dateStart?: string
  degree: string
  school: string
}

withDefaults(
  defineProps<{
    aiDescription?: string
    aiList?: CvAiItem[]
    contactInfo?: CvContactInfo
    cvSummary?: string
    education?: CvEducation[]
    experienceList?: CvExperience[]
    experienceTitle?: string
    heroDescription?: string
    heroHeadline?: string
    languages?: CvLanguage[]
    projectsList?: CvProject[]
    projectsTitle?: string
    rodoClause?: string
    showRodo?: boolean
    skillsList?: CvSkillGroup[]
    skillsTitle?: string
  }>(),
  {
    aiDescription: '',
    aiList: () => [],
    contactInfo: undefined,
    cvSummary: '',
    education: () => [],
    experienceList: () => [],
    experienceTitle: '',
    heroDescription: '',
    heroHeadline: '',
    languages: () => [],
    projectsList: () => [],
    projectsTitle: '',
    rodoClause: '',
    showRodo: true,
    skillsList: () => [],
    skillsTitle: ''
  }
)

const { locale } = useI18n()
</script>

<template>
  <div class="cv-document mx-auto max-w-[210mm] space-y-8 print:max-w-none print:space-y-0">
    <!-- ================= PAGE 1: Profile & Commercial Experience ================= -->
    <article
      class="cv-page cv-page-1 mx-auto flex min-h-[297mm] max-w-[210mm] flex-col justify-between border border-zinc-200 bg-white p-8 text-zinc-900 shadow-xl transition-all sm:p-12 md:rounded-2xl dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 print:m-0 print:min-h-[277mm] print:max-w-none print:rounded-none print:border-none print:bg-white print:p-0 print:text-zinc-950 print:shadow-none"
    >
      <div class="space-y-6">
        <!-- CV Header -->
        <header class="border-b border-zinc-200 pb-4 dark:border-zinc-800 print:border-zinc-300">
          <!-- Top Row: Full-width Identity & Role Badge -->
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="space-y-0.5">
              <div class="flex flex-wrap items-center gap-3">
                <h1
                  class="text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-3xl dark:text-white print:text-2xl"
                >
                  Łukasz Łusiak
                </h1>
                <span
                  class="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-700 dark:text-emerald-400 print:border-zinc-400 print:bg-zinc-100 print:text-zinc-800"
                >
                  <span class="size-1.5 rounded-full bg-emerald-500 print:bg-zinc-700"></span>
                  <span class="whitespace-nowrap">{{
                    heroHeadline ? heroHeadline.split('—')[0]?.trim() : 'SENIOR ARCHITECT'
                  }}</span>
                </span>
              </div>
              <p
                class="font-mono text-xs font-semibold text-zinc-600 sm:text-sm dark:text-zinc-400 print:text-xs print:text-zinc-700"
              >
                Frontend Architect & Senior Engineer
              </p>
            </div>
          </div>

          <!-- Contact Details Grid (Full Width, Balanced & Crisp) -->
          <div
            v-if="contactInfo"
            class="mt-3.5 flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5 border-t border-zinc-100 pt-3 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:text-zinc-400 print:mt-2.5 print:border-zinc-200 print:pt-2 print:text-[10px] print:text-zinc-800"
          >
            <div class="flex flex-wrap items-center gap-x-4 gap-y-1.5">
              <a
                v-if="contactInfo.email"
                class="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                :href="`mailto:${contactInfo.email}`"
              >
                <UIcon
                  class="size-3.5 shrink-0 text-zinc-400 print:text-zinc-600"
                  name="i-lucide-mail"
                />
                <span>{{ contactInfo.email }}</span>
              </a>

              <a
                v-if="contactInfo.phone"
                class="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                :href="`tel:${contactInfo.phone.replace(/\s+/g, '')}`"
              >
                <UIcon
                  class="size-3.5 shrink-0 text-zinc-400 print:text-zinc-600"
                  name="i-lucide-phone"
                />
                <span>{{ contactInfo.phone }}</span>
              </a>

              <div
                v-if="contactInfo.location"
                class="flex items-center gap-1.5 whitespace-nowrap"
              >
                <UIcon
                  class="size-3.5 shrink-0 text-zinc-400 print:text-zinc-600"
                  name="i-lucide-map-pin"
                />
                <span>{{ contactInfo.location }}</span>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <a
                v-if="contactInfo.website"
                class="flex items-center gap-1 text-zinc-700 underline underline-offset-2 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-white print:text-zinc-900"
                :href="contactInfo.website"
                target="_blank"
              >
                <UIcon
                  class="size-3 text-zinc-400 print:text-zinc-600"
                  name="i-lucide-globe"
                />
                <span>luklus.me</span>
              </a>
              <span
                v-if="contactInfo.website && contactInfo.github"
                class="text-zinc-300 dark:text-zinc-700"
                >·</span
              >
              <a
                v-if="contactInfo.github"
                class="flex items-center gap-1 text-zinc-700 underline underline-offset-2 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-white print:text-zinc-900"
                :href="contactInfo.github"
                target="_blank"
              >
                <UIcon
                  class="size-3 text-zinc-400 print:text-zinc-600"
                  name="i-simple-icons-github"
                />
                <span>GitHub</span>
              </a>
              <span
                v-if="contactInfo.github && contactInfo.linkedin"
                class="text-zinc-300 dark:text-zinc-700"
                >·</span
              >
              <a
                v-if="contactInfo.linkedin"
                class="flex items-center gap-1 text-zinc-700 underline underline-offset-2 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-white print:text-zinc-900"
                :href="contactInfo.linkedin"
                target="_blank"
              >
                <UIcon
                  class="size-3 text-zinc-400 print:text-zinc-600"
                  name="i-simple-icons-linkedin"
                />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </header>

        <!-- Executive Summary -->
        <section
          class="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-800/20 print:border-zinc-300 print:bg-zinc-50/60 print:p-3.5"
        >
          <div
            class="mb-1 flex items-center gap-1.5 font-mono text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 print:text-zinc-900"
          >
            <UIcon
              class="size-3.5 text-emerald-600 dark:text-emerald-400 print:text-zinc-700"
              name="i-lucide-user-check"
            />
            <span>{{ locale === 'pl' ? 'PROFIL ZAWODOWY' : 'EXECUTIVE PROFILE' }}</span>
          </div>
          <p
            class="text-xs leading-relaxed text-zinc-600 sm:text-sm dark:text-zinc-300 print:text-[11px] print:leading-relaxed print:text-zinc-800"
          >
            {{ cvSummary || heroDescription }}
          </p>
        </section>

        <!-- Experience Section (Full Width on Page 1) -->
        <section class="space-y-4">
          <div
            class="flex items-center gap-2 border-b border-zinc-200 pb-1.5 dark:border-zinc-800 print:border-zinc-300"
          >
            <span class="text-success font-mono text-xs font-bold">01 /</span>
            <h2
              class="font-mono text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-zinc-100 print:text-zinc-950"
            >
              {{ experienceTitle || $t('experience') }}
            </h2>
          </div>

          <div class="space-y-5 print:space-y-4">
            <article
              v-for="exp in experienceList"
              :key="`${exp.title}-${exp.dateStart}-${exp.dateEnd}`"
              class="relative pl-4 text-xs before:absolute before:top-1.5 before:bottom-0 before:left-0 before:w-0.5 before:bg-zinc-200 dark:before:bg-zinc-800 print:before:bg-zinc-300"
            >
              <div class="flex flex-wrap items-baseline justify-between gap-1">
                <h3
                  class="text-sm font-semibold text-zinc-900 dark:text-zinc-100 print:text-xs print:font-bold print:text-zinc-950"
                >
                  {{ exp.title }}
                </h3>
                <span
                  class="font-mono text-[11px] font-medium text-emerald-600 dark:text-emerald-400 print:text-[10px] print:text-zinc-700"
                >
                  {{ exp.dateStart }} — {{ exp.dateEnd }}
                </span>
              </div>

              <p
                class="mt-1 text-xs text-zinc-600 dark:text-zinc-300 print:text-[11px] print:text-zinc-800"
              >
                {{ exp.description }}
              </p>

              <ul
                v-if="exp.descriptionList?.length"
                class="mt-2 space-y-1 text-zinc-600 dark:text-zinc-400 print:mt-1.5 print:space-y-0.5 print:text-[10.5px] print:text-zinc-800"
              >
                <li
                  v-for="point in exp.descriptionList"
                  :key="`${exp.title}-${point}`"
                  class="flex items-start gap-1.5"
                >
                  <span class="text-success text-xs leading-tight font-bold select-none">›</span>
                  <span class="leading-snug">{{ point }}</span>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </div>

      <!-- Page 1 Pagination Footer -->
      <footer
        class="mt-6 flex items-center justify-between border-t border-zinc-200 pt-3 font-mono text-[10px] text-zinc-400 dark:border-zinc-800 dark:text-zinc-500 print:mt-4 print:border-zinc-300 print:text-[9px] print:text-zinc-600"
      >
        <span>Łukasz Łusiak · Curriculum Vitae</span>
        <span>{{ locale === 'pl' ? 'Strona 1 z 2' : 'Page 1 of 2' }}</span>
      </footer>
    </article>

    <!-- ================= PAGE 2: Projects, Skills, AI, Edu & RODO ================= -->
    <article
      class="cv-page cv-page-2 mx-auto flex min-h-[297mm] max-w-[210mm] flex-col justify-between border border-zinc-200 bg-white p-8 text-zinc-900 shadow-xl transition-all sm:p-12 md:rounded-2xl dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 print:m-0 print:min-h-[277mm] print:max-w-none print:rounded-none print:border-none print:bg-white print:p-0 print:text-zinc-950 print:shadow-none"
    >
      <div class="space-y-6">
        <!-- Page 2 Mini Header -->
        <header
          class="flex items-center justify-between border-b border-zinc-200 pb-2.5 dark:border-zinc-800 print:border-zinc-300"
        >
          <div class="flex items-center gap-2">
            <span class="font-semibold text-zinc-900 dark:text-zinc-100 print:text-zinc-950">
              Łukasz Łusiak
            </span>
            <span class="text-zinc-400">·</span>
            <span class="font-mono text-xs text-zinc-500 dark:text-zinc-400 print:text-zinc-700">
              Frontend Architect & Senior Engineer
            </span>
          </div>
          <span
            class="font-mono text-xs text-emerald-600 dark:text-emerald-400 print:text-zinc-600"
          >
            luklus.me
          </span>
        </header>

        <!-- Projects Section -->
        <section
          v-if="projectsList?.length"
          class="space-y-3"
        >
          <div
            class="flex items-center gap-2 border-b border-zinc-200 pb-1.5 dark:border-zinc-800 print:border-zinc-300"
          >
            <span class="text-success font-mono text-xs font-bold">02 /</span>
            <h2
              class="font-mono text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-zinc-100 print:text-zinc-950"
            >
              {{ projectsTitle || $t('projects') }}
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-2.5 sm:grid-cols-2 print:grid-cols-2 print:gap-2">
            <article
              v-for="project in projectsList"
              :key="`${project.title}-${project.to}`"
              class="flex flex-col justify-between rounded-lg border border-zinc-200/80 bg-zinc-50/40 p-2.5 dark:border-zinc-800/80 dark:bg-zinc-800/20 print:border-zinc-300 print:bg-white print:p-2"
            >
              <div>
                <div class="flex items-start justify-between gap-1.5">
                  <h3
                    class="text-xs font-semibold text-zinc-900 dark:text-zinc-100 print:text-[11px] print:text-zinc-950"
                  >
                    {{ project.title }}
                  </h3>
                </div>
                <p
                  class="mt-1 text-[11px] leading-snug text-zinc-600 dark:text-zinc-400 print:text-[10px] print:text-zinc-800"
                >
                  {{ project.description }}
                </p>
              </div>

              <div
                v-if="project.badges?.length"
                class="mt-2 flex flex-wrap gap-1"
              >
                <span
                  v-for="badge in project.badges"
                  :key="`${project.title}-${badge}`"
                  class="rounded bg-zinc-200/60 px-1.5 py-0.5 font-mono text-[9.5px] text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 print:border print:border-zinc-300 print:bg-zinc-50 print:text-zinc-800"
                >
                  {{ badge }}
                </span>
              </div>
            </article>
          </div>
        </section>

        <!-- Skills Matrix Section -->
        <section
          v-if="skillsList?.length"
          class="space-y-3"
        >
          <div
            class="flex items-center gap-2 border-b border-zinc-200 pb-1.5 dark:border-zinc-800 print:border-zinc-300"
          >
            <span class="text-success font-mono text-xs font-bold">03 /</span>
            <h2
              class="font-mono text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-zinc-100 print:text-zinc-950"
            >
              {{ skillsTitle || $t('skills') }}
            </h2>
          </div>

          <div
            class="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 print:grid-cols-3 print:gap-2"
          >
            <div
              v-for="skillGroup in skillsList"
              :key="skillGroup.header"
              class="rounded-lg border border-zinc-200/70 bg-zinc-50/30 p-2 dark:border-zinc-800/70 dark:bg-zinc-800/10 print:border-zinc-300 print:bg-white print:p-1.5"
            >
              <span
                class="font-mono text-[10.5px] font-semibold text-zinc-800 dark:text-zinc-200 print:text-[10px] print:text-zinc-950"
              >
                {{ skillGroup.header }}
              </span>
              <div class="mt-1 flex flex-wrap gap-1">
                <span
                  v-for="item in skillGroup.items"
                  :key="item"
                  :class="[
                    'rounded px-1.5 py-0.5 font-mono text-[9.5px]',
                    skillGroup.highlighted?.includes(item)
                      ? 'border border-emerald-500/40 bg-emerald-500/10 font-bold text-emerald-700 dark:border-emerald-500/50 dark:bg-emerald-500/15 dark:text-emerald-300 print:border-emerald-700 print:bg-emerald-50 print:text-emerald-900'
                      : 'border border-zinc-200 bg-white text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300 print:border-zinc-300 print:bg-white print:text-zinc-900'
                  ]"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- Engineering Approach & AI Workflow -->
        <section
          v-if="aiList?.length || aiDescription"
          class="space-y-2"
        >
          <div
            class="flex items-center gap-2 border-b border-zinc-200 pb-1.5 dark:border-zinc-800 print:border-zinc-300"
          >
            <span class="text-success font-mono text-xs font-bold">04 /</span>
            <h2
              class="font-mono text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-zinc-100 print:text-zinc-950"
            >
              {{ locale === 'pl' ? 'Podejście Inżynierskie & AI' : 'Engineering Approach & AI' }}
            </h2>
          </div>

          <p
            v-if="aiDescription"
            class="text-xs text-zinc-600 dark:text-zinc-400 print:text-[10.5px] print:text-zinc-700"
          >
            {{ aiDescription }}
          </p>
          <div
            v-if="aiList?.length"
            class="flex flex-wrap gap-1.5"
          >
            <span
              v-for="aiItem in aiList"
              :key="aiItem.label"
              class="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-700 dark:text-emerald-400 print:border print:border-zinc-300 print:bg-white print:text-zinc-800"
            >
              <span class="text-emerald-600 select-none dark:text-emerald-400">✓</span>
              {{ aiItem.description }}
            </span>
          </div>
        </section>

        <!-- Languages & Education (2-Column Row) -->
        <section
          v-if="languages?.length || education?.length"
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 print:grid-cols-2 print:gap-4"
        >
          <!-- Languages -->
          <div
            v-if="languages?.length"
            class="space-y-2"
          >
            <div
              class="flex items-center gap-2 border-b border-zinc-200 pb-1 dark:border-zinc-800 print:border-zinc-300"
            >
              <span class="text-success font-mono text-xs font-bold">05 /</span>
              <h2
                class="font-mono text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-zinc-100 print:text-zinc-950"
              >
                {{ $t('languages') }}
              </h2>
            </div>
            <ul
              class="space-y-1 font-mono text-xs text-zinc-600 dark:text-zinc-400 print:text-[10px] print:text-zinc-800"
            >
              <li
                v-for="lang in languages"
                :key="lang.name"
                class="flex justify-between"
              >
                <span class="font-medium text-zinc-800 dark:text-zinc-200 print:text-zinc-950">
                  {{ lang.name }}
                </span>
                <span class="text-[11px] text-zinc-500 print:text-zinc-600">
                  {{ lang.level }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Education -->
          <div
            v-if="education?.length"
            class="space-y-2"
          >
            <div
              class="flex items-center gap-2 border-b border-zinc-200 pb-1 dark:border-zinc-800 print:border-zinc-300"
            >
              <span class="text-success font-mono text-xs font-bold">06 /</span>
              <h2
                class="font-mono text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-zinc-100 print:text-zinc-950"
              >
                {{ $t('education') }}
              </h2>
            </div>
            <div
              v-for="edu in education"
              :key="`${edu.degree}-${edu.school}-${edu.dateStart}-${edu.dateEnd}`"
              class="text-xs"
            >
              <div
                class="font-semibold text-zinc-900 dark:text-zinc-100 print:text-[10.5px] print:text-zinc-950"
              >
                {{ edu.degree }}
              </div>
              <div
                class="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 print:text-[9.5px] print:text-zinc-700"
              >
                {{ edu.school }} ({{ edu.dateStart }} — {{ edu.dateEnd }})
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- GDPR / RODO Clause Footer + Page 2 Pagination -->
      <footer
        class="mt-6 space-y-3 border-t border-zinc-200 pt-3 dark:border-zinc-800 print:mt-4 print:border-zinc-300"
      >
        <p
          v-if="showRodo && rodoClause"
          class="font-mono text-[9px] leading-tight text-zinc-400 dark:text-zinc-500 print:text-[8px] print:text-zinc-600"
        >
          {{ rodoClause }}
        </p>
        <div
          class="flex items-center justify-between font-mono text-[10px] text-zinc-400 dark:text-zinc-500 print:text-[9px] print:text-zinc-600"
        >
          <span>Łukasz Łusiak · Curriculum Vitae</span>
          <span>{{ locale === 'pl' ? 'Strona 2 z 2' : 'Page 2 of 2' }}</span>
        </div>
      </footer>
    </article>
  </div>
</template>

<style scoped>
@media print {
  @page {
    size: A4 portrait;
    margin: 10mm 12mm;
  }
  .cv-document {
    margin: 0 !important;
    padding: 0 !important;
    max-width: 100% !important;
  }
  .cv-page {
    box-shadow: none !important;
    border: none !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    min-height: 275mm !important;
    background: white !important;
    color: #09090b !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
  .cv-page-2 {
    page-break-before: always !important;
    break-before: page !important;
  }
  header,
  footer {
    display: block !important;
  }
}
</style>
