'use client'

import React from 'react'
import {
  Rocket,
  Smartphone,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Sliders,
  LifeBuoy,
  Check,
} from 'lucide-react'
import PosterButton from '../../home/PosterButton'

const pricingTiers = [
  {
    name: 'MVP Development',
    icon: Rocket,
    price: '৳300,000',
    delivery: '~6 to 10 weeks',
    featured: false,
    includes: [
      'Core feature set',
      'Single platform build',
      'Basic backend',
      'Standard UI/UX',
      'Foundational testing',
      'Store launch support',
    ],
  },
  {
    name: 'Native Android or iOS App',
    icon: Smartphone,
    price: '৳500,000',
    delivery: '~10 to 14 weeks',
    featured: true,
    includes: [
      'One platform, moderate complexity',
      'Custom UI/UX design',
      'Standard integrations',
      'Moderate backend scope',
      'Real-device testing',
      'Store submission support',
    ],
  },
  {
    name: 'Cross-Platform App',
    icon: Layers,
    price: '৳600,000',
    delivery: '~10 to 16 weeks',
    featured: false,
    includes: [
      'Android + iOS shared codebase',
      'Platform-aware UI/UX',
      'Moderate to full feature set',
      'API & backend integration',
      'Dual-store release prep',
      'Post-launch support window',
    ],
  },
  {
    name: 'SaaS / Enterprise App',
    icon: ShieldCheck,
    price: 'Custom Quote',
    delivery: '~16 to 24+ weeks',
    featured: false,
    includes: [
      'Multi-user architecture',
      'Complex integrations',
      'Scalability planning',
      'Security & role-based access',
      'Admin dashboards',
      'Dedicated architecture & DevOps',
    ],
  },
]

const approvalCheckpoints = [
  {
    title: 'Stage Approvals',
    icon: CheckCircle2,
    desc: 'Architecture, UI/UX, major functionality, and release-ready builds can be reviewed at agreed project milestones.',
  },
  {
    title: 'Scope Changes',
    icon: Sliders,
    desc: 'New features, additional integrations, or major workflow changes outside the agreed scope may affect both cost and timeline.',
  },
  {
    title: 'Release Support',
    icon: Rocket,
    desc: 'We can support the production release and help address technical changes requested during store review where included in the project scope.',
  },
  {
    title: 'Post-Launch Support',
    icon: LifeBuoy,
    desc: 'Bug fixes, compatibility updates, new features, and ongoing maintenance can continue under an agreed support arrangement.',
  },
]

const postLaunchItems = [
  'Bug fixing',
  'OS compatibility updates',
  'Dependency updates',
  'Performance improvements',
  'Security maintenance',
  'Crash and issue monitoring where supported',
  'Store updates',
  'New feature development',
  'API and integration updates',
  'Database & backend health checks',
  'Third-party SDK maintenance',
  'Ongoing technical support',
]

