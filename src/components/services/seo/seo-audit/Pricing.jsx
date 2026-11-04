'use client'

import React from 'react'
import { Check, Clock } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const auditPackages = [
  {
    name: 'Technical Audit Only',
    price: '৳20,000+',
    scope: 'Crawlability, indexation, speed, architecture, and technical review',
    delivery: '~1 week',
    highlight: false,
    features: [
      'Crawlability & indexation analysis',
      'Robots.txt & XML sitemap verification',
      'Canonicalization & URL structure audit',
      '404 & redirect chain resolution',
      'Core Web Vitals & speed benchmarks',
      'Prioritized technical fix checklist',
    ],
  },
  {
    name: 'Standard SEO Audit',
    price: '৳35,000+',
    scope: 'Technical, on-page, content, and basic backlink analysis',
    delivery: '~1–2 weeks',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Complete Technical SEO audit',
      'On-page title, H1-H6 & meta review',
      'Search intent & keyword mapping',
      'Basic backlink profile diagnostic',
      'Keyword cannibalization check',
      'Prioritized findings & walkthrough',
    ],
  },
  {
    name: 'Comprehensive SEO Audit',
    price: '৳55,000+',
    scope: 'Full technical, content, backlink, keyword, and competitor analysis',
    delivery: '~2–3 weeks',
    highlight: false,
    features: [
      'Full technical, on-page & content audit',
      'In-depth competitor & SERP gap analysis',
      'Toxic backlink & authority diagnostic',
      'Search Console & GA4 conversion review',
      '30/60/90-day actionable roadmap',
      'Full executive findings walkthrough',
    ],
  },
  {
    name: 'Large Site / Ecommerce',
    price: 'Custom',
    scope: 'Large catalogs, advanced technical issues, or specialized audit scope',
    delivery: '~3+ weeks',
    highlight: false,
    features: [
      'Large-scale catalog crawl (10k+ URLs)',
      'Faceted navigation & parameter review',
      'Hreflang & multi-market international SEO',
      'Product Schema & merchant feed audit',
      'Log file analysis & crawl budget review',
      'Direct developer coordination sessions',
    ],
  },
]

const includedDeliverables = [
  'Written audit report',
  'Prioritized recommendations',
  'Plain-language explanations',
  'Evidence-based findings',
  'Implementation guidance',
  'Findings walkthrough',
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Investment &amp; Timelines // Transparent Pricing
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            SEO Audit Pricing &amp; Timeline{' '}
            <span className="italic text-frame-accent">in Bangladesh</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            SEO audit pricing depends on website size, platform, number of pages, technical complexity, audit depth, and whether specialized analysis is required.
          </p>
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
            Final pricing is confirmed after reviewing the website, platform, size, target markets, and required audit scope.
          </p>
        </div>

        {/* 4 Packages Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {auditPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between rounded-2xl border p-7 sm:p-8 transition-colors ${
                pkg.highlight
                  ? 'border-frame-accent bg-[#16131c] shadow-2xl ring-1 ring-frame-accent/40'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.16]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Package 0{idx + 1}
                  </span>
                  {pkg.badge && (
                    <span className="rounded-full bg-frame-accent/20 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-frame-accent border border-frame-accent/40">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight text-white">
                  {pkg.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {pkg.price}
                  </span>
                </div>

                <div className="mt-4 space-y-1.5 rounded-xl bg-white/[0.03] p-3 border border-white/[0.04]">
                  <div className="font-sans text-xs text-zinc-300 leading-snug">
                    {pkg.scope}
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 pt-1 border-t border-white/[0.04]">
                    <Clock className="h-3 w-3" />
                    <span>Delivery: {pkg.delivery}</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-5">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <PosterButton
                  href="/contact"
                  variant={pkg.highlight ? 'primary' : 'outline'}
                >
                  Select Package &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Included Deliverables Row */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-white">
              All Packages Include Full Documentation
            </h3>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2 md:grid-cols-3">
              {includedDeliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <PosterButton href="/contact">
              Get a Custom SEO Audit Quote &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
