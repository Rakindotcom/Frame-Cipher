'use client'

import React from 'react'
import {
  CheckCircle2,
  Smartphone,
  Zap,
  Server,
  Users,
  Repeat,
  ShieldCheck,
} from 'lucide-react'

const testingStages = [
  {
    title: 'Functional Testing',
    icon: CheckCircle2,
    desc: 'Checking features and important workflows against the approved requirements.',
  },
  {
    title: 'Device & OS Testing',
    icon: Smartphone,
    desc: 'Testing supported devices and operating-system versions relevant to the project.',
  },
  {
    title: 'Performance Testing',
    icon: Zap,
    desc: 'Reviewing loading, responsiveness, API behavior, and other performance concerns.',
  },
  {
    title: 'Integration Testing',
    icon: Server,
    desc: 'Testing payments, APIs, notifications, maps, authentication, and other connected systems.',
  },
  {
    title: 'Usability Testing',
    icon: Users,
    desc: 'Reviewing important journeys and interface behavior to identify friction before release.',
  },
  {
    title: 'Regression Testing',
    icon: Repeat,
    desc: 'Checking previously completed features after major changes or new development.',
  },
  {
    title: 'Pre-Release Testing',
    icon: ShieldCheck,
    desc: 'Performing final checks on the production-ready build before store submission or deployment.',
  },
]

export default function Testing() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            App Testing &amp; Quality Assurance.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Testing is performed throughout development rather than saved for the final stage.
          </p>
        </div>

        {/* Modality 4: Elevated Surface Card Grid with Top Laser Sheen */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testingStages.map((stage, i) => {
            const Icon = stage.icon
            return (
              <div
                key={i}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-200 hover:border-white/[0.18] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <Icon className="h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums font-semibold">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium text-white transition-colors">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                    {stage.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
