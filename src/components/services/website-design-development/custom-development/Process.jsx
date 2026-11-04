'use client'

import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Discovery & Requirements',
    description: 'We understand your business model, users, workflows, existing systems, technical requirements, integrations, and project goals.',
  },
  {
    number: '02',
    title: 'Technical Assessment',
    description: 'We determine whether Next.js and custom development are actually appropriate and define the major technical requirements.',
  },
  {
    number: '03',
    title: 'Architecture & UX Planning',
    description: 'We map user flows, system architecture, data structures, integrations, application components, and key technical dependencies.',
  },
  {
    number: '04',
    title: 'UI/UX Design',
    description: 'We design the interface and reusable components around actual application workflows and user requirements.',
  },
  {
    number: '05',
    title: 'Development & Integration',
    description: 'We build the frontend, backend, database connections, APIs, authentication, integrations, and custom functionality.',
  },
  {
    number: '06',
    title: 'Testing & Optimization',
    description: 'We test functionality, responsiveness, security, performance, accessibility, and critical user workflows.',
  },
  {
    number: '07',
    title: 'Deployment & Launch',
    description: 'We prepare the production environment, deploy the application, complete final checks, and monitor the launch.',
  },
  {
    number: '08',
    title: 'Handover & Ongoing Development',
    description: 'We provide the agreed access, documentation, and guidance, with ongoing development available for future improvements.',
  },
]

export default function Process() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Next.js Development{' '}
            <span className="italic text-frame-accent">Process.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our process is designed to reduce uncertainty before expensive development decisions are made.
          </p>
        </div>

        {/* 8 Steps Grid */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors hover:border-white/[0.14]"
            >
              {/* Watermark Numeral */}
              <span
                className="absolute right-4 top-2 select-none font-mono text-7xl font-light text-white/[0.03] transition-colors group-hover:text-white/[0.06]"
                aria-hidden="true"
              >
                {step.number}
              </span>

              <div className="relative z-10">
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium text-white">
                  {step.title}
                </h3>
              </div>

              <p className="relative z-10 mt-6 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
