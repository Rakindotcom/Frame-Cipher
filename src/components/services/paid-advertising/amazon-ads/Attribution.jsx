'use client'

import React from 'react'
import { Link2, Search, Share2, Globe, CheckCircle2 } from 'lucide-react'

const channels = [
  {
    icon: Search,
    title: 'Google Ads to Amazon',
    desc: 'Capturing off-Amazon high-intent Google search demand and funneling shoppers directly to your Amazon product detail page or Storefront, tracking downstream Amazon conversions via Attribution tags.',
  },
  {
    icon: Share2,
    title: 'Meta Ads to Amazon',
    desc: 'Leveraging Instagram and Facebook video and carousel creative to generate visual demand, utilizing Amazon Brand Referral Bonus and Attribution to earn fee credits on external sales.',
  },
  {
    icon: Globe,
    title: 'External Influencers & Content',
    desc: 'Attributing creator content, email newsletters, TikTok traffic, and PR placements directly to Amazon add-to-carts, page views, and completed customer purchases.',
  },
]

const questions = [
  'Which external marketing channel drives the highest volume of verified Amazon orders?',
  'Which specific products generate higher conversion rates from external traffic vs. native ads?',
  'What is the true cost per acquisition when factoring in the Amazon Brand Referral Bonus?',
  'How do off-Amazon audiences improve Amazon listing conversion rates and BSR ranking signals?',
  'How does external Google/Meta ROAS compare against native Amazon Sponsored Products CPCs?',
  'Which creative hooks on social media translate into high-intent product detail page views?',
]

export default function Attribution() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Amazon Attribution &amp;{' '}
            <span className="italic text-frame-accent">Cross-Channel Measurement.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Amazon purchases do not always begin with an Amazon search. Shoppers frequently discover products across Google, Meta, TikTok, and influencer channels before completing their order on Amazon. Amazon Attribution provides verified tracking for non-Amazon marketing touchpoints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {channels.map((channel) => {
            const Icon = channel.icon
            return (
              <div
                key={channel.title}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-medium text-white mb-2">
                  {channel.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                  {channel.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Reporting Questions Card */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl mb-6">
            <h3 className="font-heading text-xl sm:text-2xl font-medium text-white mt-1">
              Cross-Channel Questions We Clarify
            </h3>
            <p className="text-sm text-zinc-400 font-normal leading-relaxed mt-2">
              We consolidate available Amazon Advertising and external channel analytics into a unified executive reporting view, answering crucial strategic questions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {questions.map((q) => (
              <div key={q} className="flex items-start gap-3 rounded-lg border border-white/[0.04] bg-black/30 p-3.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
