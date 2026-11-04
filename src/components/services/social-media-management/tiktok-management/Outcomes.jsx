'use client'

import React from 'react'
import { Search, Users, Sparkles, ShoppingBag, Globe, MessageSquare, ShoppingCart, Check } from 'lucide-react'

const outcomes = [
  {
    number: '01',
    title: 'Increase Brand Discovery',
    icon: Search,
    body: 'Consistent, relevant content can introduce your business to people who have not encountered your brand before. We build content around topics and formats that give relevant audiences a reason to discover your account.',
  },
  {
    number: '02',
    title: 'Build a Relevant Audience',
    icon: Users,
    body: 'A large follower count is not useful if the audience has no connection to your business. We consider audience quality alongside follower growth.',
    points: [
      'Relevant profile visits',
      'Repeat engagement',
      'Website actions',
      'Product interest',
      'Inquiries',
      'Leads & Conversions',
    ],
  },
  {
    number: '03',
    title: 'Strengthen Brand Personality',
    icon: Sparkles,
    body: 'TikTok gives businesses more room to show human authenticity and expertise:',
    points: ['People & Team', 'Processes', 'Expertise', 'Personality', 'Products', 'Behind-the-scenes'],
    note: 'We help develop a recognizable content style that fits your brand without forcing an artificial personality.',
  },
  {
    number: '04',
    title: 'Generate Product Interest',
    icon: ShoppingBag,
    body: 'Product content can answer questions before a potential customer reaches out. This includes:',
    points: [
      'Demonstrations',
      'Tutorials',
      'Product use cases',
      'Comparisons',
      'Features & Benefits',
      'Reviews & UGC',
    ],
    note: 'The objective is to help viewers understand the product and its direct relevance to them.',
  },
  {
    number: '05',
    title: 'Support Website Traffic & Inquiries',
    icon: Globe,
    body: 'TikTok functions as a key entry point in a wider multi-channel customer journey. Where appropriate, we connect content with:',
    points: [
      'Websites',
      'Landing pages',
      'Product pages',
      'Inquiry channels',
      'Booking pages',
      'Custom destinations',
    ],
    note: 'Where reliable tracking is available, we monitor relevant actions beyond surface-level views and followers.',
  },
  {
    number: '06',
    title: 'Build Community',
    icon: MessageSquare,
    body: 'A strong account should give people a reason to participate. Questions, discussions, customer feedback, educational content, and recurring topics can help create a stronger relationship between the brand and its audience.',
  },
  {
    number: '07',
    title: 'Support Ecommerce Discovery',
    icon: ShoppingCart,
    body: 'For ecommerce brands, TikTok content introduces products through demonstrations, education, lifestyle videos, creator UGC, and promotional content.',
    points: [
      'Product demonstrations',
      'Education & Routines',
      'Creator UGC & Reviews',
      'Product comparisons',
      'TikTok Shop integration',
      'Affiliate coordination',
    ],
    note: 'Where TikTok Shop is available, we incorporate Shop-focused content and creator/affiliate activities into the broader strategy.',
  },
]

export default function Outcomes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Commercial Value · Business Outcomes
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What TikTok Management Can{' '}
            <span className="italic text-frame-accent">Help Your Business Achieve.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            TikTok should have a business purpose beyond collecting views. The exact outcome depends on your market, offer, audience, content quality, conversion system, and other business factors.
          </p>
        </div>

        {/* 7 Outcomes Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, idx) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className={`flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16] ${
                  idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                      Outcome {item.number} · </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    {item.body}
                  </p>

                  {item.points && (
                    <div className="mt-6 border-t border-white/[0.06] pt-4">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2.5">
                        Key Levers:
                      </p>
                      <ul className="space-y-2 text-xs text-zinc-400">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {item.note && (
                  <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] text-zinc-400 leading-relaxed">
                    <strong className="text-zinc-200">Focus: </strong>
                    {item.note}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
