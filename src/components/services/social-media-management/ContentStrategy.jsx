'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const pillars = [
  {
    title: 'Educational Content',
    body: 'Educational content helps your audience understand problems, solutions, products, services, and industry topics.',
    examples: ['Tips & practical advice', 'How-to tutorials', 'Explanations & breakdowns', 'Guides & checklists', 'Common FAQs answered'],
  },
  {
    title: 'Promotional Content',
    body: 'Promotional content communicates your products, services, offers, launches, and campaigns without making every post feel like an advertisement.',
    examples: ['Special offers & launches', 'Product feature highlights', 'Service packages & deliverables', 'Campaign milestones'],
    note: 'We balance promotional messages with educational, community, and brand-building content.',
  },
  {
    title: 'Engagement Content',
    body: 'Engagement content gives your audience a reason to interact rather than scroll past.',
    examples: ['Conversational questions', 'Community polls & surveys', 'Topic discussions & debates', 'Interactive Stories & stickers', 'Audience opinion prompts'],
  },
  {
    title: 'Brand & Trust Content',
    body: 'People often want to understand the business behind a product or service before they buy.',
    examples: ['Team introductions', 'Company values & culture', 'Work process & craftsmanship', 'Customer experience stories', 'Behind-the-scenes moments'],
  },
  {
    title: 'Campaign & Seasonal Content',
    body: 'We plan content around launches, promotions, holidays, seasonal opportunities, events, and important business dates.',
    examples: ['Festive & holiday campaigns', 'Seasonal product releases', 'Event live coverage & recaps', 'Strategic timeline mapping'],
  },
  {
    title: 'Content Repurposing',
    body: 'One strong piece of content can often support multiple social formats instead of being created from scratch each time.',
    examples: ['Long-form video to vertical Reels/Shorts', 'Key quotes to multi-slide carousels', 'Key takeaways to LinkedIn thought pieces', 'Stories & micro-content'],
    note: 'We adapt the message and format for each platform rather than copying the same post everywhere.',
  },
]

export default function ContentStrategy() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               CONTENT PILLARS &amp; THEMES 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Social Media Content Strategy That Gives{' '}
            <span className="italic text-[#A855F7]">Every Post a Purpose.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            A social media strategy should not be a list of random posts. We build content around clear themes and business objectives so your audience sees a consistent story across your social channels.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-200 hover:border-white/[0.16]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                    Pillar {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase">
                    Purpose-Driven
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium text-white leading-snug">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                  {pillar.body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block">
                  Example Formats:
                </span>
                <ul className="space-y-1.5 text-xs font-mono text-zinc-300">
                  {pillar.examples.map((example, eIdx) => (
                    <li key={eIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-[#A855F7] shrink-0 mt-0.5" />
                      <span className="leading-snug">{example}</span>
                    </li>
                  ))}
                </ul>

                {pillar.note && (
                  <div className="mt-3 rounded-lg border-l-2 border-[#A855F7]/40 border-white/[0.04] bg-[#18181B] p-2.5 text-[11px] text-zinc-300 leading-relaxed font-normal">
                    {pillar.note}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
              Content Calendar Execution
            </span>
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
              Your monthly calendar is built from these pillars, so every published post has a defined job. You receive it in advance and can request changes before anything goes live.
            </p>
          </div>
          <Link
            href="/services/social-media-management/content-calendar-strategy"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#A855F7] hover:text-white transition-colors shrink-0"
          >
            <span>See Content Calendar Strategy</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
