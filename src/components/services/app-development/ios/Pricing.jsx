'use client'

import React from 'react'
import { Check, Clock } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const pricingTiers = [
  {
    name: 'Simple App / MVP',
    price: '৳320,000',
    timeline: '6 to 8 weeks',
    featured: false,
    includes: [
      'Core feature set',
      'Native SwiftUI interface',
      'Basic backend',
      'Essential testing',
      'App Store launch support',
    ],
  },
  {
    name: 'Standard App',
    price: '৳520,000',
    timeline: '10 to 14 weeks',
    featured: true,
    includes: [
      'Moderate feature set',
      'Custom UI/UX design',
      'Standard integrations',
      'API & backend integration',
      'TestFlight validation',
      'App Store submission',
    ],
  },
  {
    name: 'Advanced App',
    price: '৳850,000',
    timeline: '14 to 20 weeks',
    featured: false,
    includes: [
      'Complex features',
      'Apple ecosystem integration',
      'Advanced security',
      'Performance tuning',
      'Extensive testing matrix',
      'Release management',
    ],
  },
  {
    name: 'Enterprise App',
    price: 'Custom Quote',
    timeline: '20+ weeks',
    featured: false,
    includes: [
      'Large-scale architecture',
      'Complex backend',
      'Multiple integrations',
      'Accessibility & localization',
      'Dedicated architecture',
      'Ongoing SLA support',
    ],
  },
]

const comparisonRows = [
  {
    type: 'Simple App / MVP',
    price: '৳320,000',
    scope: 'Core feature set, native SwiftUI, foundational testing, App Store submission support',
    delivery: '~6 to 8 weeks',
    featured: false,
  },
  {
    type: 'Standard App',
    price: '৳520,000',
    scope: 'Custom HIG UI/UX, full API backend, TestFlight beta cycles, App Store Connect setup',
    delivery: '~10 to 14 weeks',
    featured: true,
  },
  {
    type: 'Advanced App',
    price: '৳850,000',
    scope: 'Ecosystem expansion (Watch/iPad), Apple Pay, Instruments profiling, hardware security',
    delivery: '~14 to 20 weeks',
    featured: false,
  },
  {
    type: 'Enterprise App',
    price: 'Custom Quote',
    scope: 'Multi-role RBAC, complex legacy migration, high-availability microservices, dedicated SLA',
    delivery: '~20+ weeks',
    featured: false,
  },
]

const approvalCheckpoints = [
  {
    title: 'Clear Project Scope',
    desc: 'Features, supported devices, integrations, revision rounds, and deliverables are defined before development begins.',
  },
  {
    title: 'Client Approvals',
    desc: 'You review important design, functionality, and release milestones before the project moves forward.',
  },
  {
    title: 'App Store Submission Support',
    desc: 'We assist with the technical submission workflow and respond to required development changes within the agreed scope.',
  },
  {
    title: 'Third-Party Dependencies',
    desc: 'Apple Developer accounts, payment providers, APIs, external services, and other third-party requirements may affect launch timing or functionality.',
  },
  {
    title: 'Post-Launch Responsibility',
    desc: 'After launch, ongoing updates, new features, bug fixes, and platform changes can be handled under the agreed support arrangement.',
  },
  {
    title: 'TestFlight Staging Sign-Off',
    desc: 'Internal and external stakeholder validation on TestFlight across target iPhone and iPad form factors before final review.',
  },
]

const postLaunchItems = [
  {
    title: 'Bug Fixes & Technical Support',
    desc: 'We can investigate application issues, API problems, crashes, and other technical bugs after release.',
  },
  {
    title: 'iOS Version Updates',
    desc: 'Your application may need updates as Apple releases new platform versions, SDK requirements, or framework changes.',
  },
  {
    title: 'Feature Enhancements',
    desc: 'Add new features, improve existing workflows, and expand the product as your business grows.',
  },
  {
    title: 'Performance & Security Maintenance',
    desc: 'Review application performance, dependencies, integrations, and security-sensitive areas during ongoing maintenance.',
  },
  {
    title: 'Release Updates',
    desc: 'We can prepare, test, and support future production releases within the agreed maintenance or development scope.',
  },
  {
    title: 'App Store Privacy & Certificate Renewal',
    desc: 'Annual Apple Developer certificate renewals, provisioning profiles, privacy nutrition labels, and App Store metadata management.',
  },
]

