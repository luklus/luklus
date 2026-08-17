<script lang="ts" setup>
const { description, headline, title } = defineProps<{
  description: string
  headline: string
  title: string
}>()
</script>

<template>
  <UPageHero
    :description
    :title
    :ui="{
      title: 'text-4xl sm:text-4xl text-pretty tracking-tight font-bold text-highlighted'
    }"
    orientation="horizontal"
  >
    <template #headline>
      <UBadge
        class="rounded-full pr-8 font-mono"
        color="success"
        size="xl"
        variant="outline"
      >
        <span class="relative flex size-2">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
          >
          </span>
          <span class="relative inline-flex size-2 rounded-full bg-green-500"></span>
        </span>

        {{ headline }}
      </UBadge>
    </template>

    <template #links>
      <UButton
        color="primary"
        icon="i-lucide-phone"
        size="lg"
        to="tel:+48606688439"
        variant="solid"
      >
        {{ $t('contact') }}
      </UButton>

      <UButton
        color="primary"
        size="lg"
        target="_blank"
        to="https://www.linkedin.com/in/%C5%82ukasz-%C5%82usiak-58868215b/"
        trailing-icon="i-lucide-move-up-right"
        variant="link"
      >
        LinkedIn
      </UButton>

      <UButton
        color="primary"
        size="lg"
        target="_blank"
        to="https://github.com/luklus"
        trailing-icon="i-lucide-move-up-right"
        variant="link"
      >
        GitHub
      </UButton>
    </template>

    <div>
      <svg
        class="text-default w-full"
        aria-label="Diagram of a scalable frontend system architecture"
        font-family="'JetBrains Mono',monospace"
        height="250"
        role="img"
        viewBox="0 0 340 250"
        width="340"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-opacity=".22"
          stroke-width="1"
        >
          <path d="M 12 54 H 150" />
          <path d="M 150 54 V 134" />
          <path d="M 150 134 H 328" />
          <path d="M 150 134 V 214" />
          <path d="M 150 214 H 260" />
        </g>

        <g
          fill="none"
          stroke="currentColor"
          stroke-opacity=".6"
          stroke-width="1.3"
          transform="translate(12,32)"
        >
          <rect
            height="12"
            rx="1.5"
            width="14"
            x="-7"
            y="-6"
          />
          <line
            x1="-7"
            x2="7"
            y1="-2.2"
            y2="-2.2"
          />
        </g>
        <circle
          cx="12"
          cy="54"
          fill="currentColor"
          fill-opacity=".85"
          r="4.5"
        />
        <text
          fill="currentColor"
          fill-opacity=".5"
          font-size="11"
          font-weight="500"
          text-anchor="middle"
          x="12"
          y="70"
        >
          ui
        </text>

        <g
          class="stroke-[#007F45] dark:stroke-[#00C16A]"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.3"
          transform="translate(150,112)"
        >
          <path d="M -7 -3 L 0 -6 L 7 -3 L 0 0 Z" />
          <path d="M -7 1 L 0 4 L 7 1" />
        </g>
        <circle
          cx="150"
          cy="134"
          fill="#00C16A"
          r="4.5"
        />
        <text
          class="fill-[#007F45] dark:fill-[#00C16A]"
          font-size="11"
          font-weight="500"
          text-anchor="middle"
          x="150"
          y="150"
        >
          store
        </text>

        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-opacity=".6"
          stroke-width="1.3"
          transform="translate(328,112)"
        >
          <path d="M -2 -5 L -6 0 L -2 5" />
          <path d="M 2 -5 L 6 0 L 2 5" />
        </g>
        <circle
          cx="328"
          cy="134"
          fill="currentColor"
          fill-opacity=".85"
          r="4.5"
        />
        <text
          fill="currentColor"
          fill-opacity=".5"
          font-size="11"
          font-weight="500"
          text-anchor="middle"
          x="328"
          y="150"
        >
          api
        </text>

        <g
          fill="none"
          stroke="currentColor"
          stroke-opacity=".6"
          stroke-width="1.3"
          transform="translate(150,192)"
        >
          <ellipse
            cx="0"
            cy="-4"
            rx="7"
            ry="2.2"
          />
          <path d="M -7 -4 V 3" />
          <path d="M 7 -4 V 3" />
          <path d="M -7 3 Q 0 5.5 7 3" />
        </g>
        <circle
          cx="150"
          cy="214"
          fill="currentColor"
          fill-opacity=".85"
          r="4.5"
        />
        <text
          fill="currentColor"
          fill-opacity=".5"
          font-size="11"
          font-weight="500"
          text-anchor="middle"
          x="150"
          y="230"
        >
          db
        </text>

        <g
          class="stroke-[#007F45] dark:stroke-[#00C16A]"
          transform="translate(260,192)"
        >
          <circle
            class="fill-[#007F45] dark:fill-[#00C16A]"
            cx="0"
            cy="0"
            r="2"
          />
          <circle
            cx="-6"
            cy="-5"
            fill="none"
            r="1.6"
            stroke-width="1.2"
          />
          <circle
            cx="6"
            cy="-5"
            fill="none"
            r="1.6"
            stroke-width="1.2"
          />
          <circle
            cx="0"
            cy="6"
            fill="none"
            r="1.6"
            stroke-width="1.2"
          />
          <line
            stroke-width="1"
            x1="0"
            x2="-6"
            y1="0"
            y2="-5"
          />
          <line
            stroke-width="1"
            x1="0"
            x2="6"
            y1="0"
            y2="-5"
          />
          <line
            stroke-width="1"
            x1="0"
            x2="0"
            y1="0"
            y2="6"
          />
        </g>
        <circle
          cx="260"
          cy="214"
          fill="#00C16A"
          r="4.5"
        />
        <text
          class="fill-[#007F45] dark:fill-[#00C16A]"
          font-size="11"
          font-weight="500"
          text-anchor="middle"
          x="260"
          y="230"
        >
          edge
        </text>
      </svg>
    </div>
  </UPageHero>
</template>
