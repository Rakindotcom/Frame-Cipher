'use client'

import React from 'react'
import { Check, Globe, MapPin, Building, Compass } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const bangladeshFactors = [
  'Local seasonal & Eid campaigns',
  'Bangladesh-specific pricing & offers',
  'Bangla & English blended copy',
  'Local customer question handling',
  'Local creator & influencer collaborations',
  'Dhaka, Chittagong & regional campaigns',
  'Bangladeshi consumer shopping behavior',
]

const internationalFactors = [
  'In-depth regional audience research',
  'Market-specific content themes & angles',
  'Localized brand messaging & tone',
  'Language & phrasing considerations',
  'Cultural context & holidays (US, UK, UAE, etc.)',
  'Timezone-synchronized publishing schedules',
  'International competitor benchmarking',
  'Global short-form video & audio trends',
  'International creator & UGC sourcing',
  'Multi-country campaign rollout planning',
]

export default function ServiceAreas() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Regional Delivery · Service Areas
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Instagram Management{' '}
            <span className="italic text-frame-accent">Service Areas.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher provides Instagram management for businesses in Bangladesh and international markets, built around localized audience intent and cultural relevance.
          </p>
        </div>

        {/* 2-Column Market Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Market 01: Bangladesh */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Regional Delivery 01 · Local Hub
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-purple-400">
                  <MapPin className="h-4 w-4" />
                </div>
              </div>

              <h3 className="font-heading text-2xl font-medium tracking-tight text-white">
                Instagram Management In Bangladesh
              </h3>

              <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                For Bangladeshi businesses, we adapt Instagram planning to local audiences, customer behavior, language preferences, cultural context, seasonal campaigns, and market-specific opportunities. Depending on the brand, content is crafted in English, Bangla, or an authentic blend that resonates naturally with Bangladeshi consumers.
              </p>

              <div className="mt-8 border-t border-white/[0.06] pt-5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-3">
                  Local Market Capabilities:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-400">
                  {bangladeshFactors.map((factor) => (
                    <li key={factor} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-frame-accent shrink-0" />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs text-zinc-400">
              <strong className="text-zinc-200">Delivery Base:</strong> In-house studio, production, and strategist team located at Matikata ECB Chattar, Dhaka 1206.
            </div>
          </article>

          {/* Market 02: International */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Regional Delivery 02 · Global Markets
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-purple-400">
                  <Globe className="h-4 w-4" />
                </div>
              </div>

              <h3 className="font-heading text-2xl font-medium tracking-tight text-white">
                International Instagram Management
              </h3>

              <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                For brands targeting international markets (US, UK, UAE, Australia, Canada, Europe), we conduct deep research into local consumer expectations, competitors, language nuances, and timezones. We build a disciplined content system calibrated to Western and Gulf digital landscapes rather than simply recycling domestic material.
              </p>

              <div className="mt-8 border-t border-white/[0.06] pt-5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-3">
                  International Market Capabilities:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-400">
                  {internationalFactors.map((factor) => (
                    <li key={factor} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-frame-accent shrink-0" />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs text-zinc-400">
              <strong className="text-zinc-200">Operating Model:</strong> Asynchronous collaboration via Slack/Teams, scheduled timezone overlaps, and weekly sprint reporting.
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
