'use client'

import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const packages = [
  {
    name: 'Single Flow / Landing Page Design',
    price: '৳20,000',
    scope: 'One key flow, up to 5 screens',
    timeline: '~1 week',
    featured: false,
    features: [
      'Strategy & flow mapping',
      'Wireframes',
      'UI design',
      'Interactive prototype',
      'Responsive design',
      'Design file handoff',
    ],
  },
  {
    name: 'Website UI/UX Package',
    price: '৳50,000',
    scope: 'Full site design, up to 15 screens',
    timeline: '~2 to 3 weeks',
    featured: true,
    features: [
      'Site UX & user flow mapping',
      'Wireframing',
      'Full UI design',
      'Interactive prototyping',
      'Responsive & accessibility-aware design',
      'Design system foundations',
      'Design file handoff',
    ],
  },
  {
    name: 'Application / Product Design',
    price: '৳120,000',
    scope: 'Multiple flows, design system, usability testing',
    timeline: '~4 to 6 weeks',
    featured: false,
    features: [
      'UX research & flow mapping',
      'Wireframing',
      'Full UI design',
      'Design system development',
      'Usability testing',
      'Interactive prototyping',
      'Developer handoff support',
    ],
  },
  {
    name: 'Complex / Multi-Role Product Design',
    price: 'Custom Quote',
    scope: 'Multiple user types, extensive flows, complex design system',
    timeline: '~6 to 10+ weeks',
    featured: false,
    features: [
      'Multi-role UX research & flows',
      'Extensive wireframing',
      'Full UI design',
      'Complex design system',
      'Usability testing',
      'Accessibility review',
      'Ongoing developer support',
    ],
  },
]

const projectCoverageList = [
  'User research and flow mapping',
  'Wireframing',
  'UI design',
  'Interactive prototyping',
  'Responsive and accessibility-aware design',
  'Design system development',
  'Design file handoff',
  'Development support where scoped',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            UI/UX Design Pricing{' '}
            <span className="italic text-frame-accent">and Timeline.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            UI/UX design pricing depends on project scope, the number of screens or flows, product complexity, research requirements, usability testing, and the amount of design-system work involved.
          </p>
        </div>

        {/* HIGH-LEVEL COMPARISON TABLE */}
        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
          <table className="w-full text-left min-w-[640px]">
            <thead className="border-b border-white/[0.08] bg-white/[0.02]">
              <tr>
                <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Project Type</th>
                <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Starting Price</th>
                <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Typical Scope</th>
                <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Typical Delivery</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08] text-sm md:text-base font-normal text-zinc-300">
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-5 md:p-6 font-heading text-base font-medium uppercase text-white">Single Flow / Landing Page Design</td>
                <td className="p-5 md:p-6 font-mono font-medium text-frame-accent whitespace-nowrap">৳20,000</td>
                <td className="p-5 md:p-6 text-zinc-300">One key flow, up to 5 screens</td>
                <td className="p-5 md:p-6 text-sm text-zinc-400 leading-relaxed whitespace-nowrap">~1 week</td>
              </tr>
              <tr className="bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <td className="p-5 md:p-6 font-heading text-base font-medium uppercase text-white flex items-center gap-2">
                  <span>Website UI/UX Package</span>
                  <span className="rounded-full border border-frame-accent/40 bg-frame-accent/10 px-2 py-0.5 text-[10px] font-mono uppercase text-frame-accent">Popular</span>
                </td>
                <td className="p-5 md:p-6 font-mono font-medium text-frame-accent whitespace-nowrap">৳50,000</td>
                <td className="p-5 md:p-6 text-zinc-300">Full site design, up to 15 screens</td>
                <td className="p-5 md:p-6 text-sm text-zinc-400 leading-relaxed whitespace-nowrap">~2–3 weeks</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-5 md:p-6 font-heading text-base font-medium uppercase text-white">Application / Product Design</td>
                <td className="p-5 md:p-6 font-mono font-medium text-frame-accent whitespace-nowrap">৳120,000</td>
                <td className="p-5 md:p-6 text-zinc-300">Multiple flows, design system, usability testing</td>
                <td className="p-5 md:p-6 text-sm text-zinc-400 leading-relaxed whitespace-nowrap">~4–6 weeks</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-5 md:p-6 font-heading text-base font-medium uppercase text-white">Complex / Multi-Role Product Design</td>
                <td className="p-5 md:p-6 font-mono font-medium text-frame-accent whitespace-nowrap">Custom Quote</td>
                <td className="p-5 md:p-6 text-zinc-300">Multiple user types, extensive flows, complex design system</td>
                <td className="p-5 md:p-6 text-sm text-zinc-400 leading-relaxed whitespace-nowrap">~6–10+ weeks</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* DETAILED PACKAGE CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-xl p-6 sm:p-7 md:p-8 transition-colors ${
                pkg.featured
                  ? 'border-2 border-frame-accent/40 bg-[#15121c] shadow-[0_0_50px_rgba(168,85,247,0.12)]'
                  : 'border border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                {pkg.featured && (
                  <span className="mb-4 inline-block rounded-full border border-frame-accent/40 bg-frame-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                  {pkg.name}
                </h3>
                <p className="mt-4 font-mono text-2xl md:text-3xl font-medium text-frame-accent">
                  {pkg.price}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Delivery: {pkg.timeline}
                </p>
                <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300 border-t border-white/[0.08] pt-4">
                  {pkg.scope}
                </p>
                {pkg.features && (
                  <ul className="mt-4 space-y-2 text-xs font-normal text-zinc-200">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                          <Check className="h-3 w-3 stroke-[2.5]" />
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.08]">
                <PosterButton
                  href="/contact"
                  variant={pkg.featured ? 'accent' : 'outline'}
                  className="w-full text-xs"
                >
                  Select Plan
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* TYPICAL PROJECT COVERAGE */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
          <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white mb-4">
            Typical project coverage can include:
          </h3>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 text-xs sm:text-sm font-normal text-zinc-200">
            {projectCoverageList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
            <p className="text-xs sm:text-sm font-normal text-zinc-400 italic">
              Pricing is finalized after reviewing your actual project requirements.
            </p>
            <PosterButton href="/contact">Get a Custom Quote</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
