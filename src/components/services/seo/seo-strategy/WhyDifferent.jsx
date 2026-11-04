'use client'

import React from 'react'
import { Users2, ShieldCheck, Globe, Sparkles } from 'lucide-react'

const differences = [
  {
    step: '01',
    icon: Users2,
    title: 'One In-House Team',
    description:
      'Strategy advice comes directly from practitioners who also execute the work themselves—not junior account managers or abstract slide deck consultants disconnected from what implementation actually takes in code and content.',
  },
  {
    step: '02',
    icon: ShieldCheck,
    title: "Honest About What's Realistic",
    description:
      "We never hand over a theoretical playbook that assumes resources you've told us you don't have. Every roadmap is calibrated around your verified internal capacity, developer backlog, and realistic business timelines.",
  },
  {
    step: '03',
    icon: Globe,
    title: 'Local & International Strategic Experience',
    description:
      'Headquartered in Dhaka with active client advisory footprints across Bangladesh, the US, UK, Australia, Canada, and the UAE. We understand both local Bangladeshi market economics and Tier-1 international competition.',
  },
  {
    step: '04',
    icon: Sparkles,
    title: 'No Pressure Toward Full Execution',
    description:
      "Strategy is a genuine, standalone service here—never an aggressive top-of-funnel sales pitch designed to force you into an oversized execution retainer that your team never asked for or needed.",
  },
]

export default function WhyDifferent() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              The Framecipher Difference
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Why We&apos;re <span className="italic text-frame-accent">Different</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Strategic SEO advice only delivers ROI when it genuinely respects the internal team and real-world operational constraints tasked with executing it.
          </p>
        </div>

        {/* 2x2 Grid of Differentiator Surface Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {differences.map((diff) => {
            const Icon = diff.icon
            return (
              <div
                key={diff.step}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518] md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-frame-accent uppercase">
                      Pillar {diff.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-zinc-300 transition-colors group-hover:border-frame-accent/30 group-hover:text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    {diff.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                    {diff.description}
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
