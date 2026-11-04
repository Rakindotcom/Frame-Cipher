'use client'

import React from 'react'
import { Terminal, ShieldAlert, Cpu } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

export default function Overview() {
  return (
    <section className="relative isolate bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1 text-xs text-zinc-300 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Foundation // Technical Architecture
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Technical SEO That Fixes{' '}
            <span className="italic text-frame-accent">What Holds</span> Rankings Back
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Strong content cannot perform to its full potential when technical problems prevent search engines from accessing, rendering, or indexing important pages.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Full Verbatim Paragraphs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-zinc-300">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-5">
              <p>
                We start by identifying the issues that matter most to your website instead of applying the same checklist to every project. Our technical SEO work connects website infrastructure with search visibility, user experience, and long-term SEO performance.
              </p>
              <p>
                From crawl and indexation problems to Core Web Vitals, structured data, JavaScript rendering, and technical migrations, we focus on practical fixes that can be implemented and verified.
              </p>
            </div>

            {/* Quick architectural signals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-white/[0.06] bg-[#121214]/60 p-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-frame-accent">
                  <ShieldAlert className="h-4 w-4" />
                  <span>Evidence-Based Fixes</span>
                </div>
                <p className="mt-2 text-xs text-zinc-400">
                  Every recommendation is backed by real server, crawl, or rendering data rather than arbitrary checklist scores.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#121214]/60 p-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-frame-accent">
                  <Cpu className="h-4 w-4" />
                  <span>Direct Developer Handoff</span>
                </div>
                <p className="mt-2 text-xs text-zinc-400">
                  We write the code or deliver pull requests directly to your repo, closing the gap between audit and live deployment.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Diagnosis Card (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
              <Terminal className="h-3.5 w-3.5" />
              <span>Full Technical Audit</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white leading-snug">
              See what is actually blocking your rankings
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
              We review crawlability, indexation, performance, and architecture to identify the technical issues holding back your organic visibility before any work begins.
            </p>

            <div className="border-t border-white/[0.08] pt-6">
              <PosterButton href="/contact">
                Get Free Consultation &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
