'use client'

import React from 'react'
import { growthCaseStudies } from '../../../data/growthWork'
import CaseStudyPortfolioCard from '../../case-studies/CaseStudyPortfolioCard'
import PosterButton from '../../home/PosterButton'
import { CheckCircle2 } from 'lucide-react'

export default function SeoCaseStudiesSection({
  title = (
    <>
      Verified SEO{' '}
      <span className="italic text-frame-accent">Case Studies.</span>
    </>
  ),
  subtitle = 'Real client campaigns with documented starting points, strategic execution, and verified search visibility tracked through Google Search Console and analytics.',
  eyebrow = 'Verified SEO Portfolio // Empirical Evidence',
  slugs = ['border-locksmiths-local-seo', 'pixc-retouch-global-seo'],
}) {
  // Find matching studies by slug in requested order, or fallback to any SEO case studies
  const studies = slugs
    .map((slug) => growthCaseStudies.find((s) => s.slug === slug))
    .filter(Boolean)

  const displayStudies =
    studies.length > 0
      ? studies
      : growthCaseStudies.filter((s) => s.category === 'SEO').slice(0, 2)

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              {eyebrow}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            {title}
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            {subtitle}
          </p>
        </div>

        {/* Portfolio Cards Grid (2-Column Balanced Display) */}
        <div className="grid gap-6 sm:grid-cols-2">
          {displayStudies.map((study, index) => (
            <CaseStudyPortfolioCard key={study.slug} study={study} index={index} />
          ))}
        </div>

        {/* Bottom Trust & Navigation Bar */}
        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-frame-accent">
              <CheckCircle2 className="h-4 w-4" />
              <span>Documented First-Party Evidence</span>
            </div>
            <p className="text-sm text-zinc-300 max-w-xl">
              Every case study details the baseline audit, technical fixes, keyword mapping, on-page optimization, and verified Search Console growth.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <PosterButton href="/case-studies" variant="outline">
              Explore All Case Studies
            </PosterButton>
            <PosterButton href="/contact" variant="accent">
              Discuss Your SEO Goals
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}