export default function Pricing() {
  return (
    <div id="pricing" className="bg-[#09090B] text-white scroll-mt-20">
      {/* SECTION 1: PRICING AND TIMELINE */}
      <section className="border-b border-white/[0.08] px-4 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Left-Aligned Header Block */}
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              App Development Pricing and Timeline.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              App development pricing depends on platform choice, feature complexity, backend requirements, integrations, testing requirements, and long-term scalability needs.
            </p>
          </div>

          {/* HIGH-LEVEL COMPARISON TABLE */}
          <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <table className="w-full text-left min-w-[640px] border-collapse">
              <thead className="border-b border-white/[0.08] bg-[#18181B]">
                <tr>
                  <th className="p-5 md:p-6 font-heading text-sm font-semibold tracking-tight text-white">Project Type</th>
                  <th className="p-5 md:p-6 font-heading text-sm font-semibold tracking-tight text-white">Starting Price</th>
                  <th className="p-5 md:p-6 font-heading text-sm font-semibold tracking-tight text-white">Typical Scope</th>
                  <th className="p-5 md:p-6 font-heading text-sm font-semibold tracking-tight text-white">Typical Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08] text-sm md:text-base font-normal text-zinc-300">
                <tr className="hover:bg-[#151518] transition-colors">
                  <td className="p-5 md:p-6 font-heading text-base font-medium text-white">MVP Development</td>
                  <td className="p-5 md:p-6 font-mono font-medium text-purple-400 whitespace-nowrap">৳300,000</td>
                  <td className="p-5 md:p-6 text-zinc-300">Core feature set, single platform, basic backend</td>
                  <td className="p-5 md:p-6 text-sm text-zinc-400 leading-relaxed whitespace-nowrap">~6–10 weeks</td>
                </tr>
                <tr className="bg-purple-950/15 hover:bg-purple-950/25 transition-colors">
                  <td className="p-5 md:p-6 font-heading text-base font-medium text-white flex items-center gap-2">
                    <span>Native Android or iOS App</span>
                    <span className="rounded-full border border-purple-500/30 bg-purple-600/20 px-2.5 py-0.5 text-[10px] font-mono uppercase text-purple-200 font-semibold">Popular</span>
                  </td>
                  <td className="p-5 md:p-6 font-mono font-medium text-purple-400 whitespace-nowrap">৳500,000</td>
                  <td className="p-5 md:p-6 text-zinc-300">One platform, moderate complexity, standard integrations</td>
                  <td className="p-5 md:p-6 text-sm text-zinc-400 leading-relaxed whitespace-nowrap">~10–14 weeks</td>
                </tr>
                <tr className="hover:bg-[#151518] transition-colors">
                  <td className="p-5 md:p-6 font-heading text-base font-medium text-white">Cross-Platform App</td>
                  <td className="p-5 md:p-6 font-mono font-medium text-purple-400 whitespace-nowrap">৳600,000</td>
                  <td className="p-5 md:p-6 text-zinc-300">Android + iOS, shared codebase, moderate to full feature set</td>
                  <td className="p-5 md:p-6 text-sm text-zinc-400 leading-relaxed whitespace-nowrap">~10–16 weeks</td>
                </tr>
                <tr className="hover:bg-[#151518] transition-colors">
                  <td className="p-5 md:p-6 font-heading text-base font-medium text-white">SaaS / Enterprise App</td>
                  <td className="p-5 md:p-6 font-mono font-medium text-purple-400 whitespace-nowrap">Custom Quote</td>
                  <td className="p-5 md:p-6 text-zinc-300">Multi-user architecture, complex integrations, scalability requirements</td>
                  <td className="p-5 md:p-6 text-sm text-zinc-400 leading-relaxed whitespace-nowrap">~16–24+ weeks</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* DETAILED PACKAGE CARDS */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier, i) => {
              const Icon = tier.icon
              return (
                <div
                  key={i}
                  className={`flex flex-col justify-between rounded-xl overflow-hidden p-6 sm:p-7 md:p-8 transition-colors duration-200 ${
                    tier.featured
                      ? 'border-2 border-purple-600/50 bg-[#15121c] shadow-[0_0_50px_rgba(168,85,247,0.15)]'
                      : 'border border-white/[0.08] bg-[#121214] hover:border-white/[0.18] hover:bg-[#18181B]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                      {tier.featured ? (
                        <span className="rounded-full border border-purple-500/30 bg-purple-600/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-purple-200 font-semibold">
                          Most Requested
                        </span>
                      ) : (
                        <span className="font-mono text-xs text-zinc-500 tabular-nums font-semibold">
                          0{i + 1}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                      {tier.name}
                    </h3>
                    <p className="mt-4 font-mono text-2xl md:text-3xl font-medium text-purple-400 tabular-nums">
                      {tier.price}
                    </p>
                    <p className="mt-2 font-mono text-xs uppercase tracking-wider text-zinc-400">
                      Typical Delivery: {tier.delivery}
                    </p>

                    <div className="mt-6 border-t border-white/[0.08] pt-4">
                      <p className="font-mono text-xs uppercase tracking-wider text-white mb-3 font-semibold">
                        What&apos;s Included:
                      </p>
                      <ul className="space-y-2.5 text-sm font-normal text-zinc-200">
                        {tier.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
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
                      Request Quote
                    </PosterButton>
                  </div>
                </div>
              )
            })}
          </div>

          {/* PRICING NOTES */}
          <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              These are starting references rather than fixed quotes. Final pricing is based on the actual product scope and technical requirements.
            </p>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              A consultation is provided before a paid commitment so the recommended approach, scope, timeline, and estimated cost are clear.
            </p>
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
              Clear approvals and scope boundaries help keep application development predictable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approvalCheckpoints.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors duration-200 hover:border-white/[0.18] hover:bg-[#18181B] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                      <Icon className="h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-mono text-xs text-zinc-500 tabular-nums font-semibold">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-medium text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-purple-400 font-semibold">
              No development partner can control the final approval decision made by Apple or Google.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: POST-LAUNCH APP SUPPORT & MAINTENANCE */}
      <section className="border-b border-white/[0.08] px-4 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Post-Launch App Support &amp; Maintenance.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              An application needs attention after launch as operating systems, devices, dependencies, integrations, and user requirements change. Post-launch support can include:
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {postLaunchItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#18181B] p-4 transition-colors hover:border-white/[0.18]"
                >
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" strokeWidth={2.5} />
                  <span className="text-sm font-normal text-zinc-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                Routine maintenance and larger development work can be handled under separate scopes depending on the application and support plan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
