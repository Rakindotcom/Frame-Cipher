'use client'

import React from 'react'
import { Clock, CheckCircle2 } from 'lucide-react'

const timelineStages = [
  {
    step: '01',
    phase: 'WEEKS 1–2',
    title: 'Campaign Planning & Setup',
    body: 'Approximately 1–2 weeks, depending on platform mix, creative, tracking access, landing-page requirements, and approval cycles.',
  },
  {
    step: '02',
    phase: 'WEEKS 3–4',
    title: 'Initial Optimization',
    body: 'Typically begins immediately after launch and becomes more informed as conversion data accumulates.',
  },
  {
    step: '03',
    phase: 'MONTH 2+',
    title: 'Ongoing Management',
    body: 'Continues throughout the engagement, with testing, optimization, reporting, and budget decisions based on campaign performance.',
  },
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Paid Advertising{' '}
            <span className="italic text-frame-accent">Timeline.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Paid advertising can launch much faster than SEO, but meaningful optimization still requires enough data to make reliable decisions. A typical engagement may follow this pattern.
          </p>
        </div>

        {/* 2-Column Layout: Left Narrative + Right Chronological Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 space-y-4">
              <div className="flex items-center gap-2 text-frame-accent">
                <Clock className="h-5 w-5" />
                <span className="font-mono text-xs uppercase tracking-wider">Early Traffic vs Validated Economics</span>
              </div>
              <p className="text-sm font-normal leading-relaxed text-zinc-300">
                Early clicks and traffic can appear soon after launch. That does not automatically mean the campaign has proven its economics.
              </p>
              <p className="text-sm font-normal leading-relaxed text-zinc-300">
                We focus on gathering enough relevant data to make better decisions rather than declaring success or failure from the first few days of activity.
              </p>
            </div>
          </div>

          {/* Right Chronological Cards */}
          <div className="lg:col-span-7 space-y-4">
            {timelineStages.map((stage) => (
              <div
                key={stage.step}
                className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
              >
                <div className="space-y-2 flex-1">
                  <h3 className="font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {stage.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
