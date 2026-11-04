'use client'

import React from 'react'
import { ShieldCheck, XCircle, CheckCircle2 } from 'lucide-react'

export default function Guarantee() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What We{' '}
            <span className="italic text-frame-accent">Commit To.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            We do not make unverified promises about overnight viral success or guaranteed ROAS. Real growth requires technical integrity and continuous creative discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: What We Do Not Guarantee */}
          <div className="rounded-xl border border-red-500/20 bg-[#121214] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/10 text-red-400">
                <XCircle className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-xl font-medium text-white">
                No False Promises
              </h3>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              We do not guarantee a specific CPM, CPA, ROAS, conversion rate, or viral outcome. Advertising performance is influenced by factors outside an agency’s direct control:
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Market demand, customer purchasing power, and seasonal trends',
                'Product quality, competitive pricing, and brand reputation',
                'Landing-page checkout friction, speed, and mobile usability',
                'Platform auction volatility and CPM shifts in target countries',
                'Audience receptivity to specific creative angles and offers',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <XCircle className="h-4 w-4 text-red-400/80 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: What We Firmly Commit To */}
          <div className="rounded-xl border border-frame-accent/40 bg-[#121214] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-frame-accent/30 bg-frame-accent/10 text-frame-accent">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-xl font-medium text-white">
                Our Professional Guarantee
              </h3>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              What Framecipher guarantees is the rigorous, professional execution of the entire advertising workflow:
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Flawless tracking setup with TikTok Pixel & server-side Events API',
                'Structured creative testing isolating winning hooks and formats',
                '100% transparent client account ownership with zero media spend markup',
                'Active daily campaign monitoring, budget pacing, and bid governance',
                'Clear, data-informed reporting and commercial strategy recommendations',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
