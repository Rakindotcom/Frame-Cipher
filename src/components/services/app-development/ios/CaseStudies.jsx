'use client'

import React from 'react'
import {
  FileText,
  AlertCircle,
  Cpu,
  Rocket,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const caseStudyPillars = [
  {
    icon: FileText,
    num: '01',
    title: 'Project Overview',
    desc: 'Explain the product, target users, business model, and platforms involved.',
  },
  {
    icon: AlertCircle,
    num: '02',
    title: 'Business Challenge',
    desc: 'Describe the problem the application needed to solve before development began.',
  },
  {
    icon: Cpu,
    num: '03',
    title: 'Product & Technical Solution',
    desc: 'Show the important features, integrations, architecture, and iOS-specific decisions used in the project.',
  },
  {
    icon: Rocket,
    num: '04',
    title: 'Development & Release',
    desc: 'Explain how the application moved from planning and design through development, testing, and release.',
  },
  {
    icon: TrendingUp,
    num: '05',
    title: 'Measurable Outcome',
    desc: 'Use verified results such as launch status, user adoption, conversion changes, operational improvements, or other client-approved metrics.',
  },
]

export default function CaseStudies() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            iOS App Development Portfolio{' '}
            <span className="italic text-frame-accent">&amp; Case Studies.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Show what we have actually built rather than relying only on service descriptions. We follow a rigorous, documented process for every iOS case study:
          </p>
        </div>

        {/* 5 Core Case Study Structural Pillars */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {caseStudyPillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.16]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                      {pillar.num}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-500/30 bg-frame-accent/10 text-frame-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Genuine Projects Policy Note */}
        <div className="mt-10 rounded-xl border border-white/[0.06] bg-[#121214] p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-300 font-mono">
            <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-white font-medium">Portfolio Integrity Standard:</strong> Only publish genuine Framecipher projects, screenshots, links, and verified results.
            </span>
          </div>
        </div>

        {/* Confidential Case Brief Consultation Card */}
        <div className="mt-6 rounded-xl border border-purple-500/20 bg-gradient-to-r from-[#161224] via-[#121214] to-[#121214] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
<h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
              Request Verified iOS Case Studies &amp; TestFlight Demos
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              To protect client proprietary logic, full system architectures and live TestFlight staging links are presented under standard mutual NDA during technical consultation.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <PosterButton href="/contact" variant="accent">
              Request iOS Case Studies
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
