'use client'

import React from 'react'
import { ShoppingCart, Users, MapPin, Building2, Globe2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const audiences = [
  {
    icon: ShoppingCart,
    num: '01',
    title: 'Ecommerce Brands',
    focus: 'Direct ROAS & Repeat Purchases',
    body: [
      'Meta can support product discovery, prospecting, remarketing, catalog advertising, and repeat purchase campaigns.',
      'We manage campaigns around product sales, catalog campaigns, Advantage+ sales, product retargeting, customer acquisition, repeat purchases, conversion value, and creative testing.',
    ],
    highlight: 'The focus is on profitable purchases and business value rather than vanity engagement metrics alone.',
  },
  {
    icon: Users,
    num: '02',
    title: 'Lead Generation Businesses',
    focus: 'Cost Per Qualified Lead (CPQL)',
    body: [
      'Meta can work well for services where customers need to discover the offer, develop interest, and submit an enquiry.',
      'This includes professional services, education providers, home services, local services, agencies, B2B businesses, appointment-based businesses, and high-value service providers.',
    ],
    highlight: 'Lead quality is prioritized over maximizing raw form volume without qualification.',
  },
  {
    icon: MapPin,
    num: '03',
    title: 'Local Businesses',
    focus: 'Direct Foot Traffic & Local Calls',
    body: [
      'For local businesses, Meta can support awareness, local demand creation, lead generation, calls, messages, and retargeting.',
      'Campaigns can be structured around specific cities, service areas, store locations, local offers, appointment journeys, and Messenger or WhatsApp enquiries.',
    ],
    highlight: 'For Bangladesh businesses, we align creative and conversion flows with local buying behavior and chat commerce.',
  },
  {
    icon: Building2,
    num: '04',
    title: 'B2B & High-Value Services',
    focus: 'Pipeline Opportunities & Sales Deals',
    body: [
      'B2B and higher-ticket businesses often have longer sales cycles and require deeper consideration.',
      'We therefore pay greater attention to lead quality, audience signals, messaging, qualification, CRM stages, qualified opportunities, sales feedback, and downstream conversion data.',
    ],
    highlight: 'The goal is to contribute genuinely useful prospects that close into bankable pipeline revenue.',
  },
  {
    icon: Globe2,
    num: '05',
    title: 'Brands Expanding Internationally',
    focus: 'Cross-Border Unit Economics',
    body: [
      'Meta can reach customers across countries, but the same creative and offer do not necessarily perform equally everywhere.',
      'International campaigns require market-specific research, localized creative, country-level targeting, language adaptation, currency and offer considerations, local landing pages, and market-level reporting.',
    ],
    highlight: 'Each target market is evaluated on its own commercial conditions and cultural buying psychology.',
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Who Meta Ads Management{' '}
            <span className="italic text-frame-accent">Is Built For.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            The right creative strategy, audience inputs, and conversion flows depend entirely on your business model.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (5 Business Categories) */}
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
                    <span className="text-frame-accent">Focus: </span>
                    {item.highlight}
                  </p>
                </div>
              </div>
            )
          })}

          {/* Strategic Consultation Callout */}
          <div className="flex flex-col justify-between rounded-xl border border-dashed border-white/[0.08] bg-purple-500/[0.03] p-7 sm:p-8">
            <div className="space-y-4">
              <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                Have a specialized acquisition model?
              </h3>
              <p className="text-sm font-normal leading-relaxed text-zinc-300">
                Whether you run an omnichannel retail network, a subscription box, or a multi-location clinic, we tailor creative angles and conversion pipelines to your actual customer journey.
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
