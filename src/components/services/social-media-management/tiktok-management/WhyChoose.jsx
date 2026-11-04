'use client'

import React from 'react'
import { Users, Video, Search, ShieldCheck, Globe, Key, BarChart3, LineChart, Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const approvalChecks = [
  'Accuracy',
  'Tone of voice',
  'Commercial messaging',
  'Promotional offers',
  'Product details',
  'Brand compliance',
]

const reporting = [
  'What is being produced',
  'What was published',
  'What performed well',
  'What underperformed',
  'What we learned',
  'What we recommend changing',
]

const reasons = [
  {
    number: '01',
    title: 'One In-House Team',
    icon: Users,
    body: 'Strategy, content, SEO, creative production, and reporting stay connected through one in-house team. You do not need to coordinate separate freelancers for every part of your TikTok workflow.',
  },
  {
    number: '02',
    title: 'TikTok-Native Content Strategy',
    icon: Video,
    body: 'TikTok content should not feel like a resized Facebook post or an Instagram caption placed on a video. We develop content around short-form storytelling, hooks, audience questions, trends, visual communication, and the way your specific market consumes content.',
  },
  {
    number: '03',
    title: 'Search-Aware Content',
    icon: Search,
    body: 'We incorporate search and discoverability into content planning without turning every video into keyword-stuffed copy. Topics, captions, on-screen text, profile information, and content structure are considered together.',
  },
  {
    number: '04',
    title: 'Human Review & Approval',
    icon: ShieldCheck,
    body: 'Your brand should remain yours. We use a defined review process so content can be checked before publishing:',
    list: approvalChecks,
    note: 'Zero rogue publishing without your team’s explicit review.',
  },
  {
    number: '05',
    title: 'Bangladesh & International Experience',
    icon: Globe,
    body: 'Framecipher is based in Bangladesh and supports businesses targeting both local and international markets.',
    sub: [
      'For Bangladesh campaigns, content is adapted to Bangla, English, or natural Banglish.',
      'For international campaigns, we adapt content to target-market culture rather than generic posting.',
    ],
  },
  {
    number: '06',
    title: 'Client-Owned Accounts & Secure Access',
    icon: Key,
    body: 'Your TikTok account remains strictly under your ownership. Where supported, we prefer role-based access rather than password sharing. Access is limited to what the team needs to perform the agreed work.',
  },
  {
    number: '07',
    title: 'Clear Reporting & Communication',
    icon: BarChart3,
    body: 'Transparent analytics showing exactly what occurred and where next opportunities lie:',
    list: reporting,
    note: 'Our reporting is designed to make commercial decisions easier to understand.',
  },
  {
    number: '08',
    title: 'Evidence-Based Optimization',
    icon: LineChart,
    body: 'We do not rely on assumptions about what will work forever. We use content performance, audience response, and business data where available to guide future content decisions.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              The Framecipher Standard · Why Us
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Choose Framecipher for{' '}
            <span className="italic text-frame-accent">TikTok Management.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Strategy, content, production, discoverability, community, and reporting stay in one coordinated workflow instead of being split across disconnected providers.
          </p>
        </div>

        {/* 8 Standards Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <article
                key={reason.number}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                      Standard {reason.number} · </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    {reason.body}
                  </p>

                  {reason.sub && (
                    <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-4 text-xs text-zinc-300">
                      {reason.sub.map((entry, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                          <span>{entry}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {reason.list && (
                    <div className="mt-6 border-t border-white/[0.06] pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {reason.list.map((entry, idx) => (
                          <span
                            key={idx}
                            className="rounded-md border border-white/[0.08] bg-[#18181B] px-2 py-0.5 font-mono text-[10px] text-zinc-300"
                          >
                            {entry}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {reason.note && (
                  <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] text-zinc-400 leading-relaxed">
                    <strong className="text-zinc-200">Rule: </strong>
                    {reason.note}
                  </div>
                )}
              </article>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Your Brand Stays Yours at Every Step
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Content goes through systematic human review and approval prior to publication.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Request a Custom Quote
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
