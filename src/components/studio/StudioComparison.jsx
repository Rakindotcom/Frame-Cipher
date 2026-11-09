'use client'

import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../home/PosterButton'

const packages = [
  {
    tier: 'Studio Session',
    price: 'from ৳2,000 per hour',
    tagline: 'For crews that bring their own cameras and equipment.',
    inclusions: [
      'Sound-isolated studio room',
      'Continuous ceiling softbox lighting grid',
      'Black, white, grey and green screen backdrops',
      'Fibre internet and IPS power backup',
      'Client lounge, styling mirror and changing area',
      'Hourly, half-day and full-day slots',
    ],
    bestFor: 'Production houses, agencies and independent videographers',
    cta: 'Book Space Only',
    featured: false,
  },
  {
    tier: 'Studio + Crew',
    price: 'from ৳8,000 per session',
    badge: 'Most Popular',
    tagline: 'For podcasters, interviewers and founders who want clean raw captures.',
    inclusions: [
      'Everything in Studio Session',
      'Sound engineer and camera operator on site',
      'Multi-mic broadcast audio, podcast ready',
      '4K multi-camera framing with live monitoring',
      'Teleprompter and director guidance',
      'Raw 4K footage and mastered audio within 24 hours',
    ],
    bestFor: 'Podcasters, interviewers and founders',
    cta: 'Book Production Session',
    featured: true,
  },
  {
    tier: 'Full Production',
    price: 'from ৳35,000 per project',
    tagline: 'For brands that want finished, ready-to-publish assets.',
    inclusions: [
      'Concept, script and shot list',
      'Multi-camera directed studio shoot',
      'Colour grade and dialogue cleanup in DaVinci Resolve',
      'EN/BN subtitles, titles and motion graphics',
      '16:9 master plus 9:16 shorts pack',
      '2 revision rounds and a 60-day archive',
    ],
    bestFor: 'Brands and marketing teams',
    cta: 'Request Full Production',
    featured: false,
  },
]

export default function StudioComparison() {
  return (
    <section id="packages" className="relative isolate border-b border-white/10 bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Studio Packages &amp; Inclusions.
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Transparent packages tailored to whether you require room-only access, dedicated technical crew, or end-to-end commercial post-production.
          </p>
        </div>

        {/* Discrete Cards Grid (gap-6) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.tier}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border p-8 sm:p-10 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent ${
                pkg.featured
                  ? 'border-purple-600/40 bg-[#121214] shadow-[0_20px_50px_rgba(147,51,234,0.15)] hover:border-purple-600/60 hover:bg-[#161619]'
                  : 'border-white/10 bg-[#0D0D0F] hover:border-white/20 hover:bg-[#121214]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <span className={`font-mono text-xs uppercase tracking-wider ${pkg.featured ? 'text-purple-400 font-medium' : 'text-zinc-400'}`}>
                    {pkg.tier}
                  </span>
                  {pkg.badge && (
                    <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-medium">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <p className="mt-5 font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
                  {pkg.price}
                </p>

                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {pkg.tagline}
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <ul className="space-y-3.5">
                    {pkg.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-normal text-zinc-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="mb-5 font-mono text-xs">
                  <span className="uppercase text-zinc-400 block">Best for:</span>
                  <span className="text-zinc-300 mt-1 block">{pkg.bestFor}</span>
                </div>

                <PosterButton
                  href="#booking"
                  variant={pkg.featured ? 'primary' : 'outline'}
                  className="w-full justify-center h-[52px]"
                >
                  {pkg.cta}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
