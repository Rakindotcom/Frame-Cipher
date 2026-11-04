'use client'

import React from 'react'
import { MapPin, Globe, CheckCircle2 } from 'lucide-react'

export default function Markets() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Microsoft Ads for Bangladesh and{' '}
            <span className="italic text-frame-accent">International Markets.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            From targeted search campaigns in Bangladesh to high-volume commercial campaigns scaled across North America, Europe, Australia, and the Middle East.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bangladesh Market Card */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]">
            <h3 className="font-heading text-2xl font-medium text-white mb-3">
              Bangladesh Domestic Search
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              We manage Microsoft Ads for businesses targeting consumers and B2B professionals across Bangladesh where sufficient search demand exists. Because search volume varies by category, we conduct pre-flight search demand audits before allocating budget.
            </p>

            <div className="space-y-3 pt-4 border-t border-white/[0.06]">
              {[
                'Local search query volume and commercial intent validation',
                'Bangla or English ad copy tailored to urban business professionals',
                'High-intent B2B and enterprise inquiry generation',
                'Local landing-page and conversion tracking alignment',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* International Markets Card */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]">
            <h3 className="font-heading text-2xl font-medium text-white mb-3">
              US, UK, Canada, Australia &amp; UAE
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              In tier-1 markets, Microsoft Advertising accounts for a significant portion of high-income desktop search volume. We build localized keyword sets, currency routing, and LinkedIn overlays for international audiences.
            </p>

            <div className="space-y-3 pt-4 border-t border-white/[0.06]">
              {[
                'US & UK enterprise B2B search campaigns with LinkedIn profile targeting',
                'Microsoft Shopping ads with automated localized currency feeds',
                'Canada and Australia regional keyword localization and bid adjustments',
                'UAE commercial search targeting with localized landing-page routing',
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
