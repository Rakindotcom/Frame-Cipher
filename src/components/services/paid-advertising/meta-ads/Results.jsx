'use client'

import React from 'react'
import { CheckCircle2, ShieldCheck, ArrowRight, TrendingUp, BarChart3, ExternalLink } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import Link from 'next/link'
import Image from 'next/image'

const caseStudyMetrics = [
  'Business objective & commercial model',
  'Industry vertical & market niche',
  'Target geography (Domestic or Global)',
  'Starting challenge & historical CPA baseline',
  'Campaign objective & Advantage+ setup',
  'Creative strategy, hooks & asset mix',
  'Pixel, CAPI & offline tracking setup',
  'Campaign testing & scaling period',
  'Verified advertising spend range',
  'Cost per result (CPA, CPQL, CPR)',
  'Revenue, AOV & verified ROAS',
  'Key optimization & fatigue decisions',
  'Final commercial business outcome',
]

const verifiedMetaCaseStudies = [
  {
    slug: 'sumons-aroma-messenger-commerce',
    client: "Sumon's Aroma & Sister Brands",
    category: 'Fragrance & D2C Commerce',
    image: '/growth-work/paid-ads/sumons-aroma.webp',
    outcome: '1.6M Impressions',
    stat: '<$0.10 Per Msg',
    spend: '$756.71 Across 36 Campaigns',
    desc: 'Frequent, low-cost creative refreshes across sister brands generated messaging conversations below $0.10, reaching over a million unique people with blended CPMs below $0.50.',
    metrics: [
      { val: '36', lbl: 'Campaigns' },
      { val: '$756.71', lbl: 'Spend' },
      { val: '1.6M', lbl: 'Impressions' },
      { val: '<$0.10', lbl: 'Cost / Msg' },
    ],
  },
  {
    slug: 'ruposhi-mart-meta-ads',
    client: 'Ruposhi Mart & Partner Brands',
    category: 'Fashion & E-Commerce',
    image: '/growth-work/paid-ads/ruposhi-mart.webp',
    outcome: '7.28M Impressions',
    stat: '1.8M People Reached',
    spend: '$6,315.66 Across 138 Campaigns',
    desc: 'Six apparel & beauty brands managed across 138 campaigns. Catalog sales and broad targeting maintained high reach and low CPMs across sustained retail cycles.',
    metrics: [
      { val: '138', lbl: 'Campaigns' },
      { val: '$6,315.66', lbl: 'Spend' },
      { val: '7.28M', lbl: 'Impressions' },
      { val: '1.8M', lbl: 'Reach' },
    ],
  },
  {
    slug: 'rihawebtech-meta-ads',
    client: 'Riha Webtech',
    category: 'B2B Digital Services',
    image: '/growth-work/paid-ads/riha-webtech.webp',
    outcome: '275K Impressions',
    stat: '$0.04 Min Cost / Msg',
    spend: '$431 Across 18 Campaigns',
    desc: 'One creative angle per service line gave Meta cleaner intent signals, driving qualified business inquiries at $0.04 to $0.15 per conversation.',
    metrics: [
      { val: '18', lbl: 'Campaigns' },
      { val: '$431', lbl: 'Spend' },
      { val: '275K', lbl: 'Impressions' },
      { val: '$0.04', lbl: 'Min Cost' },
    ],
  },
  {
    slug: 'rpl-consultancy-meta-ads',
    client: 'RPL Consultancy',
    category: 'Overseas Visa Consultancy',
    image: '/growth-work/paid-ads/rpl-consultancy.webp',
    outcome: '$1.42 Cost Per Lead',
    stat: '1.15M Impressions',
    spend: '$273.17 Across 8 Campaigns',
    desc: 'Lead-form campaigns converted qualified visa applicants at $1.42 per lead. Awareness campaigns reached 329,646 people using ad-set budget optimization.',
    metrics: [
      { val: '8', lbl: 'Campaigns' },
      { val: '$273.17', lbl: 'Spend' },
      { val: '1.15M', lbl: 'Impressions' },
      { val: '$1.42', lbl: 'Cost / Lead' },
    ],
  },
]

