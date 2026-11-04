'use client'

import React from 'react'
import { Calendar, Layers, Compass, Repeat, Users, Globe, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const reasons = [
  {
    icon: Calendar,
    number: '01',
    title: 'One Coordinated Content System',
    body: 'Your social platforms can work from one strategic calendar instead of disconnected schedules. This gives your team a clearer view of campaigns, content priorities, production requirements, and publishing activity.',
  },
  {
    icon: Layers,
    number: '02',
    title: 'Platform-Native Planning',
    body: 'We maintain consistency in the core message while adapting content for the platform where it will appear. The goal is not to make every platform identical, but to respect how each audience consumes media.',
  },
  {
    icon: Compass,
    number: '03',
    title: 'Strategy Before Scheduling',
    body: 'We do not begin with an empty list of dates. We begin with business goals, audience needs, content pillars, campaigns, platform roles, and content priorities before committing to a publishing calendar.',
  },
  {
    icon: Repeat,
    number: '04',
    title: 'Repurposing Built Into the Workflow',
    body: 'Repurposing opportunities are identified during planning rather than after content has already been produced. This helps your team understand how one valuable asset can support multiple relevant content formats.',
  },
  {
    icon: Users,
    number: '05',
    title: 'One In-House Team',
    body: 'Framecipher can coordinate content strategy, social media management, paid advertising, SEO, website services, content creation, and related digital marketing work through one in-house team where the selected scope requires it.',
  },
  {
    icon: Globe,
    number: '06',
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Dhaka and works with businesses across Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE. Our planning accounts for market-specific audiences and campaigns.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Framecipher Differentiators · 06 Pillars
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Choose Framecipher for{' '}
            <span className="italic text-frame-accent">Content Calendar &amp; Strategy.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Content strategy, planning, production coordination, and performance review stay in one workflow instead of being split across disconnected providers.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <article
                key={reason.number}
                className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 space-y-4 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-frame-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500">
                      Pillar {reason.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    <AutoLinks currentPath="/services/social-media-management/content-calendar-strategy" allowed={["/services/paid-advertising"]}>
                      {reason.body}
                    </AutoLinks>
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Strategy Always Precedes Scheduling
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              We do not begin with an empty calendar. We begin with commercial objectives, customer friction points, content pillars, and platform roles.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Talk to the Framecipher Team
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
