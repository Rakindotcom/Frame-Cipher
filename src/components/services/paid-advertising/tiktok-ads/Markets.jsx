'use client'

import React from 'react'
import { MapPin, Globe, CheckCircle2 } from 'lucide-react'

export default function Markets() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            TikTok Ads for Bangladesh and{' '}
            <span className="italic text-frame-accent">Global Markets.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            From local Bangla campaigns targeting consumers in Dhaka and regional districts to international campaigns scaled across North America, Europe, Australia, and the Middle East.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bangladesh Market Card */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]">
            <h3 className="font-heading text-2xl font-medium text-white mb-3">
              Bangladesh Domestic Campaigns
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              We manage TikTok advertising targeting audiences across Bangladesh. We craft campaigns in native Bangla or English, accounting for local cultural nuances, regional consumer behavior, and mobile browsing habits.
            </p>

            <div className="space-y-3 pt-4 border-t border-white/[0.06]">
              {[
                'Native Bangla scripting, voiceovers, and localized video hooks',
                'Bangladesh-specific offers, cash-on-delivery (COD), and bKash flows',
                'Local lead generation for education, healthcare, and consumer services',
                'Pre-flight verification of advertiser account registration and availability',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Global Markets Card */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]">
            <h3 className="font-heading text-2xl font-medium text-white mb-3">
              US, UK, Canada, Australia &amp; UAE
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              For export brands, software companies, and international ecommerce operators, we build localized campaigns matching purchasing power, cultural formats, and platform capabilities.
            </p>

            <div className="space-y-3 pt-4 border-t border-white/[0.06]">
              {[
                'US & UK market-specific creative testing and high-converting hooks',
                'TikTok Shop & GMV Max campaign execution in supported territories',
                'Australia, Canada, and UAE localized currency and shipping routing',
                'Country-level ROAS, CPA, and attribution dashboards in GA4',
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
