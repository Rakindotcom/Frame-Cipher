'use client'

import React from 'react'
import PosterButton from '../../home/PosterButton'
import { CheckCircle2 } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative isolate border-t border-b border-white/[0.08] bg-[#09090B] py-20 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 text-center space-y-8">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-4 py-1.5 text-xs text-zinc-300 font-mono">
          <span className="h-2 w-2 rounded-full bg-frame-accent animate-pulse" />
          <span>TAKE THE NEXT COMMERCIAL STEP</span>
        </div>

        {/* Massive Display Heading */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Ready to make your ad spend{' '}
            <span className="italic text-frame-accent">accountable?</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            Find out where your budget is actually going, what your campaigns are producing, what should be fixed first, and which opportunities deserve further investment.
          </p>
        </div>

        {/* Symmetrical 52px Button Pair (§4 Standard) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <PosterButton href="/contact" variant="accent">
            Get Your Free Ad Account Audit &rarr;
          </PosterButton>
          <PosterButton href="/contact" variant="outline">
            Talk to the Framecipher Media Team &rarr;
          </PosterButton>
        </div>

        {/* Micro Trust Proof */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-frame-accent" />
            <span>Zero obligation audit</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-frame-accent" />
            <span>100% confidential</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-frame-accent" />
            <span>In-house media architects</span>
          </div>
        </div>
      </div>
    </section>
  )
}
