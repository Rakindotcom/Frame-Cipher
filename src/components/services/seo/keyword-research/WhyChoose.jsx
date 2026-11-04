'use client'

import React from 'react'
import { Target, Compass, Code2, Globe2 } from 'lucide-react'

const reasons = [
  {
    number: '01',
    icon: Target,
    title: 'Realistic Ranking Potential',
    description:
      'We do not build strategies around thousands of high-volume terms simply because a tool says they have demand. We evaluate the competitive environment, your domain authority, and the actual effort required to compete. The result is a practical, defensible keyword strategy for established and growing websites alike.',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Search Intent Before Search Volume',
    description:
      'Search volume tells you how often a term is queried; it never tells you what the searcher expects. We evaluate live SERP layouts and user intent before assigning page targets, preventing costly situations where world-class content is written for the wrong intent.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'SEO + Content + Development in One Team',
    description:
      'Keyword decisions directly govern URL architecture, faceted navigation, internal linking graphs, and technical template schemas. Framecipher integrates SEO, content writing, and web engineering under one roof so research seamlessly converts into code and copy.',
  },
  {
    number: '04',
    icon: Globe2,
    title: 'Bangladesh & International Research Experience',
    description:
      'Headquartered in Dhaka and active across global markets (US, UK, Australia, Canada, UAE), we adapt research to local, national, multilingual, and international search landscapes instead of blindly projecting Western search assumptions onto every market.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              The Framecipher Advantage
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Why Choose Framecipher for <span className="italic text-frame-accent">Keyword Research</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Keyword research is only valuable when it is rigorously honest about ranking opportunity, anchored in commercial intent, and structured for immediate implementation.
          </p>
        </div>

        {/* 2x2 Grid of Advantage Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518] md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-frame-accent">
                      Advantage {reason.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-zinc-300 transition-colors group-hover:border-frame-accent/30 group-hover:text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
