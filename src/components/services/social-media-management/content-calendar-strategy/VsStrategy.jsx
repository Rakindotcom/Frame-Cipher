'use client'

import React from 'react'
import { Compass, Calendar, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const strategyDecides = [
  'Who you want to reach',
  'What your audience needs',
  'What your brand should communicate',
  'Which topics support your positioning',
  'Which content pillars matter',
  'Which platforms have a role',
  'Which business goals content should support',
  'What actions audiences should take',
  'Which campaigns deserve priority',
]

const calendarOrganizes = [
  'Topics & concepts',
  'Publishing dates & schedules',
  'Distribution platforms',
  'Creative formats',
  'Campaign associations',
  'Content pillars balance',
  'Primary CTAs',
  'Required visual & copy assets',
  'Production deadlines',
  'Approval stages & sign-offs',
  'Publishing sequence & timing',
]

export default function VsStrategy() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Scope Clarity · Direction vs Execution
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Content Calendar vs.{' '}
            <span className="italic text-frame-accent">Content Strategy.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Content strategy and content calendars are closely connected, but they serve different purposes. Keeping the distinction clear helps prevent confusion around scope, responsibilities, and expectations.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Strategy Card */}
          <article className="flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/50 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Strategic Direction
                </span>
                <Compass className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                What Content Strategy Decides
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                Content strategy establishes the direction behind your content. It helps determine:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300 pt-1">
                {strategyDecides.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-purple-500/20 bg-purple-500/[0.05] p-4 text-xs font-medium text-white">
              <span className="font-mono text-[10px] uppercase text-frame-accent block mb-1">
                Core Question Answered:
              </span>
              &ldquo;What should we communicate, to whom, and why?&rdquo;
            </div>
          </article>

          {/* Calendar Card */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-white/[0.14] hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Operational Execution
                </span>
                <Calendar className="h-4 w-4 text-zinc-400" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                What the Content Calendar Organizes
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                The content calendar turns those strategic decisions into an actionable execution plan. It organizes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300 pt-1">
                {calendarOrganizes.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs font-medium text-white">
              <span className="font-mono text-[10px] uppercase text-zinc-400 block mb-1">
                Core Question Answered:
              </span>
              &ldquo;What are we publishing, where, and when?&rdquo;
            </div>
          </article>
        </div>

        {/* How They Work Together Synergy Card */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
              How They Work Together
            </span>
            <Sparkles className="h-4 w-4 text-frame-accent" />
          </div>

          <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
            Strategy Provides Direction · The Calendar Provides Execution
          </h3>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-4xl">
            A useful content system connects both. That means your team is not simply scheduling posts in a rush. You are working from a defined content direction that can be measured, reviewed, adjusted, and improved over time.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <PosterButton
              href="/contact"
              variant="primary"
              size="md"
            >
              Discuss Your Content Strategy
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
