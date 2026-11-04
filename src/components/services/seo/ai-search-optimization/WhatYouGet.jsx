'use client'

import React from 'react'
import { Check } from 'lucide-react'

const deliverables = [
  {
    title: 'AI Visibility Baseline',
    body: 'A starting report showing where your brand appears, where competitors appear, what sources are cited, and which important queries currently show limited visibility.',
    points: [],
  },
  {
    title: 'Target Prompt & Query Set',
    body: 'A structured set of relevant prompts and queries covering:',
    points: [
      'Brand',
      'Services',
      'Products',
      'Commercial questions',
      'Comparisons',
      'Recommendations',
      'Informational topics',
      'Competitor-related searches',
    ],
    closing: 'The exact set depends on your business and target market.',
  },
  {
    title: 'Citation & Mention Report',
    body: 'A structured view of:',
    points: [
      'Brand mentions',
      'Citation sources',
      'Competitor mentions',
      'Query-level visibility',
      'Business-information accuracy',
      'Changes over time',
    ],
  },
  {
    title: 'Content & Entity Gap Analysis',
    body: 'We identify gaps involving:',
    points: [
      'Missing answers',
      'Weak topic coverage',
      'Unclear entities',
      'Inconsistent business information',
      'Missing supporting evidence',
      'Content competitors use successfully',
    ],
  },
  {
    title: 'AI-Ready Content Recommendations',
    body: 'Recommendations can cover:',
    points: [
      'Direct-answer sections',
      'Definitions',
      'FAQs',
      'Content structure',
      'Topic coverage',
      'Evidence',
      'Internal links',
      'Supporting pages',
      'Page-level improvements',
    ],
  },
  {
    title: 'Brand & Source Authority Plan',
    body: 'We identify credible opportunities to strengthen the information ecosystem around your business through:',
    points: [
      'Expert profiles',
      'Industry references',
      'Publications',
      'Digital PR',
      'Relevant third-party sources',
      'Brand consistency',
    ],
  },
  {
    title: 'Technical Recommendations',
    body: 'Depending on the audit scope, we can provide recommendations around:',
    points: [
      'Crawlability',
      'Indexation',
      'Structured data',
      'Internal linking',
      'Page accessibility',
      'Content structure',
      'Performance',
      'Technical SEO foundations',
    ],
  },
  {
    title: 'Ongoing Visibility Tracking',
    body: 'For ongoing engagements, we can monitor:',
    points: [
      'Prompt coverage',
      'AI mentions',
      'Citations',
      'Competitor visibility',
      'Source changes',
      'Search performance',
      'Relevant traffic and conversion signals',
    ],
  },
]

export default function WhatYouGet() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Artifacts &amp; Assets // Deliverables</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            What You Get With <span className="italic text-frame-accent">Framecipher</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Our deliverables are designed to turn AI-search research into a practical optimization
            plan.
          </p>
        </div>

        {/* 8 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 hover:border-white/[0.14] hover:bg-[#18181B] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
                  Item 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-base sm:text-lg font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>

                {item.points.length > 0 && (
                  <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4 text-xs text-zinc-300">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="h-3 w-3 mt-0.5 text-frame-accent shrink-0" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {item.closing && (
                <div className="mt-4 pt-3 border-t border-white/[0.06]">
                  <p className="text-xs text-zinc-400">
                    {item.closing}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
