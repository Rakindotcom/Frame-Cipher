'use client'

import React from 'react'
import {
  Check,
  Clock,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  Wrench,
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const comparisonRows = [
  {
    type: 'Simple App / MVP',
    price: '৳300,000',
    scope: 'Core functionality, basic backend, standard interface',
    delivery: '~6–8 weeks',
    featured: false,
  },
  {
    type: 'Standard Android App',
    price: '৳500,000',
    scope: 'Moderate feature set, API integrations, custom UI',
    delivery: '~10–14 weeks',
    featured: true,
  },
  {
    type: 'Advanced Android App',
    price: '৳800,000',
    scope: 'Complex features, real-time functions, multiple integrations',
    delivery: '~14–20 weeks',
    featured: false,
  },
  {
    type: 'Enterprise Android App',
    price: 'Custom Quote',
    scope: 'Large-scale infrastructure, complex permissions, integrations',
    delivery: '~20+ weeks',
    featured: false,
  },
]

const pricingTiers = [
  {
    name: 'Simple App / MVP',
    price: '৳300,000',
    delivery: '~6 to 8 weeks',
    featured: false,
    desc: 'Focused first version engineered to validate a product concept with real Android users before scaling.',
    includes: [
      'Core functionality',
      'Basic backend',
      'Standard interface',
      'Essential testing',
      'Google Play release',
    ],
  },
  {
    name: 'Standard Android App',
    price: '৳500,000',
    delivery: '~10 to 14 weeks',
    featured: true,
    desc: 'Production-ready native application with custom UI/UX, third-party APIs, and real-device verification.',
    includes: [
      'Moderate feature set',
      'API integrations',
      'Custom UI/UX',
      'Moderate backend scope',
      'Real-device testing',
      'Play Store support',
    ],
  },
  {
    name: 'Advanced Android App',
    price: '৳800,000',
    delivery: '~14 to 20 weeks',
    featured: false,
    desc: 'High-performance application with complex offline queues, real-time events, and deep device hardware integrations.',
    includes: [
      'Complex features',
      'Real-time functionality',
      'Multiple integrations',
      'Extended backend',
      'Device matrix QA',
      'Release management',
    ],
  },
  {
    name: 'Enterprise Android App',
    price: 'Custom Quote',
    delivery: '~20+ weeks',
    featured: false,
    desc: 'Mission-critical enterprise software engineered for multi-tier permissions, custom ERP/CRM connections, and SLA.',
    includes: [
      'Large-scale infrastructure',
      'Complex permissions',
      'Legacy integrations',
      'Security hardening',
      'Dedicated architecture',
      'Ongoing SLA support',
    ],
  },
]

const approvalCheckpoints = [
  {
    title: 'Stage Approvals',
    desc: 'Architecture, UI/UX, major functionality, and release-ready builds can be reviewed at agreed project milestones.',
  },
  {
    title: 'Scope Changes',
    desc: 'Additional features, new integrations, expanded device support, or major workflow changes outside the approved scope may affect cost and timeline.',
  },
  {
    title: 'Revision Handling',
    desc: 'The included revision or change process depends on the agreed project scope and is defined before development begins.',
  },
  {
    title: 'Release Support',
    desc: 'We can support the Google Play submission process and help address technical changes requested during review where included in the project.',
  },
  {
    title: 'Post-Launch Support',
    desc: 'Bug fixes, compatibility updates, new features, and ongoing maintenance can continue under the agreed support arrangement.',
  },
  {
    title: 'Target Device & OS Matrix Sign-Off',
    desc: 'Explicit verification of target Android OS versions, screen densities, and manufacturer skins before production deployment.',
  },
]

const postLaunchItems = [
  'Android version compatibility updates',
  'Dependency updates',
  'Bug fixing',
  'Performance improvements',
  'Crash and issue monitoring where supported',
  'Security maintenance',
  'Google Play updates',
  'API and integration updates',
  'ANR & memory leak monitoring',
  'Play Store target SDK compliance updates',
  'New feature development',
  'Ongoing technical support',
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Android App Development{' '}
            <span className="italic text-frame-accent">Pricing &amp; Project Models.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Android app development pricing depends on feature complexity, backend requirements, integrations, supported devices, testing requirements, and the overall product scope.
          </p>
        </div>

        {/* High-Level Comparison Table */}
        <div className="mt-16 overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          <div className="border-b border-white/[0.08] px-6 py-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              Project Scope &amp; Starting Cost Matrix
            </span>
            <span className="font-mono text-[11px] uppercase text-frame-accent">
              Starting References
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-sm">
              <thead className="border-b border-white/[0.08] bg-white/[0.015] font-mono text-xs uppercase text-zinc-400">
                <tr>
                  <th className="p-4 sm:p-5">Project Type</th>
                  <th className="p-4 sm:p-5">Starting Price</th>
                  <th className="p-4 sm:p-5">Typical Scope</th>
                  <th className="p-4 sm:p-5">Typical Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-zinc-300">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-white/[0.02] ${
                      row.featured ? 'bg-frame-accent/[0.06]' : ''
                    }`}
                  >
                    <td className="p-4 sm:p-5 font-semibold text-white">
                      {row.type}
                      {row.featured && (
                        <span className="ml-2 rounded-full border border-white/[0.14] bg-white/[0.04] px-2 py-0.5 font-mono text-[9px] uppercase text-frame-accent">
                          Most Requested
                        </span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 font-mono font-semibold text-frame-accent">
                      {row.price}
                    </td>
                    <td className="p-4 sm:p-5 text-xs sm:text-sm text-zinc-400">
                      {row.scope}
                    </td>
                    <td className="p-4 sm:p-5 font-mono text-xs text-zinc-400">
                      {row.delivery}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Caveat Note */}
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#121214] p-4 text-xs text-zinc-400">
          <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-zinc-200">Scope Notice:</strong> These are starting references rather than fixed quotes. Final pricing depends on the actual feature set, architecture, integrations, device support, and development requirements.
          </p>
        </div>

        {/* 4 Package Tiers Grid with Symmetrical 52px Buttons */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 pt-4">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between rounded-xl border p-6 sm:p-7 md:p-8 transition-colors ${
                tier.featured
                  ? 'border-frame-accent/40 bg-[#18181B]'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.16]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    0{idx + 1}
                  </span>
                  {tier.featured && (
                    <span className="rounded-full border border-frame-accent/40 bg-frame-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-frame-accent">
                      Most Requested
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-heading text-xl font-medium tracking-tight text-white">
                  {tier.name}
                </h3>

                <p className="mt-2 text-xs font-normal leading-relaxed text-zinc-400">
                  {tier.desc}
                </p>

                <div className="mt-6 border-y border-white/[0.06] py-4">
                  <span className="font-mono text-3xl font-bold tracking-tight text-white">
                    {tier.price}
                  </span>
                  <div className="mt-1 flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                    <Clock className="h-3.5 w-3.5 text-frame-accent" />
                    <span>Delivery: {tier.delivery}</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 font-sans text-xs text-zinc-300">
                  {tier.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] w-full">
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

        {/* TIMELINE SECTION */}
        <div className="mt-24 rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-12">
          <div className="max-w-3xl space-y-3">
<h3 className="font-heading text-2xl sm:text-4xl font-medium tracking-tight text-white">
              Android App Development Timeline
            </h3>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              Android development timelines depend on application complexity, backend requirements, integrations, device support, testing requirements, and project scope.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 divide-y divide-white/[0.06] sm:grid-cols-2 sm:divide-y-0 sm:divide-x sm:divide-white/[0.08] lg:grid-cols-4 border border-white/[0.08] rounded-xl overflow-hidden bg-black/40">
            {comparisonRows.map((item, idx) => (
              <div key={idx} className="p-6 space-y-2">
                <span className="font-mono text-[10px] uppercase text-zinc-500">
                  0{idx + 1}
                </span>
                <p className="font-heading text-base font-medium text-white">
                  {item.type}
                </p>
                <p className="font-mono text-sm font-semibold text-frame-accent">
                  {item.delivery}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 text-xs text-zinc-400">
            <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-zinc-200">Execution Velocity:</strong> These are planning ranges rather than fixed guarantees. Projects can move more efficiently when requirements, content, design direction, API access, and stakeholder feedback are available promptly. New features or scope changes during development can also affect the final timeline.
            </p>
          </div>
        </div>

        {/* APPROVALS, SCOPE & RELEASE SUPPORT */}
        <div className="mt-24 space-y-6">
          <div className="max-w-3xl space-y-3">
<h3 className="font-heading text-2xl sm:text-4xl font-medium tracking-tight text-white">
              Approvals, Scope &amp; Release Support
            </h3>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              Clear review points and scope boundaries help keep Android development predictable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {approvalCheckpoints.map((cp, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 transition-colors duration-200 hover:border-white/[0.14]"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  0{idx + 1}
                </span>
                <h4 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {cp.title}
                </h4>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                  {cp.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.03] p-5 text-xs text-zinc-400 flex items-start gap-3">
            <AlertCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-amber-300">Publishing Authority Notice:</strong> Google controls the final publishing decision, so no development partner can guarantee first-submission approval.
            </p>
          </div>
        </div>

        {/* POST-LAUNCH ANDROID SUPPORT */}
        <div className="mt-24 rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-12">
          <div className="max-w-3xl space-y-3">
<h3 className="font-heading text-2xl sm:text-4xl font-medium tracking-tight text-white">
              Post-Launch Android Support
            </h3>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              Launching the application is the beginning of its operating lifecycle, not the end of development responsibility. Post-launch support can include:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {postLaunchItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs font-mono text-zinc-300"
              >
                <Check className="h-4 w-4 text-frame-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 font-sans text-xs text-zinc-400 border-t border-white/[0.06] pt-6 leading-relaxed">
            Routine maintenance and larger development work can be handled under separate scopes depending on the application and support requirements.
          </p>
        </div>
      </div>
    </section>
  )
}
