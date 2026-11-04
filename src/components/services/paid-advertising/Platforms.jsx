'use client'

import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const platforms = [
  {
    title: 'Google Ads',
    slug: '/services/paid-advertising/google-ads',
    tag: 'Search & PMax',
    body: 'Google Ads helps businesses capture demand when people are actively searching for products, services, solutions, or information related to what they offer.',
    bullets: [
      'Search campaigns',
      'Shopping campaigns',
      'Performance Max',
      'Display & YouTube',
      'First-party remarketing',
    ],
    note: 'Campaign structure is built around intent, conversion goals, product categories, and geographic markets.',
  },
  {
    title: 'Meta Ads',
    slug: '/services/paid-advertising/meta-ads',
    tag: 'Facebook & IG',
    body: 'Meta Ads across Facebook and Instagram can support demand generation, lead generation, ecommerce, remarketing, and customer acquisition. We build campaigns around audience behavior, creative angles, offers, product or service categories, and funnel stage.',
    note: 'For ecommerce, this can include catalog-based advertising. For service businesses, the focus is qualified lead generation.',
  },
  {
    title: 'Microsoft Ads',
    slug: '/services/paid-advertising/microsoft-ads',
    tag: 'Bing & Copilot',
    body: 'Microsoft Advertising provides search and other advertising opportunities across the Microsoft network and partner environments. We can use Microsoft Ads where its audience, competition, market coverage, or incremental search demand makes it commercially relevant.',
    note: 'Campaigns can include search, shopping, and other applicable Microsoft Advertising formats based on the account.',
  },
  {
    title: 'LinkedIn Ads',
    slug: '/services/paid-advertising/linkedin-ads',
    tag: 'B2B & ABM',
    body: 'LinkedIn is particularly useful when the audience is defined by professional or company attributes.',
    bullets: [
      'Job roles & industries',
      'Company characteristics',
      'Professional seniority',
      'Account-based audience strategies',
    ],
    note: 'The emphasis is on reaching the people and organizations relevant to a higher-consideration buying process.',
  },
  {
    title: 'TikTok Ads',
    slug: '/services/paid-advertising/tiktok-ads',
    tag: 'Short-Form Video',
    body: 'TikTok can support awareness, demand generation, traffic, lead generation, ecommerce, and conversion campaigns where the audience and creative format are a strong fit.',
    note: 'Successful TikTok advertising requires creative designed for the platform rather than simply reposting another channel\'s ads.',
  },
  {
    title: 'Pinterest Ads',
    slug: '/services/paid-advertising/pinterest-ads',
    tag: 'Visual Intent',
    body: 'Pinterest can be useful for products, services, and content connected to discovery, planning, inspiration, and purchase consideration.',
    note: 'We assess whether the platform fits your product category, audience behavior, and commercial goals before allocating budget.',
  },
  {
    title: 'Amazon Ads',
    slug: '/services/paid-advertising/amazon-ads',
    tag: 'Marketplace',
    body: 'Amazon Ads can help ecommerce sellers reach shoppers within a marketplace where users are already browsing products and comparing purchase options.',
    bullets: [
      'Sponsored product campaigns',
      'Sponsored brand campaigns',
      'Product & keyword targeting',
      'Search-term & budget optimization',
    ],
    note: 'The strategy is built around marketplace dynamics rather than treating Amazon like a standard search channel.',
  },
  {
    title: 'ChatGPT Ads - Where Available',
    slug: '/services/paid-advertising/chatgpt-ads',
    tag: 'Conversational AI',
    body: 'AI advertising is becoming a new paid-media environment built around conversational discovery, contextual intent, and decision-making. Where advertiser access is available, ChatGPT Ads can be evaluated as part of a broader media strategy.',
    note: 'Because availability and account eligibility can change, we assess access and suitability before including this channel.',
  },
]

export default function Platforms() {
  return (
    <section id="platforms" className="bg-[#09090B] py-20 md:py-28 text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Paid Advertising Platforms <span className="italic text-frame-accent">We Manage.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            We choose platforms according to your buyers, offer, market, funnel, and commercial objective rather than running every available channel by default.
          </p>
        </div>

        {/* Modality 3: Technical Blueprint Matrix (4-col on lg, seamless gap-0) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform, index) => (
            <div
              key={platform.title}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#09090B] p-6 transition-colors duration-200 hover:bg-[#121214] sm:p-7"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {platform.title}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                  {platform.body}
                </p>

                {platform.bullets && (
                  <ul className="space-y-1.5 border-t border-white/[0.06] pt-3 font-mono text-xs text-zinc-400">
                    {platform.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[#A855F7] shrink-0 mt-1.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {platform.note && (
                  <div className="border-t border-white/[0.06] pt-3 font-mono text-[10px] leading-relaxed text-zinc-500">
                    <span className="text-zinc-400 font-semibold block mb-0.5">STRATEGY:</span>
                    {platform.note}
                  </div>
                )}
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <Link
                  href={platform.slug}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-zinc-400 group-hover:text-frame-accent transition-colors"
                >
                  <span>Explore Channel</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
