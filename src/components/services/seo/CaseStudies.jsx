'use client'

import React from 'react'
import { growthCaseStudies } from '../../../data/growthWork'
import PosterButton from '../../home/PosterButton'
import CaseStudyPortfolioCard from '../../case-studies/CaseStudyPortfolioCard'

const seoCaseStudies = growthCaseStudies.filter((study) => study.category === 'SEO')

export default function CaseStudies() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Verified SEO Work // First-Party Evidence
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SEO Case{' '}
            <span className="italic text-frame-accent">Studies.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Real SEO campaigns with documented starting points, the work performed, and measurable outcomes tracked through first-party search reporting.
          </p>
        </div>

        {/* Case Studies Media Grid (Modality 5) */}
        <div className="grid gap-6 sm:grid-cols-2">
          {seoCaseStudies.map((study, index) => (
            <CaseStudyPortfolioCard key={study.slug} study={study} index={index} />
          ))}
        </div>

        {/* Bottom Callout & Action */}
        <div className="mt-12 flex flex-col gap-8 border-t border-white/[0.08] pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            Each case study explains the starting situation, the SEO work performed, and the measurable outcome reported through tools such as Google Search Console and analytics platforms.
          </p>
          <div className="shrink-0">
            <PosterButton href="/case-studies" variant="outline">
              View All Case Studies
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
