'use client'

import React from 'react'
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const packages = [
  {
    name: 'Technical SEO Audit',
    price: '৳20,000',
    frequency: 'Starting Price',
    scope: 'Technical diagnosis, prioritized recommendations, and written report',
    features: [
      'Full technical site diagnosis',
      'Prioritized recommendation report',
      'Crawl & indexation analysis',
      'Actionable developer roadmap',
    ],
    popular: false,
  },
  {
    name: 'Standard Technical Fix',
    price: '৳40,000',
    frequency: 'Starting Price',
    scope: 'Audit plus implementation for a small-to-medium website',
    features: [
      'Complete Technical SEO Audit',
      'Direct code & CMS implementation',
      'Redirects, canonicals & sitemaps',
      'Core Web Vitals optimizations',
    ],
    popular: true,
  },
  {
    name: 'Advanced Technical Overhaul',
    price: '৳80,000',
    frequency: 'Starting Price',
    scope: 'Complex architecture, large websites, and extensive technical cleanup',
    features: [
      'Full architectural restructure',
      'Large catalog crawl management',
      'JavaScript & SSR rendering fixes',
      'Migration & staging verification',
    ],
    popular: false,
  },
  {
    name: 'Ongoing Technical Monitoring',
    price: '৳15,000',
    frequency: 'per month',
    scope: 'Continuous monitoring, issue detection, regression checks, and reporting',
    features: [
      'Continuous crawl & index tracking',
      'Core Web Vitals SLA monitoring',
      'Automated regression alerts',
      'Monthly engineering report',
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
            Technical SEO Pricing{' '}
            <span className="italic text-frame-accent">in Bangladesh</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Technical SEO pricing depends on website size, platform, technical condition, number of URLs, development requirements, and the complexity of the issues involved.
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

        {/* Footnote verbatim */}
        <div className="mt-8 rounded-xl border border-white/[0.06] bg-[#121214]/60 p-4 sm:p-5 text-center">
          <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
            Final pricing is confirmed after reviewing the website, platform, technical requirements, and implementation scope.
          </p>
        </div>
      </div>
    </section>
  )
}
