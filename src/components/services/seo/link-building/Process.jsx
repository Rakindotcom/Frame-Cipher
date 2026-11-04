'use client'

import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Backlink Audit & Baseline',
    description:
      'We review your current backlink profile (referring domains, top linked pages, linking site relevance, anchor text, lost backlinks, and existing relationships). We cross-reference Google Search Console reports to map competitor gaps and risk areas before any outreach begins.',
  },
  {
    number: '02',
    title: 'Strategy & Target Selection',
    description:
      'We turn the audit into a campaign strategy: deciding which link opportunities matter most, which pages deserve authority, which outreach methods fit the industry, and which content assets need development, tailored to your actual business.',
  },
  {
    number: '03',
    title: 'Target Page & Link Destination Strategy',
    description:
      'Not every backlink should point to the homepage. We map links to suitable destinations (service page, research asset, guide, product or category page) based on topic, content strength, and commercial importance.',
  },
  {
    number: '04',
    title: 'Prospecting & Publisher Vetting',
    description:
      'We build and vet a prospect list against strict criteria: topic relevance, publication quality, audience fit, organic visibility, geographic alignment, content standards, and outbound-link behavior to avoid unsuitable websites.',
  },
  {
    number: '05',
    title: 'Outreach & Content Development',
    description:
      'Direct human outreach begins: editorial pitches, guest-content proposals, resource outreach, broken-link replacement, brand-mention requests, and digital PR. Content is written around the publisher and audience, not forced templates.',
  },
  {
    number: '06',
    title: 'Placement Verification',
    description:
      'A successful conversation is not a placement. We verify that the intended page is live, the link points to the correct destination with accurate context, the article is accessible, and the placement has not been altered.',
  },
  {
    number: '07',
    title: 'Reporting & Refinement',
    description:
      'We review campaign performance and adjust prospecting: expanding publisher categories, refining messaging, prioritizing different target pages, and reallocating effort toward stronger markets based on empirical campaign evidence.',
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
              Execution Methodology
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            How We Approach{' '}
            <span className="italic text-frame-accent">Off-Page SEO &amp; Link Building</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Every campaign begins with the existing situation. We do not start by assigning an arbitrary backlink quantity. The strategy evolves from campaign evidence rather than a fixed monthly checklist.
          </p>
        </div>

        {/* 7-Step Process Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                  {step.description}
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
