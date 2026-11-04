'use client'

import React from 'react'
import { MapPin, Globe, CheckCircle2 } from 'lucide-react'
import PosterButton from '../../home/PosterButton'

export default function ServiceAreas() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               GEOGRAPHIC REACH 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Social Media Management Services in{' '}
            <span className="italic text-[#A855F7]">Bangladesh &amp; Worldwide.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Our approach considers the audience and market instead of applying one regional content style everywhere.
          </p>
        </div>

        {/* 2 Regional Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Bangladesh Focus */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-9 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                  Domestic Market
                </span>
                <MapPin className="h-5 w-5 text-[#A855F7]" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white leading-snug">
                Bangladesh &amp; Local Markets
              </h3>

              <p className="text-sm font-normal text-zinc-300 leading-relaxed">
                Framecipher provides social media management for businesses across Bangladesh, including Dhaka and other major markets.
              </p>

              <p className="text-xs sm:text-sm font-normal text-zinc-400 leading-relaxed">
                For Bangladesh-focused businesses, we can support Bangla, English, or bilingual content depending on the audience and brand strategy.
              </p>

              <ul className="space-y-2.5 pt-2 border-t border-white/[0.06] text-xs font-mono text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A855F7] shrink-0 mt-0.5" />
                  <span>Platform-specific strategy for Bangladesh audience behavior</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A855F7] shrink-0 mt-0.5" />
                  <span>Bangla, English, or bilingual content creation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A855F7] shrink-0 mt-0.5" />
                  <span>Local discovery, customer service, and community engagement</span>
                </li>
              </ul>
            </div>
          </div>

          {/* International Focus */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-9 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                  Global Delivery
                </span>
                <Globe className="h-5 w-5 text-[#A855F7]" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white leading-snug">
                International Markets
              </h3>

              <p className="text-sm font-normal text-zinc-300 leading-relaxed">
                We also work with international clients across the US, UK, Australia, Canada, UAE, and other markets.
              </p>

              <p className="text-xs sm:text-sm font-normal text-zinc-400 leading-relaxed">
                For international businesses, content can be planned around market-specific audiences, cultural context, language, and platform behavior.
              </p>

              <ul className="space-y-2.5 pt-2 border-t border-white/[0.06] text-xs font-mono text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A855F7] shrink-0 mt-0.5" />
                  <span>Market-specific cultural context and audience expectations</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A855F7] shrink-0 mt-0.5" />
                  <span>Nuanced language and platform usage per territory</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A855F7] shrink-0 mt-0.5" />
                  <span>Zero generic copy — one regional style is never forced everywhere</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Free Consultation Banner */}
        <div className="flex flex-col gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
              Audience-Centric Strategy
            </span>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Our approach considers the audience and market instead of applying one regional content style everywhere.
            </p>
          </div>
          <PosterButton href="/contact" variant="accent" className="shrink-0">
            Get Your Free Social Audit
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
