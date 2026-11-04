'use client'

import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We review your product, audience, business goals, technical context, and the actions users need to complete.',
  },
  {
    number: '02',
    title: 'Research & Flow Mapping',
    description: 'We define user journeys, important task flows, project requirements, and scope before wireframing begins.',
  },
  {
    number: '03',
    title: 'Wireframing & Prototyping',
    description: 'We create low-fidelity wireframes, refine the structure through review, and build interactive prototypes for important journeys.',
  },
  {
    number: '04',
    title: 'Visual Design & Interaction',
    description: 'We turn approved wireframes into high-fidelity interfaces, define interaction patterns, and create reusable components.',
  },
  {
    number: '05',
    title: 'Testing & Refinement',
    description: 'Where included, we test prototypes with real or representative users, review available evidence, and refine the experience based on findings.',
  },
  {
    number: '06',
    title: 'Handoff & Development Support',
    description: 'We organize final design files, specifications, assets, and component references for development and provide implementation support where included.',
  },
]

export default function Process() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            How We Approach a{' '}
            <span className="italic text-frame-accent">UI/UX Design Project.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our process is designed to validate structure and important user decisions before the final visual direction is locked in.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.14]"
            >
              {/* Background Watermark Numeral */}
              <span
                className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-7xl font-bold text-white/[0.03]"
                aria-hidden="true"
              >
                {step.number}
              </span>

              <div className="relative z-10">
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium text-white">
                  {step.title}
                </h3>
              </div>

              <p className="relative z-10 mt-6 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
