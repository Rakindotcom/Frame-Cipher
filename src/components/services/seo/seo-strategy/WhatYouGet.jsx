'use client'

import React from 'react'
import {
  Compass,
  UserCheck,
  FileCheck2,
  GraduationCap,
  RefreshCw,
  Sliders,
} from 'lucide-react'

const deliverables = [
  {
    number: '01',
    icon: Compass,
    title: 'SEO Strategy Development',
    description:
      'A custom, sequenced roadmap built around your verified business targets, internal bandwidth, and commercial focus—never an abstract best-practices template.',
  },
  {
    number: '02',
    icon: UserCheck,
    title: 'Fractional SEO Leadership',
    description:
      'Ongoing high-level strategic oversight and team direction without the excessive overhead, equity, or commitment of a full-time in-house executive hire.',
  },
  {
    number: '03',
    icon: FileCheck2,
    title: 'Audit-to-Roadmap Translation',
    description:
      'Raw diagnostic findings and crawl errors transformed into a prioritized, resourced, and practically executable 30/60/90-day action plan.',
  },
  {
    number: '04',
    icon: GraduationCap,
    title: 'Team Training & Enablement',
    description:
      'Hands-on workshops, custom SOP documentation, and workflow guardrails that build enduring internal competence rather than indefinite agency dependence.',
  },
  {
    number: '05',
    icon: RefreshCw,
    title: 'Ongoing Strategic Advisory',
    description:
      'Structured quarterly reviews and ad-hoc strategy consulting to ensure your roadmap continually adapts as algorithms evolve and business goals expand.',
  },
  {
    number: '06',
    icon: Sliders,
    title: 'Flexible Engagement Models',
    description:
      'Project-based roadmap creation, fractional monthly advisory, hybrid collaborative sprints, or full transition to execution—shaped to your exact needs.',
  },
]

export default function WhatYouGet() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
              Core Deliverables
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            What You Get With <span className="italic text-frame-accent">Framecipher</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Every consulting engagement is engineered so your internal developers, content creators, and leadership walk away with unambiguous direction they can actually act on.
          </p>
        </div>

        {/* 3-Column Grid of Deliverable Surface Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518] md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-frame-accent">
                      {item.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-zinc-300 transition-colors group-hover:border-frame-accent/30 group-hover:text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                    {item.description}
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
