'use client'

import React from 'react'
import { AlertCircle, ArrowRight, ShieldAlert } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const problems = [
  {
    num: '01',
    title: 'Irrelevant Search Traffic',
    symptom: 'High click volume, zero phone calls or leads',
    body: 'Not every click is a useful click. We identify search terms that attract traffic without meaningful commercial intent and use negative keywords, match-type strategy, campaign restructuring, and targeting adjustments to reduce avoidable waste.',
    fix: 'Negative keyword mining & exact/phrase match intent isolation',
  },
  {
    num: '02',
    title: 'Inaccurate Conversion Tracking',
    symptom: 'Inflated conversions or total data blackout',
    body: 'A campaign can appear successful or unsuccessful for the wrong reason when conversion data is incomplete, duplicated, misconfigured, or disconnected from the actual customer journey. We audit tracking before making major optimization decisions so the account is working with better signals.',
    fix: 'Server-side GTM audit, deduplication & Enhanced Conversions validation',
  },
  {
    num: '03',
    title: 'Poor Campaign Structure',
    symptom: 'Budgets swallowed by one keyword; no control',
    body: 'Overly broad structures can make it difficult to control budgets and understand performance. Overly fragmented structures can create unnecessary complexity and divide data across too many campaigns. We restructure accounts around meaningful business objectives, search themes, products, services, and markets.',
    fix: 'Theme-based segmentation & controlled budget allocation silos',
  },
  {
    num: '04',
    title: 'Weak Ad-to-Landing-Page Relevance',
    symptom: 'Low Quality Scores (1-4/10) & high CPC penalty',
    body: 'A relevant ad followed by an unrelated or difficult landing page creates friction. We review the path from search query to ad to landing page to conversion and identify mismatches that can weaken both user experience and campaign efficiency.',
    fix: 'Ad promise alignment, sub-second load times & conversion path optimization',
  },
  {
    num: '05',
    title: 'Shopping Feed & Product Data Issues',
    symptom: 'Disapproved items, missing GTINs, zero impressions',
    body: 'Incorrect or incomplete product information can affect how products are understood, matched, and advertised. We review Merchant Center data and product-level issues alongside campaign performance so ecommerce optimization is not limited to bid changes.',
    fix: 'Merchant Center feed sanitization, attribute enrichment & margin tiering',
  },
]

export default function ProblemsWeFix() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Common Google Ads{' '}
            <span className="italic text-frame-accent">Problems We Fix.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Many underperforming accounts are not failing because the offer is weak. They are failing because of structural, targeting, or tracking problems inside the account.
          </p>
        </div>

        {/* Modality 1 Architectural Divided Rows */}
        <div className="border border-white/[0.08] rounded-xl bg-[#121214] overflow-hidden divide-y divide-white/[0.08] mb-12">
          {problems.map((problem) => (
            <div
              key={problem.num}
              className="p-6 sm:p-8 lg:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-center">
                {/* Column 1: Number & Title (4 cols) */}
                <div className="lg:col-span-4 space-y-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    {problem.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-500">
                    Symptom: {problem.symptom}
                  </p>
                </div>

                {/* Column 2: Diagnosis Body (5 cols) */}
                <div className="lg:col-span-5">
                  <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    {problem.body}
                  </p>
                </div>

                {/* Column 3: The Framecipher Fix (3 cols) */}
                <div className="lg:col-span-3 lg:border-l lg:border-white/[0.08] lg:pl-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-frame-accent block mb-1">How We Fix It</span>
                  <p className="text-xs font-mono text-zinc-300 leading-relaxed">
                    {problem.fix}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Account Review Diagnostic Action Box */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white">
              Not sure which problem is draining your budget?
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Every engagement starts with a comprehensive account audit that identifies what is actually happening with your search terms, tracking accuracy, Quality Scores, and ad spend before any changes are made.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="accent">
              Get Your Free Account Audit &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
