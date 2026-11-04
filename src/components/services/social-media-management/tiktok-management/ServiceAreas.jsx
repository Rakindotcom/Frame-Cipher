'use client'

import React from 'react'
import { MapPin, Globe, Check } from 'lucide-react'

const bangladeshAdaptation = [
  'Bangla & professional corporate tone',
  'English language messaging',
  'Natural Banglish where appropriate',
  'Local audience purchasing behavior',
  'Local cultural & celebratory context',
  'Seasonal & festive campaign pacing',
  'Hyper-local promotional offers',
  'Dhaka & nationwide location content',
  'Bangladesh-specific customer questions',
]

const internationalMarkets = [
  'United States',
  'United Kingdom',
  'Australia',
  'Canada',
  'United Arab Emirates',
  'European Union',
]

const internationalAdaptation = [
  'Target-market language & vernacular',
  'Regional industry terminology',
  'Local cultural references & humor',
  'Western & Gulf audience expectations',
  'Local sound & format trends',
  'Timezone-synchronized publishing',
  'Region-specific product positioning',
  'Localized conversion calls to action',
  'International commercial objectives',
]

export default function ServiceAreas() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Regional Delivery · Markets
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            TikTok Management{' '}
            <span className="italic text-frame-accent">Service Areas.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher provides TikTok management for businesses in Bangladesh and international markets, adapted to the cultural norms, humor, and commercial habits of each audience.
          </p>
        </div>

        {/* 2-Column Market Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Market 01: Bangladesh */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Regional Delivery 01 · Domestic Hub
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                  <MapPin className="h-4 w-4" />
                </div>
              </div>

              <h3 className="font-heading text-2xl font-medium tracking-tight text-white">
                TikTok Management in Bangladesh
              </h3>

              <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                For Bangladeshi businesses, we adapt TikTok strategy to local audience habits, Dhaka commercial culture, festive seasons, and natural linguistic nuances.
              </p>

              <div className="mt-8 border-t border-white/[0.06] pt-5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-3">
                  Local Market Capabilities:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-400">
                  {bangladeshAdaptation.map((factor) => (
                    <li key={factor} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-frame-accent shrink-0" />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs text-zinc-400">
              <strong className="text-zinc-200">Delivery Base:</strong> In-house short-form video editors, scriptwriters, and strategists located at Dhaka 1206.
            </div>
          </article>

          {/* Market 02: International */}
          <article className="flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#15121c] p-7 md:p-8 shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Regional Delivery 02 · Global Markets
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-frame-accent">
                  <Globe className="h-4 w-4" />
                </div>
              </div>

              <h3 className="font-heading text-2xl font-medium tracking-tight text-white">
                International TikTok Management
              </h3>

              <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                For businesses targeting global buyers, we adapt content to Western and Gulf consumer expectations rather than applying a single generic content calendar everywhere.
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {internationalMarkets.map((market) => (
                  <span
                    key={market}
                    className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 font-mono text-[10px] text-purple-200"
                  >
                    {market}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-purple-500/20 pt-5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-purple-300 mb-3">
                  International Market Capabilities:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-purple-200/90">
                  {internationalAdaptation.map((factor) => (
                    <li key={factor} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-frame-accent shrink-0" />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-purple-500/20 bg-purple-500/10 p-4 text-xs text-purple-200/90">
              <strong className="text-white">Delivery Model: </strong>
              Asynchronous production sprints, synchronized creative approvals, and cloud-based asset handoffs.
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
