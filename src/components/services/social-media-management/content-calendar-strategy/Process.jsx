'use client'

import React from 'react'
import { ArrowRight, Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const steps = [
  {
    number: '01',
    title: 'Business & Content Audit',
    body: 'We begin by reviewing your business goals, existing social presence, current content, active platforms, campaigns, audience, brand direction, and existing planning process. If you already have a content calendar, we review how it is being used and where coordination can improve.',
  },
  {
    number: '02',
    title: 'Strategy & Content Pillars',
    body: 'We establish the strategic foundation for the calendar. The objective is to make the calendar useful for the business, not simply full:',
    listLabel: 'This includes:',
    list: [
      'Audience priorities & segments',
      'Content objectives & funnel roles',
      'Core content pillars & themes',
      'Messaging direction & brand tone',
      'Platform role definitions',
      'Campaign priorities & launch dates',
      'Content formats & asset types',
      'CTA direction per platform',
    ],
    note: 'The objective is to make the calendar useful for the business, not simply full.',
  },
  {
    number: '03',
    title: 'Calendar & Campaign Planning',
    body: 'We translate the strategy into a coordinated, multi-platform publishing plan with clear operational visibility:',
    listLabel: 'The calendar organizes:',
    list: [
      'Topics & angles',
      'Target platforms',
      'Creative formats',
      'Publishing dates & times',
      'Active campaigns',
      'Content pillars',
      'Specific CTAs',
      'Required assets & specs',
      'Production deadlines',
      'Approval deadlines',
    ],
  },
  {
    number: '04',
    title: 'Review & Approval',
    body: 'The planned content goes through the agreed review process before production or publishing. This gives stakeholders an opportunity to review campaign direction, important messages, dates, and content priorities before execution.',
  },
  {
    number: '05',
    title: 'Production Coordination',
    body: 'Once the plan is approved, we coordinate the required assets and platform-specific adaptations according to the agreed scope. This may involve content writing, design, video, repurposing, platform management, or coordination with your internal team.',
  },
  {
    number: '06',
    title: 'Performance Review & Optimization',
    body: 'After content is published, relevant performance signals inform the next planning cycle. We review what audiences responded to, which content supported the intended objective, what needs improvement, and which ideas deserve further development.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Execution Playbook · 06 Phases
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How Our Content Calendar &amp; Strategy{' '}
            <span className="italic text-frame-accent">Process Works.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            The calendar is treated as a working system rather than a static document that becomes outdated after the first month.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 space-y-4 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-frame-accent">
                    Phase {step.number}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">Strategy Flow</span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  <AutoLinks currentPath="/services/social-media-management/content-calendar-strategy" allowed={["/services/content-writing", "/services/content-creation"]}>
                    {step.body}
                  </AutoLinks>
                </p>

                {step.list && (
                  <div className="border-t border-white/[0.06] pt-3 space-y-2">
                    <span className="font-mono text-[10px] uppercase text-zinc-400 block">
                      {step.listLabel}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {step.list.map((item) => (
                        <span
                          key={item}
                          className="rounded border border-purple-500/20 bg-purple-500/[0.05] px-2 py-0.5 font-mono text-[10px] text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {step.note && (
                <div className="mt-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] leading-relaxed text-zinc-400">
                  <span className="font-mono text-[10px] uppercase text-frame-accent font-semibold block mb-0.5">
                    Strategic Principle:
                  </span>
                  {step.note}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Process Ledger Footer */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              A Living System, Not a Spreadsheet
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              Each planning cycle builds on the previous one, so the calendar improves as your business, audience, and campaigns evolve.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Start Your Content Planning Project
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
