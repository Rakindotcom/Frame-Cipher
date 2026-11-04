'use client'

import React from 'react'
import { Globe, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react'

export default function Markets() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Pinterest Ads for Bangladesh &amp;{' '}
            <span className="italic text-frame-accent">Global Markets.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Whether managing campaigns remotely from Dhaka for export brands or scaling multi-region Pinterest accounts across North America, Europe, and the Middle East, our strategy adapts to market economics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Box 1: From Bangladesh */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]">
            <h3 className="font-heading text-2xl font-medium text-white mb-3">
              Pinterest Ads Management From Bangladesh
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Framecipher is based in Dhaka and manages Pinterest Ads for eligible advertiser accounts targeting supported Pinterest advertising regions. Because platform availability varies by advertiser billing country and business entity, we conduct rigorous pre-flight readiness checks.
            </p>

            <div className="space-y-3 pt-4 border-t border-white/[0.06]">
              {[
                'Advertiser account billing and eligibility verification',
                'Remote campaign governance, creative testing, and optimization',
                'Clear separation of media spend (client card) and management fees',
                'Transparent real-time Ads Manager access and shared reporting dashboards',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Box 2: International Markets */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]">
            <h3 className="font-heading text-2xl font-medium text-white mb-3">
              International Pinterest Advertising
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              We manage campaigns across premier Pinterest ad territories including the United States, United Kingdom, Canada, Australia, Germany, France, and the UAE. We never simply clone campaigns across borders; messaging, currency, and creative are localized.
            </p>

            <div className="space-y-3 pt-4 border-t border-white/[0.06]">
              {[
                'Country-specific keyword research and regional search volume mapping',
                'Localized Pin creative matching cultural visual aesthetics and seasons',
                'Currency, shipping, and return policy alignment on product destinations',
                'Country-level ROAS, CPA, and attribution reporting breakdowns',
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