export default function Results() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Meta Ads Results &amp;{' '}
            <span className="italic text-frame-accent">Case Studies.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Real campaigns managed across fragrance, fashion retail, B2B services, and education consultancy. We present verified Meta Ads performance with full commercial context, honest spend figures, and documented business outcomes.
          </p>
        </div>

        {/* Live Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {verifiedMetaCaseStudies.map((study) => (
            <article
              key={study.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-300 hover:border-white/[0.16]"
            >
              <div>
                {/* Image & Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/[0.08] bg-zinc-950">
                  <Link href={`/case-studies/${study.slug}`} className="block h-full w-full">
                    <img
                      src={study.image}
                      alt={`${study.client} Meta Ads performance`}
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

                  <div className="absolute inset-x-4 bottom-3 flex items-center justify-between">
                    <span className="font-mono text-xs text-zinc-300">
                      {study.spend}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-xl font-medium text-white group-hover:text-frame-accent transition-colors">
                        <Link href={`/case-studies/${study.slug}`}>
                          {study.client}
                        </Link>
                      </h3>
                      <div className="mt-1 flex items-baseline gap-3">
                        <span className="font-mono text-2xl font-bold text-white">
                          {study.outcome}
                        </span>
                        <span className="font-mono text-xs text-frame-accent">({study.stat})</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {study.desc}
                  </p>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-4 gap-2 border-t border-white/[0.06] pt-4 text-center">
                    {study.metrics.map((m, idx) => (
                      <div key={idx} className="rounded-lg border border-white/[0.04] bg-[#18181B] p-2">
                        <div className="font-heading text-sm font-semibold text-white">{m.val}</div>
                        <div className="font-mono text-[10px] uppercase text-zinc-400">{m.lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="border-t border-white/[0.08] bg-[#18181B]/50 px-6 py-3.5 flex items-center justify-between">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-frame-accent hover:text-white transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <span className="font-mono text-[10px] text-zinc-400 uppercase">First-Party Data</span>
              </div>
            </article>
          ))}
        </div>

        {/* 13 Documented Evidence Standards & Portfolio Anchor Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-start">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 rounded-xl border border-white/[0.08] bg-[#121214] p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                Our 13 Case Study Verification Variables
              </span>
              <BarChart3 className="h-4 w-4 text-frame-accent" />
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              Where verified Framecipher case studies are published, we document every variable so you understand the exact conditions and levers behind the performance:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono text-zinc-300">
              {caseStudyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 rounded-lg border border-white/[0.04] bg-[#09090B] p-3"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                  <span className="leading-snug">{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Lifetime Portfolio Card & CTA (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 space-y-4">
              <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                Facebook &amp; Instagram Ads Portfolio
              </h3>
              <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                Across 334 campaigns and $9,988.16 in managed ad spend, these accounts generated over 14 million impressions and reached more than 5.5 million people with creative-led delivery architectures.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="border-l-2 border-frame-accent pl-3">
                  <span className="block font-heading text-lg font-bold text-white">14M+</span>
                  <span className="text-zinc-400 uppercase text-[10px]">Impressions</span>
                </div>
                <div className="border-l-2 border-frame-accent pl-3">
                  <span className="block font-heading text-lg font-bold text-white">5.5M+</span>
                  <span className="text-zinc-400 uppercase text-[10px]">People Reached</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border-l-2 border-frame-accent border-white/[0.08] bg-[#121214] p-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-frame-accent">
                <ShieldCheck className="h-4 w-4 text-frame-accent" />
                <span>Zero Faked Metrics Policy</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                We do not publish performance figures that cannot be verified by underlying ad account exports or client-approved analytics data.
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <PosterButton href="/case-studies/facebook-instagram-ads-portfolio" variant="accent" className="w-full justify-center">
                View 7-Account Meta Portfolio &rarr;
              </PosterButton>
              <PosterButton href="/case-studies" variant="outline" className="w-full justify-center">
                Explore All Client Case Studies &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
