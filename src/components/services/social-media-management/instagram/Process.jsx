'use client'

import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const steps = [
  {
    num: '01',
    title: 'Account Audit & Business Discovery',
    desc: 'We start by understanding your business and reviewing your existing Instagram account to identify immediate priorities.',
    points: [
      'Profile structure & SEO readiness',
      'Historical content & Reels performance',
      'Visual identity & grid aesthetics',
      'Audience engagement patterns',
      'Competitor positioning review',
      'Content gaps & commercial goals',
    ],
  },
  {
    num: '02',
    title: 'Audience & Competitor Research',
    desc: 'We research the audience you want to reach and the businesses competing for that audience\'s attention to uncover unaddressed demand.',
    points: [
      'Common customer questions & pain points',
      'Competitor content formats & frequency',
      'Emerging industry trends & audio hooks',
      'Audience objections & conversion barriers',
      'Content formats worth testing',
    ],
  },
  {
    num: '03',
    title: 'Strategy & Content Planning',
    desc: 'We develop the Instagram strategy and monthly content calendar based on the research findings.',
    points: [
      'Core content pillars & objectives',
      'Monthly publishing calendar & cadence',
      'Reels concepts & short-form video hooks',
      'Feed, Carousel & Story allocations',
      'Brand voice, tone & visual direction',
      'Client review & approval workflow setup',
    ],
  },
  {
    num: '04',
    title: 'Content Creation & Approval',
    desc: 'Our in-house creative team scripts, edits, designs, and prepares all agreed content for your team\'s review.',
    points: [
      'Vertical Reels video editing & dynamic captions',
      'Branded educational Carousel design',
      'High-impact static Feed visuals',
      'Interactive Story batch preparation',
      'Caption copywriting & hashtag research',
      'Formal client approval sign-off',
    ],
  },
  {
    num: '05',
    title: 'Publishing & Community Management',
    desc: 'Approved content is scheduled and published according to plan while our team actively manages community interactions.',
    points: [
      'Meta Business Suite scheduling',
      'Daily comment responses & moderation',
      'Direct message (DM) monitoring',
      'Story interactions & lead qualification',
      'Structured inquiry escalation process',
    ],
  },
  {
    num: '06',
    title: 'Reporting & Ongoing Optimization',
    desc: 'We review account and content metrics regularly to inform upcoming cycles with first-party data.',
    points: [
      'Reach, watch time & view analytics',
      'Engagement & save rate benchmarks',
      'Format performance comparison',
      'Topic & hook testing takeaways',
      'Iterative adjustments for next month',
    ],
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               EXECUTION TIMELINE · STEP-BY-STEP 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How Our Instagram Management{' '}
            <span className="italic text-[#A855F7]">Process Works.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Our Instagram management process connects research, strategy, content production, publishing, community management, and optimization into one ongoing compounding system.
          </p>
        </div>

        {/* 6-Step Process Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((st) => (
            <article
              key={st.num}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-200 hover:border-white/[0.16]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#A855F7]">
                    Phase {st.num} · </span>
                  <span className="font-mono text-[11px] uppercase text-zinc-500">
                    Structured Workflow
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {st.desc}
                </p>

                <div className="space-y-2 border-t border-white/[0.06] pt-4">
                  {st.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="h-3.5 w-3.5 text-[#A855F7] shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div>
            <p className="font-heading text-lg font-medium uppercase text-white">
              Every month builds directly on first-party data from the previous cycle.
            </p>
            <p className="text-xs text-zinc-400 mt-1">
              Zero automated shortcuts. 100% human-reviewed production and community management.
            </p>
          </div>
          <PosterButton href="/contact">
            Request a Custom Quote
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
