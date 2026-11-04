import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'

const marqueeItems = ['Privacy & Trust', 'Data Consent', 'Security Standards', 'Zero Selling of Data', 'Client Rights', 'Contact & Inquiries']

export default function PrivacyHero() {
  return (
    <header className="relative isolate border-b border-white/[0.08] bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb Navigation Row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <nav aria-label="Breadcrumb navigation" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-zinc-600" />
            <span className="text-frame-accent">Privacy Policy</span>
          </nav>

          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-emerald-400 bg-[#121214] border border-emerald-500/20 rounded-full px-3.5 py-1">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Official Policy · Effective 2026</span>
          </div>
        </div>

        {/* Hero Header Body */}
        <div className="max-w-4xl space-y-5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
              Data Protection &amp; Governance
            </p>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Privacy <span className="italic text-frame-accent">Policy.</span>
          </h1>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-3xl">
            Frame Cipher explains what information we collect, why we collect it, and how contact inquiries and analytics data are safeguarded with strict confidentiality.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono uppercase text-zinc-400">
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-zinc-300">
              Last updated: January 29, 2026
            </span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-emerald-400">
              Zero Data Selling Guarantee
            </span>
          </div>
        </div>
      </div>

      {/* Canonical Marquee Ticker */}
      <div className="relative mt-12 -mx-4 overflow-hidden border-t border-white/[0.08] bg-[#09090B] py-4 sm:py-5 md:-mx-8">
        <p className="sr-only">Privacy Policy key topics ticker</p>
        <div className="kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]" aria-hidden="true">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-6 sm:gap-8 px-4 sm:px-6">
              <span className="font-heading text-xl sm:text-2xl md:text-3xl font-medium uppercase leading-none tracking-tight text-white whitespace-nowrap">
                {item}
              </span>
              <span className="h-2 w-2 shrink-0 rounded-full bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
