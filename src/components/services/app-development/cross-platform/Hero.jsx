'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, Layers, Cpu, Rocket, Activity } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import CrossPlatformHeroVisual from './CrossPlatformHeroVisual'

const kineticMetrics = [
  {
    num: '01',
    icon: Layers,
    label: 'Flutter & React Native',
    detail: 'Single-codebase cross-platform mobile engineering with zero performance compromises',
  },
  {
    num: '02',
    icon: Cpu,
    label: 'Shared Logic & Native Modules',
    detail: 'Shared business workflows coupled with native Kotlin and Swift bridges where needed',
  },
  {
    num: '03',
    icon: Rocket,
    label: 'Dual Store Deployment',
    detail: 'Synchronized publishing to both Apple App Store and Google Play Store ecosystems',
  },
  {
    num: '04',
    icon: Activity,
    label: 'Lifecycle SLA Maintenance',
    detail: 'Continuous framework updates, OS compatibility patching, and real-device QA',
  },
]

export default function Hero({ service }) {
  const title =
    service?.h1 || 'Best Cross-Platform App Development Service in Bangladesh'
  const subtitle =
    service?.shortDesc ||
    'Framecipher builds cross-platform apps with Flutter and React Native for startups, growing businesses, and established companies that need reliable Android and iOS applications without managing two completely separate development efforts. We share code where it makes sense, use native modules where the platform requires them, and handle strategy, UI/UX, development, testing, and dual-store deployment through one in-house team.'

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
            <Link href="/" className="shrink-0 whitespace-nowrap transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
            <Link href="/services" className="shrink-0 whitespace-nowrap transition-colors hover:text-white">
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
            <Link href="/services/app-development" className="shrink-0 whitespace-nowrap transition-colors hover:text-white">
              App Development
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
            <span className="shrink-0 whitespace-nowrap text-purple-400 font-semibold">Cross-Platform</span>
          </nav>

          {/* Grid Layout: Left Content, Right Visual */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content Column (6 cols) */}
            <div className="space-y-6">
              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                {title.includes('Bangladesh') ? (
                  <>
                    <span className="block text-white">Best Cross-Platform App Development</span>
                    <span className="block text-purple-600">Service in Bangladesh.</span>
                  </>
                ) : (
                  title
                )}
              </h1>

              {/* Sub-headline */}
              <p className="font-heading text-lg sm:text-xl font-medium tracking-tight text-zinc-200">
                Reach Android &amp; iOS With One Coordinated Development Approach
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
                  Discuss Your App Requirements
                </PosterButton>
              </div>

              {/* Trust Badge / SLA */}
              <div className="flex items-center gap-3 pt-2 text-xs text-zinc-400">
                <ShieldCheck className="h-4 w-4 text-purple-600 shrink-0" />
                <span>
                  Flutter &amp; React Native &bull; Dual Store Deployment &bull; 100% In-House Team
                </span>
              </div>
            </div>

            {/* Right Visual Column (6 cols) - PRESERVED COMPLETELY */}
            <div className="flex justify-center lg:justify-end">
              <CrossPlatformHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* METRIC RIBBON (4-Column Layout) */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-12 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {kineticMetrics.map((metric) => {
              const Icon = metric.icon
              return (
                <div
                  key={metric.num}
                  className="flex flex-col justify-between p-6 md:p-8 transition-colors duration-200 hover:bg-[#18181B]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-purple-600 font-semibold">
                      {metric.num}
                    </span>
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-medium tracking-tight text-white">
                    {metric.label}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm font-normal leading-relaxed text-zinc-300">
                    {metric.detail}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
