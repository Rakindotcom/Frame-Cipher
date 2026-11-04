'use client'

import React from 'react'
import { Sparkles, Search, GitMerge } from 'lucide-react'
import { AutoLinks } from '../../../seo/AutoLinks'

const pillars = [
  {
    title: 'Paid AI Advertising',
    icon: Sparkles,
    body: [
      'Paid campaigns provide an advertising channel inside an AI environment.',
      'The focus is campaign objectives, context relevance, creative, conversion tracking, budget management, testing, and optimization.',
    ],
  },
  {
    title: 'Organic AI Search Visibility',
    icon: Search,
    body: [
      'AEO and GEO focus on building the information, entity, topical, content, and technical foundations that can support organic visibility across AI search experiences.',
      'This is not the same as buying an advertisement. Organic visibility requires its own strategy, content, authority, technical work, and measurement.',
    ],
  },
  {
    title: 'Coordinated AI Visibility Strategy',
    icon: GitMerge,
    body: [
      'A business may benefit from treating paid and organic AI visibility as complementary channels.',
      'Paid campaigns can provide measurable advertising exposure and testing opportunities. Organic AI search optimization can support broader discoverability over time.',
      'Framecipher can coordinate both under one in-house team so campaign insights, landing-page strategy, content, SEO, and AI visibility are not handled as disconnected activities.',
    ],
  },
]

export default function AeoGeo() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            ChatGPT Ads{' '}
            <span className="italic text-frame-accent">+ AEO/GEO.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Paid AI advertising and organic AI visibility are strategically related, but they are not the same discipline. ChatGPT Ads are paid placements. AEO and GEO focus on how brands, entities, and information are surfaced organically within AI-generated answers. Framecipher can coordinate both when a broader AI visibility strategy makes sense for the business.
          </p>
        </div>

        {/* 3-Column Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                      Surface 0{index + 1}
                    </span>
                    <Icon className="h-4 w-4 text-zinc-500 group-hover:text-frame-accent transition-colors" />
                  </div>

                  <h3 className="font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {item.title}
                  </h3>

                  <div className="space-y-2.5 text-sm font-normal leading-relaxed text-zinc-300">
                    {item.body.map((p, pIdx) => (
                      <p key={pIdx}>
                        <AutoLinks currentPath="/services/paid-advertising/chatgpt-ads" allowed={["/services/website-design-development/landing-pages"]}>
                          {p}
                        </AutoLinks>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
