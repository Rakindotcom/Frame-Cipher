'use client'

import React from 'react'
import { Video, Flame, ShoppingBag, Sparkles, UserCheck, TrendingUp, Store } from 'lucide-react'

const formats = [
  {
    icon: Video,
    name: 'In-Feed Video Ads',
    badge: 'Native Feed Placement',
    desc: 'Appear seamlessly within the user For You feed. Engineered with high-pacing native visuals for traffic, app growth, leads, and direct checkouts.',
  },
  {
    icon: Flame,
    name: 'Spark Ads',
    badge: 'Organic Post Amplification',
    desc: 'Promote eligible organic TikTok videos from your brand or creators, preserving social proof, comments, and authentic creator identity.',
  },
  {
    icon: ShoppingBag,
    name: 'Catalog & Shopping Ads',
    badge: 'Dynamic Merchant Feeds',
    desc: 'Dynamically showcase real-time product inventory, custom pricing cards, and personalized recommendations for ecommerce acquisition and retargeting.',
  },
  {
    icon: Sparkles,
    name: 'Smart+ Automated Campaigns',
    badge: 'Machine-Learned Delivery',
    desc: 'Automates creative permutation testing, real-time bid pacing, and audience matching across Traffic, Lead Gen, and Sales objectives.',
  },
  {
    icon: UserCheck,
    name: 'Lead Generation Ads',
    badge: 'In-App Instant Forms',
    desc: 'Capture qualified prospect inquiries directly inside TikTok with pre-populated instant forms, CRM webhook syncing, and lead verification.',
  },
  {
    icon: TrendingUp,
    name: 'Conversion Sales Campaigns',
    badge: 'Website & App Purchases',
    desc: 'Drive measurable transactions across websites and apps, using Value-Based Bidding (VBB) and server-side Events API optimization.',
  },
  {
    icon: Store,
    name: 'TikTok Shop & GMV Max',
    badge: 'In-Platform Commerce',
    desc: 'For supported international markets: Video Shopping Ads, LIVE Shopping, and GMV Max campaigns driving frictionless in-app checkout.',
  },
]

export default function Formats() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            TikTok Ad Formats &amp;{' '}
            <span className="italic text-frame-accent">Campaign Types.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            We deploy the optimal ad format for your commercial model—from standard In-Feed videos to Spark Ads, Dynamic Catalogs, and Smart+ campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {formats.map((f, idx) => {
            const Icon = f.icon
            return (
              <div
                key={f.name}
                className={`rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] flex flex-col justify-between ${
                  idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-medium text-white mb-2">
                    {f.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
