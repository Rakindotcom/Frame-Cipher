'use client'

import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const audiences = [
  {
    num: '01',
    title: 'Ecommerce',
    body: 'For ecommerce businesses, we focus on product discovery, purchase intent, shopping campaigns, catalog or product advertising, remarketing, creative testing, and conversion efficiency. Campaign decisions are connected to product value, margins, average order value, and customer acquisition economics.',
  },
  {
    num: '02',
    title: 'Lead Generation',
    body: 'For service businesses and other lead-driven companies, the goal is not to collect as many forms as possible. We focus on generating relevant inquiries that match the business\'s actual service area, customer profile, offer, and sales process.',
    tail: 'Where possible, lead quality should feed back into campaign optimization rather than stopping measurement at the form submission.',
  },
  {
    num: '03',
    title: 'B2B',
    body: 'B2B campaigns often require more deliberate audience selection, stronger educational messaging, longer consideration periods, and more careful lead evaluation. We can structure campaigns around decision-makers, industries, account characteristics, search intent, and different stages of the buying journey.',
  },
  {
    num: '04',
    title: 'Local Businesses',
    body: 'Local businesses can use paid advertising to generate calls, bookings, inquiries, store visits, service requests, and local product demand. Campaigns can be structured around relevant locations, service areas, local intent, and the actions that matter most to the business.',
  },
  {
    num: '05',
    title: 'SaaS & Technology',
    body: 'SaaS and technology companies often need to balance acquisition cost against trial quality, activation, retention, and customer value. Paid campaigns can support product discovery, demo requests, trials, sign-ups, remarketing, and targeted acquisition while measurement is connected to the actual customer journey.',
  },
  {
    num: '06',
    title: 'Startups & Growth Businesses',
    body: 'Startups often need to learn quickly which audiences, offers, channels, and messages can produce viable customer acquisition. We use testing and measurement to identify what deserves additional budget rather than assuming scale should come first.',
  },
  {
    num: '07',
    title: 'Established Brands',
    body: 'Larger businesses may need multi-platform, multi-market, multi-product, or multi-team campaign management. We can structure paid media around different business units, markets, audience segments, and conversion objectives while keeping reporting and budget visibility centralized.',
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Who We Help With{' '}
            <span className="italic text-frame-accent">Paid Advertising.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Paid advertising can serve very different business models. Campaign strategy should reflect those differences.
          </p>
        </div>

        {/* Blueprint Matrix Grid (7 Cards) */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
            <div
              key={item.num}
              className="group flex flex-col justify-between bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs font-semibold text-frame-accent">
                    VERTICAL {item.num}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                </div>

                <h3 className="font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>
              </div>

              {item.tail && (
                <div className="pt-4 mt-6 border-t border-white/[0.06]">
                  <p className="font-mono text-[11px] leading-relaxed text-zinc-400">
                    <span className="text-frame-accent font-semibold block mb-0.5">OPTIMIZATION RULE:</span>
                    {item.tail}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
