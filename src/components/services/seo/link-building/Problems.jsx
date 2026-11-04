'use client'

import React from 'react'
import {
  Compass,
  FileText,
  Eye,
  Globe,
  Anchor,
  ShieldAlert,
} from 'lucide-react'

const criteria = [
  {
    icon: Compass,
    title: 'Topical Relevance',
    body: 'The linking website should have a meaningful relationship with your industry, subject, audience, or a closely related topic. Relevance can come from the publication itself, the specific section, or the article where the link appears. The important question is whether the relationship makes sense to a real reader.',
  },
  {
    icon: FileText,
    title: 'Editorial Context',
    body: 'We look at how a website publishes and links to content. A useful editorial environment typically has clear content standards, recognizable authorship, meaningful articles, and a reason for linking to external sources. A placement should look like part of a real publication, not an artificial page created to host a backlink.',
  },
  {
    icon: Eye,
    title: 'Real Audience & Organic Visibility',
    body: 'Third-party metrics can be useful for initial research, but they are not enough on their own. We consider organic visibility, search traffic patterns, content activity, audience relevance, geographic audience, existing editorial coverage, and referral potential to confirm a real audience exists.',
  },
  {
    icon: Globe,
    title: 'Geographic Relevance',
    body: 'A backlink from a relevant publication in your target market may be more useful than a random link from another country. For a Bangladeshi business, this includes local publications, associations, and directories. For an international campaign, publisher selection adapts to the specific target market.',
  },
  {
    icon: Anchor,
    title: 'Natural Anchor & Destination Fit',
    body: 'The wording around a link should make sense in normal editorial language. We avoid forcing exact-match commercial keywords into every placement. We also map the link to the appropriate destination (homepage, service, product, research asset, or guide) that actually supports the subject.',
  },
  {
    icon: ShieldAlert,
    title: 'Spam & Manipulation Screening',
    body: 'Before pursuing a site, we screen for patterns that make the opportunity unsuitable: obvious link farms, excessive unrelated guest-posts, cheap sponsored articles, automated publishing, keyword-stuffed outbound anchors, and manipulative cross-linking networks identified in Google’s spam policies.',
  },
]

export default function Problems() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Prospect Evaluation Framework
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            What Makes a Backlink{' '}
            <span className="italic text-frame-accent">Worth Pursuing?</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            A backlink is not valuable simply because the source website has a high third-party authority score. We evaluate the broader context before deciding whether a placement is worth pursuing.
          </p>
        </div>

        {/* 6 Criteria Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {criteria.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-3xl font-light text-zinc-600">
                      0{index + 1}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-frame-accent border border-white/[0.06]">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Screening Banner */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
              Proactive Quality Screening
            </span>
            <p className="text-sm sm:text-base text-zinc-300">
              Our screening process is designed to avoid manipulative patterns rather than trying to scale them, safeguarding your domain against future algorithmic penalties.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
