'use client'

import React from 'react'
import { MapPin, Globe, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const bangladeshPlanning = [
  'Local campaigns & commercial seasons',
  'Audience behavior & consumption habits',
  'Seasonal & festive opportunities (Eid, Puja, Pohela Boishakh)',
  'Business priorities & sales peaks',
  'Bangla-English communication & code-switching',
]

const internationalMarkets = [
  'United States',
  'United Kingdom',
  'Australia',
  'Canada',
  'United Arab Emirates',
  'Other locations worldwide',
]

export default function ServiceAreas() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Regional Delivery · Bangladesh &amp; Global
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Content Calendar &amp; Strategy{' '}
            <span className="italic text-frame-accent">Service Areas.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Framecipher is based in Dhaka and provides Content Calendar &amp; Strategy Services for businesses across Bangladesh and international markets.
          </p>
        </div>

        {/* 2 Regional Delivery Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Bangladesh Card */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Domestic Operations · Bangladesh
                </span>
                <MapPin className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                Content Strategy in Bangladesh
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                For Bangladeshi businesses, our planning accounts for regional nuance, audience behavior, and commercial peak seasons:
              </p>

              <div className="space-y-2 pt-1">
                {bangladeshPlanning.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">Local Cultural Relevance:</strong>
              We align publishing calendars with local buying cycles, cultural tone, and platform preferences across Dhaka and major commercial hubs.
            </div>
          </article>

          {/* International Markets Card */}
          <article className="flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/50 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Cross-Border Delivery · Global
                </span>
                <Globe className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                International Content Strategy
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                We manage multi-platform planning for brands targeting mature English-speaking and GCC markets:
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {internationalMarkets.map((market) => (
                  <span
                    key={market}
                    className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-frame-accent"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">Global Campaign Precision:</strong>
              For international campaigns, content planning accounts for time zones, local customer journeys, tone expectations, and cross-channel publishing schedules while preserving your core brand positioning.
            </div>
          </article>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-1 max-w-3xl">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Market-By-Market Adaptation
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Content planning is adapted market by market rather than applying one generic calendar everywhere.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Discuss Your Market &amp; Content Goals
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
