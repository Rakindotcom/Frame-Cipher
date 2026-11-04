'use client'

import React from 'react'
import { AlertTriangle, XCircle, ArrowRight } from 'lucide-react'

const signals = [
  'The product detail page is weak, lacking lifestyle photography, clear bullets, or basic A+ Content.',
  'Product margins are too compressed to absorb Amazon referral fees, FBA fulfillment costs, and PPC CPCs.',
  'Inventory levels are unstable, risking immediate stock-outs as soon as ad velocity ramps up.',
  'The product has fewer than 10-15 verified reviews or an average rating below 4.0 stars in a crowded niche.',
  'The product does not consistently hold Featured Offer (Buy Box) eligibility against competing resellers.',
  'The category has minimal organic search volume, requiring top-of-funnel brand creation before search ads.',
  'The listing is currently flagged, restricted, or under compliance review inside Seller Central.',
  'The brand has not validated core product-market fit or customer acceptance in the target marketplace.',
]

export default function WhenNotRight() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-red-500/20 bg-red-950/[0.08] p-8 sm:p-12 lg:p-14">
          <div className="max-w-3xl mb-8">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              When Amazon Ads May{' '}
              <span className="italic text-red-400">Not Be the Right Move.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              Paid advertising accelerates marketplace momentum, but it cannot fix fundamental product or listing readiness issues. Increasing ad spend is usually premature when:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {signals.map((signal) => (
              <div
                key={signal}
                className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#121214] p-4 text-sm text-zinc-300 font-normal leading-relaxed"
              >
                <XCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
                <span>{signal}</span>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-black/40 p-5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p>
              In these situations, optimizing product photography, generating initial early-reviewer feedback, stabilizing stock, and adjusting pricing should take precedence before scaling paid advertising.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-frame-accent hover:underline shrink-0"
            >
              <span>Get an Honest Listing Audit</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
