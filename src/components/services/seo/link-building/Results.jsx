'use client'

import React from 'react'
import { CheckCircle } from 'lucide-react'

const caseStudyFields = [
  { name: 'Client / Industry', desc: 'Business type, geographic market, and niche competition context.' },
  { name: 'Starting Situation', desc: 'Existing backlink profile baseline, visibility gaps, or authority deficit.' },
  { name: 'Campaign Objective', desc: 'Specific priority target pages, market focus, or competitor authority gap addressed.' },
  { name: 'Strategy', desc: 'Tailored mix of manual outreach, reclamation, guest content, digital PR, or citations.' },
  { name: 'Implementation', desc: 'High-value content assets created, editorial publishers pitched, and destinations supported.' },
  { name: 'Campaign Period', desc: 'Documented timeline and outreach duration for full transparency.' },
  { name: 'Link Acquisition', desc: 'Verified live placements, referring domain metrics, and anchor distribution.' },
  { name: 'Search Performance', desc: 'Empirical Google Search Console changes in impressions, clicks, and rankings.' },
  { name: 'Business Outcome', desc: 'Verified inbound inquiries, qualified leads, sales, and demo requests attributed.' },
]

export default function Results() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Evidence-Based Performance
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Off-Page SEO Results &amp;{' '}
            <span className="italic text-frame-accent">Case Studies</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Our case studies show what was done, why it was done, and what changed. We only publish results verified through appropriate analytics, Search Console data, campaign records, or client-approved reporting.
          </p>
        </div>

        {/* 9 Verification Criteria Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudyFields.map((field, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/[0.08] bg-[#121214] p-5 flex items-start gap-4 hover:border-white/20 transition-colors"
            >
              <span className="font-mono text-xs font-semibold text-frame-accent mt-0.5">
                0{index + 1}
              </span>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-heading text-base font-medium text-white">
                    {field.name}
                  </h3>
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {field.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Standard Note */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm text-zinc-400 leading-relaxed">
            <span className="text-white font-medium">Strict Verification Policy:</span> We do not use simulated, estimated, or fabricated results. All published case studies undergo rigorous client review and verified data auditing before publication.
          </p>
        </div>
      </div>
    </section>
  )
}
