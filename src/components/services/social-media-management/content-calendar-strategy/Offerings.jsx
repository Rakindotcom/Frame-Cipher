'use client'

import React from 'react'
import { Check, Sparkles, Calendar, Layers, Share2, Workflow, BarChart3, Rocket, Compass, Repeat } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const blocks = [
  {
    number: '01',
    icon: Compass,
    title: 'Content Strategy & Goal Alignment',
    body: 'We establish the strategic foundation before building the publishing calendar. Our planning considers your business objectives, audience, offers, brand positioning, existing content, active platforms, and available production capacity.',
    listLabel: 'What We Do:',
    list: [
      'Business goal alignment',
      'Audience and customer understanding',
      'Content objectives & KPI definitions',
      'Platform role definition',
      'Campaign priorities & themes',
      'Messaging direction & tone of voice',
      'Content format planning',
      'CTA planning across stages',
      'Publishing cadence recommendations',
      'Content planning priorities',
    ],
    note: 'The strategy determines what your content needs to communicate. The calendar turns those decisions into an actionable publishing plan.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Audience & Content Pillar Planning',
    body: 'A strong content calendar needs more than a list of topics. We organize your content around practical content pillars that reflect your audience’s interests and your business priorities.',
    listLabel: 'Depending on the business, pillars may include:',
    list: [
      'Educational content',
      'Product or service education',
      'Industry insights & trends',
      'Customer questions & FAQs',
      'Case studies and social proof',
      'Brand stories & origin',
      'Behind-the-scenes content',
      'Community-focused discussions',
      'Promotional content & offers',
      'Seasonal or campaign content',
    ],
    note: 'Each pillar generates multiple topics and formats without forcing your team to repeatedly start from a blank page, preventing a continuous stream of dry sales posts.',
  },
  {
    number: '03',
    icon: Calendar,
    title: 'Cross-Platform Calendar Planning',
    body: 'We create a master content calendar that gives your team one coordinated view of planned activity across all the platforms you use.',
    listLabel: 'The calendar organizes:',
    list: [
      'Content topics & themes',
      'Content pillars alignment',
      'Target social platforms',
      'Publishing dates & times',
      'Creative formats',
      'Campaign associations',
      'Primary & secondary CTAs',
      'Required visual assets & copy',
      'Production deadlines',
      'Client approval deadlines',
      'Publishing status & live URLs',
    ],
    note: 'This prevents scheduling conflicts, missed campaign opportunities, inconsistent messaging, and unnecessary duplication across channels.',
  },
  {
    number: '04',
    icon: Repeat,
    title: 'Platform-Specific Content Adaptation',
    body: 'Coordinated content does not mean publishing the same asset everywhere. A campaign can have one central message while its execution changes according to the platform.',
    listLabel: 'For example, one campaign message becomes:',
    list: [
      'An Instagram educational carousel',
      'A Facebook community discussion post',
      'A LinkedIn professional insight & framework',
      'A TikTok vertical demonstration video',
      'A YouTube long-form deep dive or Short',
    ],
    note: 'The message remains aligned, but the format, hook, presentation, length, tone, and CTA adapt to the platform’s native viewing behavior.',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Campaign & Launch Coordination',
    body: 'Important campaigns need more than one announcement. We plan content across the campaign lifecycle so audiences encounter the right information at different psychological stages.',
    listLabel: 'Campaign planning includes:',
    list: [
      'Pre-launch awareness & teasers',
      'Educational context & problem awareness',
      'Official launch announcements',
      'Product or service feature highlights',
      'Customer social proof & reviews',
      'FAQs and objection handling',
      'Urgency & reminder content',
      'Promotional offers & incentives',
      'Follow-up & customer success stories',
      'Post-campaign retrospectives',
    ],
    extra: 'We work backward from important dates to establish production, review, approval, and publishing deadlines so your team has ample preparation time.',
    note: 'This gives your team calm predictability instead of rushing content immediately before launch.',
  },
  {
    number: '06',
    icon: Share2,
    title: 'Repurposing & Asset Planning',
    body: 'Repurposing works best when planned before production. We identify high-value source content and determine how it can efficiently support additional platform-specific content.',
    listLabel: 'For example, one long-form video supports:',
    list: [
      'YouTube Shorts & clips',
      'TikTok vertical videos',
      'Instagram Reels & soundbites',
      'LinkedIn carousel frameworks',
      'Facebook educational updates',
      'Supporting campaign graphics',
    ],
    note: 'The objective is not to duplicate raw files everywhere, but to extract useful ideas and adapt them into formats that make native sense on each network.',
  },
  {
    number: '07',
    icon: Workflow,
    title: 'Approval & Production Workflow',
    body: 'A content calendar should make production easier, not become another abandoned spreadsheet nobody updates. We establish a clear, accountable production pipeline.',
    listLabel: 'We establish clear workflows for:',
    list: [
      'Content ideation & briefs',
      'Asset requirements & design specs',
      'Content ownership & assignments',
      'Production deadlines & buffer days',
      'Review stages & stakeholder input',
      'Client approvals & sign-off',
      'Revision handling & quality gates',
      'Final scheduled publishing',
      'Version control & schedule adjustments',
    ],
    extra: 'For businesses with internal teams, the calendar serves as a shared operational system. When Framecipher manages execution, it unifies strategy with creative production.',
  },
  {
    number: '08',
    icon: BarChart3,
    title: 'Performance Review & Calendar Optimization',
    body: 'A content calendar should evolve as your business, audience, campaigns, and content performance change over time.',
    listLabel: 'We review relevant signals including:',
    list: [
      'Organic reach & impressions',
      'Engagement rate & conversations',
      'Saves, shares & bookmarks',
      'Video views & average watch time',
      'Audience retention & drop-off',
      'Profile visits & link clicks',
      'Website traffic & lead generation',
      'Campaign conversion actions',
    ],
    note: 'Performance insights help determine which topics, formats, messages, and campaigns deserve more weight in the next monthly planning cycle.',
  },
]

export default function Offerings() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Service Scope · 08 Core Capabilities
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What Our Content Calendar &amp; Strategy{' '}
            <span className="italic text-frame-accent">Service Includes.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            The coordination layer that sits above individual platform plans, connecting business goals, audience needs, campaigns, and publishing activity into one practical system.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {blocks.map((block) => {
            const Icon = block.icon
            return (
              <article
                key={block.number}
                className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-frame-accent">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                        Capability {block.number}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500">Master System</span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-white group-hover:text-frame-accent transition-colors">
                    {block.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    <AutoLinks currentPath="/services/social-media-management/content-calendar-strategy" allowed={["/services/content-creation", "/services/content-writing/content-strategy"]}>
                      {block.body}
                    </AutoLinks>
                  </p>

                  <div className="border-t border-white/[0.06] pt-3 space-y-2">
                    <span className="font-mono text-[10px] uppercase text-zinc-400 block">
                      {block.listLabel}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {block.list.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {block.extra && (
                    <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                      {block.extra}
                    </p>
                  )}
                </div>

                {block.note && (
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] leading-relaxed text-zinc-400">
                    <span className="font-mono text-[10px] uppercase text-frame-accent font-semibold block mb-0.5">
                      Strategic Purpose
                    </span>
                    {block.note}
                  </div>
                )}
              </article>
            )
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              A Living System, Not an Abandoned Document
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              A content calendar should make production easier, predictable, and measurable for your entire marketing operation.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Build My Content Calendar
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
