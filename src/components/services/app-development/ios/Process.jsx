'use client'

import React from 'react'
import { Search, Compass, Code2, ShieldCheck, Rocket } from 'lucide-react'

const processSteps = [
  {
    step: '01',
    icon: Search,
    title: 'Initial Consultation',
    desc: 'We discuss your business goals, target users, application idea, required features, existing systems, and project priorities.',
  },
  {
    step: '02',
    icon: Compass,
    title: 'Strategy & Architecture Planning',
    desc: 'We define the technical approach, user flows, supported devices, integrations, backend requirements, and project scope.',
  },
  {
    step: '03',
    icon: Code2,
    title: 'Design & Development',
    desc: 'We design the experience and build the approved iOS application with regular review points throughout the project.',
  },
  {
    step: '04',
    icon: ShieldCheck,
    title: 'Testing & Quality Assurance',
    desc: 'We test the application across agreed devices, features, integrations, and release requirements.',
  },
  {
    step: '05',
    icon: Rocket,
    title: 'Launch & App Store Deployment',
    desc: 'We prepare the production build, support TestFlight and App Store Connect activities, and move the application toward release.',
  },
]

export default function Process() {
  return (
    <section id="process" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How We Approach an iOS App Build.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A disciplined, end-to-end iOS development workflow connecting business priorities, native Apple architecture, testing, and App Store Connect release.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="relative mt-14 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="group flex flex-col justify-between gap-6 p-7 sm:p-8 transition-colors duration-200 hover:bg-[#18181B] lg:flex-row lg:items-start lg:gap-12"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl md:text-4xl font-medium text-purple-600">
                      {step.step}
                    </span>
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300 max-w-3xl">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 border-t border-white/[0.08] pt-3 lg:mt-0 lg:border-t-0 lg:pt-0 shrink-0">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-purple-400 font-semibold block">
                    {step.step} Milestone
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
