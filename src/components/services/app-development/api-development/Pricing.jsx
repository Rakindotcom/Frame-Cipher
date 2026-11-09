'use client'

import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const pricingTiers = [
  {
    name: 'Single Integration',
    price: '৳60,000',
    timeline: '~1–2 weeks',
    featured: false,
    drivers: 'One third-party service, standard authentication, basic testing',
    includes: [
      'One third-party service connection',
      'Standard authentication & token setup',
      'Request & response data mapping',
      'Basic error handling & status callbacks',
      'Integration testing & launch verification',
    ],
  },
  {
    name: 'Custom API (Standard)',
    price: '৳150,000',
    timeline: '~3–5 weeks',
    featured: true,
    drivers: 'REST or GraphQL API, moderate endpoint count, documentation included',
    includes: [
      'Contract-first REST or GraphQL API',
      'Authentication & role authorization',
      'Request validation & response formatting',
      'Pagination, filtering & error standards',
      'OpenAPI & Swagger documentation',
      'Production deployment & testing',
    ],
  },
  {
    name: 'Multi-System Integration',
    price: '৳280,000',
    timeline: '~5–8 weeks',
    featured: false,
    drivers: 'Multiple third-party systems, webhook handling, retry logic',
    includes: [
      'Multiple external system integrations',
      'Webhook handling & signature verification',
      'Idempotency & retry backoff queues',
      'Cross-system data synchronization',
      'Automated error alerts & monitoring',
      'Staging & production deployment',
    ],
  },
  {
    name: 'Complex / Enterprise Integration',
    price: 'Custom Quote',
    timeline: '~8+ weeks',
    featured: false,
    drivers: 'High-volume data sync, multiple legacy systems, compliance-related technical requirements',
    includes: [
      'High-concurrency data pipelines',
      'Multiple legacy databases & ERP connectors',
      'API gateway setup (Kong / AWS API Gateway)',
      'Enterprise rate limiting & mTLS security',
      'Full load, stress & penetration testing',
      'Dedicated SLA & custom maintenance',
    ],
  },
]

const includedFeatures = [
  'Strategy and architecture',
  'API development',
  'Third-party integration',
  'Authentication and authorization',
  'API documentation',
  'Integration testing',
  'Load or performance testing',
  'Error handling',
  'Webhook implementation',
  'Retry handling',
  'Monitoring and alerting',
  'Launch support',
]

const scopeCheckpoints = [
  {
    title: 'Project Scope',
    desc: 'Before development starts, we define the agreed functionality, integrations, deliverables, timeline, and responsibilities.',
  },
  {
    title: 'Stakeholder Reviews',
    desc: 'Architecture, development, and testing stages include review points where applicable. Your approval helps ensure the project continues in the agreed direction.',
  },
  {
    title: 'Third-Party Dependencies',
    desc: 'Some API behavior depends on external providers. We cannot guarantee that a third-party service will never experience an outage, change its API, reject requests, or introduce new requirements. We can, however, build agreed error handling, retry logic, monitoring, and recovery mechanisms around those dependencies.',
  },
  {
    title: 'Change Requests',
    desc: 'Requests outside the agreed scope may require additional development time and cost. Any significant scope change should be reviewed before implementation.',
  },
  {
    title: 'Post-Launch Support',
    desc: 'Launch support can include checking the deployed integration, confirming expected data flow, and addressing agreed launch issues. Ongoing API maintenance is available separately.',
  },
  {
    title: 'Workmanship Warranty',
    desc: 'Any workmanship warranty should follow the warranty period and terms stated in the final proposal or project agreement. Third-party outages, provider-side API changes, new requirements, and functionality outside the approved scope are not treated as development defects.',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            API Development Pricing &amp; Timeline.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            API development pricing depends on the number of systems, endpoint complexity, authentication requirements, data flow, third-party dependencies, and testing requirements. Prices shown are starting guidelines; the final proposal confirms the project scope, fee, deliverables, and delivery schedule before work begins.
          </p>
        </div>

        {/* 4 Tier Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier, i) => (
            <div
              key={i}
              className={`relative flex flex-col justify-between overflow-hidden rounded-xl border p-6 sm:p-7 transition-colors before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent ${
                tier.featured
                  ? 'border-purple-600/40 bg-[#18181B]'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-purple-600 font-semibold">
                      Project Type
                    </span>
                    <h3 className="font-heading text-lg font-medium tracking-tight text-white mt-1">
                      {tier.name}
                    </h3>
                  </div>
                  {tier.featured && (
                    <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-purple-300">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <span className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
                    {tier.price}
                  </span>
                  <p className="mt-1 font-mono text-xs text-zinc-400">
                    Typical Delivery: {tier.timeline}
                  </p>
                  <p className="mt-2 text-[11px] text-zinc-400 font-mono">
                    {tier.drivers}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-purple-600 mb-3 font-semibold">
                    What&apos;s Included:
                  </p>
                  <ul className="space-y-2.5">
                    {tier.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-normal text-zinc-300">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-5">
                <PosterButton
                  href="/contact"
                  variant={tier.featured ? 'accent' : 'outline'}
                  className="w-full px-4 text-xs sm:text-sm justify-center"
                >
                  Get Free Consultation
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* What Is Included Card */}
        <div className="mt-12 relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-4 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
            <h4 className="font-heading text-base font-medium text-white">
              Standard Delivery Scope
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400">
            Depending on the selected scope, projects can include the following engineering components:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2.5 gap-x-6 pt-2">
            {includedFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Scope, Review & Support Checkpoints */}
        <div className="mt-14">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
            <h4 className="font-heading text-xl font-medium text-white">
              Project Scope, Review &amp; Support
            </h4>
          </div>
          <p className="mb-6 text-sm text-zinc-400">
            Clear scope helps prevent unexpected development changes and establishes dependable release governance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeCheckpoints.map((item, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
                <span className="font-mono text-xs uppercase tracking-wider text-purple-600 font-semibold">
                  0{idx + 1}
                </span>
                <h5 className="mt-2 font-heading text-base font-medium text-white">
                  {item.title}
                </h5>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
