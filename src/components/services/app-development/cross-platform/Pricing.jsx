'use client'

import React from 'react'
import {
  Check,
  ShieldCheck,
  CheckCircle2,
  Layers,
  RefreshCw,
  Wrench,
  Smartphone,
  Zap,
  Rocket,
} from 'lucide-react'
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
    icon: CheckCircle2,
    title: 'Clear Project Scope',
    desc: 'Features, supported devices, integrations, revision rounds, and deliverables are agreed before development begins.',
  },
  {
    icon: ShieldCheck,
    title: 'Client Approval',
    desc: 'You review important designs, functionality, builds, and release milestones before submission.',
  },
  {
    icon: Layers,
    title: 'Third-Party Dependencies',
    desc: 'Payment providers, APIs, developer accounts, external services, and platform changes can affect functionality or launch timing.',
  },
  {
    icon: RefreshCw,
    title: 'Review Feedback',
    desc: 'If Apple or Google requests development-related changes during review, we can assess and address them within the agreed support scope.',
  },
]

const postLaunchItems = [
  {
    icon: Wrench,
    title: 'Bug Fixes & Technical Support',
    desc: 'Investigate crashes, application bugs, API issues, and other technical problems after release.',
  },
  {
    icon: Layers,
    title: 'Framework Updates',
    desc: 'Keep Flutter or React Native dependencies and related application components current as the product evolves.',
  },
  {
    icon: Smartphone,
    title: 'Android & iOS Updates',
    desc: 'Review compatibility as new operating-system versions and platform requirements are introduced.',
  },
  {
    icon: Zap,
    title: 'Feature Enhancements',
    desc: 'Add new functionality and improve existing workflows as your product grows.',
  },
  {
    icon: ShieldCheck,
    title: 'Performance & Security Maintenance',
    desc: 'Review integrations, dependencies, application behavior, and security-sensitive areas during ongoing development.',
  },
  {
    icon: Rocket,
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
            Cross-Platform App Development Pricing &amp; Timeline.
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
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-8 md:p-10 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent ${
                tier.featured
                  ? 'border-purple-500/40 bg-[#121214] hover:border-purple-500/60 shadow-[0_0_40px_-15px_rgba(147,51,234,0.15)]'
                  : 'border-white/[0.08] bg-[#0D0D0F] hover:border-white/[0.16]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-heading text-lg font-medium tracking-tight text-white">
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-purple-300">
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
                  <p className="font-mono text-[11px] uppercase tracking-wider text-purple-400 mb-3">
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

        {/* Included at Every Tier Note */}
        <div className="relative mt-8 rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 space-y-4 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <h4 className="font-heading text-lg font-medium text-white">
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
                <Check className="h-4 w-4 text-emerald-400 shrink-0" strokeWidth={2.5} />
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
            {approvalCheckpoints.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h4 className="font-heading text-lg font-medium text-white">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
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
            {postLaunchItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h4 className="font-heading text-lg font-medium text-white">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
