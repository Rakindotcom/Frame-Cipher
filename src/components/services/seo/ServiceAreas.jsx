'use client'

import React from 'react'
import PosterButton from '../../home/PosterButton'
import { MapPin, Globe } from 'lucide-react'

const areas = [
  {
    eyebrow: 'Domestic Reach // Bangladesh',
    title: 'SEO Services Across Bangladesh',
    icon: MapPin,
    body: 'We help businesses across Bangladesh, including Dhaka and other major cities, improve organic visibility through local SEO, keyword research, technical SEO, content optimization, Google Business Profile optimization, and competitor analysis. We support businesses targeting local areas, multiple cities, or customers nationwide.',
  },
  {
    eyebrow: 'Global Delivery // International Markets',
    title: 'International SEO Services',
    icon: Globe,
    body: 'We help businesses target international markets, including the US, UK, Australia, Canada, and UAE. Our approach includes market-specific keyword research, localized content, technical SEO, international site architecture, and competitor analysis based on each target market.',
  },
]

export default function ServiceAreas() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Geographic Scope // Dual-Market Delivery
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Service Areas in Bangladesh and{' '}
            <span className="italic text-frame-accent">International Markets.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Framecipher provides SEO services for businesses targeting customers across Bangladesh and international markets. We adapt our strategy to your audience, search behavior, competition, and business goals.
          </p>
        </div>

        {/* 2-Card Geographic Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {areas.map((area, index) => {
            const IconComponent = area.icon
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-10"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                      {area.eyebrow}
                    </span>
                    <IconComponent className="h-4 w-4 text-zinc-400 group-hover:text-frame-accent transition-colors" />
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
                    {area.title}
                  </h3>

                  <p className="mt-5 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    {area.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10">
          <PosterButton href="/contact" variant="accent">
            Start Your SEO Strategy &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
