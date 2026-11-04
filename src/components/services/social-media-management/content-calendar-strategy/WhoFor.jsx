'use client'

import React from 'react'
import { Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const audiences = [
  {
    title: 'Multi-Platform Businesses',
    body: 'Businesses managing multiple social platforms that need one coordinated planning system instead of separate, conflicting content schedules.',
  },
  {
    title: 'Ecommerce & Product Brands',
    body: 'Ecommerce businesses using coordinated content planning for product launches, promotions, product education, seasonal campaigns, customer FAQs, and storytelling.',
  },
  {
    title: 'Service Businesses',
    body: 'Service businesses planning educational content, expertise-led posts, case studies, social proof, offers, and lead-generation content around customer journeys.',
  },
  {
    title: 'B2B & Professional Brands',
    body: 'B2B companies and professional service firms coordinating thought leadership, industry insights, case studies, educational content, and corporate news.',
  },
  {
    title: 'Startups & Growing Businesses',
    body: 'Growing businesses needing a repeatable content system before multichannel publishing becomes chaotic, giving the team clear priorities and deadlines.',
  },
  {
    title: 'In-House Marketing Teams',
    body: 'Internal marketing teams using our Setup option to establish a professional framework and master calendar, then executing production themselves.',
  },
  {
    title: 'International Businesses',
    body: 'Businesses targeting multiple countries using coordinated planning to adapt content for different markets while maintaining consistent brand positioning.',
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Operational Fit · 07 Segments
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Who Our Content Calendar &amp; Strategy{' '}
            <span className="italic text-frame-accent">Service Is For.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            The service can be scoped around different platform counts, internal capabilities, and planning horizons.
          </p>
        </div>

        {/* 7 Segments + 8th Consultation Card Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 space-y-4 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    Segment 0{index + 1}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">Business Model</span>
                </div>

                <h3 className="font-heading text-base sm:text-lg font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {audience.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  <AutoLinks currentPath="/services/social-media-management/content-calendar-strategy" allowed={["/services/content-creation", "/services/content-writing/content-strategy"]}>
                    {audience.body}
                  </AutoLinks>
                </p>
              </div>
            </article>
          ))}

          {/* 8th Spotlight Card */}
          <article className="flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#15121C] p-6 space-y-4 shadow-xl shadow-purple-950/20">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-frame-accent border-b border-white/[0.08] pb-3">
                <Sparkles className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-wider text-white">
                  Not Sure Where You Fit?
                </span>
              </div>

              <h4 className="font-heading text-base sm:text-lg font-medium text-white">
                Preliminary Audit &amp; Fit
              </h4>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                The initial cross-platform audit helps us understand your planning situation before recommending an engagement, so you never pay for unnecessary scope.
              </p>
            </div>

            <div className="pt-2">
              <PosterButton
                href="/contact"
                variant="primary"
                size="md"
                className="w-full text-center"
              >
                Discuss Content Planning Needs
              </PosterButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
