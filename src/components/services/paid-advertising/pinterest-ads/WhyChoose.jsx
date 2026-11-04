'use client'

import React from 'react'
import {
  Layers,
  Palette,
  Calendar,
  Sparkles,
  Users,
} from 'lucide-react'

const reasons = [
  {
    icon: Layers,
    title: 'Full-Funnel Campaign Management',
    desc: 'Pinterest performance does not depend on media buying alone. We connect creative, merchant catalog, destination landing page, server-side tracking, and checkout flow into one cohesive system.',
  },
  {
    icon: Palette,
    title: 'Pinterest-Native Creative Production',
    desc: 'We never simply resize Facebook or Instagram ads. Our creative studio builds Pins engineered specifically for Pinterest—vertical 2:3 aspect ratios, clear utility overlays, and high-save appeal.',
  },
  {
    icon: Calendar,
    title: 'Seasonal & Demand-Led Planning',
    desc: 'We build campaign calendars around Pinterest Trends and early consumer planning windows, deploying campaigns 60–90 days ahead of peak holiday and occasion buying cycles.',
  },
  {
    icon: Sparkles,
    title: 'Paid + Organic Pinterest Strategy',
    desc: 'Paid campaigns provide immediate conversion velocity, while organic board and keyword SEO build enduring compound reach. We coordinate both disciplines without treating one as a substitute.',
  },
  {
    icon: Users,
    title: 'One In-House Media & Tech Team',
    desc: 'No fragmented handoffs between media buyers, designers, and developers. Creative strategists, data engineers, and media managers collaborate directly in-house in Dhaka.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Choose Framecipher for{' '}
            <span className="italic text-frame-accent">Pinterest Ads.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Pinterest is a visual search and discovery engine, not a passive social feed. Here is how our specialized capabilities deliver measurable commercial outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, idx) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className={`rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] flex flex-col justify-between ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-medium text-white mb-2.5">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {r.desc}
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
