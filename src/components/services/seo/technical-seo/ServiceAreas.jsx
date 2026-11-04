'use client'

import React from 'react'
import { MapPin, Globe2 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

export default function ServiceAreas() {
  return (
    <section className="relative isolate bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1 text-xs text-zinc-300 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Geographic Scope // Market Architecture
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Bangladesh &{' '}
            <span className="italic text-frame-accent">International</span> Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Framecipher provides technical SEO services for businesses across Bangladesh and international markets.
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
              <span className="font-mono text-xs text-zinc-500">Dhaka & Nationwide</span>
            </div>
            <h3 className="font-heading text-2xl font-medium tracking-tight text-white">
              Bangladesh
            </h3>
            <p className="text-base text-zinc-300 font-normal leading-relaxed">
              We work with businesses targeting customers in Dhaka and across Bangladesh. Technical recommendations can account for mobile-first browsing, local search requirements, website platforms, hosting environments, and the technical needs of Bangladesh-focused businesses.
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
            <p className="text-base text-zinc-300 font-normal leading-relaxed">
              We also support businesses targeting customers in markets including the US, UK, Australia, Canada, and UAE. International technical SEO may require market-specific site structures, hreflang implementation, localized URLs, canonical relationships, international sitemaps, and other technical signals.
            </p>
          </div>
        </div>

        {/* Closing Strategy Banner */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="max-w-3xl text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
            Our approach is based on the markets you want to reach rather than applying one country&apos;s technical assumptions to every website.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Start Technical Audit &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
