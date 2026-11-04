'use client'

import React from 'react'
import { TrendingUp, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import PosterButton from '../../../home/PosterButton'

const remarketingCaseStudies = [
  {
    slug: 'sumons-aroma-messenger-commerce',
    client: "Sumon's Aroma & Sister Brands",
    category: 'Dynamic Catalog Retargeting',
    image: '/growth-work/paid-ads/sumons-aroma.webp',
    outcome: '1.6M Impressions',
    stat: '<$0.10 Per Re-Engagement',
    spend: '$756.71 Across 36 Campaigns',
    desc: 'Conversational re-engagement sequences and catalog drop-off recovery across partner fragrance lines, driving messaging interactions below $0.10 with high checkout completion.',
    metrics: [
      { val: '<$0.10', lbl: 'Cost / Re-Engage' },
      { val: '36', lbl: 'Campaigns' },
      { val: '1.6M', lbl: 'Impressions' },
      { val: '$756', lbl: 'Total Spend' },
    ],
  },
  {
    slug: 'ruposhi-mart-meta-ads',
    client: 'Ruposhi Mart & Partner Brands',
    category: 'Fashion Multi-Brand Retargeting',
    image: '/growth-work/paid-ads/ruposhi-mart.webp',
    outcome: '7.28M Impressions',
    stat: '1.8M Unique Reach',
    spend: '$6,315.66 Across 138 Campaigns',
    desc: 'Multi-brand catalog retargeting with strict past-buyer exclusions. Maintained low frequency across 6 lifestyle brands while scaling repeat purchases throughout seasonal collections.',
    metrics: [
      { val: '7.28M', lbl: 'Impressions' },
      { val: '1.8M', lbl: 'Audience Reach' },
      { val: '138', lbl: 'Campaigns' },
      { val: '$6,315', lbl: 'Total Spend' },
    ],
  },
  {
    slug: 'luxury-beauty-rwt-meta-ads',
    client: 'Luxury Beauty - RWT',
    category: 'Direct-Response Retargeting',
    image: '/growth-work/paid-ads/luxury-beauty-rwt.webp',
    outcome: 'Single-Digit CPA',
    stat: '388K People Reached',
    spend: '$350.23 Across 23 Campaigns',
    desc: 'Short-cycle sales retargeting designed to eliminate audience fatigue. Re-engaged high-intent skincare browsers, delivering low single-digit acquisition cost per order.',
    metrics: [
      { val: 'Single-Digit', lbl: 'CPA per Order' },
      { val: '488K', lbl: 'Impressions' },
      { val: '388K', lbl: 'People Reached' },
      { val: '$350', lbl: 'Total Spend' },
    ],
  },
]

export default function CaseStudies() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Remarketing &amp; Retargeting{' '}
            <span className="italic text-frame-accent">Case Studies.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Real multi-brand e-commerce and direct-response remarketing campaigns built around dynamic catalogs, segmented behavioral windows, frequency caps, and documented customer acquisition metrics.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {remarketingCaseStudies.map((study) => (
            <article
              key={study.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-300 hover:border-white/[0.16]"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.08] bg-zinc-950">
                  <Link href={`/case-studies/${study.slug}`} className="block h-full w-full">
                    <img
                      src={study.image}
                      alt={`${study.client} remarketing performance`}
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

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading text-lg font-medium text-white group-hover:text-frame-accent transition-colors">
                      <Link href={`/case-studies/${study.slug}`}>
                        {study.client}
                      </Link>
                    </h3>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-mono text-xl font-bold text-white">
                        {study.outcome}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {study.desc}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 border-t border-white/[0.06] pt-3 text-center">
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
              <div className="border-t border-white/[0.08] bg-[#18181B]/50 px-6 py-3 flex items-center justify-between">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-frame-accent hover:text-white transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <span className="font-mono text-[10px] text-zinc-400 uppercase">First-Party Data</span>
              </div>
            </article>
          ))}
        </div>

        {/* Action Bar */}
        <div className="flex flex-col gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-frame-accent">
              <ShieldCheck className="h-4 w-4" />
              <span>Fatigue Prevention &amp; Privacy First</span>
            </div>
            <p className="text-sm text-zinc-300 max-w-xl font-normal leading-relaxed">
              We never show repetitive ads to past converters or unsegmented lists. Every campaign deploys strict recency windows and first-party suppression lists.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <PosterButton href="/case-studies" variant="outline">
              View All Case Studies &rarr;
            </PosterButton>
            <PosterButton href="/contact" variant="accent">
              Get Retargeting Audit &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}

