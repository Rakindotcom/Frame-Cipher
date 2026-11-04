'use client'

import React from 'react'
import { Check, ArrowRight, Layers, Workflow } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const steps = [
  {
    number: '01',
    title: 'Account & Business Audit',
    lead: 'We review your existing TikTok presence and understand your commercial objectives before formulating strategy:',
    bullets: [
      'Current profile setup & bio clarity',
      'Historical content & video performance',
      'Audience demographics & search signals',
      'Competitor presence & positioning gaps',
      'Business goals & primary conversion paths',
      'Assessment of existing footage/assets',
    ],
    note: 'We determine whether your existing account has useful audience data or historical retention patterns to inform the new strategy.',
  },
  {
    number: '02',
    title: 'Audience & Competitor Research',
    lead: 'We identify who you want to reach and examine how competitor accounts communicate with that audience:',
    bullets: [
      'Buyer interests & customer pain-points',
      'Customer questions & purchase hesitations',
      'Competitor content patterns & formats',
      'High-intent search topics on TikTok',
      'Underserved topic gaps & creative angles',
      'Opportunities for distinct brand positioning',
    ],
    note: 'The goal is to discover underserved opportunities rather than simply copy competitor videos.',
  },
  {
    number: '03',
    title: 'Strategy & Content Planning',
    lead: 'We turn research into a repeatable, high-retention content system for your brand:',
    bullets: [
      'Content pillars & recurring themes',
      'Brand messaging voice & on-camera style',
      'Short-form formats & hook styles',
      'Posting cadence & publishing calendar',
      'Search-aware video concepts & keywords',
      'First content cycle & approval workflow',
    ],
    note: 'Establishes clear criteria for video reviews and aligns production with commercial business goals.',
  },
  {
    number: '04',
    title: 'Production & Approval',
    lead: 'We develop the agreed content and prepare platform-native assets for publishing:',
    bullets: [
      'Scripting & talking points',
      'Retention-focused opening hooks',
      'Paced short-form video editing',
      'Styled captions & on-screen callouts',
      'Dynamic transitions & brand elements',
      'Creator & UGC collaboration coordination',
    ],
    note: 'Every video follows an agreed review and approval workflow before publishing. Revision rounds and deadlines are clearly defined.',
  },
  {
    number: '05',
    title: 'Publishing & Community Management',
    lead: 'Once approved, we publish on schedule and actively nurture community conversations:',
    bullets: [
      'Peak-time content scheduling',
      'Optimized captions & discoverability tags',
      'Profile checks & pinned video curation',
      'Comment monitoring & active responses',
      'Customer question triage & DM escalation',
      'Timely trend adaptation & opportunistic posts',
    ],
    note: 'Recurring audience questions from comments are captured to feed directly into future video topics and tutorials.',
  },
  {
    number: '06',
    title: 'Reporting & Optimization',
    lead: 'Performance data is systematically reviewed to refine upcoming creative batches:',
    bullets: [
      'Watch time, completion & retention drop-offs',
      'Hook retention rate & topic traction',
      'Audience engagement, shares & saves',
      'Profile visits, website clicks & leads',
      'Creative variant & format testing',
      'Actionable next-cycle recommendations',
    ],
    note: 'Stronger creative patterns are scaled up; weaker approaches are adjusted or removed from subsequent cycles.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Execution Playbook · 6 Steps
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How Our TikTok Management{' '}
            <span className="italic text-frame-accent">Process Works.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We use a structured process so strategy, production, publishing, community management, and optimization stay connected into one reliable workflow.
          </p>
        </div>

        {/* 6 Process Steps Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <article
              key={step.number}
              className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    Step {step.number} · </span>
                  <span className="font-mono text-xs text-zinc-500">
                    Phase 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {step.lead}
                </p>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2.5">
                    Activities &amp; Outputs:
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-400">
                    {step.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] text-zinc-400 leading-relaxed">
                <strong className="text-zinc-200">Principle: </strong>
                {step.note}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Data-Led Iteration Across Every Cycle
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Stronger patterns are scaled up. Weaker approaches are adjusted or removed based on verified platform signals.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Get Your Free TikTok Audit
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
