'use client'

import React from 'react'
import { Eye, Layers, TrendingUp, RefreshCw, CheckCircle2 } from 'lucide-react'

const testingPillars = [
  {
    icon: Eye,
    title: 'Hook & Opening Frame Testing',
    desc: 'The first 2–3 seconds dictate performance. We test problem-led hooks, product-first openers, curiosity questions, and bold demonstrations to maximize 6-second video view rates (VVR).',
    checks: ['Problem-first vs. Curiosity openers', 'Visual pattern interrupts in frame 01', 'Direct offer announcements', 'Side-by-side demonstration hooks'],
  },
  {
    icon: Layers,
    title: 'Structured Variable Matrices',
    desc: 'We do not test randomly. One core message is broken into structured variations across creators, hooks, text overlays, voiceovers, and CTA prompts to isolate what actually converts.',
    checks: ['Alternate creator voices & demographics', 'Pacing and editing tempo shifts', 'On-screen text font and placement variations', 'Direct action vs. curiosity CTAs'],
  },
  {
    icon: TrendingUp,
    title: 'Commercial Trend Evaluation',
    desc: 'Not every TikTok audio trend fits every brand. We filter trends strictly through commercial feasibility, brand safety, and product relevance rather than pursuing empty viral engagement.',
    checks: ['Audience demographic alignment', 'Brand safety and tone consistency', 'Direct commercial intent linkage', 'Longer-term asset sustainability'],
  },
  {
    icon: RefreshCw,
    title: 'Creative Fatigue & Refresh Cycles',
    desc: 'High-performing TikTok ads degrade as frequency climbs. We monitor cost-per-click and conversion velocity daily, injecting fresh creative angles before ad efficiency collapses.',
    checks: ['Frequency curve monitoring', 'Proactive bi-weekly asset rotations', 'Angle pivoting for winning products', 'Winning hook adaptation to new formats'],
  },
]

export default function CreativeTesting() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Creative Testing Is the Core of{' '}
            <span className="italic text-frame-accent">TikTok Advertising.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            TikTok advertising requires a structured testing system, not one “perfect” video. We engineer repeatable experimentation across hooks, scripting, angles, and refresh cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testingPillars.map((tp) => {
            const Icon = tp.icon
            return (
              <div
                key={tp.title}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-heading text-xl font-medium text-white">
                    {tp.title}
                  </h3>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {tp.desc}
                </p>

                <div className="border-t border-white/[0.06] pt-4 space-y-2.5">
                  {tp.checks.map((c, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-300">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
