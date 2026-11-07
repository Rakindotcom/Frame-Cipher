'use client'

import Link from 'next/link'
import PosterButton from '../home/PosterButton'
import AnimatedCounter from '../home/AnimatedCounter'
import { ChevronRight } from 'lucide-react'

export default function CaseStudyDetailHero({ study }) {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Modality A Atmospheric Background Lighting & Grid System */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_70%)] blur-[90px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"
        aria-hidden="true"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-20 select-none font-heading text-[120px] sm:text-[180px] font-bold tracking-tighter text-white/[0.02] -z-10"
      >
        CASE
      </span>

      <div className="mx-auto max-w-7xl">
        {/* Top Breadcrumb & Back Link Header Row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <nav aria-label="Breadcrumb navigation" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-zinc-600" />
            <Link href="/case-studies" className="hover:text-white transition-colors">
              Case Studies
            </Link>
            <ChevronRight className="h-3 w-3 text-zinc-600" />
            <span className="text-purple-400 font-semibold">{study.category}</span>
            <ChevronRight className="h-3 w-3 text-zinc-600" />
            <span className="text-white truncate max-w-xs sm:max-w-md">{study.client}</span>
          </nav>

          <Link
            href="/case-studies"
            className="group inline-flex h-9 items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 font-mono text-xs uppercase tracking-wider text-white transition-all duration-200 hover:border-purple-600/50 hover:bg-white/10 shrink-0"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">&larr;</span>
            <span>All Case Studies</span>
          </Link>
        </div>

        <div className="space-y-6 max-w-5xl">
          {/* Telemetry Status Capsule Eyebrow (No Redundant Pills) */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-medium text-purple-300">
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <span>Verified Platform Analytics · Documented Client Outcome</span>
          </div>

          {/* Display Heading H1: Solid Pure White */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-semibold leading-[0.96] tracking-tight text-white">
            {study.title}
          </h1>

          {/* Editorial Description */}
          <p className="max-w-3xl text-base font-normal leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
            {study.summary}
          </p>

          {/* Symmetrical Button Pair (52px Height + Arrows) */}
          <div className="pt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
            <PosterButton href="/contact">
              Book a Strategy Call
            </PosterButton>
            <PosterButton href="/case-studies" variant="outline">
              All Case Studies
            </PosterButton>
          </div>
        </div>

        {/* Architectural Column Band for Key Performance Metrics with Dynamic Count-Up */}
        {study.metrics?.length > 0 && (
          <div className="mt-14 border-t border-white/[0.08] pt-10">
            <div className={`relative rounded-2xl border border-white/[0.08] overflow-hidden grid gap-px bg-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.4)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent ${
              study.metrics.length === 6
                ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
                : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4'
            }`}>
              {study.metrics.map(([value, label], idx) => (
                <div
                  key={`${label}-${idx}`}
                  className="bg-[#121214] p-5 sm:p-6 transition-colors duration-200 hover:bg-[#18181B] group"
                >
                  <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-none tracking-tight text-white">
                    <AnimatedCounter
                      value={value}
                      duration={1400}
                      replay={true}
                      suffixClassName="text-purple-600 font-semibold"
                    />
                  </p>
                  <p className="mt-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
