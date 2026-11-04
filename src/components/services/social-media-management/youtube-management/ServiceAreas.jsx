'use client'

import React from 'react'
import { MapPin, Globe, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const bangladeshCities = [
  'Dhaka',
  'Chattogram',
  'Sylhet',
  'Gazipur',
  'Narayanganj',
  'Rajshahi',
  'Khulna',
  'Other commercial hubs across Bangladesh',
]

const internationalMarkets = [
  'United States',
  'United Kingdom',
  'Australia',
  'Canada',
  'United Arab Emirates',
  'Other locations worldwide',
]

const capabilities = [
  'Market-specific audience research',
  'Search intent & keyword research',
  'Localized content planning',
  'Cultural & linguistic alignment',
  'Strategic channel positioning',
  'Conversion funnel integration',
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
              Regional Delivery · Bangladesh &amp; International
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            YouTube Management{' '}
            <span className="italic text-frame-accent">Service Areas.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Framecipher provides YouTube management for businesses in Bangladesh and international markets.
          </p>
        </div>

        {/* 2 Regional Delivery Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Bangladesh Hub */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Domestic Coverage · Bangladesh
                </span>
                <MapPin className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                YouTube Management in Bangladesh
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                Our Bangladesh-focused strategies account for local audience habits, Dhaka commercial culture, language nuances, and domestic buying behavior across major cities:
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {bangladeshCities.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-300"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">Local Cultural Relevance:</strong>
              We understand how Bangladeshi audiences discover video content on YouTube, mobile viewing patterns, and regional search behavior.
            </div>
          </article>

          {/* International Markets */}
          <article className="flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/50 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Global Delivery · Cross-Border
                </span>
                <Globe className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                International YouTube Management
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                We manage YouTube channels targeting international audiences across mature English-speaking and GCC markets:
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
              <strong className="text-white block font-medium mb-1">International Scope Execution:</strong>
              International YouTube management includes market-specific audience research, localized content planning, global search optimization, positioning, and cross-border conversion strategy.
            </div>
          </article>
        </div>

        {/* Global Scope Capabilities Strip */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-frame-accent block">
            What International Scope Can Include:
          </span>

          <div className="flex flex-wrap gap-2">
            {capabilities.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] bg-[#15121C] px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              If your market is not listed, ask. International channel strategies are adapted around the target audience rather than reusing a generic template.
            </p>
            <div className="shrink-0">
              <PosterButton
                href="/contact"
                variant="primary"
                size="md"
              >
                Get a Free Consultation
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
