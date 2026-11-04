'use client'

import React from 'react'
import { ShieldCheck, CheckCircle2, AlertTriangle } from 'lucide-react'

const commitments = [
  'Clear, business-aligned campaign objectives',
  'Reliable conversion measurement & CAPI validation',
  'Strategic, hypothesis-driven creative testing',
  'Ongoing campaign, ad set & creative analysis',
  'Disciplined budget management & pacing',
  'Advantage+ audience & placement delivery review',
  'Transparent, platform vs real revenue reporting',
  'Strategy adjustments based on empirical data',
]

const externalFactors = [
  'Product or service quality vs competitors',
  'Commercial offer strength & risk reversal',
  'Consumer pricing & unit margin elasticity',
  'Market demand, seasonality & category fatigue',
  'Post-click landing page speed & checkout UX',
  'Sales team response time on WhatsApp & leads',
]

export default function PerformanceCommitment() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Performance Expectations &amp;{' '}
            <span className="italic text-frame-accent">Service Commitment.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Meta Ads performance depends on more than campaign management. Your offer, pricing, creative, market demand, competition, landing-page experience, conversion rate, sales process, customer response time, advertising budget, and tracking quality all influence the outcome.
          </p>
        </div>

        {/* Modality 2 Symmetrical Two-Column Realistic Architecture Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-start">
          {/* Left Column: Realistic Factors & Honesty Guarantee (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 space-y-6">
              <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                Why We Never Promise Fake Fixed ROAS
              </h3>

              <div className="space-y-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                <p>
                  For that reason, we do not promise a fixed cost per lead, ROAS, revenue figure, or number of purchases before understanding your account history, audience size, and unit economics.
                </p>
                <p>
                  Where the economics of Meta advertising do not make commercial sense for your business, we would rather identify that early than encourage unnecessary ad spend.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block">
                  Variables Beyond The Ad Account:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                  {externalFactors.map((factor, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">•</span>
                      <span className="leading-snug">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Disciplined Process Commitments (6 cols) */}
          <div className="lg:col-span-6 rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                What We Strictly Commit To
              </span>
              <ShieldCheck className="h-4 w-4 text-frame-accent" />
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              A Disciplined Management Process
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              While auction competition and seasonal social trends fluctuate, our operational engineering discipline remains relentless:
            </p>

            <div className="space-y-3 pt-2">
              {commitments.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3.5 rounded-lg border border-white/[0.04] bg-[#09090B] p-3 text-xs sm:text-sm font-mono text-zinc-200"
                >
                  <span className="font-bold text-frame-accent shrink-0">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span className="leading-snug">{item}</span>
                  <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
