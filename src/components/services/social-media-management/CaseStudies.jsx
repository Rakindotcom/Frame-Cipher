'use client'

import React from 'react'
import Link from 'next/link'
import { TrendingUp, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import PosterButton from '../../home/PosterButton'

const socialCaseStudies = [
  {
    slug: 'dr-ferdoush-saleheen',
    client: 'Dr. Ferdoush Saleheen',
    category: 'YouTube Channel Growth & Personal Branding',
    image: '/case-studies/ferdoush-saleheen/proof-youtube-analytics.webp',
    outcome: '108.9K+ Monthly Views (1 Lakh+)',
    stat: '15.3K Watch Hours & 7.2M+ FB Views',
    timeline: 'April to May 2026 (Ongoing)',
    desc: 'Scaled Dr. Ferdoush Saleheen from 400 subscribers, 368 lifetime watch hours, and roughly 7K monthly views to 108,887 views in 28 days (1 lakh+ views/month), 15.3K watch hours (>999% surge), and gained +1.2K subscribers in 28 days to cross 2,046 subscribers, alongside 7.2M+ views on Facebook.',
    metrics: [
      { val: '108.9K+', lbl: 'Monthly Views' },
      { val: '15.3K hrs', lbl: 'Watch Time' },
      { val: '2,046', lbl: 'Total Subs' },
      { val: '7.2M+', lbl: 'FB Views' },
    ],
  },
]

export default function CaseStudies() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               DOCUMENTED EVIDENCE · COMMERCIAL PROOF 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Organic Social Growth &amp;{' '}
            <span className="italic text-[#A855F7]">Case Studies.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Real organic social media management and high-retention video production. We document starting baselines, the strategy deployed, and verifiable distribution outcomes.
          </p>
        </div>

        {/* Featured Case Study Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {socialCaseStudies.map((study) => (
            <article
              key={study.slug}
              className="lg:col-span-12 group flex flex-col lg:flex-row overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-300 hover:border-white/[0.16]"
            >
              {/* Media Preview (5 cols) */}
              <div className="relative aspect-[16/10] lg:aspect-auto lg:w-5/12 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.08] bg-zinc-950">
                <Link href={`/case-studies/${study.slug}`} className="block h-full w-full">
                  <img
                    src={study.image}
                    alt={`${study.client} social media case study`}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
              </div>

              {/* Content & Metrics (7 cols) */}
              <div className="p-6 sm:p-8 lg:w-7/12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                      Timeline: {study.timeline}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-[#A855F7]">
                      <TrendingUp className="h-3.5 w-3.5" />
                      Verified Reach
                    </span>
                  </div>

                  <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                    {study.category}
                  </p>

                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white group-hover:text-[#A855F7] transition-colors">
                    <Link href={`/case-studies/${study.slug}`}>
                      {study.client}
                    </Link>
                  </h3>

                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-white">
                      {study.outcome}
                    </span>
                    <span className="font-mono text-xs text-[#A855F7]">({study.stat})</span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                    {study.desc}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/[0.06] pt-4">
                  {study.metrics.map((m, idx) => (
                    <div key={idx} className="rounded-lg border border-white/[0.04] bg-[#18181B] p-3 text-center">
                      <div className="font-heading text-base font-bold text-white">{m.val}</div>
                      <div className="font-mono text-[10px] uppercase text-zinc-400 mt-0.5">{m.lbl}</div>
                    </div>
                  ))}
                </div>

                {/* Read Case Study Button */}
                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#A855F7] hover:text-white transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="font-mono text-[10px] uppercase text-zinc-500">First-Party Data</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Action Callout */}
        <div className="flex flex-col gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
              Explore Our Full Archive
            </span>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Explore our case studies and video production portfolio across short-form reels, personal branding, corporate storytelling, and social commerce.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <PosterButton href="/case-studies" variant="outline">
              View All Case Studies
            </PosterButton>
            <PosterButton href="/projects#short-video-work" variant="accent">
              Explore Video Portfolio
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}

