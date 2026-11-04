'use client'

import React from 'react'
import { Activity, Database, LineChart, ShieldCheck, CheckCircle2 } from 'lucide-react'

const trackingLayers = [
  {
    icon: Activity,
    title: 'TikTok Pixel',
    desc: 'Browser-based tracking configured across all key touchpoints—ViewContent, AddToCart, InitiateCheckout, and CompletePayment with advanced parameter matching.',
  },
  {
    icon: Database,
    title: 'Events API (Server-Side)',
    desc: 'Direct server-to-server connection bypassing iOS restrictions, cookie expirations, and browser blockers, with rigorous event_id deduplication against browser hits.',
  },
  {
    icon: LineChart,
    title: 'GA4 & UTM Taxonomy',
    desc: 'Standardized UTM parameters aligning TikTok outbound traffic with Google Analytics 4, allowing cross-channel multi-touch attribution and bounce rate diagnostics.',
  },
  {
    icon: ShieldCheck,
    title: 'CRM & Lead Stage Tracking',
    desc: 'Connecting lead generation forms directly into your CRM to track downstream sales stages (MQL to closed customer) rather than optimizing purely for raw form volume.',
  },
]

export default function Tracking() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Tracking TikTok Ads From{' '}
            <span className="italic text-frame-accent">Click to Conversion.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Good TikTok Ads management needs more than Ads Manager reporting. We build measurement around your business’s actual commercial conversion path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trackingLayers.map((layer) => {
            const Icon = layer.icon
            return (
              <div
                key={layer.title}
                className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-white mb-2">
                    {layer.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 rounded-lg border border-white/[0.06] bg-[#121214] p-4 text-xs font-mono text-zinc-400 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0" />
          <span>We configure standard and custom conversion events with dual browser/server deduplication to maximize TikTok algorithm learning stability.</span>
        </div>
      </div>
    </section>
  )
}
