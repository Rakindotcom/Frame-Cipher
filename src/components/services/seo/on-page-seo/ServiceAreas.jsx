'use client'

import React from 'react'
import { MapPin, Globe2 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const internationalPoints = [
  'Market-specific search intent',
  'Regional terminology',
  'Local spelling and language variations',
  'Location-specific service pages',
  'International keyword mapping',
  'Localized content',
  'Currency and commercial terminology',
  'Internal linking between market-specific pages',
  'Consistency across international content',
]

export default function ServiceAreas() {
  return (
    <section className="relative isolate bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1 text-xs text-zinc-300 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Geographic Scope // Language &amp; Market Alignment
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            On-Page SEO for{' '}
            <span className="italic text-frame-accent">Bangladesh &amp; International</span> Markets
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Search behavior can vary between markets, languages, and audiences. We adapt on-page recommendations to the market a business is actually trying to reach.
          </p>
        </div>

        {/* 2 Geographic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bangladesh */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-frame-accent">
                <MapPin className="h-4 w-4" />
                <span>Domestic Reach</span>
              </div>
              <span className="font-mono text-xs text-zinc-500">Dhaka &amp; Nationwide</span>
            </div>
            <h3 className="font-heading text-2xl font-medium tracking-tight text-white">
              Bangladesh
            </h3>
            <p className="text-base text-zinc-300 font-normal leading-relaxed">
              For Bangladesh-focused businesses, we can account for local search behavior and the language preferences of the target audience.
            </p>
            <p className="text-sm text-zinc-400 font-normal leading-relaxed">
              Depending on the business, that may involve English content, Bangla search patterns, or a combination of both.
            </p>
            <p className="text-sm text-zinc-300 font-normal leading-relaxed border-l-2 border-frame-accent/40 pl-3">
              We also consider local service terminology, geographic relevance, customer expectations, and the way Bangladesh-based users search for products and services.
            </p>
          </div>

          {/* International Markets */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-frame-accent">
                <Globe2 className="h-4 w-4" />
                <span>Global Execution</span>
              </div>
              <span className="font-mono text-xs text-zinc-500">US / UK / AU / CA / UAE</span>
            </div>
            <h3 className="font-heading text-2xl font-medium tracking-tight text-white">
              International Markets
            </h3>
            <p className="text-sm text-zinc-300 font-normal leading-relaxed">
              We support businesses targeting international audiences, including the US, UK, Australia, Canada, and UAE. International on-page SEO can require attention to:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
              {internationalPoints.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent/60 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-400 font-normal leading-relaxed italic border-t border-white/[0.06] pt-3">
              The goal is not to translate the same page mechanically for every market. Content should reflect the language, terminology, search behavior, and intent of the audience being targeted.
            </p>
          </div>
        </div>

        {/* Closing Strategy Banner */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="max-w-3xl text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
            Our approach is based on the search behavior and commercial intent of your target market rather than applying generic country assumptions.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Start an On-Page Review &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
