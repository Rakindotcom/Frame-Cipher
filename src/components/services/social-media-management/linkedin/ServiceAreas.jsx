'use client'

import React from 'react'
import { MapPin, Globe, Check } from 'lucide-react'

const bangladeshFactors = [
  'Dhaka corporate & B2B ecosystems',
  'Local executive voice & corporate positioning',
  'Employer brand & top-tier recruitment in BD',
  'Bilingual English & professional Bengali capabilities',
  'Local media, trade association, & industry resonance',
  'Direct access to Dhaka 1206 production studio',
]

const internationalFactors = [
  'United States (North America B2B & SaaS markets)',
  'United Kingdom (London tech & corporate sectors)',
  'United Arab Emirates (Dubai & GCC trade hubs)',
  'Australia & Canada (Enterprise & service markets)',
  'European Union (Cross-border professional positioning)',
  'Western corporate tone, compliance & data security standards',
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
            LinkedIn Management{' '}
            <span className="italic text-frame-accent">Service Areas.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher provides LinkedIn management for businesses in Bangladesh and international markets, adapted to the professional norms, decision-maker psychology, and commercial context of each region.
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
                LinkedIn Management In Bangladesh
              </h3>

              <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                For Bangladeshi businesses, we adapt LinkedIn strategy to local professional audiences, industries, corporate culture, recruitment priorities, and B2B buying behavior.
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
              <strong className="text-zinc-200">Delivery Base:</strong> In-house B2B strategists, technical copywriters, and ghostwriters located at Dhaka 1206.
            </div>
          </article>

          {/* Market 02: International */}
          <article className="flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#15121c] p-7 md:p-8 shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Regional Delivery 02 · Global B2B Hubs
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-frame-accent">
                  <Globe className="h-4 w-4" />
                </div>
              </div>

              <h3 className="font-heading text-2xl font-medium tracking-tight text-white">
                International LinkedIn Management
              </h3>

              <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                For businesses targeting professional audiences outside Bangladesh (US, UK, UAE, Australia, Canada, Europe), we adapt content, thought leadership, and engagement to Western and Gulf corporate standards rather than treating every audience as a single generic group.
              </p>

              <div className="mt-8 border-t border-purple-500/20 pt-5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-purple-300 mb-3">
                  International Market Capabilities:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-purple-200/90">
                  {internationalFactors.map((factor) => (
                    <li key={factor} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-frame-accent shrink-0" />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-purple-500/20 bg-purple-500/10 p-4 text-xs text-purple-200/90">
              <strong className="text-white">Delivery Model:</strong> Asynchronous collaboration via Slack/Teams, synchronized executive interviews, and weekly sprint reviews.
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
