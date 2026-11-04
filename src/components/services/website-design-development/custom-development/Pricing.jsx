'use client'

import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const packages = [
  {
    name: 'Custom Marketing Site',
    price: '৳120,000',
    description: 'Custom design, moderate functionality, no complex backend',
    timeline: '4 to 6 weeks',
    featured: false,
    features: [
      'Custom UI/UX design',
      'Headless / static frontend',
      'CMS content model',
      'On-page SEO & performance',
      'Analytics setup',
      'Testing & launch support',
    ],
  },
  {
    name: 'Standard Web Application',
    price: '৳300,000',
    description: 'User accounts, custom database, moderate integrations',
    timeline: '8 to 12 weeks',
    featured: true,
    features: [
      'Custom UI/UX design',
      'User accounts & roles',
      'Custom database & data model',
      'Moderate third-party integrations',
      'API development',
      'Security planning & hardening',
      'Testing & launch support',
    ],
  },
  {
    name: 'Complex Web Application',
    price: '৳500,000+',
    description: 'Multiple roles, extensive integrations, custom business logic',
    timeline: '12 to 20 weeks',
    featured: false,
    features: [
      'Custom UI/UX design',
      'Multi-role & permission system',
      'Extensive integrations',
      'Custom business logic & workflows',
      'API development & documentation',
      'Infrastructure setup',
      'Security & compliance planning',
      'Testing & launch support',
    ],
  },
  {
    name: 'Enterprise / Large-Scale Platform',
    price: 'Custom Quote',
    description: 'High-volume infrastructure, multiple systems, ongoing development',
    timeline: '20+ weeks',
    featured: false,
    features: [
      'High-volume infrastructure',
      'Multi-system integration layer',
      'Custom modules & microservices',
      'Advanced security & compliance',
      'Performance & scale engineering',
      'API documentation',
      'Ongoing development roadmap',
    ],
  },
]

const timelineTable = [
  {
    type: 'Custom Marketing Site',
    timeline: '4 to 6 weeks',
  },
  {
    type: 'Standard Web Application',
    timeline: '8 to 12 weeks',
  },
  {
    type: 'Complex Web Application',
    timeline: '12 to 20 weeks',
  },
  {
    type: 'Enterprise / Large-Scale Platform',
    timeline: '20+ weeks',
  },
]

const inclusions = [
  'Technical discovery',
  'Architecture planning',
  'Custom UI/UX',
  'Full-stack development',
  'Security planning',
  'Testing',
  'Launch support',
]

const handoverItems = [
  'Source code repository access',
  'Deployment and hosting access',
  'Relevant database access',
  'Third-party account access',
  'Environment configuration documentation',
  'API documentation',
  'Technical documentation',
  'Design files',
  'Admin access',
  'Basic system walkthrough',
]

const ongoingSupportItems = [
  'Security and dependency updates',
  'Bug fixes',
  'Performance optimization',
  'Monitoring and troubleshooting',
  'New features',
  'API and integration changes',
  'Database or application improvements',
  'UX refinements',
  'Technical maintenance',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* SECTION 1: PRICING */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Custom / Next.js Development{' '}
            <span className="italic text-frame-accent">Pricing &amp; Roadmaps.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Custom development pricing depends heavily on architecture, functionality, integrations, user roles, data requirements, and infrastructure. Because every project is different, the figures below should be treated as starting references rather than fixed packages.
          </p>
        </div>

        {/* 4 Package Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between rounded-xl border p-6 sm:p-8 transition-colors ${
                pkg.featured
                  ? 'border-frame-accent/50 bg-[#121214] shadow-[0_0_24px_rgba(168,85,247,0.08)]'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                {pkg.featured && (
                  <span className="mb-4 inline-block rounded-full border border-frame-accent/40 bg-frame-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                    Most Requested
                  </span>
                )}
                <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                  {pkg.name}
                </h3>
                <p className="mt-4 font-mono text-3xl font-medium text-frame-accent">
                  {pkg.price}
                </p>
                {pkg.timeline && (
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                    Typical Timeline: {pkg.timeline}
                  </p>
                )}
                {pkg.description && (
                  <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300 border-t border-white/[0.08] pt-4">
                    {pkg.description}
                  </p>
                )}
                {pkg.features && (
                  <ul className="mt-4 space-y-2 text-xs text-zinc-300">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                          <Check className="h-2.5 w-2.5 stroke-[2.5]" />
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
                  Request Quote
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Included Across Custom Projects */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <h3 className="font-heading text-lg font-medium text-white">
            Included Across Custom Projects:
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {inclusions.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-xs sm:text-sm text-zinc-200"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm italic text-zinc-400">
            Final pricing is confirmed after the scope and architecture are reviewed.
          </p>
        </div>

        {/* SECTION 2: TIMELINE */}
        <div className="mt-20 border-t border-white/[0.08] pt-16">
          <div className="mb-10 max-w-3xl space-y-4">
            <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Custom / Next.js Development Timeline
            </h3>
            <p className="text-base leading-relaxed text-zinc-300">
              Custom projects take longer than standard platform websites because the functionality and architecture are built around the specific requirements of the application.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
            <table className="w-full text-left min-w-[500px]">
              <thead className="border-b border-white/[0.08] bg-white/[0.02]">
                <tr>
                  <th className="p-5 font-mono text-[11px] uppercase tracking-wider text-zinc-400">Project Type</th>
                  <th className="p-5 font-mono text-[11px] uppercase tracking-wider text-frame-accent">Typical Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-sm">
                {timelineTable.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-white/[0.02]">
                    <td className="p-5 font-medium text-white">{row.type}</td>
                    <td className="p-5 font-mono font-medium text-frame-accent">{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Timeline depends on feature scope, content readiness, integrations, approvals, technical dependencies, and changes introduced during development. Projects generally move more efficiently when requirements, existing system access, content, and integration details are confirmed before development begins.
          </p>
        </div>

        {/* SECTION 3: SOURCE CODE OWNERSHIP, DOCUMENTATION & HANDOVER */}
        <div className="mt-20 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10">
          <div className="max-w-3xl space-y-4">
            <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Source Code Ownership, Documentation &amp; Handover
            </h3>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              A custom application should remain understandable and manageable after development is complete. Depending on the project agreement, handover can include:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {handoverItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-xs sm:text-sm text-zinc-200"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-6 space-y-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <p>
              Ownership of source code, intellectual property, licenses, and third-party accounts is defined in the project agreement.
            </p>
            <p className="font-medium text-white">
              The goal is to give your team clear control over the agreed deliverables and the information needed to continue operating the application.
            </p>
          </div>
        </div>

        {/* SECTION 4: POST-LAUNCH SUPPORT & ONGOING DEVELOPMENT */}
        <div className="mt-20 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10">
          <div className="max-w-3xl space-y-4">
            <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Post-Launch Support &amp; Ongoing Development
            </h3>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              A custom application continues to evolve after launch as users, products, dependencies, and business requirements change. Ongoing support can include:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3">
            {ongoingSupportItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-xs sm:text-sm text-zinc-200"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs sm:text-sm italic text-zinc-400 border-t border-white/[0.08] pt-4">
            Ongoing development is scoped around your product roadmap and technical priorities.
          </p>
        </div>
      </div>
    </section>
  )
}
