'use client'

import React from 'react'
import { ArrowRight, Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const steps = [
  {
    number: '01',
    title: 'Channel & Business Audit',
    body: 'We start by understanding your current channel and business model:',
    points: [
      'Existing content catalog review',
      'Channel structure & branding',
      'Topic performance & watch time',
      'Title, thumbnail & CTR history',
      'YouTube SEO & search presence',
      'Audience retention & drop-off points',
      'Competitor landscape & gaps',
      'Conversion & lead capture pathways',
    ],
  },
  {
    number: '02',
    title: 'Audience & Competitor Research',
    body: 'We research the people you want to reach and the content already competing for their attention:',
    points: [
      'Audience questions & pain points',
      'High-intent search opportunities',
      'Competitor topic gaps & formats',
      'Successful packaging patterns',
      'Audience retention benchmarks',
      'Seasonal interest & trending angles',
    ],
  },
  {
    number: '03',
    title: 'Strategy & Content Planning',
    body: 'We turn the research into an actionable monthly content roadmap:',
    points: [
      'Core content pillars & themes',
      'Search-aware topic selection',
      'Video format mix (tutorials, demos, etc.)',
      'Publishing cadence & consistency',
      'Shorts & long-form synergy roadmap',
      'Conversion CTAs & destination links',
    ],
  },
  {
    number: '04',
    title: 'Production & Approval',
    body: 'Content moves through an organized, transparent production workflow:',
    flow: ['Brief', 'Script', 'Production', 'Editing', 'Thumbnail', 'SEO', 'Client Review', 'Approval'],
    note: 'Client approval remains part of the process where required by the service agreement before any upload goes live.',
  },
  {
    number: '05',
    title: 'Publishing & Optimization',
    body: 'Approved videos are prepared and published according to the agreed schedule:',
    points: [
      'Optimized titles & descriptions',
      'Custom high-converting thumbnails',
      'Strategic playlist assignments',
      'Timestamps & chapters',
      'End screens & cards',
      'Visibility scheduling & pre-flight checks',
      'Related content linking',
    ],
  },
  {
    number: '06',
    title: 'Reporting & Continuous Improvement',
    body: 'Each reporting cycle turns performance data into practical next steps:',
    points: [
      'What performed well & why',
      'Underperforming topic analysis',
      'Audience retention curves & drop-offs',
      'Packaging CTR & impressions',
      'Shorts vs long-form response rates',
      'Hypothesis testing for the next cycle',
    ],
    note: 'The strategy continuously evolves as meaningful channel data becomes available.',
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
            How Our YouTube Management{' '}
            <span className="italic text-frame-accent">Process Works.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            A structured workflow keeps content aligned with your business goals and makes performance easier to evaluate.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <span className="font-mono text-[10px] text-zinc-500">YouTube Lifecycle</span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  <AutoLinks currentPath="/services/social-media-management/youtube-management" allowed={["/services/content-creation", "/services/video-production"]}>
                    {step.body}
                  </AutoLinks>
                </p>

                {step.flow && (
                  <div className="space-y-2 border-t border-white/[0.06] pt-3">
                    <span className="font-mono text-[10px] uppercase text-zinc-400 block">
                      Production Sequence:
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {step.flow.map((entry, idx) => (
                        <div key={entry} className="flex items-center gap-1.5">
                          <span className="rounded border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                            {entry}
                          </span>
                          {idx < step.flow.length - 1 && (
                            <ArrowRight className="h-2.5 w-2.5 text-zinc-600" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step.points && (
                  <div className="border-t border-white/[0.06] pt-3">
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {step.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-frame-accent mt-0.5">
                            <Check className="h-2 w-2 stroke-[2.5]" />
                          </span>
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {step.note && (
                <div className="mt-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] leading-relaxed text-zinc-400">
                  <span className="font-mono text-[10px] uppercase text-frame-accent font-semibold block mb-0.5">
                    Workflow Quality Gate
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
              Every Stage Produces Practical Value
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              Research feeds planning, planning feeds production, and performance data feeds the next strategic cycle.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Get a Free Consultation
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
