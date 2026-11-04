'use client'

import React from 'react'
import { Check, Sparkles, Compass, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const goals = [
  'Building brand awareness',
  'Educating potential customers',
  'Demonstrating expertise',
  'Building trust',
  'Promoting products or services',
  'Supporting product launches',
  'Supporting seasonal campaigns',
  'Generating website traffic',
  'Encouraging enquiries or purchases',
  'Building audience relationships',
  'Supporting customer education',
  'Creating reusable content assets',
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Commercial Alignment · Strategic Foundation
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Content Planning Built Around{' '}
            <span className="italic text-frame-accent">Your Business Goals.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            A content calendar should do more than fill dates. Before deciding what gets published on Monday or Friday, we identify what your content needs to accomplish for the business.
          </p>

          <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
            <AutoLinks currentPath="/services/social-media-management/content-calendar-strategy" allowed={["/services/content-creation", "/services/content-writing/content-strategy"]}>
              This gives every planned content piece a purpose within the wider strategy, connecting audience interest with commercial outcomes.
            </AutoLinks>
          </p>
        </div>

        {/* 2-Column Strategic Grid */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: 12 Supported Business Goals */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                Depending on your goals, your strategy can focus on:
              </span>
              <span className="font-mono text-[11px] text-zinc-500">12 Core Levers</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {goals.map((goal, idx) => (
                <div
                  key={goal}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-[#121214] p-4 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-frame-accent mt-0.5">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-medium leading-snug text-white">
                      {goal}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 mt-1">
                      Objective {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Strategic Shift & Alignment Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  The Fundamental Shift
                </span>
                <Compass className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                From Reactive Posting to Strategic Publishing
              </h3>

              <div className="rounded-xl border border-purple-500/30 bg-[#15121C] p-5 space-y-3">
                <div className="text-xs font-mono uppercase text-zinc-400">
                  Old Reactive Trap:
                </div>
                <p className="text-xs text-zinc-300 italic">
                  &ldquo;What should we post today?&rdquo;
                </p>
                <div className="text-xs font-mono uppercase text-frame-accent pt-2 border-t border-white/[0.06]">
                  Strategic System Answer:
                </div>
                <p className="text-xs sm:text-sm text-white font-medium">
                  &ldquo;What should we communicate next, where should it appear, and what should it help achieve for the business?&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                The strategy determines what your content needs to communicate. The calendar turns those decisions into an actionable, stress-free publishing plan.
              </p>
            </div>

            <div className="border-t border-white/[0.08] pt-6 space-y-4">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>One coordinated view across every active channel.</span>
              </div>

              <PosterButton
                href="/contact"
                variant="primary"
                size="md"
                className="w-full text-center"
              >
                Discuss Your Content Goals
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
