'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'

const pricingTiers = [
  {
    name: 'Simple App (MVP-Level)',
    price: '৳380,000',
    timeline: '7 to 9 weeks',
    featured: false,
    includes: [
      'Core features',
      'Shared codebase (single platform scope)',
      'Basic backend',
      'Standard UI/UX',
      'Foundational testing',
    ],
  },
  {
    name: 'Standard App',
    price: '৳600,000',
    timeline: '11 to 15 weeks',
    featured: true,
    includes: [
      'Android + iOS shared codebase',
      'Moderate feature set',
      'Platform-aware UI/UX',
      'Integrations & shared APIs',
      'Some native modules',
      'Dual-store release prep',
    ],
  },
  {
    name: 'Advanced App',
    price: '৳950,000',
    timeline: '15 to 20 weeks',
    featured: false,
    includes: [
      'Complex feature set',
      'Real-time functionality',
      'Extensive integrations',
      'Advanced native modules',
      'Offline & performance tuning',
      'Comprehensive device QA',
    ],
  },
  {
    name: 'Enterprise-Scale App',
    price: 'Custom Quote',
    timeline: '20+ weeks',
    featured: false,
    includes: [
      'Complex infrastructure',
      'Advanced security & SSO',
      'Multiple integrations',
      'Multi-role workflows',
      'Dedicated architecture',
      'Ongoing SLA support',
    ],
  },
]

const approvalCheckpoints = [
  {
    title: 'Clear Project Scope',
    desc: 'Features, supported devices, integrations, revision rounds, and deliverables are agreed before development begins.',
  },
  {
    title: 'Client Approval',
    desc: 'You review important designs, functionality, builds, and release milestones before submission.',
  },
  {
    title: 'Third-Party Dependencies',
    desc: 'Payment providers, APIs, developer accounts, external services, and platform changes can affect functionality or launch timing.',
  },
  {
    title: 'Review Feedback',
    desc: 'If Apple or Google requests development-related changes during review, we can assess and address them within the agreed support scope.',
  },
]

const postLaunchItems = [
  {
    title: 'Bug Fixes & Technical Support',
    desc: 'Investigate crashes, application bugs, API issues, and other technical problems after release.',
  },
  {
    title: 'Framework Updates',
    desc: 'Keep Flutter or React Native dependencies and related application components current as the product evolves.',
  },
  {
    title: 'Android & iOS Updates',
    desc: 'Review compatibility as new operating-system versions and platform requirements are introduced.',
  },
  {
    title: 'Feature Enhancements',
    desc: 'Add new functionality and improve existing workflows as your product grows.',
  },
  {
    title: 'Performance & Security Maintenance',
    desc: 'Review integrations, dependencies, application behavior, and security-sensitive areas during ongoing development.',
  },
  {
    title: 'Future Releases',
    desc: 'Prepare, test, and support new application versions for both platforms based on the agreed maintenance scope.',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cross-Platform App Development{' '}
            <span className="italic text-frame-accent">Pricing &amp; Timeline.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Cross-platform pricing depends on feature complexity, UI/UX requirements, native module work, backend systems, integrations, supported devices, and testing scope.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier, i) => (
            <div
              key={i}
              className={`relative flex flex-col justify-between overflow-hidden rounded-xl border p-6 sm:p-7 transition-colors ${
                tier.featured
                  ? 'border-frame-accent/40 bg-[#18181B]'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-heading text-lg font-medium tracking-tight text-white">
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <span className="rounded-full border border-frame-accent/40 bg-frame-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <span className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-white">
                    {tier.price}
                  </span>
                  <p className="mt-1 font-mono text-xs text-zinc-400">
                    Typical Delivery: {tier.timeline}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-frame-accent mb-3">
                    What&apos;s Included:
                  </p>
                  <ul className="space-y-2.5">
                    {tier.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-normal text-zinc-300">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0" />
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

        {/* Included at Every Tier Note */}
        <div className="mt-8 rounded-xl border border-white/[0.06] bg-[#121214] p-6 sm:p-8 space-y-4">
          <h4 className="font-heading text-base font-medium text-white">
            Included at Every Tier
          </h4>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              'Strategy & consultation',
              'Platform-aware UI/UX',
              'Flutter or React Native development',
              'Testing & quality assurance',
              'Release preparation',
              'Launch support',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-white/[0.06] pt-4">
            <p className="text-xs sm:text-sm text-zinc-400">
              <span className="text-white font-medium">Custom Requirements:</span> Advanced backend systems, multiple user roles, complex third-party integrations, extensive native functionality, and larger device scopes can change the final project cost. We confirm deliverables, timeline, and pricing before development begins.
            </p>
          </div>
        </div>

        {/* Governance Checkpoints */}
        <div className="mt-20 border-t border-white/[0.08] pt-16">
          <div className="mb-10 max-w-2xl space-y-3">
<h3 className="font-heading text-2xl sm:text-3xl font-medium text-white">
              Approvals, Scope &amp; Release Support
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Apple and Google control their respective review processes, so no development agency can guarantee store approval. Our role is to prepare the application and submission materials according to agreed scope and platform guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approvalCheckpoints.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors hover:border-white/[0.16]"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h4 className="mt-3 font-heading text-base font-medium text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm font-normal text-zinc-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Post-Launch SLA Items */}
        <div className="mt-20 border-t border-white/[0.08] pt-16">
          <div className="mb-10 max-w-2xl space-y-3">
<h3 className="font-heading text-2xl sm:text-3xl font-medium text-white">
              Post-Launch Cross-Platform App Support
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Launching on both platforms is the beginning of the application&apos;s maintenance cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {postLaunchItems.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors hover:border-white/[0.16]"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h4 className="mt-3 font-heading text-base font-medium text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm font-normal text-zinc-400">
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
