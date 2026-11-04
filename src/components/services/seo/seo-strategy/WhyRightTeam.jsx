'use client'

import React from 'react'
import { Sparkles, CheckCircle2 } from 'lucide-react'

const chips = [
  'Custom Strategy, Not a Template',
  'Works With Your Existing Team',
  "Honest About What's Realistic",
]

export default function WhyRightTeam() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">Our Position // Pragmatic Advisory</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Why We&apos;re the{' '}
            <span className="italic text-frame-accent">Right SEO Strategy Team</span>
          </h2>
          <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            <p>
              A generic SEO playbook applied to a specific business usually wastes months chasing priorities that don&apos;t actually fit that business&apos;s situation. We build strategy around your actual constraints, internal resources, technical limitations, and realistic timelines, instead of handing over a template that assumes you have a dedicated content team and an unlimited dev backlog.
            </p>
            <p className="text-zinc-400">
              Consulting only works when the advice is something you can genuinely act on with what you actually have.
            </p>
          </div>
        </div>

        {/* Featured Strategic Quote Banner */}
        <div className="rounded-xl border border-frame-accent/40 bg-[#14121a] p-7 md:p-10 shadow-lg">
          <div className="flex items-start gap-4">
            <Sparkles className="h-6 w-6 text-frame-accent shrink-0 mt-1" />
            <div>
              <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl font-medium uppercase tracking-tight text-white leading-snug">
                &ldquo;The best SEO strategy is the one your team can actually execute, not the most theoretically complete one. A roadmap that assumes resources you don&apos;t have isn&apos;t a strategy, it&apos;s a wish list.&rdquo;
              </blockquote>
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#18181B] px-3 py-1 font-mono text-xs text-zinc-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent" />
                    <span>{chip}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
