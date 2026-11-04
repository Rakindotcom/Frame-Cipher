'use client'

import React from 'react'
import {
  Globe,
  Eye,
  ShoppingCart,
  FileText,
  PlayCircle,
  Award,
  Database,
  ArrowRight,
} from 'lucide-react'

const segments = [
  {
    icon: Globe,
    title: 'General Site Visitors',
    stage: 'Top-of-Funnel Re-engagement',
    desc: 'People who explored non-transactional pages but exited without meaningful action.',
    messaging: 'Brand authority, educational articles, core value propositions, social proof, and high-level product discovery.',
  },
  {
    icon: Eye,
    title: 'Product & Service Viewers',
    stage: 'Mid-Funnel Consideration',
    desc: 'Prospects who spent time on specific product detail or service solution pages.',
    messaging: 'Dynamic ads showcasing the exact items viewed, feature comparisons, customer case studies, and FAQ objection handling.',
  },
  {
    icon: ShoppingCart,
    title: 'Cart & Checkout Abandoners',
    stage: 'High-Intent Decision Window',
    desc: 'Shoppers who added products to cart or initiated checkout before bouncing.',
    messaging: 'Urgent reminder banners, free shipping notices, trust guarantees, customer review quotes, and limited-time incentives.',
  },
  {
    icon: FileText,
    title: 'Lead & Form Abandoners',
    stage: 'High-Value Pipeline Capture',
    desc: 'Users who started completing a consultation form, demo request, or pricing contact but stopped.',
    messaging: 'De-risking messages, calendar booking links, WhatsApp direct chat CTAs, and enterprise trust credentials.',
  },
  {
    icon: PlayCircle,
    title: 'In-Platform Engaged Audiences',
    stage: 'Platform Native Interest',
    desc: 'Users who watched 50%+ of your video, engaged with Instagram/TikTok content, or saved Pins.',
    messaging: 'Guiding engaged social followers toward your owned website assets, high-value lead magnets, and flagship offerings.',
  },
  {
    icon: Award,
    title: 'Past Purchasers & Customers',
    stage: 'Retention & Lifetime Value (LTV)',
    desc: 'Verified customers who have already purchased from your brand.',
    messaging: 'Complementary cross-sell accessories, premium tier upsells, automated replenishment reminders, and VIP loyalty rewards.',
  },
  {
    icon: Database,
    title: 'CRM & First-Party Lists',
    stage: 'Enterprise Strategic Targeting',
    desc: 'Offline customer lists, newsletter subscribers, and stalled sales pipeline opportunities.',
    messaging: 'Account-based marketing (ABM) touchpoints, win-back discounts for inactive accounts, and product update announcements.',
  },
]

export default function Segmentation() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Audience Segmentation for{' '}
            <span className="italic text-frame-accent">Smarter Remarketing.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Remarketing starts with knowing exactly who should receive which message. We architect granular audience segments mapped directly to behavioral depth, intent, and buying stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {segments.map((seg, idx) => {
            const Icon = seg.icon
            return (
              <div
                key={seg.title}
                className={`rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] flex flex-col justify-between ${
                  idx === 6 ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                      {seg.stage}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-medium text-white mb-2">
                    {seg.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-normal leading-relaxed mb-4">
                    {seg.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] rounded-lg bg-black/30 p-3.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                    Recommended Messaging Strategy:
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                    {seg.messaging}
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
