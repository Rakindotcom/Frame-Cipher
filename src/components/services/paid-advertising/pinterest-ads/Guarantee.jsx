'use client'

import React from 'react'
import { ShieldCheck, XCircle, CheckCircle2 } from 'lucide-react'

export default function Guarantee() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What We Do{' '}
            <span className="italic text-frame-accent">Not Guarantee.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Honest agencies do not make unverified revenue promises. Real advertising performance depends on the full commercial ecosystem.
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
                No Invented Guarantees
              </h3>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              We do not guarantee a fixed ROAS, CPA, CPC, conversion rate, revenue level, or exact number of checkouts. Performance is determined by commercial variables outside of media buying alone:
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Product quality, market fit, and offer positioning',
                'Pricing competitiveness against alternative retailers',
                'Landing-page checkout speed and user experience',
                'Auction competitiveness, CPM fluctuations, and seasonality',
                'Real human buyer behavior and disposable income',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <XCircle className="h-4 w-4 text-red-400/80 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: What We Commit To */}
          <div className="rounded-xl border border-frame-accent/40 bg-[#121214] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-frame-accent/30 bg-frame-accent/10 text-frame-accent">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-xl font-medium text-white">
                What We Firmly Commit To
              </h3>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              What Framecipher guarantees is the rigorous, professional execution of the entire technical and creative advertising discipline:
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Flawless tracking with Pinterest Tag and server-side CAPI',
                'High-converting, platform-native vertical Pin creative',
                'Disciplined algorithmic learning protection (10+ day buffer)',
                'Structured catalog feed health and Product Group segmentation',
                'Completely transparent client account ownership and zero markup on ad spend',
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
