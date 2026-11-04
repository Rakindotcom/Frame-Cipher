'use client'

import React from 'react'

const mvpStages = [
  {
    title: 'Idea & Feature Prioritization',
    desc: 'We identify the core problem, target audience, and features required for the first usable product.',
  },
  {
    title: 'UX & Product Structure',
    desc: 'We design the essential flows and screens around the main user tasks.',
  },
  {
    title: 'Focused Development',
    desc: 'We build the agreed core functionality without adding unnecessary features that delay validation.',
  },
  {
    title: 'Testing & Launch',
    desc: 'The MVP is tested and prepared for real-world use so the team can begin collecting feedback.',
  },
  {
    title: 'Iteration',
    desc: 'User feedback can then inform the next development phase instead of committing the entire budget before the product is validated.',
  },
]

export default function MvpStartups() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            MVP App Development{' '}
            <span className="italic text-frame-accent">for Startups.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Not every product needs its complete feature set on the first release. An MVP focuses on the smallest practical version needed to test the core idea with real users.
          </p>
        </div>

        {/* Modality 2: Architectural 5-Column Divided Band */}
        <div className="grid grid-cols-1 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] sm:grid-cols-2 lg:grid-cols-5 lg:divide-y-0 lg:divide-x">
          {mvpStages.map((stage, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-6 sm:p-7 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div>
                <span className="font-mono text-xs text-frame-accent tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium text-white">
                  {stage.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Takeaway Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            An MVP should be focused, not carelessly incomplete. The goal is to learn from a usable product.
          </p>
        </div>
      </div>
    </section>
  )
}
