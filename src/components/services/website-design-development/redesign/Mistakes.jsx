'use client'

import React from 'react'

const commonMistakes = [
  {
    title: 'Redesigning Without an Audit',
    description: 'A new design cannot fix problems nobody identified. We audit the existing website before deciding what should change.',
  },
  {
    title: 'Changing URLs Without a Redirect Plan',
    description: 'Changing URLs without mapping their replacements can create broken links and unnecessary loss of search equity.',
  },
  {
    title: 'Removing Valuable Content',
    description: 'Content that looks outdated visually may still generate rankings, traffic, backlinks, or conversions. Content decisions should be based on evidence.',
  },
  {
    title: 'Designing for Desktop First',
    description: 'A polished desktop layout does not guarantee a usable mobile experience. Important interactions need to work across actual screen sizes.',
  },
  {
    title: 'Rebuilding Without Understanding Analytics',
    description: 'Without reviewing existing user behavior, redesign decisions become assumptions rather than evidence-based improvements.',
  },
  {
    title: 'Launching Without Full QA',
    description: 'Broken forms, incorrect canonicals, blocked indexing, missing redirects, tracking failures, and broken links can survive a simple visual review.',
  },
  {
    title: 'Treating Launch as the Finish Line',
    description: 'A redesign still needs monitoring after launch. Search engines need time to process changes, and real users can reveal issues that staging tests may not catch.',
  },
]

export default function Mistakes() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Common Website Redesign{' '}
            <span className="italic text-frame-accent">Mistakes We Help Prevent.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A redesign can look successful in a browser while creating serious problems underneath. Many avoidable failures happen when the existing website is treated as disposable instead of as an asset that needs to be understood first.
          </p>
        </div>

        {/* 7 Mistakes Grid */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {commonMistakes.map((mistake, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between gap-6 p-7 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02] lg:flex-row lg:items-start lg:gap-12"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  Mistake 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {mistake.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {mistake.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
