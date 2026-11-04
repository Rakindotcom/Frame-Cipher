'use client'

import React from 'react'
import { Percent, TrendingUp, Calculator, ShieldAlert, ArrowRight } from 'lucide-react'

const metrics = [
  {
    icon: Percent,
    title: 'ACOS (Advertising Cost of Sales)',
    formula: 'Ad Spend ÷ Attributed Ad Sales × 100%',
    role: 'Campaign Efficiency Metric',
    desc: 'Amazon defines ACOS as the standard benchmark to evaluate advertising efficiency. It is essential for campaign-level keyword and bid calibration, but it does not tell the whole business profitability story in isolation.',
  },
  {
    icon: TrendingUp,
    title: 'TACOS (Total Advertising Cost of Sales)',
    formula: 'Ad Spend ÷ Total Marketplace Revenue × 100%',
    role: 'Business Health & Organic Lift Metric',
    desc: 'TACOS compares total advertising spend against all sales (both ad-attributed and organic). A declining TACOS while total revenue climbs signals that paid velocity is boosting organic discovery and keyword rankings.',
  },
  {
    icon: Calculator,
    title: 'Break-Even ACOS',
    formula: 'Sale Price - (COGS + Amazon Referral Fee + FBA Fee) ÷ Sale Price',
    role: 'The Profit Threshold Boundary',
    desc: 'We model the exact break-even threshold for every hero SKU. An ad campaign operating beneath break-even generates net profit immediately; an aggressive launch campaign might temporarily run at break-even to build ranking velocity.',
  },
  {
    icon: ShieldAlert,
    title: 'Margin-Aware Optimization',
    formula: 'Contribution Margin Dollars > Pure Percentage Optimization',
    role: 'Holistic Growth Philosophy',
    desc: 'Our goal is not simply to chase the lowest possible ACOS. An artificially low ACOS often strangles revenue and allows competitors to capture market share. We balance target efficiency with overall dollar profit expansion.',
  },
]

export default function Economics() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            ACOS, TACOS &amp;{' '}
            <span className="italic text-frame-accent">Amazon Profitability.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Amazon advertising should never be evaluated through one isolated metric. We structure campaigns around your actual unit economics, Amazon fulfillment fees, and blended account contribution margins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {metrics.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                    {item.role}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium text-white mb-2">
                  {item.title}
                </h3>

                <div className="rounded-lg border border-white/[0.06] bg-black/40 px-3.5 py-2 font-mono text-xs text-zinc-300 mb-4">
                  <span className="text-frame-accent font-semibold">Formula: </span>
                  {item.formula}
                </div>

                <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Assessment Callout Banner */}
        <div className="rounded-2xl border border-frame-accent/30 bg-frame-accent/[0.05] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold">
              Economics Assessment
            </span>
            <h4 className="font-heading text-xl sm:text-2xl font-medium text-white">
              Evaluate Your True Amazon Contribution Margins
            </h4>
            <p className="text-sm text-zinc-300 font-normal leading-relaxed">
              We analyze your SKU-level gross margins, Amazon FBA fees, and return allowances to establish realistic, profitable ACOS and TACOS thresholds before spending ad dollars.
            </p>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-frame-accent px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-white hover:text-black shrink-0"
          >
            <span>Review Amazon Pricing</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