export default function Pricing() {
  return (
    <div id="pricing" className="bg-[#09090B] text-white scroll-mt-20">
      {/* SECTION 1: IOS APP DEVELOPMENT PRICING AND TIMELINE */}
      <section className="border-b border-white/[0.08] px-4 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              iOS App Development Pricing &amp; Timeline.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              The cost of an iOS app depends on its features, number of user roles, integrations, supported devices, backend requirements, and design complexity.
            </p>
          </div>

          {/* High-Level Comparison Table */}
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] shadow-xl before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div className="border-b border-white/[0.08] px-6 py-4 flex items-center justify-between bg-[#18181B]">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                Project Scope &amp; Starting Cost Matrix
              </span>
              <span className="font-mono text-[11px] uppercase text-purple-400 font-semibold">
                Starting References
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-sm min-w-[640px]">
                <thead className="border-b border-white/[0.08] bg-[#141416] font-mono text-xs uppercase text-zinc-400">
                  <tr>
                    <th className="p-4 sm:p-5 border-r border-white/[0.08] text-white">Project Type</th>
                    <th className="p-4 sm:p-5 border-r border-white/[0.08] text-purple-400">Starting Price</th>
                    <th className="p-4 sm:p-5 border-r border-white/[0.08]">Typical Scope</th>
                    <th className="p-4 sm:p-5">Typical Delivery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-zinc-300">
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`transition-colors hover:bg-white/[0.02] ${
                        row.featured ? 'bg-purple-900/10' : ''
                      }`}
                    >
                      <td className="p-4 sm:p-5 font-heading text-sm font-medium text-white border-r border-white/[0.08] flex items-center gap-2">
                        <span>{row.type}</span>
                        {row.featured && (
                          <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-2 py-0.5 font-mono text-[9px] uppercase text-purple-300">
                            Most Requested
                          </span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 font-mono font-medium text-purple-400 whitespace-nowrap border-r border-white/[0.08]">
                        {row.price}
                      </td>
                      <td className="p-4 sm:p-5 text-xs sm:text-sm text-zinc-300 border-r border-white/[0.08]">
                        {row.scope}
                      </td>
                      <td className="p-4 sm:p-5 font-mono text-xs text-zinc-400 whitespace-nowrap">
                        {row.delivery}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4 Package Tiers Grid with Full-Width Symmetrical Buttons */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`relative flex flex-col justify-between overflow-hidden rounded-xl border p-6 sm:p-7 md:p-8 transition-colors before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent ${
                  tier.featured
                    ? 'border-purple-500/40 bg-[#18181B]'
                    : 'border-white/[0.08] bg-[#121214] hover:bg-[#18181B] hover:border-white/[0.16]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-purple-600 font-semibold">
                      0{i + 1}
                    </span>
                    {tier.featured && (
                      <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-purple-300">
                        Most Requested
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-heading text-xl font-medium tracking-tight text-white">
                    {tier.name}
                  </h3>
                  <p className="mt-4 font-mono text-2xl md:text-3xl font-medium text-purple-400">
                    {tier.price}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                    <Clock className="h-3.5 w-3.5 text-purple-600" />
                    <span>Timeline: {tier.timeline}</span>
                  </div>

                  <div className="mt-6 border-t border-white/[0.08] pt-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-purple-600 font-semibold mb-3">
                      What&apos;s Included:
                    </p>
                    <ul className="space-y-2.5 text-xs font-normal text-zinc-300">
                      {tier.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.08] w-full">
                  <PosterButton
                    href="/contact"
                    variant={tier.featured ? 'accent' : 'outline'}
                    className="w-full px-4 text-xs sm:text-sm justify-center"
                  >
                    Request a Quote
                  </PosterButton>
                </div>
              </div>
            ))}
          </div>

          {/* Inclusions and Custom Requirements */}
          <div className="mt-12 relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-4 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <h4 className="font-heading text-base font-medium tracking-tight text-white">
                Standard iOS Project Inclusions
              </h4>
              <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3">
                {[
                  'Product planning & strategy',
                  'UI/UX design with Apple HIG',
                  'Native Swift 6 & SwiftUI build',
                  'API & backend integration',
                  'Testing & TestFlight validation',
                  'Release preparation & launch support',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-white/[0.08] pt-4">
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                <strong className="text-white font-medium">Custom Scope:</strong> Complex integrations, advanced backend systems, multiple user roles, Apple-platform expansion, or third-party services can be planned as tailored project milestones. We confirm the final scope, deliverables, timeline, and price before development begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: APPROVALS, SCOPE & RELEASE SUPPORT */}
      <section className="border-b border-white/[0.08] px-4 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Approvals, Scope &amp; Release Support.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              App Store review is managed by Apple according to their global guidelines. Our responsibility is to prepare the application, certificates, and release materials strictly to Apple requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {approvalCheckpoints.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-purple-600 font-semibold">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: POST-LAUNCH IOS SUPPORT */}
      <section className="border-b border-white/[0.08] px-4 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Post-Launch iOS Support &amp; SLA.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              Launching the application is the start of the product lifecycle, not the end. We provide continuous monitoring, OS upgrades, and feature expansions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {postLaunchItems.map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-purple-600 font-semibold">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
