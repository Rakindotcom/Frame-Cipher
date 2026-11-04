import React from 'react'
import { ShieldCheck, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Diagnosis First
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Diagnose the Cause Before You Try to Recover
            </h2>
            <p className="text-base sm:text-lg font-medium text-zinc-300 leading-relaxed">
              The wrong recovery strategy can waste time and make a difficult SEO situation harder to understand.
            </p>
            <div className="pt-2">
              <PosterButton href="/contact">
                Get Your Site Diagnosed &rarr;
              </PosterButton>
            </div>
          </div>

          {/* Right Column: Detailed Narrative Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-4 shadow-sm">
              <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                We first determine whether your site has a manual action, a Google update-related ranking decline, a technical or migration problem, a security issue, or another cause entirely. Google&apos;s Search Console provides separate reports for Manual Actions and Security Issues, while broader traffic declines can have many possible causes.
              </p>
            </div>

            <div className="rounded-2xl border-l-2 border-frame-accent border-r border-t border-b border-white/[0.08] bg-[#18181B] p-6 sm:p-8 flex items-start gap-4">
              <ShieldCheck className="h-5 w-5 text-frame-accent shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base font-medium leading-relaxed text-white">
                Once the cause is clear, we focus on the specific issues that need correction instead of applying a generic &ldquo;penalty recovery&rdquo; checklist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
