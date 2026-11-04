'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'

const pricingTiers = [
  {
    name: 'Departmental Tool',
    price: '৳500,000',
    timeline: '12–16 weeks',
    featured: false,
    drivers: 'Single department, limited integrations, standard roles',
    includes: [
      'Single department scope & workflow',
      'Standard role-based access control',
      'Initial reporting dashboard',
      'Basic API or database connection',
      'Foundational QA & user validation',
    ],
  },
  {
    name: 'Cross-Departmental System',
    price: '৳900,000',
    timeline: '18–24 weeks',
    featured: true,
    drivers: 'Multiple departments, ERP integration, role-based access',
    includes: [
      'Multiple department workflows & handoffs',
      'ERP or CRM integration pipeline',
      'Multi-level authorization & approvals',
      'Operational dashboards & data exports',
      'Pilot deployment & user training',
      'Production release & monitoring',
    ],
  },
  {
    name: 'Complex Enterprise Platform',
    price: '৳1,600,000',
    timeline: '24–36 weeks',
    featured: false,
    drivers: 'Multiple legacy integrations, advanced security, higher user volume',
    includes: [
      'Multiple legacy system & database integrations',
      'Enterprise SSO (SAML 2.0 / OIDC)',
      'High-concurrency performance tuning',
      'Comprehensive audit logging & compliance',
      'Phased rollout & change management',
      'Disaster recovery & failover architecture',
    ],
  },
  {
    name: 'Large-Scale Enterprise System',
    price: 'Custom Quote',
    timeline: '36+ weeks',
    featured: false,
    drivers: 'Organization-wide deployment, extensive integrations, dedicated architecture',
    includes: [
      'Organization-wide mission-critical deployment',
      'Extensive middleware & data pipelines',
      'Custom SLA & dedicated engineering team',
      'Full data migration & system cutover',
      'Continuous DevOps, monitoring & SLA support',
      'Complete IP & documentation handoff',
    ],
  },
]

const scopeCheckpoints = [
  {
    title: 'Project Scope',
    desc: 'Features, user roles, integrations, environments, supported systems, revision rounds, and deliverables are agreed before development begins.',
  },
  {
    title: 'Stakeholder Approvals',
    desc: 'Important requirements, designs, architecture decisions, testing milestones, and rollout stages are reviewed with the appropriate stakeholders.',
  },
  {
    title: 'Workmanship Warranty',
    desc: 'Any defect-fixing or workmanship warranty is provided according to Framecipher\'s actual terms and the project agreement.',
  },
  {
    title: 'Third-Party Dependencies',
    desc: 'ERPs, identity providers, APIs, cloud services, legacy systems, and other external platforms can affect project functionality, availability, and delivery timelines.',
  },
  {
    title: 'Change Requests',
    desc: 'Requirements outside the approved scope are reviewed separately based on their potential impact on architecture, cost, resources, and timeline.',
  },
  {
    title: 'Post-Launch Support',
    desc: 'Ongoing maintenance, infrastructure support, security updates, integrations, and new functionality can be provided through an agreed support arrangement.',
  },
]

const postLaunchItems = [
  {
    title: 'Application Monitoring',
    desc: 'Monitor application health, errors, integrations, infrastructure, and other important production signals.',
  },
  {
    title: 'Incident Response',
    desc: 'Investigate production issues according to the agreed support process, priority structure, and escalation path.',
  },
  {
    title: 'Bug Fixes',
    desc: 'Identify, resolve, test, and release defects discovered after launch according to the applicable support arrangement.',
  },
  {
    title: 'Security Updates',
    desc: 'Review application dependencies, security-sensitive components, and relevant infrastructure as the system evolves.',
  },
  {
    title: 'Performance Optimization',
    desc: 'Investigate application, database, API, or infrastructure bottlenecks when performance changes or workloads increase.',
  },
  {
    title: 'Infrastructure Support',
    desc: 'Support agreed cloud environments, backups, monitoring, deployment processes, and infrastructure requirements.',
  },
  {
    title: 'Feature Enhancements',
    desc: 'Continue developing workflows, integrations, reports, and other functionality as organizational requirements change.',
  },
  {
    title: 'SLA-Based Support Options',
    desc: 'Where offered, support arrangements can define response targets, escalation paths, support windows, priorities, and service responsibilities.',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Enterprise App Development{' '}
            <span className="italic text-frame-accent">Pricing &amp; Timeline.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise pricing depends on application complexity, integration scope, number of user roles, security requirements, existing systems, data migration, infrastructure, and rollout needs. The final price is confirmed after discovery, scope definition, and technical assessment.
          </p>
        </div>

        {/* 4 Tier Grid */}
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

        {/* Scope, Warranty & Governance Checkpoints */}
        <div className="mt-14">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <h4 className="font-heading text-xl font-medium text-white">
              Enterprise Project Scope, Warranty &amp; Support
            </h4>
          </div>
          <p className="mb-6 text-sm text-zinc-400">
            Enterprise projects require clear expectations around requirements, approvals, responsibilities, revisions, third-party dependencies, and post-launch services.
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
        <div className="mt-14">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <h4 className="font-heading text-xl font-medium text-white">
              Enterprise Support, Maintenance &amp; SLA
            </h4>
          </div>
          <p className="mb-6 text-sm text-zinc-400">
            Enterprise applications can support daily business operations, so post-launch services should match the organization&apos;s technical and operational requirements.
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
