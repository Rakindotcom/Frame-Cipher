'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, Cpu, Smartphone, Play, Wrench } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import AndroidHeroVisual from './AndroidHeroVisual'

const kineticMetrics = [
  {
    num: '01',
    label: 'Native Kotlin Core',
    detail: 'Modern Kotlin Coroutines, Jetpack Compose, and direct Android platform access',
    icon: Cpu,
  },
  {
    num: '02',
    label: 'Real Device Diversity',
    detail: 'Engineered for diverse screen resolutions, hardware tiers, and Android OS versions',
    icon: Smartphone,
  },
  {
    num: '03',
    label: 'Google Play Release',
    detail: 'Play Console preparation, app signing, privacy policies, and release workflows',
    icon: Play,
  },
  {
    num: '04',
    label: 'Lifecycle Maintenance',
    detail: 'OS compatibility upgrades, dependency updates, and continuous performance tuning',
    icon: Wrench,
  },
]

export default function Hero({ service }) {
  const title = service?.h1 || 'Best Android App Development Service in Bangladesh'
  const subtitle =
    service?.shortDesc ||
    'Framecipher builds native Android applications in Kotlin for startups, businesses, ecommerce brands, SaaS products, and custom digital solutions. We plan the user experience, architecture, integrations, testing, and Google Play release around your actual requirements rather than treating Android as an afterthought.'

  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* HERO SECTION */}
      <section className="android-hero-section relative isolate overflow-hidden border-b border-white/[0.08] px-4 pt-28 pb-20 sm:px-6 md:px-8 md:pt-32 md:pb-28">
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
            <span className="shrink-0 whitespace-nowrap text-purple-400 font-semibold">Android</span>
          </nav>

          {/* Grid Layout: Left Content, Right Visual */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content Column (6 cols) */}
            <div className="space-y-6">
              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white">
                {title.includes('Bangladesh') ? (
                  <>
                    <span className="block text-white">Best Android App Development</span>
                    <span className="block text-purple-600">Service in Bangladesh.</span>
                  </>
                ) : (
                  title
                )}
              </h1>

              {/* Sub-headline Pill / Headline Tag */}
              <p className="font-heading text-lg sm:text-xl font-medium tracking-tight text-zinc-200">
                Native Android Apps Built for Real Devices, Real Users &amp; Real Business Needs
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
                  Discuss Your Android App
                </PosterButton>
              </div>

              {/* Trust Badge / SLA */}
              <div className="flex items-center gap-3 pt-2 text-xs text-zinc-400">
                <ShieldCheck className="h-4 w-4 text-purple-600 shrink-0" />
                <span>
                  Kotlin &amp; Jetpack Compose &bull; Google Play Release &bull; 100% In-House Team
                </span>
              </div>
            </div>

            {/* Right Visual Column (6 cols) */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <AndroidHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 4-METRIC ARCHITECTURAL LEDGER RIBBON */}
      <section className="android-metrics-band border-b border-white/[0.08] bg-[#09090B]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {kineticMetrics.map((item, idx) => (
              <div
                key={idx}
                className="group relative p-6 md:p-8 bg-[#121214] transition-colors hover:bg-[#18181B]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-purple-600">
                    {item.num}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-purple-600 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                  {item.label}
                </h3>
                <p className="mt-2 text-xs md:text-sm font-normal leading-relaxed text-zinc-300">
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
