'use client'

import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const discoveryQuestions = [
  'What product you want to build',
  'Who the initial users are',
  'What problem the product solves',
  'What you need to validate',
  'Which features you consider essential',
  'Whether you need web, mobile, or both',
  'Which integrations or payment systems are required',
  'Your expected timeline',
]

export default function CTA() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 pt-2 pb-16 text-white sm:px-6 sm:pt-4 sm:pb-20 md:px-8 md:pt-4 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 lg:p-12 transition-colors duration-200 hover:border-white/[0.14] shadow-2xl">
          {/* Ambient Glow */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-purple-600/15 via-frame-accent/10 to-transparent blur-3xl" />

{/* Heading beside oversized directional arrow */}
          <div className="mt-5 flex items-baseline justify-between gap-6 border-b border-white/[0.08] pb-8">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.94] tracking-[-0.03em] text-white">
              Start Your MVP{' '}
              <span className="italic text-frame-accent">Development Project.</span>
            </h2>
            <span
              aria-hidden="true"
              className="hidden lg:block select-none font-mono text-7xl xl:text-8xl font-light text-white/20 shrink-0 transition-transform duration-300 group-hover:translate-x-3"
            >
              &rarr;
            </span>
          </div>

          {/* Bottom Split */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
                If you have a product idea but are not ready to commit to a full-scale build, start with the question that matters most: what do you need to learn? We can review your idea, target users, core workflow, required platform, integrations, and validation goals to determine what the MVP should actually contain.
              </p>

              <div className="rounded-2xl border border-white/[0.06] bg-black/40 p-5 mt-4">
                <span className="text-xs font-mono uppercase tracking-wider text-frame-accent block mb-3">
                  Tell Us About Your Concept:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
                  {discoveryQuestions.map((q, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 font-mono pt-1">
                We will review the requirements and help define an appropriate MVP development approach.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3.5 pt-2">
              <PosterButton href="/contact" variant="accent" className="w-full justify-center">
                Get Free Consultation
              </PosterButton>
              <PosterButton href="/contact" variant="outline" className="w-full justify-center">
                Request MVP Project Estimate &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
