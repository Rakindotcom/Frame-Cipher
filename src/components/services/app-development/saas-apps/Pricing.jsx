'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'

const pricingTiers = [
  {
    name: 'SaaS MVP',
    price: '৳450,000',
    timeline: '10–14 weeks',
    featured: false,
    drivers: 'Core workflow, basic multi-tenancy, initial billing',
    includes: [
      'Core business workflow',
      'Basic multi-tenancy',
      'Initial subscription billing',
      'Standard admin dashboard',
      'Foundational testing & release',
    ],
  },
  {
    name: 'Standard SaaS Product',
    price: '৳800,000',
    timeline: '16–22 weeks',
    featured: true,
    drivers: 'Full multi-tenant architecture, tiered billing, team accounts',
    includes: [
      'Full multi-tenant architecture',
      'Tiered subscription billing',
      'Team accounts & role permissions',
      'Admin dashboards & analytics',
      'API integrations & webhooks',
      'Staging & production deployment',
    ],
  },
  {
    name: 'Advanced SaaS Platform',
    price: '৳1,400,000+',
    timeline: '24–36+ weeks',
    featured: false,
    drivers: 'Large infrastructure, advanced security, complex integrations',
    includes: [
      'Dedicated multi-region infrastructure',
      'Advanced security & SSO / SAML',
      'Complex enterprise integrations',
      'High-availability database cluster',
      'Custom SLA & dedicated support',
      'Continuous DevOps & compliance',
    ],
  },
]

const pricingFactors = [
  'Number of user roles',
  'Multi-tenant architecture',
  'Subscription model',
  'Billing complexity',
  'Admin dashboards',
  'APIs and integrations',
  'Automation & background jobs',
  'Analytics & tracking',
  'Security requirements',
  'Cloud infrastructure scale',
  'Mobile applications',
  'Enterprise requirements',
]

const scopeCheckpoints = [
  {
    title: 'Agreed Scope & Deliverables',
    desc: 'Features, user roles, integrations, supported environments, revision rounds, and deliverables are agreed before development begins.',
  },
  {
    title: 'Client Approvals',
    desc: 'You review important requirements, designs, functionality, and production milestones before the project progresses.',
  },
  {
    title: 'Workmanship Warranty',
    desc: 'Any warranty or defect-fixing period is provided according to Framecipher\'s actual terms and the project agreement.',
  },
  {
    title: 'Third-Party Dependencies',
    desc: 'Payment providers, cloud services, APIs, authentication services, email platforms, and other external systems can affect functionality or timing.',
  },
  {
    title: 'Post-Launch Support',
    desc: 'Bug fixes, infrastructure support, platform updates, new features, and ongoing development can be provided under an agreed support arrangement.',
  },
]

const postLaunchItems = [
  {
    title: 'Bug Fixes & Technical Support',
    desc: 'Investigate application bugs, API issues, crashes, and other technical problems after launch.',
  },
  {
    title: 'Security & Dependency Updates',
    desc: 'Keep frameworks, libraries, packages, and infrastructure components current based on the product\'s maintenance needs.',
  },
  {
    title: 'Performance Monitoring',
    desc: 'Review application behavior, infrastructure, database performance, and other important technical indicators as usage grows.',
  },
  {
    title: 'Framework & Infrastructure Updates',
    desc: 'Update application frameworks, deployment environments, dependencies, and infrastructure when required.',
  },
  {
    title: 'Feature Enhancements',
    desc: 'Add new functionality and improve existing workflows as customer needs and the product roadmap develop.',
  },
  {
    title: 'Billing & Integration Support',
    desc: 'Maintain payment integrations, APIs, webhooks, communication services, and other connected systems as they evolve.',
  },
  {
    title: 'Future Product Releases',
    desc: 'Plan, build, test, and deploy future product updates based on the agreed development scope.',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS Development Pricing and <span className="italic text-frame-accent">Timeline.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            SaaS development cost depends on the product model, tenant architecture, number of user roles, billing complexity, integrations, backend requirements, infrastructure, and testing scope. We confirm the final scope, deliverables, timeline, and price before development begins.
          </p>
        </div>

        {/* 3 Tier Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                      Project Type
                    </span>
                    <h3 className="font-heading text-lg font-medium tracking-tight text-white mt-1">
                      {tier.name}
                    </h3>
                  </div>
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
                  <p className="mt-2 text-[11px] text-zinc-400 font-mono">
                    {tier.drivers}
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

        {/* Pricing Factors Note Card */}
        <div className="mt-12 rounded-xl border border-white/[0.06] bg-[#121214] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <h4 className="font-heading text-base font-medium text-white">
              Pricing Factors
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400">
            The final cost can change based on:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-2">
            {pricingFactors.map((factor, idx) => (
              <div key={idx} className="flex items-center gap-2 rounded-lg border border-white/[0.04] bg-white/[0.02] p-2.5 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0" />
                <span>{factor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scope, Warranty & Support Checkpoints */}
        <div className="mt-12">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <h4 className="font-heading text-xl font-medium text-white">
              SaaS Project Scope, Warranty &amp; Support
            </h4>
          </div>
          <p className="mb-6 text-sm text-zinc-400">
            Every SaaS project should have clear expectations around scope, revisions, ownership, support, and third-party dependencies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeCheckpoints.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors hover:border-white/[0.14]">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h5 className="mt-2 font-heading text-base font-medium text-white">
                  {item.title}
                </h5>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Post-Launch Maintenance Deliverables */}
        <div className="mt-12">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <h4 className="font-heading text-xl font-medium text-white">
              Post-Launch SaaS Support &amp; Maintenance
            </h4>
          </div>
          <p className="mb-6 text-sm text-zinc-400">
            A SaaS product does not stop evolving after its first production release. The same team can continue with feature development, maintenance, platform updates, performance work, and integrations after launch.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {postLaunchItems.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-white/[0.06] bg-[#121214] p-5 transition-colors hover:border-white/[0.12]">
                <h5 className="font-heading text-sm font-medium text-white">
                  {item.title}
                </h5>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
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
