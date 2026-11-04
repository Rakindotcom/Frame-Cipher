'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { Ambient3DCanvas } from '../../../ui/ambient-3d-canvas'

const whyChoosePillars = [
  {
    title: 'Security Stays Current',
    description: 'Regular updates and security checks help reduce exposure to known vulnerabilities and compatibility problems.',
  },
  {
    title: 'Backups Stay Recoverable',
    description: 'Backups are more useful when they are stored separately and periodically tested for restoration.',
  },
  {
    title: 'Problems Are Caught Earlier',
    description: 'Uptime, performance, forms, integrations, and other important website functions can be monitored before customers report an issue.',
  },
  {
    title: 'Routine Changes Stay Simple',
    description: 'Small content changes, product updates, image replacements, and minor fixes should not always require a new development project.',
  },
  {
    title: 'Maintenance Matches the Website',
    description: 'A WordPress blog, WooCommerce store, Shopify site, and custom Next.js application have different technical needs. Your maintenance plan should reflect those differences.',
  },
]

export default function Hero() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* 1. TOP HEADER & BREADCRUMBS CLEARANCE */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb Navigation Header Row */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <nav aria-label="Breadcrumb navigation" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
              <Link href="/" className="shrink-0 hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600 shrink-0" />
              <Link href="/services" className="shrink-0 hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600 shrink-0" />
              <Link href="/services/website-design-development" className="shrink-0 hover:text-white transition-colors">
                Website Design &amp; Development
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600 shrink-0" />
              <span className="text-frame-accent shrink-0">Website Maintenance</span>
            </nav>

            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-emerald-400 bg-[#121214] border border-emerald-500/20 rounded-full px-3.5 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>99.9% Uptime SLA &middot; Dhaka &amp; Global</span>
            </div>
          </div>

          {/* Master 12-Column Hero Grid */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column (7-col) */}
            <div className="space-y-6 lg:col-span-6 xl:col-span-6">
              {/* Eyebrow & Meta */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                  <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
                    [ 12 / WEBSITE MAINTENANCE ]
                  </span>
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Security &amp; Updates / 99.9% Uptime SLA
                </span>
              </div>

              {/* H1 Heading */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                Website Maintenance{' '}
                <span className="italic text-frame-accent">Service in Bangladesh.</span>
              </h1>

              {/* Description */}
              <p className="max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
                We keep your website running smoothly with security updates, backups, monitoring, performance checks, bug fixes, and ongoing technical support. From WordPress and Shopify to custom Next.js websites, we provide reliable maintenance for businesses in Bangladesh and worldwide.
              </p>

              {/* Symmetrical 52px Button Pair */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <PosterButton href="/contact" variant="accent">
                  Get Free Consultation
                </PosterButton>
                <PosterButton href="#pricing" variant="outline">
                  Request a Health Assessment
                </PosterButton>
              </div>
            </div>

            {/* Right Column (5-col) - Interactive 3D Canvas */}
            <div className="relative flex justify-center lg:col-span-6 xl:col-span-6 w-full">
              <div className="relative w-full max-w-[540px]">
                <Ambient3DCanvas
                  mode="orbital"
                  className="w-full aspect-square max-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAINTENANCE SLA & STATUS LEDGER */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#121214] p-6 md:p-8 font-mono text-xs">
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Updates</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Safe Deploy</p>
              <p className="mt-1 text-[11px] text-emerald-400">Staging-Tested Patching</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Backups</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Tested Recovery</p>
              <p className="mt-1 text-[11px] text-frame-accent">Off-Site Verified Backups</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Uptime</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">24/7 Monitoring</p>
              <p className="mt-1 text-[11px] text-emerald-400">Proactive Outage Alerts</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">Engineering</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">In-House Team</p>
              <p className="mt-1 text-[11px] text-frame-accent">Direct Senior Dev Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRATEGIC ASSESSMENT: WHY CHOOSE WEBSITE MAINTENANCE? */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Left-Aligned Header Block */}
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Why Choose Website{' '}
              <span className="italic text-frame-accent">Maintenance?</span>
            </h2>

            <div className="space-y-3 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              <p>
                A website is not finished when it goes live. It continues to depend on software updates, security patches, backups, integrations, content changes, and ongoing monitoring.
              </p>
              <p>
                Without regular maintenance, small problems can become larger ones. An outdated plugin can create compatibility issues. A failed integration can stop leads or orders. An untested backup may not help when recovery is actually needed.
              </p>
              <p className="font-medium text-white">
                Professional website maintenance keeps those risks visible and manageable. The right maintenance plan should protect the website, monitor its health, handle routine changes, and provide a clear response when something goes wrong.
              </p>
            </div>

            {/* 4-Step Process Pipeline */}
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono uppercase tracking-wider text-white">
              <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2">Updates &amp; Security</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2">Backups &amp; Monitoring</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2">Bug Fixes &amp; Changes</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-full border border-frame-accent/40 bg-frame-accent/15 px-3.5 py-2 text-frame-accent">Incident Response</span>
            </div>
          </div>

          {/* 3 Strategic Approach Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors hover:border-white/[0.14]">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  Who We Maintain For
                </span>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  Businesses running WordPress, WooCommerce, Shopify, Wix, Webflow, Magento, or custom Next.js websites in any market.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors hover:border-white/[0.14]">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  What We Cover
                </span>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  Security updates, tested backups, uptime monitoring, performance checks, bug fixes, integrations, and routine content changes.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors hover:border-white/[0.14]">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  How We Work
                </span>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  A plan matched to your stack&mdash;staging-tested patching, visible technical work, and a clear response when something goes wrong.
                </p>
              </div>
            </div>
          </div>

          {/* Honest Assessment Callout */}
          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:flex-row md:items-center">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300 max-w-2xl">
              Not sure what your website actually needs to stay healthy? We&apos;ll audit it and tell you honestly what matters most.
            </p>
            <PosterButton href="/contact" variant="outline" className="shrink-0">
              Request a Health Assessment
            </PosterButton>
          </div>

          {/* 5 Pillars Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoosePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors hover:border-white/[0.14]"
              >
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
