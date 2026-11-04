'use client'

import React from 'react'
import { DollarSign, Filter, TrendingUp, Users, CheckCircle2, Award } from 'lucide-react'

const metrics = [
  {
    icon: Filter,
    title: 'Cost Per Qualified Lead (CPQL)',
    role: 'The True Efficiency Benchmark',
    formula: 'Total Ad Spend ÷ Verified Qualified Inquiries',
    desc: 'Measures the cost to acquire inquiries that meet agreed qualification criteria (budget, location, authority, need), filtering out raw submission noise.',
  },
  {
    icon: TrendingUp,
    title: 'Cost Per Opportunity',
    role: 'Pipeline Conversion Velocity',
    formula: 'Total Ad Spend ÷ Pipeline Sales Opportunities',
    desc: 'Connects advertising spend directly to genuine sales conversations where your team presents a formal proposal, contract, or demo.',
  },
  {
    icon: Award,
    title: 'Customer Acquisition Cost (CAC)',
    role: 'Commercial Business Reality',
    formula: 'Total Media Spend ÷ Verified Closed-Won Customers',
    desc: 'Brings advertising investments together with actual closed business, providing an unvarnished metric of customer acquisition economics.',
  },
  {
    icon: Users,
    title: 'Lead-to-Customer Close Rate',
    role: 'Sales-Marketing Feedback Loop',
    formula: '(Closed Customers ÷ Total Leads Generated) × 100%',
    desc: 'Compares close rates across channels, ad groups, and creative hooks to isolate which campaigns attract high-margin clients versus tire-kickers.',
  },
]

export default function Metrics() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Lead Quality Measurement:{' '}
            <span className="italic text-frame-accent">From Lead to Customer.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Lead generation reporting should reflect the full sales journey. We evaluate campaigns not by initial form submissions, but by the pipeline revenue they generate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {metrics.map((m) => {
            const Icon = m.icon
            return (
              <div
                key={m.title}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                    {m.role}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium text-white mb-2">
                  {m.title}
                </h3>

                <div className="rounded-lg border border-white/[0.06] bg-black/40 px-3.5 py-2 font-mono text-xs text-zinc-300 mb-4">
                  <span className="text-frame-accent font-semibold">Calculation: </span>
                  {m.formula}
                </div>

                <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  {m.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Closed-Loop Pipeline Callout */}
        <div className="rounded-2xl border border-frame-accent/30 bg-frame-accent/[0.05] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold">
              Closed-Loop Pipeline Tracking
            </span>
            <h4 className="font-heading text-xl sm:text-2xl font-medium text-white">
              Connect Advertising Directly to Closed Revenue
            </h4>
            <p className="text-sm text-zinc-300 font-normal leading-relaxed">
              We configure your ad tracking and CRM workflows so executive dashboards clearly illustrate which ad campaigns drove verified revenue, moving far beyond superficial form-fill counts.
            </p>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-frame-accent px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-white hover:text-black shrink-0"
          >
            <span>Review Growth Plans</span>
          </a>
        </div>
      </div>
    </section>
  )
}
