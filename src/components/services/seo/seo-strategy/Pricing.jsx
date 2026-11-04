'use client'

import React from 'react'
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const plans = [
  {
    name: 'Strategy Session',
    price: '৳25,000',
    period: 'one-time',
    type: 'Single Roadmap',
    bestFor: 'Businesses needing high-level direction once',
    description:
      'A defined sprint with a clear start and end point, suited to businesses that can execute independently with their internal team afterward.',
    covered: 'Single roadmap development, one strategy walkthrough session',
    features: [
      'Discovery & initial business assessment',
      'Written Strategy & Prioritization Documentation',
      'Single 30/60/90-day actionable roadmap',
      'Live Strategy Walkthrough Video Session',
      '2-week asynchronous follow-up Q&A',
    ],
    highlight: false,
  },
  {
    name: 'Audit-to-Roadmap Package',
    price: '৳45,000',
    period: 'one-time',
    type: 'Full Diagnosis + Plan',
    bestFor: 'Businesses with an audit but no clear next steps',
    description:
      'Transforms diagnostic findings—ours or a previous vendor’s—into an empirical, prioritized, and sequenced execution plan.',
    covered: 'Full technical & content audit plus translated, sequenced execution plan',
    features: [
      'Comprehensive Technical, Content & Backlink Audit',
      'Competitor SERP Share & Content Gap Analysis',
      'Impact vs. Effort Prioritization Matrix',
      'Sequenced 90-day Engineering & Content Roadmap',
      'Executive Strategy Walkthrough & Q&A Session',
      '30-day Post-Delivery Implementation Support',
    ],
    highlight: true,
  },
  {
    name: 'Fractional Advisory',
    price: '৳40,000',
    period: '/month',
    type: 'Ongoing Retainer',
    bestFor: 'Businesses with an internal team needing senior direction',
    description:
      'Ongoing, senior-level strategic guidance without the long-term overhead and equity cost of a full-time in-house executive.',
    covered: 'Ongoing strategic guidance, quarterly reviews, team alignment',
    features: [
      'Bi-weekly strategic direction & check-in calls',
      'Direct guidance for internal marketing & dev teams',
      'Quarterly in-depth roadmap calibration reviews',
      'Google algorithm update response & triage',
      'Executive performance & attribution reporting',
      'Ongoing Slack / asynchronous advisory channel',
    ],
    highlight: false,
  },
  {
    name: 'Team Training & Enablement',
    price: 'Custom',
    period: 'quote',
    type: 'Custom Scope',
    bestFor: 'Businesses building internal SEO capability',
    description:
      'Hands-on training sessions, custom SOP documentation, and workflow setups that build permanent internal SEO capacity.',
    covered: 'Custom training workshops, SOP documentation, workflow setup',
    features: [
      'Customized curriculum tailored to your industry',
      'Hands-on technical SEO & content optimization workshops',
      'Internal tool stack configuration (GSC, GA4, Screaming Frog)',
      'Custom Standard Operating Procedures (SOPs) & playbooks',
      'Post-training capability audit & follow-up reviews',
    ],
    highlight: false,
  },
]

const includedAtEveryTier = [
  'Discovery & Business Target Assessment',
  'Written Strategy & Architectural Documentation',
  'Live Strategy Walkthrough Presentation Session',
  'Follow-Up Asynchronous Technical Q&A Support',
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Investment &amp; Scope
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Transparent <span className="italic text-frame-accent">SEO Strategy Pricing</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Strategy and consulting pricing depends on your selected engagement model. A one-time project, ongoing fractional advisory, or custom team training each carry distinct scope and deliverable commitments.
          </p>
        </div>

        {/* 4-Tier Pricing Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-2xl border p-7 transition-all duration-300 md:p-8 ${
                plan.highlight
                  ? 'border-frame-accent/60 bg-[#16141F] shadow-[0_0_40px_rgba(159,103,255,0.12)] ring-1 ring-frame-accent/40'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.16] hover:bg-[#151518]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full border border-frame-accent/50 bg-frame-accent px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                  <Sparkles className="h-3 w-3" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <span className="font-mono text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                  {plan.type}
                </span>

                <h3 className="mt-2 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {plan.name}
                </h3>

                <p className="mt-2 text-xs font-normal leading-relaxed text-zinc-400">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-5 border-y border-white/[0.08] py-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="font-mono text-xs text-zinc-400 uppercase">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-xs font-mono text-emerald-400">
                    Best for: {plan.bestFor}
                  </p>
                </div>

                {/* Features List */}
                <div className="mt-5 space-y-2.5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                    Deliverables Included:
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <PosterButton
                  href="/contact"
                  variant={plan.highlight ? 'primary' : 'outline'}
                  className="w-full justify-center"
                >
                  Choose {plan.name} &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Universal Guarantee & Included-at-Every-Tier Banner */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-frame-accent">
                <ShieldCheck className="h-4 w-4" />
                <span>Included At Every Tier Guarantee</span>
              </div>
              <h3 className="font-heading text-2xl font-medium tracking-tight text-white">
                Every Strategy Is Delivered With Executive Rigor
              </h3>
              <p className="text-sm font-normal leading-relaxed text-zinc-400">
                Regardless of package tier or scope, we never hand over an unvetted document or leave you without implementation clarity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {includedAtEveryTier.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                    <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center gap-3">
              <p className="text-xs font-mono text-zinc-400 lg:text-right">
                Need a hybrid model combining fractional strategy with tactical implementation?
              </p>
              <PosterButton href="/contact">
                Get a Custom Scope &rarr;
              </PosterButton>
            </div>
          </div>
        </div>

        {/* Market Disclaimer */}
        <p className="mt-8 text-center font-mono text-xs text-zinc-500">
          * Figures above represent starting market references. Final pricing is formally confirmed after scoping internal team capacity and technical roadmap complexity.
        </p>
      </div>
    </section>
  )
}
