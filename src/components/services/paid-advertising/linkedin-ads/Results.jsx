'use client'

import React from 'react'
import { CheckCircle2, ShieldCheck, ArrowRight, BarChart2, TrendingUp } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import Link from 'next/link'

const caseStudyMetrics = [
  'Business objective',
  'Industry',
  'Target market',
  'Ideal customer profile',
  'Campaign objective',
  'Audience strategy',
  'Ad format',
  'Offer',
  'Tracking setup',
  'Campaign period',
  'Advertising spend range',
  'Leads generated',
  'Qualified leads',
  'Opportunities',
  'Pipeline or revenue where measurable',
  'Key optimization decisions',
  'Outcome',
]

const b2bCaseStudies = [
  {
    slug: 'rihawebtech-meta-ads',
    client: 'Riha Webtech',
    category: 'B2B Digital Services & Tech',
    image: '/growth-work/paid-ads/riha-webtech.webp',
    outcome: '$0.04 Min Inquiring Lead',
    stat: '275K Impressions',
    spend: '$431 Managed Spend',
    desc: 'High-intent B2B service lead acquisition with separate creative angles per service tier, yielding qualified enterprise discussions at $0.04 to $0.15 per conversation.',
  },
  {
    slug: 'rpl-consultancy-meta-ads',
    client: 'RPL Consultancy',
    category: 'Professional Services & Visa',
    image: '/growth-work/paid-ads/rpl-consultancy.webp',
    outcome: '$1.42 Cost Per Lead',
    stat: '663K+ People Reached',
    spend: '$273.17 Managed Spend',
    desc: 'Instant lead-form campaigns converted qualified high-ticket applicants at $1.42 per lead with strict qualification criteria and CRM verification.',
  },
]

export default function Results() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            LinkedIn Ads Results{' '}
            <span className="italic text-frame-accent">&amp; Case Studies.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            B2B advertising results must be evaluated in commercial context. We connect audience targeting, job seniority filters, and commercial qualification criteria directly to closed-won pipeline outcomes.
          </p>
        </div>

        {/* Featured B2B Case Study Snapshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {b2bCaseStudies.map((study) => (
            <article
              key={study.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-300 hover:border-white/[0.16]"
            >
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/[0.08] bg-zinc-950">
                  <Link href={`/case-studies/${study.slug}`} className="block h-full w-full">
                    <img
                      src={study.image}
                      alt={`${study.client} B2B performance`}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/30" />
                  
                  <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                    <span className="rounded-full border border-white/[0.08] bg-[#09090B]/85 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-frame-accent backdrop-blur-md">
                      {study.category}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-[#09090B]/85 px-2.5 py-1 font-mono text-[11px] text-frame-accent backdrop-blur-md">
                      <TrendingUp className="h-3 w-3" />
                      Verified
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-heading text-lg font-medium text-white group-hover:text-frame-accent transition-colors">
                    <Link href={`/case-studies/${study.slug}`}>
                      {study.client}
                    </Link>
                  </h3>
                  <div className="flex items-baseline gap-2 font-mono text-lg font-bold text-white">
                    <span>{study.outcome}</span>
                    <span className="text-xs text-zinc-400 font-normal">({study.stat})</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {study.desc}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/[0.08] bg-[#18181B]/50 px-6 py-3 flex items-center justify-between">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-frame-accent hover:text-white transition-colors"
                >
                  <span>Explore B2B Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <span className="font-mono text-[10px] text-zinc-400 uppercase">First-Party Data</span>
              </div>
            </article>
          ))}
        </div>

        {/* 2-Column Split: Case Study Metrics Grid vs. Context & Integrity Cards */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: 17 Structured Metrics (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              Where verified Framecipher case studies are available, we document:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {caseStudyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-[#121214] p-3 text-xs sm:text-sm text-zinc-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Context Philosophy & Standards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 space-y-3">
              <h3 className="font-heading text-lg font-medium text-white">
                Why Context Matters in B2B
              </h3>
              <p className="text-sm font-normal leading-relaxed text-zinc-300">
                A meaningful LinkedIn case study should show more than raw lead volume. It should explain whether the leads matched the intended ideal customer profile (ICP), job functions, company size tiers, and progressed through the sales pipeline.
              </p>
            </div>

            <div className="rounded-xl border-l-2 border-frame-accent border-white/[0.08] bg-[#121214] p-6 space-y-2">
              <h4 className="font-mono text-xs tracking-wider text-frame-accent">
                Verification Guarantee
              </h4>
              <p className="text-sm font-normal leading-relaxed text-zinc-300">
                We do not publish performance figures that cannot be supported by the underlying ad account or approved client analytics evidence.
              </p>
            </div>

            <div className="pt-2">
              <PosterButton href="/case-studies" variant="outline" className="w-full">
                View All Case Studies &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
