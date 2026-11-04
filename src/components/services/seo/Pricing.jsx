'use client'

import React from 'react'
import PosterButton from '../../home/PosterButton'
import { Check } from 'lucide-react'

const packages = [
  {
    name: 'Essential',
    price: '৳25,000/month',
    bestFor: 'Small businesses and single-location websites',
    features: [
      'On-page SEO',
      'Basic technical fixes',
      'Keyword research',
      'Monthly reporting',
    ],
  },
  {
    name: 'Growth',
    price: '৳45,000/month',
    bestFor: 'Growing businesses and larger websites',
    features: [
      'Technical SEO',
      'Content strategy',
      'On-page SEO',
      'Link building',
      'Local SEO',
    ],
  },
  {
    name: 'Ecommerce / Advanced',
    price: '৳75,000/month',
    bestFor: 'Online stores and competitive industries',
    features: [
      'Ecommerce SEO',
      'Advanced technical work',
      'Content strategy',
      'Authority building',
      'AI search optimization',
    ],
  },
  {
    name: 'Enterprise / International',
    price: 'Custom Quote',
    bestFor: 'Large or international websites',
    features: [
      'Multi-market strategy',
      'Advanced technical SEO',
      'International SEO',
      'Dedicated reporting',
      'Specialized recovery work where required',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-b border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Investment &amp; Plans // Clear Engagement Tiers
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SEO Pricing in{' '}
            <span className="italic text-frame-accent">Bangladesh.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            SEO pricing depends on website size, technical condition, competition, target market, content requirements, authority-building needs, and the level of ongoing support required. Our starting reference plans can be structured around the scope below:
          </p>
        </div>

        {/* 4-Tier Pricing Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-200 hover:border-white/[0.14] sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    Plan 0{i + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/10 group-hover:bg-frame-accent transition-colors" />
                </div>

                <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                  {pkg.name}
                </h3>

                <p className="mt-4 font-mono text-2xl sm:text-3xl font-medium text-white">
                  {pkg.price}
                </p>

                <div className="mt-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    Best For
                  </span>
                  <p className="mt-1 text-xs font-normal leading-snug text-zinc-300">
                    {pkg.bestFor}
                  </p>
                </div>

                <ul className="mt-6 space-y-3 border-t border-white/[0.06] pt-5 text-xs sm:text-sm font-normal text-zinc-300">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-5">
                <PosterButton href="/contact" variant={i === 1 ? 'accent' : 'outline'} className="w-full justify-center">
                  Request This Plan
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Custom Quote Strip */}
        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="max-w-2xl space-y-2">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              These are starting reference points rather than fixed packages for every business.
            </p>
            <p className="text-sm sm:text-base font-medium leading-relaxed text-white">
              Final pricing is based on the actual scope identified during the audit and consultation.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="accent">
              Get a Custom Quote &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
