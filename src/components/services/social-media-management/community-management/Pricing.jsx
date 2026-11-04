import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const plans = [
  {
    number: '01',
    tier: 'Starter Ops',
    name: 'Essential',
    price: '৳12,000/month',
    bestFor: 'Small businesses with moderate interaction volume',
    coverage: '2 platforms, standard business-hours response, comment & message management',
    featured: false,
    features: [
      '2 active platforms',
      'Standard business-hours response',
      'Comment & message management',
      'Response tone consistency',
      'Basic escalation routing',
    ],
  },
  {
    number: '02',
    tier: 'Active Channels',
    name: 'Growth',
    price: '৳22,000/month',
    bestFor: 'Businesses with active community interaction',
    coverage: 'Up to 4 platforms, faster response coverage, review management, escalation workflow',
    featured: true,
    features: [
      'Up to 4 platforms',
      'Faster response coverage',
      'Review monitoring & response',
      'Structured escalation workflow',
      'Moderation & spam filtering',
    ],
  },
  {
    number: '03',
    tier: 'High Velocity',
    name: 'Priority Coverage',
    price: '৳35,000/month',
    bestFor: 'Businesses where response speed is important',
    coverage: 'Multi-platform coverage, extended response coverage, review management, advanced escalation',
    featured: false,
    features: [
      'Multi-platform coverage',
      'Extended response coverage',
      'Review management & escalation',
      'Advanced escalation & tracking',
      'Social listening & sentiment signals',
    ],
  },
  {
    number: '04',
    tier: 'Custom Scale',
    name: 'Enterprise',
    price: 'Custom Quote',
    bestFor: 'Large or complex community operations',
    coverage: 'High-volume interactions, multiple markets, custom workflows, dedicated escalation',
    featured: false,
    features: [
      'High-volume interactions',
      'Multiple global markets & time zones',
      'Custom response & moderation workflows',
      'Dedicated escalation & account management',
      'Comprehensive monthly reporting & audits',
    ],
  },
]

const includedAcrossPlans = [
  'Community audit',
  'Comment monitoring',
  'Message management',
  'Review monitoring',
  'Response guidelines',
  'Escalation workflow',
  'Moderation support',
  'Community reporting',
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-20 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Community management{' '}
              <span className="italic text-frame-accent">pricing.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Community management pricing depends on platform count, interaction volume, response coverage, moderation requirements, review management, and escalation complexity.
          </p>
        </div>

        {/* Modality 2 Architectural Divided Column Band (4-Column Continuum) */}
        <div className="grid grid-cols-1 border border-white/[0.08] rounded-xl bg-[#121214] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-7 sm:p-8 flex flex-col justify-between transition-colors duration-200 ${
                plan.featured ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-frame-accent">
                    {plan.tier}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 tabular-nums">
                    {plan.number}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-medium text-white">
                  {plan.name}
                </h3>

                <p className="mt-3 font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white tabular-nums">
                  {plan.price}
                </p>

                <p className="mt-2 text-xs font-medium text-frame-accent">
                  {plan.bestFor}
                </p>

                <div className="mt-6 border-t border-white/[0.08] pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-zinc-500 block">
                    Coverage Scope
                  </span>
                  <p className="mt-1 text-xs font-normal leading-relaxed text-zinc-300">
                    {plan.coverage}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/[0.08] pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-zinc-500 block">
                    Key Deliverables
                  </span>
                  <ul className="mt-3 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-xs font-normal text-zinc-300"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-6">
                <PosterButton
                  href="/contact"
                  variant={plan.featured ? 'accent' : 'outline'}
                  className="w-full justify-center"
                >
                  Select Plan &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Included Across Standard Plans Container */}
        <div className="relative overflow-hidden mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/50 before:to-transparent">
          <h3 className="font-heading text-lg font-medium text-white">
            Included Across Standard Plans
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {includedAcrossPlans.map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/[0.08] bg-[#18181B] px-3 py-1.5 font-mono text-xs text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 border-t border-white/[0.06] pt-4">
            <p className="text-xs font-normal leading-relaxed text-zinc-400">
              <strong className="text-white">Pricing note:</strong> Final pricing depends on actual platform count, interaction volume, operating hours, language requirements, review coverage, moderation complexity, and agreed response standards. High-volume, crisis, or specialized support requirements may require a custom scope.
            </p>
          </div>
        </div>

        {/* Bottom Consultation Strip */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="max-w-2xl text-base font-normal leading-relaxed text-zinc-300">
            Need a tailored response SLA, multi-market coverage, or weekend monitoring?
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Get a Custom Community Management Quote &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
