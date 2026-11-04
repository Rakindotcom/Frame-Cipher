'use client'

import React from 'react'
import {
  FileText,
  AlertCircle,
  Cpu,
  Layers,
  Rocket,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const caseStudyPillars = [
  {
    icon: FileText,
    num: '01',
    title: 'Project Overview',
    desc: 'Explain what the product does, who it serves, and which platforms were supported across iOS and Android.',
  },
  {
    icon: AlertCircle,
    num: '02',
    title: 'Business Challenge',
    desc: 'Describe the problem, operational workflow, customer need, or business goal that led to the cross-platform project.',
  },
  {
    icon: Cpu,
    num: '03',
    title: 'Framework & Architecture',
    desc: 'Show whether the project used Flutter, React Native, or a combination of shared application logic and platform-specific native modules.',
  },
  {
    icon: Layers,
    num: '04',
    title: 'Key Features',
    desc: 'Highlight the most important product features, payment gateways, live tracking, push notifications, and hardware integrations.',
  },
  {
    icon: Rocket,
    num: '05',
    title: 'Development & Testing',
    desc: 'Explain how the application moved from planning and design through dual-platform development, physical device testing, and dual-store release preparation.',
  },
  {
    icon: TrendingUp,
    num: '06',
    title: 'Measurable Outcome',
    desc: 'Use only verified results such as launch status, user adoption, operational improvements, conversion changes, or client-approved metrics.',
  },
]

export default function CaseStudies() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cross-Platform App Development{' '}
            <span className="italic text-frame-accent">Portfolio &amp; Case Studies.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Real project evidence should show what the team actually builds. Only genuine Framecipher projects, screenshots, links, and measurable outcomes.
          </p>
        </div>

        {/* 6 Dimension Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudyPillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors hover:border-white/[0.16]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.02] text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4 flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Dual Store Verified Protocol</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Evidence Commitment Callout */}
        <div className="mt-12 rounded-xl border border-white/[0.06] bg-[#121214] p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-frame-accent uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4 text-frame-accent" />
              <span>Authentic Engineering Standard</span>
            </div>
            <h4 className="font-heading text-lg sm:text-xl font-medium text-white">
              Want to see our live cross-platform apps in production?
            </h4>
            <p className="text-xs sm:text-sm font-normal text-zinc-400">
              We provide private walkthroughs of our live Flutter and React Native builds across Google Play and Apple TestFlight during your initial consultation.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="accent">
              Request Live App Demo
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}

