import React from 'react'
import { CheckCircle2, Clock } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const plans = [
  {
    name: 'Diagnostic Review',
    price: '৳25,000+',
    type: 'Starting Price',
    delivery: '~1 week',
    description: 'Full investigation and documented determination of the likely cause.',
    features: [
      'Search Console and analytics evidence audit',
      'Manual Action and Security Issues report check',
      'Timing correlation with relevant Google updates',
      'Affected pages and queries assessment',
      'Basic technical and migration signal checks',
      'Written root cause diagnosis report',
      'Prioritized recovery plan roadmap',
    ],
  },
  {
    name: 'Manual Action Recovery',
    price: '৳60,000+',
    type: 'Starting Price',
    delivery: '~2–4 weeks of prep',
    highlight: true,
    description: 'Diagnosis, violation-specific remediation, documentation, and reconsideration support.',
    features: [
      'Everything included in Diagnostic Review',
      'Violation-specific remediation planning & execution',
      'Content, technical, or link-related fixes as required',
      'Unnatural link investigation and disavow guidance',
      'Reconsideration request documentation & submission prep',
      'Pre-submission compliance review',
      'Post-submission review monitoring',
    ],
  },
  {
    name: 'Google Update / Algorithmic Recovery',
    price: '৳80,000+',
    type: 'Starting Price',
    delivery: '~6–12+ weeks',
    description: 'Diagnosis, content/technical improvements, competitive analysis, and monitoring.',
    features: [
      'Everything included in Diagnostic Review',
      'People-first content quality & depth assessment',
      'Page-level and query-level improvement plan',
      'SERP and competitive gap reassessment',
      'Technical SEO, crawlability, and UX validation',
      'Sustained multi-week recovery monitoring',
      'Reassessment as new Google data becomes available',
    ],
  },
  {
    name: 'Complex / Multi-Issue Recovery',
    price: 'Custom Quote',
    type: 'Tailored Scope',
    delivery: 'Scope dependent',
    description: 'Large websites, multiple causes, migrations, or combined recovery work.',
    features: [
      'Multi-domain or large enterprise site architecture',
      'Combined manual action + core update decline',
      'Complex failed migration reversal & restructure',
      'Hacked content & security violation cleanup',
      'Dedicated engineering and editorial squad',
      'Executive reporting and SLA monitoring',
    ],
  },
]

const includedItems = [
  'Diagnostic investigation',
  'Written findings report',
  'Prioritized recovery plan',
  'Remediation documentation',
  'Pre-submission review for manual actions',
  'Recovery monitoring based on the selected scope',
]

export default function Pricing() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Investment &amp; Timelines
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Google Penalty Recovery Pricing &amp; Timeline
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Pricing depends on the type of issue, the number of affected pages, the level of remediation required, site size, and whether reconsideration support is necessary.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-2xl border p-6 sm:p-7 transition-colors ${
                plan.highlight
                  ? 'border-frame-accent/60 bg-[#151518] shadow-lg ring-1 ring-frame-accent/20'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.16]'
              }`}
            >
              <div>
                {plan.highlight && (
                  <span className="inline-block mb-3 rounded-full bg-frame-accent/15 border border-frame-accent/30 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-frame-accent uppercase tracking-wider">
                    Most Requested
                  </span>
                )}

                <h3 className="font-heading text-xl font-semibold text-white">
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {plan.price}
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                  <Clock className="h-3.5 w-3.5 text-frame-accent" />
                  <span>Typical timeline: {plan.delivery}</span>
                </div>

                <p className="mt-4 text-xs text-zinc-300 leading-relaxed border-t border-white/[0.06] pt-4">
                  {plan.description}
                </p>

                <div className="mt-5 space-y-2.5 text-xs text-zinc-300">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <PosterButton
                  href="/contact"
                  variant={plan.highlight ? 'primary' : 'outline'}
                  className="w-full justify-center"
                >
                  Get Started &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Included Where Applicable Box */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <h4 className="font-heading text-base sm:text-lg font-semibold text-white mb-4">
            Included where applicable across all engagements:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm text-zinc-300">
            {includedItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-zinc-400 text-center sm:text-left">
              Need a custom scope for enterprise or multi-country recovery?
            </span>
            <PosterButton href="/contact">
              Get a Custom Quote &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
