'use client'

import React from 'react'
import {
  Check,
  ShieldCheck,
  Clock,
  Layers,
  FileCode,
  Cpu,
  Workflow,
  CreditCard,
  Lock,
  Database,
  KeyRound,
  Layout,
  Compass,
  CheckCircle2,
  Target,
  Network,
  GitPullRequest,
  HeartHandshake
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const pricingTiers = [
  {
    name: 'Minimal MVP',
    price: '৳180,000',
    timeline: '~4–6 weeks',
    scope: 'Single core workflow, basic backend, one platform',
    featured: false,
    includes: [
      'Core hypothesis & user journey mapping',
      'Single-flow UI/UX wireframes & design',
      'Frontend & focused backend engineering',
      'User authentication & account setup',
      'Essential database schema & basic API',
      'Basic event telemetry & analytics',
      'Cloud production deployment & handoff',
    ],
  },
  {
    name: 'Standard MVP',
    price: '৳300,000',
    timeline: '~6–10 weeks',
    scope: 'Multiple core features, standard backend, single platform',
    featured: true,
    includes: [
      'Multiple core business workflows',
      'Clickable UI/UX interactive prototype',
      'Standard backend & modular database architecture',
      'Payment gateway integration (bKash / Nagad / Stripe)',
      'User profiles, notifications & admin controls',
      'PostHog / Mixpanel funnel measurement setup',
      'Comprehensive functional QA & cloud deployment',
    ],
  },
  {
    name: 'Multi-Platform MVP',
    price: '৳450,000',
    timeline: '~10–14 weeks',
    scope: 'Core functionality across web and mobile, moderate backend',
    featured: false,
    includes: [
      'Unified web application + iOS & Android mobile apps',
      'Shared business logic layer (Flutter / React Native)',
      'Third-party API connectivity & webhook endpoints',
      'Push notifications, real-time sync & location features',
      'Multi-role permissions & administrative portal',
      'Dual store release prep (App Store + Google Play)',
      'Complete staging & production environment handoff',
    ],
  },
  {
    name: 'Complex MVP',
    price: 'Custom Quote',
    timeline: '~14+ weeks',
    scope: 'Multiple core workflows, advanced backend, extensive integrations',
    featured: false,
    includes: [
      'Advanced backend with streaming or event pipelines',
      'AI model workflows or proprietary algorithm execution',
      'Enterprise SSO, custom compliance & security controls',
      'Legacy system connectivity or IoT integrations',
      'Dedicated multi-disciplinary agile sprint squad',
      'Comprehensive SLA & post-launch pilot iteration support',
    ],
  },
]

const timelineFactors = [
  {
    icon: Layers,
    title: 'Multiple Platforms',
    desc: 'Building across web, iOS, and Android expands development, device testing, and dual-store submission requirements.',
  },
  {
    icon: Workflow,
    title: 'Complex User Workflows',
    desc: 'Multi-step transactions, booking flows, or algorithmic calculations require careful business logic mapping.',
  },
  {
    icon: Cpu,
    title: 'Advanced Backend Needs',
    desc: 'Event-driven architectures, real-time WebSockets, and asynchronous background queues require specialized infrastructure.',
  },
  {
    icon: CreditCard,
    title: 'Payment & API Integrations',
    desc: 'Connecting multiple payment gateways (bKash, Nagad, Stripe), CRM, ERP, and delivery logistics APIs increases integration testing.',
  },
  {
    icon: Lock,
    title: 'Complex Authentication',
    desc: 'Multi-tenant isolation, enterprise SSO, role hierarchies, and granular permission matrices add architectural layers.',
  },
  {
    icon: Database,
    title: 'Legacy System Integration',
    desc: 'Connecting with older, undocumented internal databases or on-premise systems requires custom adapter layers.',
  },
]

const handoverItems = [
  { icon: FileCode, title: '100% Source Code Ownership', desc: 'Full intellectual property transfer with complete git repository commit history.' },
  { icon: KeyRound, title: 'Repository & Environment Access', desc: 'Full administrative credentials for GitHub/GitLab, hosting, and cloud consoles.' },
  { icon: Layers, title: 'Technical Architecture Documentation', desc: 'Clear system diagrams, database ERDs, API specs, and setup instructions.' },
  { icon: Database, title: 'Database & Infrastructure Config', desc: 'Migration scripts, environment variables, Dockerfiles, and CI/CD pipelines.' },
  { icon: Layout, title: 'Figma UI/UX Design System', desc: 'Editable design files, clickable component library, and design tokens.' },
  { icon: Compass, title: 'Phase 2 Scale Guidance', desc: 'Technical roadmap and architectural recommendations for the next growth phase.' },
]

const governancePoints = [
  {
    icon: Target,
    title: 'Project Scope Control',
    desc: 'Before development begins, we define the agreed functionality, platforms, integrations, deliverables, responsibilities, and expected timeline. Features outside that scope can be considered for a later phase or handled through an approved change request.',
  },
  {
    icon: CheckCircle2,
    title: 'Review & Approval Gates',
    desc: 'Design and development stages include milestone review points. You review and sign off on agreed work before moving to the next stage, keeping decisions visible and eliminating surprises.',
  },
  {
    icon: Network,
    title: 'Third-Party Dependencies',
    desc: 'We integrate and test payment providers, APIs, and cloud services within agreed scope, while monitoring any third-party downtime or policy shifts to ensure resilient failure handling.',
  },
  {
    icon: GitPullRequest,
    title: 'Change Request Clarity',
    desc: 'New features or major changes after scope approval are evaluated transparently with clear timeline and cost impacts before implementation.',
  },
  {
    icon: HeartHandshake,
    title: 'Post-Launch Support',
    desc: 'Launch support includes production deployment checks, initial telemetry verification, and bug resolution to ensure smooth user validation.',
  },
  {
    icon: ShieldCheck,
    title: 'Workmanship Warranty',
    desc: 'All custom MVP code is covered under a structured workmanship warranty against defects within the approved scope, backed by our dedicated in-house engineering squad.',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            MVP Development Pricing &amp; Timeline.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            MVP development pricing depends on the number of platforms, core workflows, backend complexity, integrations, authentication, payment requirements, testing needs, and overall scope.
          </p>
        </div>

        {/* 4-Tier Pricing Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
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
                      Package 0{idx + 1}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-medium text-white">
                      {tier.name}
                    </h3>
                  </div>
                  {tier.featured && (
                    <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-purple-400">
                      Most Selected
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
                    {tier.price}
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <Clock className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                  <span>{tier.timeline}</span>
                </div>

                <p className="mt-3 text-xs text-zinc-400 font-mono border-t border-white/10 pt-2.5">
                  {tier.scope}
                </p>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 block mb-2.5">
                    What is Included:
                  </span>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {tier.includes.map((inc, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <PosterButton
                  href="/contact"
                  variant={tier.featured ? 'accent' : 'outline'}
                  className="w-full justify-center text-xs sm:text-sm"
                >
                  Choose {tier.name}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* What Affects MVP Cost & Timeline */}
        <div className="mt-16">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-600" />
            <h3 className="font-heading text-xl font-medium text-white">
              What Affects MVP Cost &amp; Timeline?
            </h3>
          </div>
          <p className="mb-6 text-sm text-zinc-400">
            Most MVPs can take approximately 4–14+ weeks depending on scope. Projects move faster when the core hypothesis, design assets, API credentials, and approvals are ready early.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {timelineFactors.map((f, fIdx) => {
              const Icon = f.icon
              return (
                <div
                  key={fIdx}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                        0{fIdx + 1}
                      </span>
                    </div>
                    <h4 className="mt-4 font-heading text-base font-medium text-white">{f.title}</h4>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* MVP Ownership & Handover */}
        <div className="mt-16">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-600" />
            <h3 className="font-heading text-xl font-medium text-white">
              MVP Ownership &amp; Complete Handover
            </h3>
          </div>
          <p className="mb-6 text-sm text-zinc-400">
            Your MVP should remain usable and evolvable after our engagement ends. You retain 100% intellectual property ownership with complete documentation.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {handoverItems.map((h, hIdx) => {
              const Icon = h.icon
              return (
                <div
                  key={hIdx}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                        0{hIdx + 1}
                      </span>
                    </div>
                    <h4 className="mt-4 font-heading text-base font-medium text-white">{h.title}</h4>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Project Scope, Review & Support Protocol */}
        <div className="mt-16">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-600" />
            <h3 className="font-heading text-xl font-medium text-white">
              Project Scope, Review &amp; Workmanship Warranty
            </h3>
          </div>
          <p className="mb-6 text-sm text-zinc-400">
            Clear scope keeps MVP development focused and prevents the first release from expanding into the entire product roadmap.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {governancePoints.map((gov, gIdx) => {
              const Icon = gov.icon
              return (
                <div
                  key={gIdx}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                        0{gIdx + 1}
                      </span>
                    </div>
                    <h4 className="mt-4 font-heading text-base font-medium text-white">{gov.title}</h4>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">{gov.desc}</p>
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
