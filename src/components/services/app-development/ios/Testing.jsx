'use client'

import React from 'react'
import {
  CheckCircle2,
  Smartphone,
  Layers,
  Zap,
  RotateCcw,
  Rocket,
} from 'lucide-react'

const testingStages = [
  {
    icon: CheckCircle2,
    title: 'Functional Testing',
    desc: 'We verify authentication, navigation, forms, business rules, user flows, notifications, and core application behavior.',
  },
  {
    icon: Smartphone,
    title: 'Device Testing',
    desc: 'Supported iPhone and iPad configurations are tested according to the agreed device and iOS version scope.',
  },
  {
    icon: Layers,
    title: 'Integration Testing',
    desc: 'We test APIs, payments, authentication services, maps, notifications, analytics, and other connected systems.',
  },
  {
    icon: Zap,
    title: 'Performance Testing',
    desc: 'We review loading states, API behavior, memory-sensitive screens, and common performance issues.',
  },
  {
    icon: RotateCcw,
    title: 'Regression Testing',
    desc: 'After major fixes or feature updates, affected workflows are tested again to reduce release-related problems.',
  },
  {
    icon: Rocket,
    title: 'Pre-Release Testing',
    desc: 'The application is reviewed against the agreed scope before the production build is prepared.',
  },
]

export default function Testing() {
  return (
    <section id="testing" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            iOS App Testing &amp; Quality Assurance.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Testing covers more than checking whether each button works. We test edge cases, network disruptions, background state restoration, and multi-device ergonomics.
          </p>
        </div>

        {/* 6 QA Phase Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testingStages.map((stage, i) => {
            const Icon = stage.icon
            return (
              <div
                key={i}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-purple-600 font-semibold">
                      0{i + 1}
                    </span>
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
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
