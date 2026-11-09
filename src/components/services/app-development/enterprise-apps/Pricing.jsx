'use client'

import React from 'react'
import {
  Check,
  FileText,
  Users,
  ShieldCheck,
  Network,
  GitPullRequest,
  HeartHandshake,
  Activity,
  AlertTriangle,
  Bug,
  Gauge,
  Server,
  Sparkles,
  Clock
} from 'lucide-react'
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
    icon: FileText,
    title: 'Project Scope',
    desc: 'Features, user roles, integrations, environments, supported systems, revision rounds, and deliverables are agreed before development begins.',
  },
  {
    icon: Users,
    title: 'Stakeholder Approvals',
    desc: 'Important requirements, designs, architecture decisions, testing milestones, and rollout stages are reviewed with the appropriate stakeholders.',
  },
  {
    icon: ShieldCheck,
    title: 'Workmanship Warranty',
    desc: 'Any defect-fixing or workmanship warranty is provided according to Framecipher\'s actual terms and the project agreement.',
  },
  {
    icon: Network,
    title: 'Third-Party Dependencies',
    desc: 'ERPs, identity providers, APIs, cloud services, legacy systems, and other external platforms can affect project functionality, availability, and delivery timelines.',
  },
  {
    icon: GitPullRequest,
    title: 'Change Requests',
    desc: 'Requirements outside the approved scope are reviewed separately based on their potential impact on architecture, cost, resources, and timeline.',
  },
  {
    icon: HeartHandshake,
    title: 'Post-Launch Support',
    desc: 'Ongoing maintenance, infrastructure support, security updates, integrations, and new functionality can be provided through an agreed support arrangement.',
  },
]

const postLaunchItems = [
  {
    icon: Activity,
    title: 'Application Monitoring',
    desc: 'Monitor application health, errors, integrations, infrastructure, and other important production signals.',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    desc: 'Investigate production issues according to the agreed support process, priority structure, and escalation path.',
  },
  {
    icon: Bug,
    title: 'Bug Fixes',
    desc: 'Identify, resolve, test, and release defects discovered after launch according to the applicable support arrangement.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Updates',
    desc: 'Review application dependencies, security-sensitive components, and relevant infrastructure as the system evolves.',
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    desc: 'Investigate application, database, API, or infrastructure bottlenecks when performance changes or workloads increase.',
  },
  {
    icon: Server,
    title: 'Infrastructure Support',
    desc: 'Support agreed cloud environments, backups, monitoring, deployment processes, and infrastructure requirements.',
  },
  {
    icon: Sparkles,
    title: 'Feature Enhancements',
    desc: 'Continue developing workflows, integrations, reports, and other functionality as organizational requirements change.',
  },
  {
    icon: Clock,
    title: 'SLA-Based Support Options',
    desc: 'Where offered, support arrangements can define response targets, escalation paths, support windows, priorities, and service responsibilities.',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Enterprise App Development Pricing &amp; Timeline.
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
              className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border p-6 sm:p-7 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent ${
                tier.featured
                  ? 'border-purple-600/40 bg-[#121214] shadow-lg shadow-purple-950/20'
                  : 'border-white/10 bg-[#0D0D0F] hover:border-white/20 hover:bg-[#121214]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-purple-400">
                      Project Type
                    </span>
                    <h3 className="font-heading text-lg font-medium tracking-tight text-white mt-1">
                      {tier.name}
                    </h3>
                  </div>
                  {tier.featured && (
                    <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-purple-400">
                      Most Selected
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

                <div className="mt-6 border-t border-white/10 pt-5">
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

              <div className="mt-8 border-t border-white/10 pt-5">
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
        <div className="mt-16">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-600" />
            <h3 className="font-heading text-xl font-medium text-white">
              Enterprise Project Scope, Warranty &amp; Support
            </h3>
          </div>
          <p className="mb-6 text-sm text-zinc-400">
            Enterprise projects require clear expectations around requirements, approvals, responsibilities, revisions, third-party dependencies, and post-launch services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeCheckpoints.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="mt-4 font-heading text-base font-medium text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Post-Launch Maintenance Deliverables */}
        <div className="mt-16">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-600" />
            <h3 className="font-heading text-xl font-medium text-white">
              Enterprise Support, Maintenance &amp; SLA
            </h3>
          </div>
          <p className="mb-6 text-sm text-zinc-400">
            Enterprise applications can support daily business operations, so post-launch services should match the organization&apos;s technical and operational requirements.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {postLaunchItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="mt-4 font-heading text-base font-medium text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
