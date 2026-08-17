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
  <main
    class="cv-sheet mx-auto max-w-[210mm] border border-zinc-200 bg-white p-8 text-zinc-900 shadow-xl transition-all sm:p-12 md:rounded-2xl dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 print:m-0 print:max-w-none print:rounded-none print:border-none print:bg-white print:p-0 print:text-zinc-950 print:shadow-none"
  >
    <!-- CV Header -->
    <section class="border-b border-zinc-200 pb-6 dark:border-zinc-800 print:border-zinc-300">
      <div class="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div class="space-y-1.5">
          <div class="flex items-center gap-3">
            <h1 class="text-2xl font-bold tracking-tight sm:text-3xl print:text-2xl">
              Łukasz Łusiak
            </h1>
            <span
              class="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-600 dark:text-emerald-400 print:border-zinc-400 print:bg-zinc-100 print:text-zinc-800"
            >
              <span class="size-1.5 rounded-full bg-emerald-500 print:bg-zinc-700"></span>
              {{ heroHeadline ? heroHeadline.split('—')[0]?.trim() : 'SENIOR ENGINEER' }}
            </span>
          </div>
          <p
            class="font-mono text-sm font-medium text-zinc-600 dark:text-zinc-400 print:text-zinc-700"
          >
            Frontend Architect & Senior Engineer
          </p>
        </div>

        <!-- Contact Details Grid -->
        <div
          v-if="contactInfo"
          class="flex flex-col gap-1 font-mono text-xs text-zinc-600 md:items-end dark:text-zinc-400 print:text-[10px] print:text-zinc-800"
        >
          <div
            v-if="contactInfo.email"
            class="flex items-center gap-1.5"
          >
            <UIcon
              class="size-3.5 text-zinc-400 print:text-zinc-600"
              name="i-lucide-mail"
            />
            <a
              class="hover:text-primary transition-colors"
              :href="`mailto:${contactInfo.email}`"
            >
              {{ contactInfo.email }}
            </a>
          </div>
          <div
            v-if="contactInfo.phone"
            class="flex items-center gap-1.5"
          >
            <UIcon
              class="size-3.5 text-zinc-400 print:text-zinc-600"
              name="i-lucide-phone"
            />
            <a
              class="hover:text-primary transition-colors"
              :href="`tel:${contactInfo.phone.replace(/\s+/g, '')}`"
            >
              {{ contactInfo.phone }}
            </a>
          </div>
          <div
            v-if="contactInfo.location"
            class="flex items-center gap-1.5"
          >
            <UIcon
              class="size-3.5 text-zinc-400 print:text-zinc-600"
              name="i-lucide-map-pin"
            />
            <span>{{ contactInfo.location }}</span>
          </div>
          <div class="flex items-center gap-2 pt-0.5">
            <a
              v-if="contactInfo.website"
              class="text-zinc-700 underline underline-offset-2 hover:text-black dark:text-zinc-300 dark:hover:text-white print:text-zinc-900"
              :href="contactInfo.website"
              target="_blank"
            >
              luklus.me
            </a>
            <span v-if="contactInfo.website && contactInfo.github">·</span>
            <a
              v-if="contactInfo.github"
              class="text-zinc-700 underline underline-offset-2 hover:text-black dark:text-zinc-300 dark:hover:text-white print:text-zinc-900"
              :href="contactInfo.github"
              target="_blank"
            >
              GitHub
            </a>
            <span v-if="contactInfo.github && contactInfo.linkedin">·</span>
            <a
              v-if="contactInfo.linkedin"
              class="text-zinc-700 underline underline-offset-2 hover:text-black dark:text-zinc-300 dark:hover:text-white print:text-zinc-900"
              :href="contactInfo.linkedin"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div
        class="mt-4 text-xs leading-relaxed text-zinc-600 sm:text-sm dark:text-zinc-300 print:text-[11px] print:text-zinc-800"
      >
        {{ cvSummary || heroDescription }}
      </div>
    </section>

    <!-- Main Body Columns (2-Column Grid) -->
    <div class="mt-6 grid grid-cols-1 gap-8 md:grid-cols-12 print:grid-cols-12 print:gap-6">
      <!-- Left Column: Experience & Projects (7 Cols) -->
      <div class="space-y-6 md:col-span-7 print:col-span-7">
        <!-- Experience Section -->
        <section class="break-inside-avoid">
          <div
            class="mb-3 flex items-center gap-2 border-b border-zinc-200 pb-1.5 dark:border-zinc-800 print:border-zinc-300"
          >
            <span class="text-success font-mono text-xs font-bold">01 /</span>
            <h2
              class="font-mono text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-zinc-100 print:text-zinc-950"
            >
              {{ experienceTitle || $t('experience') }}
            </h2>
          </div>

          <div class="space-y-4">
            <article
              v-for="(exp, index) in experienceList"
              :key="index"
              class="relative break-inside-avoid pl-3.5 text-xs before:absolute before:top-1.5 before:bottom-0 before:left-0 before:w-0.5 before:bg-zinc-200 dark:before:bg-zinc-800 print:before:bg-zinc-300"
            >
              <div class="flex flex-wrap items-baseline justify-between gap-1">
                <h3 class="font-semibold text-zinc-900 dark:text-zinc-100 print:text-zinc-950">
                  {{ exp.title }}
                </h3>
                <span
                  class="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 print:text-zinc-700"
                >
                  {{ exp.dateStart }} — {{ exp.dateEnd }}
                </span>
              </div>

              <p class="mt-1 text-zinc-600 dark:text-zinc-300 print:text-zinc-800">
                {{ exp.description }}
              </p>

              <ul
                v-if="exp.descriptionList?.length"
                class="mt-1.5 space-y-0.5 text-zinc-500 dark:text-zinc-400 print:text-zinc-700"
              >
                <li
                  v-for="(point, pIdx) in exp.descriptionList"
                  :key="pIdx"
                  class="flex items-start gap-1.5"
                >
                  <span class="text-success text-xs font-bold select-none">›</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <!-- Selected Projects Section -->
        <section
          v-if="projectsList?.length"
          class="break-inside-avoid"
        >
          <div
            class="mb-3 flex items-center gap-2 border-b border-zinc-200 pb-1.5 dark:border-zinc-800 print:border-zinc-300"
          >
            <span class="text-success font-mono text-xs font-bold">02 /</span>
            <h2
              class="font-mono text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-zinc-100 print:text-zinc-950"
            >
              {{ projectsTitle || $t('projects') }}
            </h2>
          </div>

          <div class="space-y-3">
            <article
              v-for="(project, pIndex) in projectsList.slice(0, 3)"
              :key="pIndex"
              class="break-inside-avoid rounded-lg border border-zinc-200/60 p-2.5 dark:border-zinc-800/80 print:border-zinc-300 print:p-2"
            >
              <div class="flex items-center justify-between gap-2">
                <h3 class="font-semibold text-zinc-900 dark:text-zinc-100 print:text-zinc-950">
                  {{ project.title }}
                </h3>
                <div
                  v-if="project.badges?.length"
                  class="flex gap-1"
                >
                  <span
                    v-for="(badge, bIdx) in project.badges.slice(0, 2)"
                    :key="bIdx"
                    class="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 print:border print:border-zinc-300 print:bg-white print:text-zinc-800"
                  >
                    {{ badge }}
                  </span>
                </div>
              </div>
              <p class="mt-1 text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
                {{ project.description }}
              </p>
            </article>
          </div>
        </section>
      </div>

      <!-- Right Column: Skills, Approach, Languages & Education (5 Cols) -->
      <div class="space-y-6 md:col-span-5 print:col-span-5">
        <!-- Skills Section -->
        <section
          v-if="skillsList?.length"
          class="break-inside-avoid"
        >
          <div
            class="mb-3 flex items-center gap-2 border-b border-zinc-200 pb-1.5 dark:border-zinc-800 print:border-zinc-300"
          >
            <span class="text-success font-mono text-xs font-bold">03 /</span>
            <h2
              class="font-mono text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-zinc-100 print:text-zinc-950"
            >
              {{ skillsTitle || $t('skills') }}
            </h2>
          </div>

          <div class="space-y-2.5">
            <div
              v-for="skillGroup in skillsList"
              :key="skillGroup.header"
              class="break-inside-avoid"
            >
              <span
                class="font-mono text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 print:text-zinc-900"
              >
                {{ skillGroup.header }}
              </span>
              <div class="mt-1 flex flex-wrap gap-1">
                <span
                  v-for="item in skillGroup.items"
                  :key="item"
                  class="rounded border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-mono text-[10px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300 print:border-zinc-300 print:bg-white print:text-zinc-900"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- AI & Engineering Approach -->
        <section
          v-if="aiList?.length || aiDescription"
          class="break-inside-avoid"
        >
          <div
            class="mb-3 flex items-center gap-2 border-b border-zinc-200 pb-1.5 dark:border-zinc-800 print:border-zinc-300"
          >
            <span class="text-success font-mono text-xs font-bold">04 /</span>
            <h2
              class="font-mono text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-zinc-100 print:text-zinc-950"
            >
              {{ locale === 'pl' ? 'Podejście & AI' : 'Engineering & AI' }}
            </h2>
          </div>

          <p
            v-if="aiDescription"
            class="text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-700"
          >
            {{ aiDescription }}
          </p>
          <div
            v-if="aiList?.length"
            class="mt-2 flex flex-wrap gap-1"
          >
            <span
              v-for="aiItem in aiList"
              :key="aiItem.label"
              class="rounded bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[10px] text-emerald-700 dark:text-emerald-400 print:border print:border-zinc-300 print:bg-white print:text-zinc-800"
            >
              {{ aiItem.description }}
            </span>
          </div>
        </section>

        <!-- Languages & Education -->
        <section
          v-if="languages?.length || education?.length"
          class="break-inside-avoid space-y-4"
        >
          <!-- Languages -->
          <div v-if="languages?.length">
            <div
              class="mb-2 flex items-center gap-2 border-b border-zinc-200 pb-1 dark:border-zinc-800 print:border-zinc-300"
            >
              <span class="text-success font-mono text-xs font-bold">05 /</span>
              <h2
                class="font-mono text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-zinc-100 print:text-zinc-950"
              >
                {{ $t('languages') }}
              </h2>
            </div>
            <ul
              class="space-y-1 font-mono text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-800"
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
          <div v-if="education?.length">
            <div
              class="mb-2 flex items-center gap-2 border-b border-zinc-200 pb-1 dark:border-zinc-800 print:border-zinc-300"
            >
              <span class="text-success font-mono text-xs font-bold">06 /</span>
              <h2
                class="font-mono text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-zinc-100 print:text-zinc-950"
              >
                {{ $t('education') }}
              </h2>
            </div>
            <div
              v-for="(edu, eIdx) in education"
              :key="eIdx"
              class="text-xs"
            >
              <div class="font-semibold text-zinc-900 dark:text-zinc-100 print:text-zinc-950">
                {{ edu.degree }}
              </div>
              <div
                class="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 print:text-zinc-700"
              >
                {{ edu.school }} ({{ edu.dateStart }} — {{ edu.dateEnd }})
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- GDPR / RODO Clause Footer -->
    <footer
      v-if="showRodo && rodoClause"
      class="mt-8 border-t border-zinc-200 pt-4 font-mono text-[9px] leading-tight text-zinc-400 dark:border-zinc-800 dark:text-zinc-500 print:mt-6 print:border-zinc-300 print:text-[8.5px] print:text-zinc-500"
    >
      <p>{{ rodoClause }}</p>
    </footer>
  </main>
</template>

<style scoped>
@media print {
  .cv-sheet {
    box-shadow: none !important;
    border: none !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
}
</style>
