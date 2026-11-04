'use client'

import React from 'react'
import { Check } from 'lucide-react'

const scenarioAPoints = [
  'The project needs advanced custom functionality',
  'Performance and SEO are important',
  'The website combines content with application features',
  'Custom authentication or user roles are required',
  'Multiple systems need to communicate',
  'You are building SaaS or a customer portal',
  'A headless architecture makes sense',
  'The product will evolve significantly over time',
]

const scenarioBPoints = [
  'The project is a straightforward business website',
  'Standard ecommerce functionality is enough',
  'The team needs a simple managed editing environment',
  'Existing platform functionality already solves the requirement',
  'The additional cost of custom development is not justified',
]

export default function WhoFor() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Is Next.js Right for{' '}
            <span className="italic text-frame-accent">Your Project?</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Next.js is powerful, but custom development should not be the default solution for every website or application. We recommend Next.js when the project benefits from greater control over performance, application architecture, integrations, functionality, or long-term development.
          </p>
        </div>

        {/* 2 Scenarios Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Scenario A */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 transition-colors hover:border-white/[0.14]">
            <div>
              <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium text-white">
                Next.js Can Be a Strong Fit When:
              </h3>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {scenarioAPoints.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scenario B */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 transition-colors hover:border-white/[0.14]">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                Scenario B · Alternative Platforms
              </span>
              <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium text-white">
                A Platform May Be Better When:
              </h3>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {scenarioBPoints.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-zinc-500 font-bold">&bull;</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-8 text-xs sm:text-sm italic text-zinc-400">
          Our role is not to sell custom development simply because it is technically advanced. We assess whether it creates enough business value to justify the investment.
        </p>
      </div>
    </section>
  )
}
