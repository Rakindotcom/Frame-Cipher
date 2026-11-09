'use client'

import React from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  ShieldCheck,
  Cpu,
  Activity,
  Clock,
  Sparkles
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import MaintenanceHeroVisual from './MaintenanceHeroVisual'

const kineticMetrics = [
  {
    icon: Cpu,
    num: '01',
    label: 'Proactive OS & SDK Upgrades',
    detail: 'Staying ahead of major Android, iOS, and framework releases to prevent production breaks',
  },
  {
    icon: Activity,
    num: '02',
    label: '24/7 Monitoring & Alerting',
    detail: 'Real-time error tracking with Datadog and Sentry to catch issues before users report them',
  },
  {
    icon: Clock,
    num: '03',
    label: 'Guaranteed SLA Response',
    detail: 'Dedicated engineering hours each month for bug fixing, security patching, and updates',
  },
  {
    icon: Sparkles,
    num: '04',
    label: 'Continuous Feature Iteration',
    detail: 'Steady incremental enhancements, performance optimization, and operational support',
  },
]

export default function Hero({ service }) {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-white/10 px-4 pt-28 pb-16 sm:px-6 md:px-8 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
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
            <span className="shrink-0 whitespace-nowrap text-purple-400">Maintenance</span>
          </nav>

          {/* Grid Layout: Left Content, Right Visual */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content Column (6 cols) */}
            <div className="space-y-6">
              {/* Main Two-Tone Headline */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight">
                <span className="text-white block">Best App Maintenance &amp;</span>
                <span className="text-purple-600 block mt-1">Support Service in Bangladesh.</span>
              </h1>

              {/* Sub-headline */}
              <p className="font-heading text-lg sm:text-xl font-medium tracking-tight text-zinc-200">
                Keep your app stable, secure, and ready for every update.
              </p>

              {/* Running Description */}
              <div className="space-y-3 text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-2xl">
                <p>
                  Framecipher provides ongoing app maintenance and support services for Android, iOS, cross-platform, SaaS, and enterprise applications. We help businesses fix bugs, manage OS and SDK updates, monitor performance, maintain integrations, and improve existing apps over time.
                </p>
                <p>
                  Whether we built your app or another development team did, we can assess the current codebase and create a maintenance plan around its actual needs.
                </p>
                <p className="text-sm text-zinc-400">
                  From Bangladesh to businesses in the US, UK, Australia, Canada, and UAE, our in-house team supports applications beyond their initial launch.
                </p>
              </div>

              {/* Symmetrical 52px Button Pair */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <PosterButton href="/contact" variant="accent" className="h-[52px] px-8 text-sm font-medium">
                  Get Free Consultation
                </PosterButton>
                <PosterButton href="#pricing" variant="outline" className="h-[52px] px-8 text-sm font-medium">
                  View Maintenance Plans
                </PosterButton>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-3 pt-2 text-xs text-zinc-400 font-mono">
                <ShieldCheck className="h-4 w-4 text-purple-600 shrink-0" />
                <span>
                  Guaranteed SLA Response &bull; Proactive OS Compatibility &bull; 100% In-House Team
                </span>
              </div>
            </div>

            {/* Right Visual Column (6 cols) */}
            <div className="flex justify-center lg:justify-end">
              <MaintenanceHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* METRIC RIBBON */}
      <section className="border-b border-white/10 bg-[#0A0A0C]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {kineticMetrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between bg-[#0D0D0F] p-6 sm:p-8 transition-colors duration-300 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                        {metric.num}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                      {metric.label}
                    </h3>
                    <p className="mt-2 text-xs font-normal leading-relaxed text-zinc-300">
                      {metric.detail}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
