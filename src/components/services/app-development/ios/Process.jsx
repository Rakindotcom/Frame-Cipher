'use client'

import React from 'react'

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    desc: 'We discuss your business goals, target users, application idea, required features, existing systems, and project priorities.',
  },
  {
    step: '02',
    title: 'Strategy & Architecture Planning',
    desc: 'We define the technical approach, user flows, supported devices, integrations, backend requirements, and project scope.',
  },
  {
    step: '03',
    title: 'Design & Development',
    desc: 'We design the experience and build the approved iOS application with regular review points throughout the project.',
  },
  {
    step: '04',
    title: 'Testing & Quality Assurance',
    desc: 'We test the application across agreed devices, features, integrations, and release requirements.',
  },
  {
    step: '05',
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
            How We Approach an{' '}
            <span className="italic text-frame-accent">iOS App Build.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A disciplined, end-to-end iOS development workflow connecting business priorities, native Apple architecture, testing, and App Store Connect release.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="mt-14 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between gap-6 p-7 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02] lg:flex-row lg:items-start lg:gap-12"
            >
              <div>
                <span className="font-mono text-3xl md:text-4xl font-medium text-frame-accent">
                  {step.step}
                </span>
                <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                  {step.step} Milestone
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
