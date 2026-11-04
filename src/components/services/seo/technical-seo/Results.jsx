'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle2, ShieldCheck, ArrowRight, BarChart3, FileText } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const metrics = [
  'Indexation improvements',
  'Crawlability improvements',
  'Core Web Vitals changes',
  'Organic clicks and impressions',
  'Organic traffic changes',
  'Ranking and page visibility changes',
  'Technical errors resolved',
  'Migration performance',
  'Qualified leads or conversions',
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
              Empirical Proof // Telemetry & Evidence
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Technical SEO Results &{' '}
            <span className="italic text-frame-accent">Case Studies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Technical SEO results should be measured using meaningful technical and business data rather than isolated audit scores.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: 9 Measurable Factors (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
              <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white mb-2">
                Measurable Technical Metrics
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed mb-6">
                Where verified data and client permission are available, case studies can document:
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
                Each case study should explain the initial technical problem, work performed, implementation period, and measurable outcome.
              </p>
              <div className="pt-2 border-t border-white/[0.06]">
                <p className="text-xs text-zinc-400 font-normal italic">
                  Only verified Framecipher results should be published here.
                </p>
              </div>
            </div>

            {/* Verified Case Study Card */}
            <div className="rounded-2xl border border-frame-accent/40 bg-gradient-to-br from-frame-accent/10 via-[#121214] to-[#121214] p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Verified Case Study
                </span>
                <span className="font-mono text-[11px] text-zinc-400">SEO & Architecture</span>
              </div>
              <h4 className="font-heading text-xl font-medium tracking-tight text-white">
                Jarixo Topical Map & Search Visibility
              </h4>
              <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                Full technical cleanup, internal link restructuring, and canonical mapping resulting in sustained organic discovery.
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
