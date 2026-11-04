'use client'

import React from 'react'
import { Lock, ShieldCheck, Database, Layers } from 'lucide-react'

const privacyPillars = [
  {
    icon: ShieldCheck,
    title: 'Consent-Aware Tracking',
    desc: 'Configuring Google Consent Mode v2 and platform consent flags so tags dynamically adjust based on user opt-in/opt-out status, ensuring full compliance in international jurisdictions.',
  },
  {
    icon: Database,
    title: 'First-Party Data Primacy',
    desc: 'Transitioning reliance away from volatile third-party cookies toward owned first-party data assets legitimately collected through your website, CRM, order history, and direct customer interactions.',
  },
  {
    icon: Layers,
    title: 'Multi-Signal Measurement Resilience',
    desc: 'Combining browser pixels, server-side Conversion APIs, enhanced conversions, and offline customer matching so tracking accuracy remains robust against browser privacy updates.',
  },
]

export default function Privacy() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Privacy, Consent &amp;{' '}
            <span className="italic text-frame-accent">Modern Remarketing.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Remarketing operates within an evolving privacy landscape. Browser restrictions (ITP), mobile OS privacy controls (ATT), and regional consent laws mean compliance is a core strategic foundation, not an afterthought.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {privacyPillars.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-medium text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                  {p.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
