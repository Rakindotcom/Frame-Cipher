'use client'

import React from 'react'
import { MapPin, Globe, CheckCircle2 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const BD_CAPABILITIES = [
  'bKash payment gateway integration',
  'Nagad API connectivity',
  'Local banking APIs & payment switches',
  'Local ecommerce checkout systems',
  'CRM and ERP integrations',
  'Last-mile logistics & delivery platforms',
  'Bangladeshi market user behavior workflows',
  'Internal enterprise business validation tools',
]

const INTL_MARKETS = [
  { country: 'United States', focus: 'B2B SaaS, Stripe billing, SOC2/HIPAA compliance patterns' },
  { country: 'United Kingdom', focus: 'FinTech, Open Banking APIs, GDPR data privacy governance' },
  { country: 'Australia', focus: 'Marketplaces, multi-currency checkout, low-latency edge deployment' },
  { country: 'Canada', focus: 'Cross-border commerce, PIPEDA compliance, cloud microservices' },
  { country: 'United Arab Emirates', focus: 'Logistics, enterprise portals, multi-lingual Arabic/English' },
]

export default function BangladeshWorldwide() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            MVP Development Services Across Bangladesh &amp; Worldwide.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Framecipher is based in Dhaka, Bangladesh, and provides MVP development services for businesses and product teams in Bangladesh alongside fast-growing companies in international markets.
          </p>
        </div>

        {/* 2-Column Comparative Reach Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Bangladesh Domestic */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-8 sm:p-10 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                      MVP Development in Bangladesh
                    </h3>
                    <span className="font-mono text-xs text-zinc-400">
                      Dhaka HQ &bull; Local Ecosystem
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                  DOMESTIC
                </span>
              </div>

              <p className="mt-6 text-sm text-zinc-300 leading-relaxed">
                For Bangladeshi businesses, an MVP may need to account for local payment methods, mobile-first usage, local logistics, customer behavior, and existing business systems. These requirements are considered during discovery rather than added automatically to every MVP.
              </p>

              <div className="mt-6 space-y-2.5 pt-6 border-t border-white/10">
                <span className="font-mono text-xs uppercase tracking-wider text-purple-400 block mb-3">
                  Local Integrations &amp; Workflows
                </span>
                {BD_CAPABILITIES.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 font-mono text-xs text-zinc-500 flex items-center justify-between">
              <span>DHAKA DELIVERY CENTER</span>
              <span className="text-emerald-400">&bull; DIRECT IN-PERSON OR REMOTE</span>
            </div>
          </div>

          {/* International Markets */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-8 sm:p-10 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                      International Clients
                    </h3>
                    <span className="font-mono text-xs text-zinc-400">
                      Global Timezone Overlap
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                  GLOBAL REACH
                </span>
              </div>

              <p className="mt-6 text-sm text-zinc-300 leading-relaxed">
                Framecipher works with early-stage founders and product engineering teams across North America, Europe, Australia, and the Middle East. International MVP projects involve specialized payment gateways, regulatory compliance, cloud architecture, and strict sprint alignment.
              </p>

              {/* Clean Editorial List (Directive 17: No box pills) */}
              <div className="mt-6 space-y-2.5 pt-6 border-t border-white/10">
                <span className="font-mono text-xs uppercase tracking-wider text-purple-400 block mb-3">
                  Target Geographies &amp; Core Focus
                </span>
                {INTL_MARKETS.map((market, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs py-1.5 border-b border-white/[0.04] last:border-0"
                  >
                    <span className="font-medium text-white font-mono">
                      {market.country}
                    </span>
                    <span className="text-zinc-300 text-xs sm:text-right">
                      {market.focus}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 font-mono text-xs text-zinc-500 flex items-center justify-between">
              <span>TIMEZONES</span>
              <span className="text-purple-400">&bull; US EST/PST, UK GMT, AEST, UAE GST</span>
            </div>
          </div>
        </div>

        {/* Symmetrical 52px Button Pair */}
        <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4">
          <PosterButton href="/contact" variant="accent" className="h-[52px] px-8 text-sm font-medium">
            Get Free Consultation
          </PosterButton>
          <PosterButton href="#pricing" variant="outline" className="h-[52px] px-8 text-sm font-medium">
            Discuss Your MVP Scope
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
