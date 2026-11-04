'use client'

import React from 'react'
import { Check } from 'lucide-react'

const bangladeshCustomPoints = [
  'Local payment systems',
  'Mobile-first usage patterns',
  'Local business workflows',
  'Market-relevant integrations',
]

const internationalCustomPoints = [
  'Content and user experience per market',
  'Integrations matched to the target market',
  'Operational requirements and technical considerations',
  'Global reach across the US, UK, Australia, Canada & UAE',
]

export default function Markets() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Custom / Next.js Development for{' '}
            <span className="italic text-frame-accent">Bangladesh &amp; International Businesses.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher is based in Dhaka and works with businesses in Bangladesh as well as clients serving international markets.
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Domestic Ecosystem */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 transition-colors hover:border-white/[0.14]">
            <div>
              <h3 className="mt-4 font-heading text-2xl font-medium text-white">
                For Bangladesh-Based Projects
              </h3>
              <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                We consider:
              </p>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {bangladeshCustomPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Global Applications */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 transition-colors hover:border-white/[0.14]">
            <div>
              <h3 className="mt-4 font-heading text-2xl font-medium text-white">
                For International Projects
              </h3>
              <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                We adapt:
              </p>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {internationalCustomPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-8 text-xs sm:text-sm text-zinc-400">
          The technical approach remains project-specific rather than using one fixed architecture for every client.
        </p>
      </div>
    </section>
  )
}
