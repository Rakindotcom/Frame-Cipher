'use client'

import React from 'react'
import { ShieldCheck, Layers, Target, Globe2, Eye } from 'lucide-react'

const reasons = [
  {
    icon: Layers,
    num: '01',
    title: 'One In-House Team',
    body: 'Your paid advertising is not isolated from the rest of your digital presence. SEO, content, design, development, landing pages, and paid media can be coordinated through one in-house team instead of being split across unrelated providers.',
  },
  {
    icon: ShieldCheck,
    num: '02',
    title: 'Media + Creative + Development Under One Roof',
    body: 'Many advertising problems happen after the click. Because Framecipher also works across design and development, we can look beyond the ad account when the campaign requires landing-page, website, checkout, or user-experience improvements.',
  },
  {
    icon: Target,
    num: '03',
    title: 'Conversion-Focused Campaign Management',
    body: 'We optimize toward the business action you care about. That could mean a sale, qualified lead, booked consultation, application, appointment, or another measurable conversion event. Clicks and impressions remain useful diagnostic metrics, but they are not the final objective.',
  },
  {
    icon: Globe2,
    num: '04',
    title: 'Bangladesh & International Market Experience',
    body: 'Framecipher supports businesses in Bangladesh as well as international markets, including the US, UK, Australia, Canada, and UAE. Campaign strategy can be adapted to differences in customer behavior, competition, pricing, language, geography, platform availability, and market economics.',
  },
  {
    icon: Eye,
    num: '05',
    title: 'Transparent Reporting & Budget Control',
    body: 'Your management fee and advertising budget remain separate. You receive visibility into where the budget is going, what the campaigns are producing, and what changes are being recommended. Campaign and budget changes are handled according to the approval process agreed for the engagement.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Modality 4: Sticky Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-6">
              <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
                Why Choose Framecipher for{' '}
                <span className="italic text-frame-accent">Paid Advertising.</span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                Strategy, creative, development, and measurement working together under one in-house team.
              </p>
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold block">
                  AGENCY COMMITMENT
                </span>
                <p className="font-mono text-sm text-zinc-300">
                  Zero outsourced contractor handoffs. Full engineering, design, and media team aligned under one roof in Dhaka.
                </p>
              </div>
            </div>
          </div>

          {/* Scrolling Right Column (7 cols) with Divided Rows */}
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08] lg:col-span-7">
            {reasons.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="group py-8 transition-colors duration-200 hover:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-semibold text-frame-accent">
                      {item.num}
                    </span>
                    <Icon className="h-4 w-4 text-zinc-500 group-hover:text-frame-accent transition-colors" />
                    <h3 className="text-xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-300 pl-8">
                    {item.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
