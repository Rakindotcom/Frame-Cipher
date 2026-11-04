'use client'

import React from 'react'
import { MapPin, Globe, Check } from 'lucide-react'

const marketSections = [
  {
    title: 'SEO Audits for Bangladeshi Businesses',
    icon: MapPin,
    lead: 'We audit websites for Bangladeshi ecommerce brands, service businesses, B2B companies, startups, and established organizations.',
    points: [
      'Technical SEO and mobile performance',
      'Local and national search visibility',
      'Bangladesh-specific keyword targeting (Bangla & English)',
      'Content and local search intent',
      'Local competitor positioning in Dhaka & nationwide',
      'Local conversion tracking (bKash, Nagad, cash-on-delivery)',
      'Ecommerce SEO catalog issues',
      'Website redesign and migration risks',
    ],
    summary: 'Identifies the exact issues limiting organic visibility, traffic quality, leads, or sales in the Bangladesh market.',
  },
  {
    title: 'SEO Audits for International Markets',
    icon: Globe,
    lead: 'Websites targeting international audiences require rigorous market-level analysis for the USA, UK, UAE, Australia, Canada, and Europe.',
    points: [
      'Country-specific keyword targeting & search intent',
      'International competitors & local SERP features',
      'Regional search visibility & crawlability',
      'Localization quality & regional terminology',
      'Country and language architecture (ccTLD vs subfolder)',
      'Hreflang implementation & return tag validation',
      'International internal linking & CDN routing',
      'Market-specific content & entity gaps',
    ],
    summary: 'Determines whether your website is properly structured for global markets without duplicate penalty risks.',
  },
]

export default function Markets() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Geographic Scope // Domestic &amp; Global
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Bangladesh &amp;{' '}
            <span className="italic text-frame-accent">International Markets</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            SEO problems do not look the same in every market. Search behavior, competitors, keyword usage, website expectations, and conversion patterns can vary between Bangladesh and international markets.
          </p>
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
            Framecipher provides SEO audits for businesses in Bangladesh and companies targeting markets such as the USA, UK, UAE, Australia, Canada, and other regions.
          </p>
        </div>

        {/* 2-Column Market Split */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {marketSections.map((mkt, idx) => {
            const Icon = mkt.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors hover:border-white/[0.16] hover:bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-frame-accent border border-white/[0.06] group-hover:bg-frame-accent/10 transition-colors">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-zinc-400">Market 0{idx + 1}</span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl sm:text-2xl font-semibold tracking-tight text-white">
                    {mkt.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                    {mkt.lead}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-4">
                    {mkt.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="font-mono text-[11px] text-zinc-400 leading-relaxed italic">
                    &rarr; {mkt.summary}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
