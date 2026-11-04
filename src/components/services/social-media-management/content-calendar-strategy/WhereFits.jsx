'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Compass, Layers, CheckCircle2 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const platformDecisions = [
  'What to publish',
  'Which formats to use',
  'Which content pillars matter',
  'What publishing cadence makes sense',
  'How the audience should be addressed',
  'Which channel KPIs matter most',
]

const platforms = [
  {
    title: 'Facebook Management',
    href: '/services/social-media-management/facebook',
    body: 'Facebook planning can support promotional content, educational posts, community-focused communication, product updates, offers, and other content relevant to the platform.',
    note: 'Our cross-platform calendar helps ensure Facebook activity fits into wider campaigns instead of operating independently.',
  },
  {
    title: 'Instagram Management',
    href: '/services/social-media-management/instagram',
    body: 'Instagram planning can coordinate Reels, carousels, Stories, visual posts, campaigns, product content, and brand storytelling with the broader content strategy.',
    note: 'The calendar helps determine how Instagram contributes to the same campaign without simply duplicating content from other platforms.',
  },
  {
    title: 'LinkedIn Management',
    href: '/services/social-media-management/linkedin',
    body: 'LinkedIn content can support thought leadership, professional insights, company updates, case studies, expertise, and B2B communication.',
    note: 'Cross-platform planning helps connect LinkedIn content with broader business campaigns while preserving its professional context.',
  },
  {
    title: 'TikTok Management',
    href: '/services/social-media-management/tiktok-management',
    body: 'TikTok planning focuses on short-form video ideas and platform-appropriate execution.',
    note: 'A wider content calendar can identify which campaigns, source materials, educational ideas, or product stories can be adapted into TikTok content.',
  },
  {
    title: 'YouTube Management',
    href: '/services/social-media-management/youtube-management',
    body: 'YouTube can provide long-form education, product demonstrations, tutorials, expert content, interviews, Shorts, and other video assets.',
    note: 'Cross-platform planning can connect YouTube content with supporting social posts, campaigns, website content, and other audience touchpoints.',
  },
]

export default function WhereFits() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Architectural Hierarchy · Master Layer
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Where Content Calendar Fits With{' '}
            <span className="italic text-frame-accent">Platform Management.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Content Calendar &amp; Strategy sits above individual platform plans. It connects them into one coordinated business content system.
          </p>
        </div>

        {/* Top Split Explainer */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start mb-12">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              Each Framecipher platform-specific management service includes content strategy work for that individual platform.
            </p>
            <div className="rounded-2xl border border-white/[0.08] bg-[#15121C] p-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent block">
                The Master Strategy Layer
              </span>
              <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                Content Calendar &amp; Strategy sits above those individual plans. It connects them into one coordinated business content system, so each platform keeps its own native role while the campaign stays unified.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent block border-b border-white/[0.08] pb-2">
              Individual Platform Decisions Included:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              {platformDecisions.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5 Platforms Grid + 6th Synthesis Card */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <article
              key={platform.title}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 space-y-4 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <h3 className="font-heading text-lg sm:text-xl font-medium text-white group-hover:text-frame-accent transition-colors">
                    {platform.title}
                  </h3>
                  <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-frame-accent group-hover:translate-x-1 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  <AutoLinks currentPath="/services/social-media-management/content-calendar-strategy" allowed={["/services/content-writing/website-content"]}>
                    {platform.body}
                  </AutoLinks>
                </p>
              </div>

              <div className="space-y-4 border-t border-white/[0.06] pt-3">
                <div className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-3 text-[11px] leading-relaxed text-zinc-400">
                  <span className="font-mono text-[10px] uppercase text-frame-accent font-semibold block mb-0.5">
                    Calendar Alignment:
                  </span>
                  {platform.note}
                </div>

                <Link
                  href={platform.href}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-frame-accent hover:text-white transition-colors"
                >
                  <span>Explore {platform.title}</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </article>
          ))}

          {/* 6th Synthesis Card */}
          <article className="flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#15121C] p-6 sm:p-7 space-y-4 shadow-xl shadow-purple-950/20">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-frame-accent border-b border-white/[0.08] pb-3">
                <Compass className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-wider text-white">
                  One Coordinated System
                </span>
              </div>

              <h4 className="font-heading text-lg sm:text-xl font-medium text-white">
                Shared Direction, Native Delivery
              </h4>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                The calendar does not replace platform-specific thinking. It gives every individual platform a shared commercial direction and timetable to work from.
              </p>
            </div>

            <div className="pt-2">
              <PosterButton
                href="/contact"
                variant="primary"
                size="md"
                className="w-full text-center"
              >
                Discuss Your Platforms
              </PosterButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
