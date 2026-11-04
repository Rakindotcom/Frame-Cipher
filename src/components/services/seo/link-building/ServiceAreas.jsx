'use client'

import React from 'react'
import { MapPin, Globe, CheckCircle2 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const bdFactors = [
  'Bangladeshi business context',
  'Local industry websites',
  'Relevant regional publications',
  'Local directory opportunities',
  'Bangla & English content environments',
  'Customer geography across divisions',
  'Industry-specific professional references',
  'International reach for export-oriented businesses',
]

const intlFactors = [
  'Target country market dynamics (US, UK, CA, AU, UAE)',
  'Customer location and local trust signals',
  'Regional terminology and dialect alignment',
  'Tier-1 industry & sector publications',
  'Market-specific digital media ecosystems',
  'Local business entity references',
  'Geographic audience intent screening',
  'International thought-leadership opportunities',
]

export default function ServiceAreas() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Geographic Scope
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Off-Page SEO for{' '}
            <span className="italic text-frame-accent">Bangladesh &amp; International Markets</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Relevant publications and industry ecosystems differ meaningfully by market. We adapt prospecting and outreach to the actual regions and audiences your business serves.
          </p>
        </div>

        {/* 2 Regional Columns */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Bangladesh Column */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-frame-accent/15 text-frame-accent border border-frame-accent/30">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    Domestic Delivery
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                    Bangladesh Market
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                For Bangladeshi businesses, off-page SEO encompasses relevant local publications, trade bodies, business directories, regional media, and niche websites. Local citation work is handled meticulously so listings remain accurate rather than becoming a mass-submission exercise.
              </p>

              <div className="mt-6 space-y-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Key Focus Areas:
                </span>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {bdFactors.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* International Markets Column */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                    Global Reach
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                    International Markets
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                For businesses targeting the US, UK, Australia, Canada, or UAE, publisher selection transforms with each territory. We evaluate audience demographics, regional editorial standards, and industry publications rather than attempting to translate a Bangladesh publisher list.
              </p>

              <div className="mt-6 space-y-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                  Key Focus Areas:
                </span>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {intlFactors.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="max-w-2xl text-sm sm:text-base text-zinc-300 leading-relaxed">
            Need outreach tailored specifically to your customer geography? We build custom publisher lists reflecting the exact media ecosystem of your target market.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Get Free Consultation &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
