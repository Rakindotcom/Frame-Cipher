'use client'

import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const packages = [
  {
    name: 'Single Page Optimization',
    price: '৳8,000',
    frequency: 'Starting Price',
    scope:
      'One page with search-intent, content, metadata, structure, and internal-link recommendations',
    features: [
      'Search intent & competitor analysis',
      'Content depth & structure rewrite',
      'Metadata & heading optimization',
      'Contextual internal linking',
      'Turnaround in ~3–5 business days',
    ],
    popular: false,
  },
  {
    name: 'Standard Site — Up to 10 Pages',
    price: '৳35,000',
    frequency: 'Starting Price',
    scope:
      'Multiple-page content, metadata, structure, keyword mapping, and internal-link optimization',
    features: [
      'Comprehensive keyword-to-page mapping',
      'Content & structure for up to 10 key URLs',
      'Heading hierarchy & metadata suites',
      'Cross-page internal link architecture',
      'Turnaround in ~2–3 weeks',
    ],
    popular: true,
  },
  {
    name: 'Large Site — 10–30 Pages',
    price: '৳75,000',
    frequency: 'Starting Price',
    scope:
      'Larger content optimization project with extensive page analysis, mapping, and internal-link work',
    features: [
      'Keyword cannibalization elimination',
      'Deep semantic & entity optimization',
      'Full catalog or service cluster rewrite',
      'Conversion-focused UX improvements',
      'Turnaround in ~4–6 weeks',
    ],
    popular: false,
  },
  {
    name: 'Ongoing On-Page Optimization',
    price: '৳20,000',
    frequency: 'per month',
    scope:
      'Continuous content updates, performance review, competitor monitoring, and optimization recommendations',
    features: [
      'Monthly search performance audits',
      'Content freshness updates & gap closing',
      'Competitor ranking change monitoring',
      'Ongoing internal link expansion',
      'Monthly progress & telemetry reporting',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1 text-xs text-zinc-300 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Investment Structure // Transparent Rates
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            On-Page SEO Pricing{' '}
            <span className="italic text-frame-accent">in Bangladesh</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            On-page SEO pricing depends on the number of pages, existing content quality, research requirements, content-writing needs, internal-linking scope, and level of implementation required.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 transition-all duration-300 ${
                pkg.popular
                  ? 'border-frame-accent/50 bg-[#14121a] shadow-lg shadow-purple-950/20'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.16]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400">
                    Tier 0{idx + 1}
                  </span>
                  {pkg.popular && (
                    <span className="rounded-full bg-frame-accent/20 border border-frame-accent/40 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-frame-accent">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="mt-3 font-heading text-xl font-medium tracking-tight text-white">
                  {pkg.name}
                </h3>

                <div className="mt-4 border-b border-white/[0.06] pb-4">
                  <div className="font-mono text-3xl font-bold tracking-tight text-white">
                    {pkg.price}
                  </div>
                  <span className="font-mono text-xs text-zinc-400">
                    {pkg.frequency}
                  </span>
                </div>

                <p className="mt-4 text-sm text-zinc-300 font-normal leading-relaxed">
                  {pkg.scope}
                </p>

                <div className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-4">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <PosterButton href="/contact" variant={pkg.popular ? 'primary' : 'outline'}>
                  Select Plan &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Footnotes verbatim */}
        <div className="mt-8 rounded-xl border border-white/[0.06] bg-[#121214]/60 p-5 space-y-2 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
            Final pricing is confirmed after reviewing the website, target pages, existing content, business goals, and required implementation scope.
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
            For larger websites, ecommerce stores, or projects requiring substantial new content, we can provide a custom scope and quotation.
          </p>
        </div>
      </div>
    </section>
  )
}
