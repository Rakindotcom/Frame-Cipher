'use client'

import React from 'react'
import { TrendingUp, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import PosterButton from '../../../home/PosterButton'

const leadGenCaseStudies = [
  {
    slug: 'rpl-consultancy-meta-ads',
    client: 'RPL Consultancy',
    category: 'Immigration & Education Visa',
    image: '/growth-work/paid-ads/rpl-consultancy.webp',
    outcome: '$1.42 Cost Per Lead',
    stat: '663K+ People Reached',
    spend: '$273.17 Across 8 Campaigns',
    desc: 'Instant lead-form campaigns converted qualified Australian migration and study applicants at $1.42 per lead. Awareness campaigns reached 329,646 people using ad-set budget optimization.',
    metrics: [
      { val: '$1.42', lbl: 'Cost / Lead' },
      { val: '1.15M', lbl: 'Impressions' },
      { val: '663K', lbl: 'Reach' },
      { val: '$273', lbl: 'Total Spend' },
    ],
  },
  {
    slug: 'rihawebtech-meta-ads',
    client: 'Riha Webtech',
    category: 'B2B Digital Services',
    image: '/growth-work/paid-ads/riha-webtech.webp',
    outcome: '$0.04 Min Inquiring Lead',
    stat: '275K Impressions',
    spend: '$431 Across 18 Campaigns',
    desc: 'High-intent B2B service lead acquisition with separate creative angles per service tier, yielding qualified enterprise discussions at $0.04 to $0.15 per conversation.',
    metrics: [
      { val: '$0.04', lbl: 'Min Cost' },
      { val: '275K', lbl: 'Impressions' },
      { val: '18', lbl: 'Campaigns' },
      { val: '$431', lbl: 'Total Spend' },
    ],
  },
  {
    slug: 'ipb-edu-happy-tours-meta-ads',
    client: 'IPB Edu & Happy Tours',
    category: 'Education & Tour Consultancy',
    image: '/growth-work/paid-ads/ipb-happy-tours.webp',
    outcome: '$0.09 - $0.15 Per Inquiry',
    stat: '1.83M Impressions',
    spend: '$1,141.45 Across 37 Campaigns',
    desc: 'Generated steady student visa consultations and travel booking inquiries with rapid weekly creative refreshes, outperforming competitors on modest daily ad budgets.',
    metrics: [
      { val: '$0.09', lbl: 'Min Cost / Msg' },
      { val: '1.83M', lbl: 'Impressions' },
      { val: '37', lbl: 'Campaigns' },
      { val: '$1,141', lbl: 'Total Spend' },
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
            Lead Generation{' '}
            <span className="italic text-frame-accent">Case Studies.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Real B2B and high-ticket service lead generation campaigns with verified spend figures, cost-per-lead benchmarks, and documented qualification outcomes.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {leadGenCaseStudies.map((study) => (
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
                      alt={`${study.client} lead generation performance`}
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

        {/* Verification Guarantee & Case Studies Hub Action Bar */}
        <div className="flex flex-col gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-frame-accent">
              <ShieldCheck className="h-4 w-4" />
              <span>Full Qualification Context Guarantee</span>
            </div>
            <p className="text-sm text-zinc-300 max-w-xl font-normal leading-relaxed">
              We never report vanity click counts or low-intent raw form totals. Every case study documents the offer, targeting structure, qualification logic, and CRM verification.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <PosterButton href="/case-studies" variant="outline">
              View All Case Studies &rarr;
            </PosterButton>
            <PosterButton href="/contact" variant="accent">
              Get Free Lead Audit &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}

