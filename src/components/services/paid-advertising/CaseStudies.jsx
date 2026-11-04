'use client'

import React from 'react'
import { growthCaseStudies } from '../../../data/growthWork'
import CaseStudyPortfolioCard from '../../case-studies/CaseStudyPortfolioCard'
import PosterButton from '../../home/PosterButton'
import { CheckCircle2 } from 'lucide-react'

const paidAdsCaseStudies = growthCaseStudies.filter((study) => study.category === 'Paid Ads')

export default function CaseStudies() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Paid Advertising Results &amp;{' '}
            <span className="italic text-frame-accent">Case Studies.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Real paid campaigns with documented starting points, the work performed, and measurable outcomes tracked through platform and analytics reporting.
          </p>
        </div>

        {/* Case Studies Media Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {paidAdsCaseStudies.map((study, index) => (
            <CaseStudyPortfolioCard key={study.slug} study={study} index={index} />
          ))}
        </div>

        {/* Bottom Callout & Action Bar */}
        <div className="mt-12 flex flex-col gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-frame-accent">
              <CheckCircle2 className="h-4 w-4" />
              <span>Attribution &amp; Spend Transparency</span>
            </div>
            <p className="text-sm text-zinc-300 max-w-xl font-normal leading-relaxed">
              Each case study explains the starting situation, the campaign structure, the optimization decisions, and the measurable outcome reported through platform and analytics data.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <PosterButton href="/case-studies" variant="outline">
              View All Case Studies &rarr;
            </PosterButton>
            <PosterButton href="/contact" variant="accent">
              Get Your Free Ad Audit &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
