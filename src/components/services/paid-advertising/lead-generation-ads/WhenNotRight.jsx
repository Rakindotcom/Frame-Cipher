'use client'

import React from 'react'
import { AlertTriangle, XCircle, ArrowRight } from 'lucide-react'

const warnings = [
  'The core commercial offer or value proposition is vague, untested, or uncompetitive.',
  'Your ideal customer profile (ICP) has not been clearly defined by industry, company size, or budget.',
  'Your internal sales team has no defined qualification criteria or dedicated follow-up schedule.',
  'Lead inquiries will sit in an unmonitored inbox for 24+ hours before anyone attempts contact.',
  'Your CRM cannot reliably intake leads, trigger notifications, or track pipeline stages.',
  'Your website landing page is slow, confusing, or fails mobile responsiveness benchmarks.',
  'Active search demand for your category is virtually nonexistent, requiring top-of-funnel demand generation first.',
  'The sales cycle spans 12+ months while available initial ad budgets cannot sustain extended runway.',
]

export default function WhenNotRight() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-red-500/20 bg-red-950/[0.08] p-8 sm:p-12 lg:p-14">
          <div className="max-w-3xl mb-8">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              When Lead Generation Ads{' '}
              <span className="italic text-red-400">May Not Be the Right Move.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              Paid lead generation advertising multiplies what is already functioning. It cannot compensate for an unproven offer, a sluggish sales follow-up process, or a disconnected CRM. Scaling ad spend is premature when:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {warnings.map((w) => (
              <div
                key={w}
                className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#121214] p-4 text-sm text-zinc-300 font-normal leading-relaxed"
              >
                <XCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
                <span>{w}</span>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-black/40 p-5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p>
              In these situations, refining your offer, training your sales follow-up workflows, and fixing website landing pages should take priority before increasing paid media investment.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-frame-accent hover:underline shrink-0"
            >
              <span>Get an Honest Funnel Audit</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
