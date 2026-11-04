'use client'

import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const plans = [
  {
    name: 'AdSense Readiness Audit',
    price: '৳8,000',
    period: '+',
    type: 'One-time',
    delivery: '~3–5 business days',
    bestFor: 'Publishers and business sites that want an honest readiness assessment before applying or reapplying',
    features: [
      'Website assessment against relevant AdSense requirements',
      'Content quality and originality review',
      'Policy and restricted-content check',
      'Site structure and navigation review',
      'Trust and transparency page review',
      'Technical access and eligibility check',
      'Written findings with prioritized recommendations',
    ],
    note: 'A defined preparation base: you understand exactly where the site stands and what will matter before you submit.',
    highlight: false,
  },
  {
    name: 'Standard Preparation',
    price: '৳20,000',
    period: '+',
    type: 'One-time',
    delivery: '~1–2 weeks',
    bestFor: 'Websites that pass the audit but need core content, page, and structural fixes before submission',
    features: [
      'Everything in AdSense Readiness Audit',
      'Core content quality improvements',
      'Trust and transparency page fixes where needed',
      'Navigation and internal linking corrections',
      'Broken link and unfinished section cleanup',
      'Policy compliance fixes',
      'Pre-application check before you submit',
    ],
    note: 'Covers the assessment plus the day-to-day fixes that most commonly block a first application.',
    highlight: true,
  },
  {
    name: 'Comprehensive Preparation',
    price: '৳35,000',
    period: '+',
    type: 'One-time',
    delivery: '~2–3 weeks',
    bestFor: 'Websites needing deeper content, policy, structure, technical, and readiness work before submission',
    features: [
      'Everything in Standard Preparation',
      'Deeper content rewriting and topical strengthening',
      'Full policy and restricted-content remediation',
      'Advanced site structure and URL improvements',
      'Technical setup and AdSense connection readiness',
      'Policy-readiness re-review after remediation',
      'Pre-submission review',
    ],
    note: 'Built for sites with several problem areas that need coordinated content, structural, and technical work.',
    highlight: false,
  },
  {
    name: 'Re-Application Support',
    price: '৳15,000',
    period: '+',
    type: 'One-time',
    delivery: '~1–2 weeks',
    bestFor: 'Publishers who have already been rejected and need targeted fixes before trying again',
    features: [
      'Rejection notice and account review',
      'Site condition diagnosis against the rejection',
      'Targeted remediation of the most relevant issues',
      'Prioritized fix plan',
      'Pre-submission review before reapplying',
      'Re-application guidance',
    ],
    note: 'Focused on reapplying with genuine fixes instead of resending the same application.',
    highlight: false,
  },
]

const includedAcross = [
  'Website assessment',
  'Written findings',
  'Priority recommendations',
  'Readiness guidance',
  'Pre-application review',
  'Re-application support where included in the selected package',
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Investment Structure // Transparent Plans</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            Google AdSense Approval{' '}
            <span className="italic text-frame-accent">Pricing &amp; Timeline</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Pricing depends on your website&apos;s current condition, the amount of remediation
            required, and whether this is a first application or a re-application after rejection.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-xl p-6 sm:p-8 transition-all ${
                plan.highlight
                  ? 'border-2 border-frame-accent bg-[#18181B] relative ring-1 ring-frame-accent/40'
                  : 'border border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                {plan.highlight && (
                  <span className="mb-3 inline-block rounded-full bg-frame-accent/20 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-frame-accent font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-lg font-medium tracking-tight text-white">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">{plan.period}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <span>{plan.type}</span>
                  <span>•</span>
                  <span>{plan.delivery}</span>
                </div>

                <p className="mt-4 text-xs font-normal leading-relaxed text-zinc-300 border-t border-white/[0.06] pt-3">
                  {plan.bestFor}
                </p>

                <ul className="mt-5 space-y-2 text-xs text-zinc-300">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 mt-0.5 text-frame-accent shrink-0" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-4">
                <p className="text-xs text-zinc-400 italic">
                  {plan.note}
                </p>
                <PosterButton href="/contact" variant={plan.highlight ? 'default' : 'outline'} className="w-full justify-center">
                  Get Started &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Included Across Section */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-4">
          <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase block">
            Included Across Applicable Packages:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {includedAcross.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <Check className="h-3.5 w-3.5 mt-0.5 text-frame-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
