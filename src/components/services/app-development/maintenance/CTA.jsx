'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'
import { CheckCircle2 } from 'lucide-react'

const discoveryChecklist = [
  'Tell us about your app architecture & current platforms.',
  'Share the issues, crashes, or maintenance requirements.',
  'Get an application assessment and suitable support plan.',
]

export default function CTA() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#09090B] px-4 pt-2 pb-16 sm:px-6 sm:pt-4 sm:pb-20 md:px-8 md:pt-4 md:pb-24">
      <div className="mx-auto max-w-7xl">
        {/* Canonical Asymmetrical HomeCTA Container */}
        <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          {/* Subtle Ambient Radial Highlight */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
                Start Your App Maintenance &amp; Support Plan.
              </h2>

              <div className="space-y-3 text-base sm:text-lg leading-relaxed text-zinc-300 max-w-2xl">
                <p>
                  Your application does not stop needing technical attention after launch.
                </p>
                <p className="text-sm sm:text-base text-zinc-400">
                  If your app has recurring bugs, outdated dependencies, compatibility issues, performance problems, security concerns, or third-party integration failures, we can assess the current situation and define the right maintenance scope.
                </p>
              </div>

              {/* 3 Step Action Checklist */}
              <div className="space-y-2.5 pt-2">
                {discoveryChecklist.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-400" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              {/* Symmetrical 52px Button Pair */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <PosterButton href="/contact" variant="primary" className="h-[52px]">
                  Get Free Consultation
                </PosterButton>
                <PosterButton href="#pricing" variant="outline" className="h-[52px]">
                  View Maintenance Plans
                </PosterButton>
              </div>
            </div>

            {/* Right Meta Card (4 cols) */}
            <div className="lg:col-span-4 rounded-xl border border-white/10 bg-[#121214] p-6 sm:p-8 space-y-4 font-mono text-xs text-zinc-400 relative overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span>ENGAGEMENT</span>
                <span className="text-white">MONTHLY RETAINER SLA</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span>STARTING AT</span>
                <span className="text-emerald-400 font-semibold">৳15,000 / MO</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span>ASSESSMENT</span>
                <span className="text-white">3-5 BUSINESS DAYS</span>
              </div>
              <div className="flex items-center justify-between">
                <span>ONBOARDING</span>
                <span className="text-purple-400">EXISTING CODEBASE AUDIT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
