'use client'

import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Current-Site Audit',
    description: 'We review the existing website across technical performance, UX, content, SEO, analytics, structure, and conversion paths.',
  },
  {
    number: '02',
    title: 'Redesign Strategy & Priorities',
    description: 'We turn the audit findings into a practical plan that separates important problems from improvements that can wait.',
  },
  {
    number: '03',
    title: 'Keep, Change or Rebuild',
    description: 'We identify what should stay, what needs improvement, what should be consolidated, and what requires a deeper technical rebuild.',
  },
  {
    number: '04',
    title: 'UX & Information Architecture',
    description: 'We restructure navigation, page hierarchy, user journeys, and content relationships where the existing structure creates friction.',
  },
  {
    number: '05',
    title: 'Visual Design',
    description: 'We create the new interface around the agreed strategy instead of designing first and figuring out the problems later.',
  },
  {
    number: '06',
    title: 'Development & Migration',
    description: 'The approved design is rebuilt on the existing platform or migrated to a better-suited platform when necessary.',
  },
  {
    number: '07',
    title: 'SEO QA & Pre-Launch Testing',
    description: 'We validate redirects, URLs, metadata, canonicals, structured data, indexability, forms, tracking, mobile behavior, and functionality.',
  },
  {
    number: '08',
    title: 'Launch & Monitoring',
    description: 'We launch the redesigned website and monitor important technical, search, performance, and functionality signals afterward.',
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
            <span className="italic text-frame-accent">Website Redesign.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our process is built around diagnosing before rebuilding, so major changes have a clear reason behind them.
          </p>
        </div>

        {/* 8 Steps Grid */}
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
