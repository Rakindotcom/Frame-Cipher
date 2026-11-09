'use client'

import React from 'react'
import {
  Target,
  Layout,
  Code2,
  Rocket,
  Repeat,
} from 'lucide-react'

const mvpStages = [
  {
    title: 'Idea & Feature Prioritization',
    icon: Target,
    desc: 'We identify the core problem, target audience, and features required for the first usable product.',
  },
  {
    title: 'UX & Product Structure',
    icon: Layout,
    desc: 'We design the essential flows and screens around the main user tasks.',
  },
  {
    title: 'Focused Development',
    icon: Code2,
    desc: 'We build the agreed core functionality without adding unnecessary features that delay validation.',
  },
  {
    title: 'Testing & Launch',
    icon: Rocket,
    desc: 'The MVP is tested and prepared for real-world use so the team can begin collecting feedback.',
  },
  {
    title: 'Iteration',
    icon: Repeat,
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
            MVP App Development for Startups.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Not every product needs its complete feature set on the first release. An MVP focuses on the smallest practical version needed to test the core idea with real users.
          </p>
        </div>

        {/* Modality 2: Architectural 5-Column Divided Band */}
        <div className="grid grid-cols-1 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] sm:grid-cols-2 lg:grid-cols-5 lg:divide-y-0 lg:divide-x shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          {mvpStages.map((stage, i) => {
            const Icon = stage.icon
            return (
              <div
                key={i}
                className="group flex flex-col justify-between p-6 sm:p-7 transition-colors duration-200 hover:bg-[#18181B]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <Icon className="h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums font-semibold">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium text-white transition-colors">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                    {stage.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Takeaway Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            An MVP should be focused, not carelessly incomplete. The goal is to learn from a usable product.
          </p>
        </div>
      </div>
    </section>
  )
}
