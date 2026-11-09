'use client'

import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const planTableRows = [
  {
    plan: 'Essential',
    price: '৳15,000/month',
    bestFor: 'Simple apps and lower-maintenance requirements',
    coverage: 'OS checks, monthly crash review, basic monitoring',
  },
  {
    plan: 'Standard',
    price: '৳30,000/month',
    bestFor: 'Native Android, iOS, and cross-platform apps',
    coverage: 'Bug fixes, regular monitoring, monthly reporting, minor feature updates',
    featured: true,
  },
  {
    plan: 'Growth',
    price: '৳50,000/month',
    bestFor: 'SaaS, ecommerce, and growing applications',
    coverage: 'Priority support, security patching, integration monitoring, expanded feature support',
  },
  {
    plan: 'Enterprise',
    price: 'Custom Pricing',
    bestFor: 'Complex applications and enterprise requirements',
    coverage: 'Custom maintenance scope, dedicated support structure, complex integrations, compliance-focused requirements',
  },
]

const detailedPlans = [
  {
    name: 'Essential Maintenance Plan',
    price: '৳15,000',
    cadence: '/month',
    badge: 'BASELINE SUPPORT',
    desc: 'Designed for simpler applications that require regular technical attention without extensive feature development.',
    includes: [
      'OS compatibility checks',
      'Monthly crash report review',
      'Basic application monitoring',
      'Routine maintenance review',
      'Technical support within the agreed scope',
    ],
    ctaText: 'Choose Essential',
    featured: false,
  },
  {
    name: 'Standard Maintenance Plan',
    price: '৳30,000',
    cadence: '/month',
    badge: 'Most Popular',
    desc: 'Suitable for applications that require regular bug-fix support and ongoing technical maintenance.',
    includes: [
      'Regular bug fixes',
      'Continuous monitoring',
      'OS and dependency maintenance',
      'Monthly reporting',
      'Minor feature updates',
      'Technical support',
    ],
    ctaText: 'Choose Standard',
    featured: true,
  },
  {
    name: 'Growth Maintenance Plan',
    price: '৳50,000',
    cadence: '/month',
    badge: 'High Activity',
    desc: 'Designed for applications with more active users, integrations, or ongoing product requirements.',
    includes: [
      'Priority support',
      'Security patching',
      'Integration monitoring',
      'Expanded feature support',
      'Performance maintenance',
      'Regular technical review',
      'Monthly reporting',
    ],
    ctaText: 'Choose Growth',
    featured: false,
  },
  {
    name: 'Enterprise Maintenance Plan',
    price: 'Custom',
    cadence: 'Pricing',
    badge: 'DEDICATED SQUAD',
    desc: 'Enterprise applications often require a maintenance model based on their architecture, integrations, security requirements, user volume, and operational processes.',
    includes: [
      'Dedicated maintenance capacity',
      'Complex integration monitoring',
      'Advanced infrastructure requirements',
      'Compliance-related maintenance',
      'Custom support workflows',
      'Planned feature development',
      'Custom reporting requirements',
      'Final scope & pricing defined after assessment',
    ],
    ctaText: 'Request Enterprise Scope',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate border-b border-white/10 bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            App Maintenance Pricing &amp; Plans.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            The cost of app maintenance depends on the platform, codebase condition, application complexity, integrations, support scope, and required development capacity. Our current maintenance plans are structured for different levels of ongoing support.
          </p>
        </div>

        {/* 1. Comparison Summary Table on #0D0D0F */}
        <div className="relative mb-14 overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#121214] font-mono text-xs uppercase tracking-wider text-zinc-400">
                  <th className="p-4 sm:p-5">Plan</th>
                  <th className="p-4 sm:p-5">Price</th>
                  <th className="p-4 sm:p-5">Best For</th>
                  <th className="p-4 sm:p-5">Core Coverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm">
                {planTableRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      row.featured ? 'bg-purple-600/10' : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <td className="p-4 sm:p-5 font-mono font-medium text-white">
                      {row.plan}
                    </td>
                    <td className="p-4 sm:p-5 font-mono text-xs font-semibold text-purple-400 whitespace-nowrap">
                      {row.price}
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-300 text-xs sm:text-sm">
                      {row.bestFor}
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-400 text-xs sm:text-sm">
                      {row.coverage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. Detailed Plan Cards (4 Cards) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {detailedPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border p-6 sm:p-7 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent ${
                plan.featured
                  ? 'border-purple-600/40 bg-[#121214] shadow-[0_20px_50px_rgba(147,51,234,0.15)] hover:border-purple-600/60 hover:bg-[#161619]'
                  : 'border-white/10 bg-[#0D0D0F] hover:border-white/20 hover:bg-[#121214]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider ${
                      plan.featured ? 'text-purple-400 font-medium' : 'text-zinc-500'
                    }`}
                  >
                    {plan.badge}
                  </span>
                  {plan.featured && (
                    <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                  )}
                </div>

                <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-mono text-3xl font-semibold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    {plan.cadence}
                  </span>
                </div>

                <p className="mt-3 text-xs text-zinc-300 leading-relaxed min-h-[48px]">
                  {plan.desc}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 block mb-3">
                    Includes:
                  </span>
                  <ul className="space-y-2.5 text-xs text-zinc-300">
                    {plan.includes.map((inc, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 shrink-0 text-purple-400 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <PosterButton
                  href="/contact"
                  variant={plan.featured ? 'primary' : 'outline'}
                  className="w-full justify-center h-[52px]"
                >
                  {plan.ctaText}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center font-mono text-xs text-zinc-400">
          * Final scope, SLA response times, and monthly pricing are confirmed after an initial application codebase assessment.
        </p>
      </div>
    </section>
  )
}
