'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import ApiHeroVisual from './ApiHeroVisual'

const kineticMetrics = [
  {
    num: '01',
    label: 'REST & GraphQL APIs',
    detail: 'Contract-first endpoint architectures with strict JSON Schema and OpenAPI documentation',
  },
  {
    num: '02',
    label: 'Payment & Third-Party',
    detail: 'Seamless integrations for bKash, Nagad, Stripe, PayPal, Salesforce, and enterprise ERPs',
  },
  {
    num: '03',
    label: 'Guaranteed Delivery',
    detail: 'Idempotent request handling, automated exponential backoff, and webhook retry buffers',
  },
  {
    num: '04',
    label: 'High-Throughput Scale',
    detail: 'Sub-20ms P99 response times, distributed Redis caching, and zero-downtime versioning',
  },
]

export default function Hero({ service }) {
  const title = service?.h1 || 'Best API Development & Integration Service in Bangladesh'
  const subtitle =
    service?.shortDesc ||
    "Every app, website, and internal tool eventually needs to talk to something else: a payment processor, a CRM, another team's system, or an API of its own. Framecipher builds and integrates APIs for startups and businesses in Dhaka, and for clients across the US, UK, Australia, Canada, and UAE, so that data actually moves correctly between systems instead of breaking quietly somewhere in the middle."

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
            <span className="shrink-0 text-frame-accent">API Development</span>
          </nav>

          {/* Grid Layout: Left Content (6 cols), Right Visual (6 cols) */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content Column (6 cols) */}
            <div className="space-y-6">
              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                {title.includes('Bangladesh') ? (
                  <>
                    Best API Development &amp;{' '}
                    <span className="italic text-frame-accent">Integration Service in Bangladesh.</span>
                  </>
                ) : (
                  title
                )}
              </h1>

              {/* Sub-headline */}
              <p className="font-heading text-lg sm:text-xl font-medium tracking-tight text-zinc-200">
                Reliable Data Flow Between The Systems You Depend On
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
                  Discuss Your API Requirements
                </PosterButton>
              </div>

              {/* Trust Badge / SLA */}
              <div className="flex items-center gap-3 pt-2 text-xs text-zinc-400">
                <ShieldCheck className="h-4 w-4 text-frame-accent shrink-0" />
                <span>
                  Contract-First Design &bull; OpenAPI 3.1 &amp; Swagger &bull; 100% In-House Team
                </span>
              </div>
            </div>

            {/* Right Visual Column (6 cols, Expanded, Perfectly Balanced) */}
            <div className="flex justify-center w-full">
              <ApiHeroVisual />
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
