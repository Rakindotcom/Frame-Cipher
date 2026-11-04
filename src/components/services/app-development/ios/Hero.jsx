'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import IosHeroVisual from './IosHeroVisual'

const kineticMetrics = [
  {
    num: '01',
    label: 'Swift & SwiftUI Native',
    detail: 'Modern Swift 6, SwiftUI declarative UI, Combine, and direct Apple SDK integration',
  },
  {
    num: '02',
    label: 'Apple HIG Design',
    detail: 'Human Interface Guidelines, fluid gestures, dynamic typography, and native haptics',
  },
  {
    num: '03',
    label: 'App Store Connect',
    detail: 'TestFlight beta distribution, provisioning profiles, and strict App Store review compliance',
  },
  {
    num: '04',
    label: 'Ecosystem Expansion',
    detail: 'Unified architectures supporting iPhone, iPad, Apple Watch, and Mac Catalyst',
  },
]

export default function Hero({ service }) {
  const title = service?.h1 || 'Best iOS App Development Service in Bangladesh'
  const subtitle =
    service?.shortDesc ||
    'From MVPs to complex digital products, Framecipher builds native iOS applications with Swift and SwiftUI, backed by thoughtful UX, scalable architecture, secure integrations, and release support. We handle strategy, design, development, testing, and App Store deployment through one in-house team for businesses in Bangladesh and worldwide.'

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
            <span className="shrink-0 whitespace-nowrap text-frame-accent">iOS</span>
          </nav>

          {/* Grid Layout: Left Content, Right Visual */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content Column (6 cols) */}
            <div className="space-y-6">
{/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white">
                {title.includes('Bangladesh') ? (
                  <>
                    Best iOS App Development{' '}
                    <span className="italic text-frame-accent">Service in Bangladesh.</span>
                  </>
                ) : (
                  title
                )}
              </h1>

              {/* Sub-headline Pill / Headline Tag */}
              <p className="font-heading text-lg sm:text-xl font-medium tracking-tight text-zinc-200">
                Native iOS Apps Built for Real Users, Real Devices &amp; Real Business Goals
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
                <PosterButton href="/contact" variant="outline">
                  Discuss Your iOS App
                </PosterButton>
              </div>

              {/* Trust Micro-Badge */}
              <div className="flex items-center gap-3 pt-2 font-mono text-xs text-zinc-400">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Apple HIG Compliant &bull; TestFlight Staging &bull; Zero Approval Surprises</span>
              </div>
            </div>

            {/* Right Visual Column (6 cols) */}
            <div className="flex justify-center lg:justify-end">
              <IosHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 4-COLUMN ARCHITECTURAL LEDGER RIBBON */}
      <section className="border-b border-white/[0.08] bg-[#121214]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {kineticMetrics.map((item, idx) => (
              <div key={idx} className="p-6 md:p-8">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  {item.num}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.label}
                </h3>
                <p className="mt-2 text-xs md:text-sm font-normal leading-relaxed text-zinc-400">
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
