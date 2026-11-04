'use client'

import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Local Search Audit',
    desc: 'We examine your existing Google Business Profile, website landing pages, citations, NAP consistency, review health, local competitors, and technical crawlability to establish an empirical performance baseline.',
  },
  {
    number: '02',
    title: 'Keyword & Competitor Analysis',
    desc: 'We identify neighborhood and service search terms that matter to your business, map commercial intent to specific assets, and analyze top local 3-Pack competitors to find exploitable visibility gaps.',
  },
  {
    number: '03',
    title: 'GBP & Website Optimization',
    desc: 'We optimize primary/secondary categories, service catalogues, descriptions, and media on your GBP, while optimizing on-page service/location landing pages, schema markup, and conversion paths on your site.',
  },
  {
    number: '04',
    title: 'Citation & Reputation Work',
    desc: 'We clean up inaccurate and duplicate citations across premier local and industry platforms, and implement policy-compliant customer feedback and review generation systems.',
  },
  {
    number: '05',
    title: 'Local Authority Development',
    desc: 'We earn localized backlinks through relevant local publications, trade associations, chamber of commerce listings, community sponsorships, and local digital PR.',
  },
  {
    number: '06',
    title: 'Geo-Grid Tracking & Refinement',
    desc: 'We continuously monitor geographic Map Pack rank movements across multi-kilometer geo-grids, analyzing drop-offs to refine local content, categories, and authority outreach.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Execution Methodology // Systematic Local Growth
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            How We Approach{' '}
            <span className="italic text-frame-accent">Local SEO</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Our process moves systematically from research and diagnosis to on-site implementation, citation authority, geo-grid tracking, and iterative local refinement.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                <span className="font-mono text-3xl font-light text-frame-accent">
                  {step.number}
                </span>

                <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-zinc-500">
                <span>Phase {step.number}</span>
                <span className="text-frame-accent">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
