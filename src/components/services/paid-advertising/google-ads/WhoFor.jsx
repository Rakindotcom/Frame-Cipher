'use client'

import React from 'react'
import { Briefcase, ShoppingCart, MapPin, Building2, Globe2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const audiences = [
  {
    icon: Briefcase,
    num: '01',
    title: 'Lead Generation Businesses',
    focus: 'Cost Per Qualified Lead (CPQL)',
    body: [
      'Google Ads can be effective for businesses where each qualified enquiry has meaningful commercial value. This includes professional services, agencies, healthcare businesses where applicable, education providers, home and local services, B2B businesses, and high-value service providers.',
      'The strategy focuses on qualified enquiries rather than maximizing form volume without considering lead quality.',
    ],
    highlight: 'Filter tire-kickers with high-intent keywords and qualification forms.',
  },
  {
    icon: ShoppingCart,
    num: '02',
    title: 'Ecommerce Brands',
    focus: 'Target ROAS & Blended CAC',
    body: [
      'Ecommerce campaigns need a different approach from lead generation. We can manage Search, Shopping, Performance Max, remarketing, product feeds, Merchant Center, conversion value tracking, and product-level performance.',
      'The focus is on sales and profitable growth rather than traffic alone.',
    ],
    highlight: 'Feed-driven inventory scaling across Shopping, Search & PMax.',
  },
  {
    icon: MapPin,
    num: '03',
    title: 'Local Businesses',
    focus: 'Phone Calls & Foot Traffic',
    body: [
      'For local businesses, we consider geographic targeting, service areas, local search behavior, calls, enquiries, and the actual value of serving customers in specific locations.',
      'Campaign structure can be designed around single-location businesses, multi-location businesses, service-area businesses, local ecommerce, and appointment-driven businesses.',
    ],
    highlight: 'Geo-radius targeting and call asset extensions for immediate booking.',
  },
  {
    icon: Building2,
    num: '04',
    title: 'B2B & High-Value Services',
    focus: 'Pipeline Value & Offline Deals',
    body: [
      'B2B and high-value services often have longer sales cycles and fewer conversions than ecommerce. Campaign management may need stronger attention to lead quality, search intent, CRM stages, qualified leads, sales opportunities, offline conversion signals, and market segmentation.',
      'The objective is to connect advertising with meaningful business progression rather than treating every lead as equally valuable.',
    ],
    highlight: 'CRM offline conversion sync to bid on pipeline value, not just form fills.',
  },
  {
    icon: Globe2,
    num: '05',
    title: 'International Expansion',
    focus: 'Country-Specific Unit Economics',
    body: [
      'Businesses entering new markets need more than one campaign copied into another country. We adapt strategy around country-specific search behavior, competition, language, location targeting, currency, local offers, landing-page relevance, time zones, and market-specific conversion goals.',
      'Each market should be evaluated on its own commercial conditions rather than judged against another country’s performance without context.',
    ],
    highlight: 'Localized campaigns built for US, UK, Australia, Canada, and UAE search dynamics.',
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Who Google Ads Management{' '}
            <span className="italic text-frame-accent">Is Built For.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            The right campaign structure, tracking, and optimization approach depends on the business model behind the account.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix Grid (5 Business Models) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.num}
                className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                      Category {item.num}
                    </span>
                    <Icon className="h-4 w-4 text-frame-accent" />
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <div className="inline-block rounded-md border border-white/[0.06] bg-[#09090B] px-2.5 py-1 font-mono text-[11px] text-zinc-400">
                    Primary Metric: <span className="text-frame-accent">{item.focus}</span>
                  </div>

                  <div className="space-y-3 text-sm font-normal leading-relaxed text-zinc-300">
                    {item.body.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <p className="text-xs font-mono text-zinc-400 leading-relaxed">
                    <span className="text-frame-accent">Approach: </span>
                    {item.highlight}
                  </p>
                </div>
              </div>
            )
          })}

          {/* Strategic Consultation Callout Box */}
          <div className="flex flex-col justify-between rounded-xl border border-dashed border-white/[0.08] bg-purple-500/[0.03] p-7 sm:p-8">
            <div className="space-y-4">
              <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                Have a unique commercial model?
              </h3>
              <p className="text-sm font-normal leading-relaxed text-zinc-300">
                Whether you operate a SaaS platform, a dual B2B/B2C marketplace, or an offline consultancy, we build custom campaign architectures matched to your actual sales cycle.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.08]">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-frame-accent hover:text-white transition-colors"
              >
                <span>Discuss Your Economics</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
