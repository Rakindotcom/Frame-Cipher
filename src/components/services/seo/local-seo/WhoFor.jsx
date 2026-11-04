'use client'

import React from 'react'
import { Store, Truck, Building2, CheckCircle2 } from 'lucide-react'

const businessModels = [
  {
    icon: Store,
    title: 'Storefront Businesses',
    subtitle: 'Physical Locations Serving In-Person Walk-ins',
    description:
      'Storefront businesses operate from a designated physical address where customers visit directly. Local search helps nearby buyers discover your exact street address, opening hours, photos, reviews, and turn-by-turn driving directions.',
    examples: [
      'Retail stores & showrooms',
      'Restaurants & cafes',
      'Salons, spas & barbershops',
      'Medical clinics & dental practices',
      'Gyms & fitness studios',
      'Law firms, accountants & local offices',
    ],
  },
  {
    icon: Truck,
    title: 'Service-Area Businesses (SABs)',
    subtitle: 'Mobile Providers Visiting Customer Homes & Sites',
    description:
      'Service-area businesses travel to clients rather than welcoming visitors to a commercial office. Their local strategy communicates verified geographic coverage radiuses while strictly adhering to Google’s SAB address-hiding and verification guidelines.',
    examples: [
      'Plumbing & electrical contractors',
      'Commercial & home cleaning services',
      'Pest control & exterminators',
      'Home repair, roofing & HVAC',
      'Moving, packing & logistics',
      'Appliance repair technicians',
    ],
  },
  {
    icon: Building2,
    title: 'Multi-Location & Franchise Brands',
    subtitle: 'Multi-Branch Networks Competing Across Cities',
    description:
      'Multi-location enterprises operate across dozens of branches, each with distinct local competitors, proximity radiuses, and neighborhood dynamics. We implement centralized brand governance paired with hyper-localized landing page optimization.',
    examples: [
      'Retail chains & franchise networks',
      'Restaurant groups & food franchises',
      'Diagnostic & hospital branch networks',
      'Coaching centers & education institutes',
      'Bank branches & financial services',
      'Regional multi-facility operations',
    ],
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Commercial Alignment // Tailored By Operating Model
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Who Is Local{' '}
            <span className="italic text-frame-accent">SEO For?</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Local SEO supports three distinct operational business models. The strategy adapts directly to how your customers discover, evaluate, and transact with your business.
          </p>
        </div>

        {/* 3 Business Model Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {businessModels.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                      Model 0{index + 1}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-frame-accent/15 text-frame-accent border border-frame-accent/30">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400 mt-0.5">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                      Typical Businesses:
                    </span>
                    <ul className="space-y-1.5">
                      {item.examples.map((ex, eIdx) => (
                        <li key={eIdx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
                          <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0" />
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
