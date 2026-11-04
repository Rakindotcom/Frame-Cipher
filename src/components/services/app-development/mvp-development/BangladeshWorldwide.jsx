'use client'

import React from 'react'
import { MapPin, Globe, CheckCircle2 } from 'lucide-react'

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
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            MVP Development Services Across{' '}
            <span className="italic text-frame-accent">Bangladesh &amp; Worldwide.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Framecipher is based in Dhaka, Bangladesh, and provides MVP development services for businesses and product teams in Bangladesh alongside fast-growing companies in international markets.
          </p>
        </div>

        {/* 2-Column Comparative Reach Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Bangladesh Domestic */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
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
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-400">
                  DOMESTIC
                </span>
              </div>

              <p className="mt-6 text-sm text-zinc-300 leading-relaxed">
                For Bangladeshi businesses, an MVP may need to account for local payment methods, mobile-first usage, local logistics, customer behavior, and existing business systems. These requirements are considered during discovery rather than added automatically to every MVP.
              </p>

              <div className="mt-6 space-y-3 pt-6 border-t border-white/[0.06]">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-3">
                  Local Integrations &amp; Workflows
                </span>
                {BD_CAPABILITIES.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] font-mono text-xs text-zinc-500 flex items-center justify-between">
              <span>DHAKA DELIVERY CENTER</span>
              <span className="text-emerald-400">&bull; DIRECT IN-PERSON OR REMOTE</span>
            </div>
          </div>

          {/* International Markets */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-500/30 bg-frame-accent/10 text-frame-accent">
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
                <span className="rounded-full border border-purple-500/30 bg-frame-accent/10 px-3 py-1 font-mono text-[11px] text-frame-accent">
                  GLOBAL REACH
                </span>
              </div>

              <p className="mt-6 text-sm text-zinc-300 leading-relaxed">
                Framecipher works with early-stage founders and product engineering teams across North America, Europe, Australia, and the Middle East. International MVP projects involve specialized payment gateways, regulatory compliance, cloud architecture, and strict sprint alignment.
              </p>

              <div className="mt-6 space-y-3 pt-6 border-t border-white/[0.06]">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-3">
                  Target Geographies &amp; Core Focus
                </span>
                {INTL_MARKETS.map((market, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-white/[0.06] bg-black/30 p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                  >
                    <span className="font-medium text-white font-mono">
                      {market.country}
                    </span>
                    <span className="text-zinc-400 text-[11px]">
                      {market.focus}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] font-mono text-xs text-zinc-500 flex items-center justify-between">
              <span>TIMEZONES</span>
              <span className="text-frame-accent">&bull; US EST/PST, UK GMT, AEST, UAE GST</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

