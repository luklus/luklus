<template>
  <div class="relative flex w-full items-center justify-center p-2 sm:p-4">
    <!-- Ambient technical glow -->
    <div
      class="pointer-events-none absolute -inset-4 rounded-3xl bg-radial from-emerald-500/10 via-transparent to-transparent blur-2xl dark:from-emerald-500/15"
      aria-hidden="true"
    />

    <svg
      class="text-default relative max-h-[300px] w-full max-w-[420px] select-none"
      aria-label="Diagram of application routing resolution and error state"
      font-family="'JetBrains Mono', monospace"
      height="260"
      role="img"
      viewBox="0 0 380 260"
      width="380"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Base circuit / grid tracks -->
      <g
        fill="none"
        stroke="currentColor"
        stroke-opacity=".18"
        stroke-width="1"
      >
        <!-- Client to Router -->
        <path d="M 28 60 H 160" />
        <path d="M 160 60 V 120" />

        <!-- Router to Target (Primary Route attempt) -->
        <path
          d="M 160 120 H 320"
          stroke-dasharray="4 4"
          stroke-opacity=".4"
        />

        <!-- Router to Recovery Pipeline -->
        <path d="M 160 120 V 200" />
        <path d="M 160 200 H 290" />
      </g>

      <!-- Active Recovery Signal Line (Green) -->
      <g
        class="stroke-[#007F45] dark:stroke-[#00C16A]"
        fill="none"
        stroke-linecap="round"
        stroke-width="1.5"
      >
        <path d="M 160 140 V 200 H 280" />
      </g>

      <!-- NODE 1: Client Request -->
      <g
        fill="none"
        stroke="currentColor"
        stroke-opacity=".6"
        stroke-width="1.3"
        transform="translate(28,38)"
      >
        <!-- Browser screen glyph -->
        <rect
          height="13"
          rx="2"
          width="16"
          x="-8"
          y="-6.5"
        />
        <line
          x1="-8"
          x2="8"
          y1="-2"
          y2="-2"
        />
        <circle
          cx="-4.5"
          cy="-4.2"
          fill="currentColor"
          r="0.8"
        />
        <circle
          cx="-2"
          cy="-4.2"
          fill="currentColor"
          r="0.8"
        />
      </g>
      <circle
        cx="28"
        cy="60"
        fill="currentColor"
        fill-opacity=".85"
        r="4.5"
      />
      <text
        fill="currentColor"
        fill-opacity=".6"
        font-size="11"
        font-weight="500"
        text-anchor="middle"
        x="28"
        y="77"
      >
        req:url
      </text>

      <!-- NODE 2: Router Engine -->
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-opacity=".7"
        stroke-width="1.3"
        transform="translate(160,98)"
      >
        <!-- Router / Branch glyph -->
        <path d="M -6 -4 L 0 0 L -6 4" />
        <path d="M 0 0 H 6" />
        <path d="M 6 -3 L 6 3" />
      </g>
      <circle
        cx="160"
        cy="120"
        fill="currentColor"
        fill-opacity=".9"
        r="4.5"
      />
      <text
        fill="currentColor"
        fill-opacity=".6"
        font-size="11"
        font-weight="500"
        text-anchor="middle"
        x="160"
        y="138"
      >
        router
      </text>

      <!-- NODE 3: Broken Route / 404 Node (Amber/Red Accent) -->
      <g
        class="stroke-amber-500 dark:stroke-amber-400"
        fill="none"
        stroke-linecap="round"
        stroke-width="1.4"
        transform="translate(320,98)"
      >
        <!-- Cross / Missing node glyph -->
        <circle
          cx="0"
          cy="0"
          r="8"
          stroke-dasharray="3 2"
        />
        <line
          x1="-3"
          x2="3"
          y1="-3"
          y2="3"
        />
        <line
          x1="3"
          x2="-3"
          y1="-3"
          y2="3"
        />
      </g>
      <circle
        class="fill-amber-500 dark:fill-amber-400"
        cx="320"
        cy="120"
        r="4.5"
      />
      <circle
        class="stroke-amber-500/60 dark:stroke-amber-400/60"
        cx="320"
        cy="120"
        fill="none"
        r="9"
        stroke-dasharray="2 2"
        stroke-width="1"
      />
      <text
        class="fill-amber-600 font-semibold dark:fill-amber-400"
        font-size="11"
        font-weight="600"
        text-anchor="middle"
        x="320"
        y="138"
      >
        null:404
      </text>

      <!-- NODE 4: Fallback / Root Node (Green Accent) -->
      <g
        class="stroke-[#007F45] dark:stroke-[#00C16A]"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.3"
        transform="translate(160,178)"
      >
        <!-- Home / Recovery glyph -->
        <path d="M -6 2 L 0 -4 L 6 2" />
        <path d="M -4 2 V 6 H 4 V 2" />
      </g>
      <circle
        cx="160"
        cy="200"
        fill="#00C16A"
        r="4.5"
      />
      <text
        class="fill-[#007F45] dark:fill-[#00C16A]"
        font-size="11"
        font-weight="600"
        text-anchor="middle"
        x="160"
        y="218"
      >
        root: /
      </text>

      <!-- NODE 5: CV / Overview Alternative Node -->
      <g
        class="stroke-[#007F45] dark:stroke-[#00C16A]"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.3"
        transform="translate(290,178)"
      >
        <!-- Document / CV glyph -->
        <rect
          height="12"
          rx="1"
          width="10"
          x="-5"
          y="-6"
        />
        <line
          x1="-2.5"
          x2="2.5"
          y1="-2.5"
          y2="-2.5"
        />
        <line
          x1="-2.5"
          x2="2.5"
          y1="1"
          y2="1"
        />
      </g>
      <circle
        cx="290"
        cy="200"
        fill="#00C16A"
        r="4.5"
      />
      <text
        class="fill-[#007F45] dark:fill-[#00C16A]"
        font-size="11"
        font-weight="600"
        text-anchor="middle"
        x="290"
        y="218"
      >
        cv: /cv
      </text>
    </svg>
  </div>
</template>
