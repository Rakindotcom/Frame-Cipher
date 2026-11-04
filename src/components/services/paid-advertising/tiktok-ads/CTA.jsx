'use client'

import React from 'react'
import { ShieldCheck, PhoneCall } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

export default function CTA() {
  return (
    <section className="relative isolate border-t border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      {/* Background Ambient Aura */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-purple-600/[0.06] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-4xl text-center space-y-8">
        {/* Display Headline */}
        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
          Ready to Build Your{' '}
          <span className="italic font-normal text-frame-accent">TikTok Ads Campaign?</span>
        </h2>

        {/* Value Narrative */}
        <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-2xl mx-auto">
          Whether you are launching TikTok Ads for the first time, testing Spark Ads with creator UGC, or scaling ecommerce revenue via GMV Max, Framecipher provides end-to-end media management.
        </p>

        {/* 52px Symmetrical Button Pair */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <PosterButton href="/contact" variant="accent" className="w-full sm:w-auto">
            Start Your TikTok Ads Campaign &rarr;
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
            <span>Native Creative Testing Sprints</span>
          </div>
          <span className="text-zinc-700">|</span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span>100% Client Account Ownership</span>
          </div>
          <span className="text-zinc-700">|</span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Events API Server-Side Tracking</span>
          </div>
        </div>
      </div>
    </section>
  )
}
