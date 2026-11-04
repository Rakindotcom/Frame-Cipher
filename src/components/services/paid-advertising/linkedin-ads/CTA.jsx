'use client'

import React from 'react'
import { ShieldCheck, PhoneCall } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

export default function CTA() {
  return (
    <section className="relative isolate border-t border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      {/* Background Ambient Aura */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-purple-600/[0.06] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-4xl text-center space-y-8">
        {/* Display Headline */}
        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
          Start Your LinkedIn Ads{' '}
          <span className="italic text-frame-accent">Campaign.</span>
        </h2>

        {/* Value Narrative */}
        <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-3xl mx-auto">
          LinkedIn Ads should be connected to the business you are trying to win, not simply the number of professionals you can reach. The campaign should start with the right ICP, identify the relevant buying committee, communicate a credible reason to engage, capture useful conversion data, and connect those signals with the sales process. Whether you need B2B lead generation, account-based marketing, enterprise demand generation, professional audience targeting, or global customer acquisition, Framecipher can build and manage the LinkedIn advertising system around your actual business goals.
        </p>

        {/* 52px Symmetrical Button Pair */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <PosterButton href="/contact" variant="accent" className="w-full sm:w-auto">
            Book a LinkedIn Ads Consultation &rarr;
          </PosterButton>
          <PosterButton href="tel:+8801768146650" variant="outline" className="w-full sm:w-auto">
            <PhoneCall className="h-4 w-4 mr-1.5" />
            Direct Call (+880 1768-146650)
          </PosterButton>
        </div>

        {/* Technical Trust Meta Indicators */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs text-zinc-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-frame-accent" />
            <span>Direct Campaign Manager Ownership</span>
          </div>
          <span className="text-zinc-700">|</span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span>Zero Long-Term Lock-in</span>
          </div>
          <span className="text-zinc-700">|</span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Pipeline-Qualified Optimization</span>
          </div>
        </div>
      </div>
    </section>
  )
}
