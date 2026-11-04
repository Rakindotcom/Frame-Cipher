'use client'

import React from 'react'
import { Target, Compass, Award } from 'lucide-react'

const factors = [
  {
    icon: Target,
    title: 'Relevance',
    subtitle: 'Service & Semantic Match',
    description:
      'Relevance refers to how closely a business profile and website match what someone searches for. Google evaluates detailed business categories, service menus, website on-page content, and attributes. For example, a dental practice offering specialized implants must clearly communicate that specific procedure across both its GBP and location pages.',
    badge: 'Factor 01',
  },
  {
    icon: Compass,
    title: 'Distance',
    subtitle: 'Proximity & Service Radius',
    description:
      'Distance calculates how close a business location is to the searcher or the geographic modifier in the query. A business may dominate the Map Pack right outside its doors but drop off several kilometers away. We map service areas, branch addresses, and local search radiuses to maximize geo-grid visibility.',
    badge: 'Factor 02',
  },
  {
    icon: Award,
    title: 'Prominence',
    subtitle: 'Authority & Reputation Weight',
    description:
      'Prominence reflects how well-known and established a business is in both the physical world and the digital ecosystem. Google factors in web citations, editorial backlinks, review velocity, average ratings, and local brand authority. A commanding local presence requires multi-channel prominence.',
    badge: 'Factor 03',
  },
]

export default function RankingFactors() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Algorithmic Foundation // Google Local Search Architecture
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            How Google Local{' '}
            <span className="italic text-frame-accent">Rankings Work</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Google uses three core signals to determine which businesses surface in local search results and the Map Pack: Relevance, Distance, and Prominence.
          </p>
        </div>

        {/* 3 Core Factors Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {factors.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                      {item.badge}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-frame-accent border border-white/[0.06]">
                      <Icon className="h-4 w-4" />
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
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
