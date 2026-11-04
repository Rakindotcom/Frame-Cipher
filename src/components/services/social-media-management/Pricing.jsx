'use client'

import React from 'react'
import PosterButton from '../../home/PosterButton'
import { CheckCircle2 } from 'lucide-react'

const packages = [
  {
    name: 'Essential',
    price: '৳20,000',
    priceNote: '/ month',
    covered: '2 platforms, standard posting frequency, basic community management',
    bestFor: 'Small businesses starting out',
    features: [
      '2 platforms covered',
      'Standard posting frequency',
      'Basic community management',
      'Monthly performance reporting',
      'Client review and approval before publishing',
    ],
  },
  {
    name: 'Growth',
    price: '৳35,000',
    priceNote: '/ month',
    covered: 'Up to 4 platforms, increased content frequency, active community management',
    bestFor: 'Growing businesses building a stronger presence',
    features: [
      'Up to 4 platforms covered',
      'Increased content frequency',
      'Active community management & DM triage',
      'Reels & short-form video concepts',
      'Regular performance review & strategy adjustments',
    ],
    popular: true,
  },
  {
    name: 'Full Presence',
    price: '৳55,000',
    priceNote: '/ month',
    covered: 'Up to 5 platforms, original content production, dedicated community management',
    bestFor: 'Businesses seeking comprehensive social management',
    features: [
      'Up to 5 platforms covered',
      'Original content production & graphic design',
      'Dedicated community management & social customer care',
      'Reels, TikToks, and Shorts video production',
      'In-depth monthly analytics & optimization insights',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    priceNote: 'Scoped per engagement',
    covered: 'Multi-brand or multi-market management with dedicated team allocation',
    bestFor: 'Larger or multi-location businesses',
    features: [
      'Multi-brand or multi-market management',
      'Dedicated team & production studio allocation',
      'Custom publishing schedules across global timezones',
      'Social listening & priority reputation management',
      'Bespoke SLAs & executive personal brand support',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               INVESTMENT &amp; PLANS 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Social Media Management{' '}
            <span className="italic text-[#A855F7]">Pricing in Bangladesh.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Social media management pricing depends on the number of platforms, content volume, creative requirements, community management scope, and reporting needs.
          </p>
        </div>

        {/* Structured Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`flex flex-col justify-between rounded-xl border p-6 sm:p-7 transition-colors duration-200 ${
                pkg.popular
                  ? 'border-[#A855F7]/40 bg-frame-accent/[0.04]'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.16]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                    Plan 0{index + 1}
                  </span>
                  {pkg.popular && (
                    <span className="rounded-full border border-[#A855F7]/30 bg-[#A855F7]/20 px-2.5 py-0.5 font-mono text-[10px] uppercase text-[#A855F7]">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl font-medium text-white">
                  {pkg.name}
                </h3>

                <div className="my-5 border-y border-white/[0.06] py-4">
                  <span className="block font-mono text-[10px] uppercase text-zinc-400">
                    Starting Price
                  </span>
                  <div className="font-heading text-3xl font-bold tracking-tight text-white mt-1">
                    {pkg.price}
                  </div>
                  <span className="block font-mono text-[10px] uppercase text-zinc-400 mt-1">
                    {pkg.priceNote}
                  </span>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="rounded-lg border border-white/[0.06] bg-[#18181B] p-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#A855F7] block mb-1">
                      What&apos;s Covered:
                    </span>
                    <p className="text-xs font-normal text-zinc-300 leading-snug">
                      {pkg.covered}
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/[0.06] bg-[#18181B] p-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 block mb-1">
                      Best For:
                    </span>
                    <p className="text-xs font-normal text-zinc-300 leading-snug">
                      {pkg.bestFor}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 border-t border-white/[0.06] pt-4 text-xs font-mono text-zinc-300">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#A855F7] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'accent' : 'outline'}
                  className="w-full justify-center"
                >
                  Choose {pkg.name}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Footnote & Dual CTAs */}
        <div className="flex flex-col gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
              Scope Flexibility &amp; Free Consultation
            </span>
            <p className="text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
              The exact scope can be adjusted based on your platform mix, content requirements, video production needs, community volume, and business goals.
            </p>
            <p className="text-xs sm:text-sm font-normal text-zinc-400 leading-relaxed">
              A free initial social audit and consultation helps us understand your requirements before recommending a plan.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <PosterButton href="/contact" variant="outline">
              Request a Custom Quote
            </PosterButton>
            <PosterButton href="/contact" variant="accent">
              Get Your Free Social Audit
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
