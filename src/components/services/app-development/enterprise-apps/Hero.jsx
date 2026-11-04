'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import EnterpriseHeroVisual from './EnterpriseHeroVisual'

const kineticMetrics = [
  {
    num: '01',
    label: 'Custom ERP & Portals',
    detail: 'Modular enterprise platforms built for complex departmental workflows and high transaction volumes',
  },
  {
    num: '02',
    label: 'Legacy & System Integrations',
    detail: 'Secure connectivity with SAP, Oracle, Salesforce, HRMS, and proprietary legacy databases',
  },
  {
    num: '03',
    label: 'Enterprise SSO & RBAC',
    detail: 'SAML 2.0, OIDC, granular multi-level authorization, and centralized audit logging',
  },
  {
    num: '04',
    label: 'High-Availability Cloud',
    detail: 'Redundant microservices, fault-tolerant job queues, and enterprise disaster recovery SLAs',
  },
]

export default function Hero({ service }) {
  const title = service?.h1 || 'Best Enterprise App Development Service in Bangladesh'
  const subtitle =
    service?.shortDesc ||
    'Enterprise applications need to fit into an existing organization. That means more than building screens and features. Framecipher develops custom enterprise applications around your business processes, user roles, existing systems, security requirements, and long-term operational needs. We handle discovery, architecture, UI/UX, development, integration, testing, deployment, and ongoing support through one in-house team for organizations in Bangladesh and international markets.'

  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-white/[0.08] px-4 pt-28 pb-20 sm:px-6 md:px-8 md:pt-32 md:pb-28">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs (§2.3 Clearance Standard) */}
          <nav
            aria-label="Breadcrumbs"
            className="mb-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1 font-mono text-[11px] sm:text-xs text-zinc-400"
          >
            <Link href="/" className="shrink-0 transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
            <Link href="/services" className="shrink-0 transition-colors hover:text-white">
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
            <Link
              href="/services/app-development"
              className="shrink-0 transition-colors hover:text-white"
            >
              App Development
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
            <span className="shrink-0 text-frame-accent">Enterprise Apps</span>
          </nav>

          {/* Grid Layout: Left Content (6 cols), Right Visual (6 cols) */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content Column (6 cols) */}
            <div className="space-y-6">
{/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white">
                {title.includes('Bangladesh') ? (
                  <>
                    Best Enterprise App Development{' '}
                    <span className="italic text-frame-accent">Service in Bangladesh.</span>
                  </>
                ) : (
                  title
                )}
              </h1>

              {/* Sub-headline Pill / Headline Tag */}
              <p className="font-heading text-lg sm:text-xl font-medium tracking-tight text-zinc-200">
                Enterprise Software Built Around Your Workflows, Systems &amp; People
              </p>

              {/* Running Description */}
              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-2xl">
                {subtitle}
              </p>

              {/* Symmetrical 52px Button Pair (§4 Standard) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <PosterButton href="/contact" variant="accent">
                  Get Free Consultation
                </PosterButton>
                <PosterButton href="#pricing" variant="outline">
                  Discuss Your Enterprise Project
                </PosterButton>
              </div>

              {/* Trust Badge / SLA */}
              <div className="flex items-center gap-3 pt-2 text-xs text-zinc-400">
                <ShieldCheck className="h-4 w-4 text-frame-accent shrink-0" />
                <span>
                  Custom ERP &amp; Portals &bull; SOC2 &amp; Role Governance &bull; 100% In-House Team
                </span>
              </div>
            </div>

            {/* Right Visual Column (6 cols, Expanded, Perfectly Balanced) */}
            <div className="flex justify-center lg:justify-end">
              <EnterpriseHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* METRIC RIBBON (4-Column Layout) */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-12 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {kineticMetrics.map((item) => (
              <div
                key={item.num}
                className="flex flex-col justify-between p-6 md:p-8 transition-colors duration-200 hover:bg-white/[0.02]"
              >
                <span className="font-mono text-xs font-semibold tracking-wider text-frame-accent">
                  {item.num}
                </span>
                <h3 className="mt-2 font-heading text-base font-medium text-white group-hover:text-white transition-colors">
                  {item.label}
                </h3>
                <p className="mt-2 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
