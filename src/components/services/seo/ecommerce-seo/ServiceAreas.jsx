'use client'

import React from 'react'
import { MapPin, Globe, CheckCircle2 } from 'lucide-react'

const regions = [
  {
    name: 'Bangladesh Market',
    location: 'Dhaka, Chattogram, Sylhet & Nationwide',
    description: 'Targeted for domestic online shoppers, tailored to local search query patterns in Bangla and English, mobile-first indexing, and localized checkout ecosystems (bKash, Nagad, cash-on-delivery).',
    badges: ['Bangla Query Intent', 'Mobile-First SERPs', 'Local Payment Signals'],
  },
  {
    name: 'North America',
    location: 'United States & Canada',
    description: 'High-competition commercial search optimization, state-level catalog targeting, multi-warehouse shipping schema, and Google Merchant Center product feed alignment for US/Canadian markets.',
    badges: ['High-Intent US SERPs', 'CAD / USD Feeds', 'Free Shipping Schema'],
  },
  {
    name: 'United Kingdom & Europe',
    location: 'London, Manchester & Continental Europe',
    description: 'Regional intent mapping, currency localization (GBP / EUR), VAT-inclusive price structuring, and GDPR-compliant technical architecture.',
    badges: ['GBP / EUR Currency', 'Regional Hreflang', 'UK Commercial Queries'],
  },
  {
    name: 'Middle East & Australia',
    location: 'UAE (Dubai, Abu Dhabi), Sydney, Melbourne',
    description: 'Cross-border ecommerce architectures, bilingual Arabic-English structured data, AUD and AED local pricing signals, and international CDN performance optimization.',
    badges: ['Bilingual Arabic/English', 'AUD & AED Pricing', 'Ultra-Low Latency CDN'],
  },
]

export default function ServiceAreas() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Geographic Coverage // Domestic &amp; Global
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Markets We Support for{' '}
            <span className="italic text-frame-accent">Ecommerce SEO</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            Framecipher optimizes stores in Dhaka and clients across the US, UK, Australia, Canada, and UAE, built around the search terms people actually use right before they buy.
          </p>
        </div>

        {/* 4 Regions Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {regions.map((reg, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors hover:border-white/[0.16] hover:bg-[#151518]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-frame-accent border border-white/[0.06] group-hover:bg-frame-accent/10 transition-colors">
                    {idx === 0 ? <MapPin className="h-5 w-5" /> : <Globe className="h-5 w-5" />}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">Territory 0{idx + 1}</span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-white">
                  {reg.name}
                </h3>

                <p className="mt-1 font-mono text-xs text-frame-accent">
                  {reg.location}
                </p>

                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {reg.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-4">
                  {reg.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="inline-flex items-center gap-1 rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-zinc-300"
                    >
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
