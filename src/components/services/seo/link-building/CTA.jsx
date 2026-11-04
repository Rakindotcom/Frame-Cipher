'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'

export default function CTA({ service }) {
  const primaryCta = service?.primaryCta || 'Get Your Off-Page SEO Consultation'

  return (
    <section className="relative isolate overflow-hidden bg-[#09090B] px-4 pt-2 pb-16 sm:px-6 sm:pt-4 sm:pb-20 md:px-8 md:pt-4 md:pb-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-10 md:p-16">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
            Next move // Authority Engineering
          </p>

          {/* Heading beside oversized directional arrow */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Start Building{' '}
              <br className="hidden sm:inline" />
              <span className="italic text-frame-accent">Real Authority.</span>
            </h2>
            <span
              aria-hidden="true"
              className="hidden lg:block select-none font-heading text-7xl xl:text-8xl font-medium leading-none tracking-tight text-white/20 shrink-0 transition-transform duration-300 group-hover:translate-x-3"
            >
              &rarr;
            </span>
          </div>

          <div className="mt-10 grid gap-8 border-t border-white/[0.08] pt-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12">
            <div className="space-y-4 max-w-2xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              <p>
                Your backlink strategy should support the business, not create another list of links that nobody can explain.
              </p>
              <p className="text-zinc-400">
                Framecipher combines backlink research, competitor analysis, manual outreach, content development, digital PR, link reclamation, and transparent monitoring to build off-page authority around genuine opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
              <PosterButton href="/contact">
                {primaryCta} &rarr;
              </PosterButton>
              <PosterButton href="/services/seo" variant="outline">
                Talk to the Framecipher SEO Team &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
