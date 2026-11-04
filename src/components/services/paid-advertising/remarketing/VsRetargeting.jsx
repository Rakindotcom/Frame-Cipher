'use client'

import React from 'react'
import { HelpCircle, RefreshCw, Layers } from 'lucide-react'

export default function VsRetargeting() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Remarketing vs.{' '}
            <span className="italic text-frame-accent">Retargeting.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            While frequently used as synonyms across digital marketing, understanding the technical distinction helps build an interconnected retention and re-engagement system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
              <RefreshCw className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-2xl font-medium text-white mb-4">
              What Is Retargeting?
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed mb-4">
              Retargeting primarily refers to ad delivery based on immediate on-site or in-app behavioral signals—such as someone viewing a specific product, spending 3 minutes on a service page, or abandoning an items in their shopping cart.
            </p>
            <div className="rounded-lg border border-white/[0.06] bg-black/40 p-4 font-mono text-xs text-zinc-400">
              <span className="text-frame-accent font-bold">Key Mechanism: </span>
              Pixels, Tags, and dynamic product catalogs re-serving display, search, and social ads to recent digital visitors.
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-2xl font-medium text-white mb-4">
              What Is Remarketing?
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed mb-4">
              Remarketing is the broader strategic discipline of re-engaging previous visitors, stalled sales leads, past customers, and known CRM contacts across paid channels, email workflows, and messaging touchpoints over time.
            </p>
            <div className="rounded-lg border border-white/[0.06] bg-black/40 p-4 font-mono text-xs text-zinc-400">
              <span className="text-frame-accent font-bold">The Framecipher Approach: </span>
              We deploy Remarketing as our comprehensive service framework, executing granular retargeting tactics within it.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
