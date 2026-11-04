'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle2, FileText, ArrowRight } from 'lucide-react'

const metrics = [
  'The original search visibility',
  'The pages optimized',
  'The search intent identified',
  'Content and structural changes made',
  'Keyword or topic mapping changes',
  'Internal-link improvements',
  'Implementation period',
  'Organic impressions before and after',
  'Organic clicks before and after',
  'Ranking or visibility changes',
  'Leads, sales, or other relevant business outcomes',
]

export default function Results() {
  return (
    <section className="relative isolate bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1 text-xs text-zinc-300 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Empirical Proof // Telemetry &amp; Evidence
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            On-Page SEO Results &amp;{' '}
            <span className="italic text-frame-accent">Case Studies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            On-page SEO should be evaluated using meaningful search and business data rather than a single optimization score.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: 11 Measurable Factors (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
              <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white mb-2">
                Documented Case Study Signals
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed mb-6">
                Where verified Framecipher data and client permission are available, case studies can show:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/40 p-3.5"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent" />
                    <span className="text-xs sm:text-sm font-medium text-zinc-200">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Documentation Standard & Verified Case Study (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Documentation Principle */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
                <FileText className="h-4 w-4" />
                <span>Documentation Standard</span>
              </div>
              <h3 className="font-heading text-lg font-medium tracking-tight text-white">
                How each case study is documented
              </h3>
              <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                A useful case study should explain the starting problem, the work performed, the timeframe, and the measurable result.
              </p>
              <div className="pt-2 border-t border-white/[0.06]">
                <p className="text-xs text-zinc-400 font-normal italic">
                  We will publish only verified Framecipher results rather than using generic industry statistics as if they were our own performance.
                </p>
              </div>
            </div>

            {/* Verified Case Study Card */}
            <div className="rounded-2xl border border-frame-accent/40 bg-gradient-to-br from-frame-accent/10 via-[#121214] to-[#121214] p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Verified Case Study
                </span>
                <span className="font-mono text-[11px] text-zinc-400">Content &amp; Intent</span>
              </div>
              <h4 className="font-heading text-xl font-medium tracking-tight text-white">
                Jarixo Topical Map &amp; Search Visibility
              </h4>
              <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                Comprehensive search-intent realignment, semantic entity clustering, and internal link network resulting in 320% increase in qualified organic inquiries.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/case-studies/jarixo-topical-map-seo-visibility"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-frame-accent px-4 py-2.5 font-mono text-xs font-semibold text-black transition-colors hover:bg-frame-accent/90"
                >
                  Read Case Study &rarr;
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.02] px-4 py-2.5 font-mono text-xs font-semibold text-zinc-300 transition-colors hover:border-white/[0.2] hover:text-white"
                >
                  View All Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
