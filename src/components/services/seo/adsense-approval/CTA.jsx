'use client'

import React from 'react'
import { ShieldCheck, CheckCircle2, Zap } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

export default function CTA() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-8 sm:p-12 md:p-16 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#18181B] px-3.5 py-1 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
                  Next Move // Discovery Call
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.98] tracking-tight text-white">
                Prepare Your Site for{' '}
                <span className="italic text-frame-accent">Google AdSense</span> Review
              </h2>

              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
                Your goal should not be to find a shortcut around Google&apos;s review. Build a website that
                is useful, original, accessible, clearly structured, and compliant with the policies that
                apply to it.
              </p>

              <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                Framecipher can assess where your site stands, fix the issues we identify, and
                help you approach your AdSense application with a clear preparation plan.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-frame-accent" />
                  <span>Audit-Backed Roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-frame-accent" />
                  <span>Zero Black-Hat Tricks</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-frame-accent" />
                  <span>Direct In-House Fixes</span>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols) CTAs */}
            <div className="lg:col-span-5 flex flex-col items-stretch sm:items-center lg:items-end justify-center gap-4">
              <PosterButton href="/contact" className="w-full sm:w-auto text-center justify-center">
                Get Your Site Reviewed &rarr;
              </PosterButton>
              <PosterButton href="/contact" variant="outline" className="w-full sm:w-auto text-center justify-center">
                Talk to Our Team &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
