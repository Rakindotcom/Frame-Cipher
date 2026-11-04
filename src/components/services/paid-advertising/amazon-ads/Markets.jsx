'use client'

import React from 'react'
import { Globe, MapPin, CheckCircle2 } from 'lucide-react'

const regions = [
  {
    title: 'Bangladesh (Hub)',
    featured: true,
    desc: 'Headquartered in Dhaka, we manage international Amazon campaigns for Bangladesh-based export manufacturers, RMG brands, leather goods producers, and private label entrepreneurs.',
    details: [
      'Strategic onboarding & account audit from Dhaka',
      'Direct WhatsApp and local timezone communication',
      'Expert guidance on cross-border logistics and Amazon FBA setup',
      'Dual-currency budgeting and financial alignment',
    ],
  },
  {
    title: 'United States (Amazon.com)',
    desc: 'The largest and most fiercely competitive Amazon marketplace worldwide. We deploy advanced single-keyword campaigns, defensive ASIN targeting, and Sponsored Brands video.',
    details: [
      'High-velocity top-of-search placement bidding',
      'Sponsored Brands Video and Brand Store spotlighting',
      'Amazon DSP programmatic display and connected TV ads',
    ],
  },
  {
    title: 'United Kingdom (Amazon.co.uk)',
    desc: 'A mature marketplace with substantial buying power. We handle localized British English search terminology, VAT-compliant reporting, and seasonal event campaigns.',
    details: [
      'UK localized keyword research and search-term mapping',
      'Prime Day and Black Friday event pacing',
      'Defensive detail page targeting against local brands',
    ],
  },
  {
    title: 'Canada (Amazon.ca)',
    desc: 'A rapidly growing North American marketplace that offers lower CPCs than the US, serving as an ideal expansion ground for brands with existing US inventory.',
    details: [
      'North American Remote Fulfillment (NARF) ad coordination',
      'Bilingual keyword targeting (English and Canadian French)',
      'High-margin product focus with lower bid thresholds',
    ],
  },
  {
    title: 'Australia (Amazon.com.au)',
    desc: 'An expanding market where early entrants establish category dominance with lower advertising costs compared to Western Europe or the US.',
    details: [
      'Early category ranking and BSR acceleration',
      'Sponsored Products and Brands launch campaigns',
      'Targeted search-term harvesting for niche product lines',
    ],
  },
  {
    title: 'UAE & Middle East (Amazon.ae)',
    desc: 'A strategic, high-AOV market for regional and international brands, characterized by high mobile shopping adoption and rapid Prime member growth.',
    details: [
      'English and Arabic keyword search localization',
      'High-AOV luxury, beauty, and electronics focus',
      'Regional holiday and White Friday promotional pacing',
    ],
  },
]

export default function Markets() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Amazon Ads for Bangladesh &amp;{' '}
            <span className="italic text-frame-accent">Global Marketplaces.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Whether you are an exporter based in Dhaka or an international seller targeting the US, UK, Australia, or UAE, we adapt campaign strategy to the local marketplace dynamics, language nuances, and competitive realities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {regions.map((region) => (
            <div
              key={region.title}
              className={`rounded-xl border p-6 flex flex-col justify-between transition-colors duration-300 ${
                region.featured
                  ? 'border-frame-accent bg-[#141218]'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  {region.featured && (
                    <span className="rounded-full bg-frame-accent/10 border border-frame-accent/30 px-2.5 py-0.5 font-mono text-[10px] uppercase font-bold tracking-wider text-frame-accent">
                      Local Agency Hub
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl font-medium text-white mb-2">
                  {region.title}
                </h3>
                <p className="text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                  {region.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                {region.details.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
