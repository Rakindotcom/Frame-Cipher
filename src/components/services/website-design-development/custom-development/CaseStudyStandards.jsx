'use client'

import React from 'react'
import { Check } from 'lucide-react'

const portfolioPillars = [
  {
    title: 'Project Overview',
    desc: 'The business, industry, problem, and project objective.',
  },
  {
    title: 'Technical Approach',
    desc: 'The Next.js architecture, frontend approach, backend requirements, integrations, and other relevant technologies.',
  },
  {
    title: 'Key Functionality',
    desc: 'Authentication, customer dashboards, admin systems, APIs, ecommerce, CMS, custom workflows, and third-party integrations.',
  },
  {
    title: 'Project Visuals',
    desc: 'Real application screens, dashboards, responsive interfaces, and important user flows.',
  },
  {
    title: 'Verified Outcomes',
    desc: 'Where project data is available, measurable results such as performance improvements, workflow improvements, conversion changes, or product usage.',
  },
]

const keyFunctionalityList = [
  'Authentication & Role-Based Access',
  'Customer Dashboards & Portals',
  'Admin Management Systems',
  'Custom REST & GraphQL APIs',
  'Headless Ecommerce Architecture',
  'Decoupled Headless CMS Workflows',
  'Complex Business Logic Engines',
  'Third-Party & ERP Integrations',
]

export default function CaseStudyStandards() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            What Each Custom{' '}
            <span className="italic text-frame-accent">Case Study Highlights.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our portfolio demonstrates how custom development solved real business bottlenecks with architectural rigor rather than simply displaying attractive interfaces.
          </p>
        </div>

        {/* 5 Highlights Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {portfolioPillars.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  Highlight 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Functionality Demonstrated */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10">
          <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
            Architectural Capabilities Demonstrated
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {keyFunctionalityList.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5 transition-colors hover:border-white/[0.14]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-white">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm italic text-zinc-400 border-t border-white/[0.08] pt-4">
            We only publish outcomes that can be supported by actual project data.
          </p>
        </div>
      </div>
    </section>
  )
}
