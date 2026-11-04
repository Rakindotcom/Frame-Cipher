'use client'

import React from 'react'
import { Check, Target, Compass, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const objectives = [
  'Build B2B visibility',
  'Strengthen professional credibility',
  'Establish executive authority',
  'Communicate industry expertise',
  'Support lead generation',
  'Build relationships with prospects & partners',
  'Support recruitment & employer branding',
  'Share company news & milestones',
  'Educate potential customers',
  'Support sales conversations',
  'Strengthen your professional reputation',
  'Build a network around your expertise',
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Strategic Foundation · Commercial Role
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            LinkedIn Management Built Around{' '}
            <span className="italic text-frame-accent">Your Business Goals.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            LinkedIn should have a clear role in your broader business strategy. Framecipher develops your LinkedIn strategy around commercial objectives instead of treating every business like an automated corporate publishing account.
          </p>
        </div>

        {/* 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: 12 Objectives Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span>Depending on your business, your LinkedIn presence may need to:</span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {objectives.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-[#121214] p-4 transition-colors hover:border-purple-500/40 hover:bg-[#15121c]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-frame-accent mt-0.5">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-snug text-zinc-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-purple-500/30 bg-[#15121c] p-6 text-xs sm:text-sm leading-relaxed text-purple-100">
              <p>
                We can coordinate company page content with executive profiles, thought leadership, employee participation, community engagement, and performance insights so each part supports the broader LinkedIn strategy.
              </p>
            </div>
          </div>

          {/* Right Column: Free Audit Spotlight Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/[0.12] bg-[#121214] p-7 md:p-8 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Presence Evaluation · </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-frame-accent">
                  <Target className="h-4 w-4" />
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                See What Your LinkedIn Presence Is Communicating
              </h3>

              <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                A company page posting quarterly and a founder who hasn&apos;t updated their profile since changing jobs are both quietly telling LinkedIn the same thing. We review the pages, profiles, content, and audience response behind your presence.
              </p>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 font-mono text-xs text-zinc-300 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-frame-accent" />
                  <span>Company Page Positioning &amp; Completeness</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-frame-accent" />
                  <span>Executive Profiles &amp; Thought Leadership Gap</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-frame-accent" />
                  <span>Content Format Mix &amp; Audience Engagement</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row gap-3">
              <PosterButton
                href="/contact"
                variant="primary"
                size="md"
                className="w-full text-center"
              >
                Get Your Free LinkedIn Presence Audit
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
