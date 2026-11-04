'use client'

import React from 'react'
import { Check, ShieldCheck, Sparkles, ArrowRight, ShieldAlert } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const included = [
  'Instagram strategy & research',
  'Content creation (graphics & video)',
  'Reels short-form production & editing',
  'Interactive Stories & Highlights',
  'Profile optimization & bio SEO',
  'Community management & DM responses',
  'Publishing & peak-time scheduling',
  'Bi-weekly performance reporting',
]

export default function CTA() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Canonical Asymmetric CTA Stage */}
        <div className="relative overflow-hidden rounded-xl border border-white/[0.12] bg-[#121214] p-8 sm:p-12 md:p-16 shadow-2xl shadow-purple-950/20">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-pink-600/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            {/* Left Column: Direct Value Offer */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Account Audit &amp; Strategy Discovery
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-white">
                Ready to Build a Stronger{' '}
                <span className="italic text-frame-accent">Instagram Presence?</span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-300 max-w-2xl">
                Your Instagram account should do more than look active. It should have a clear role in how people discover, understand, trust, and contact your business.
              </p>

              <div className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400 max-w-2xl">
                <AutoLinks currentPath="/services/social-media-management/instagram" allowed={["/services/social-media-management/community-management"]}>
                  Framecipher brings Instagram strategy, content creation, Reels, Stories, profile optimization, community management, DMs, publishing, and reporting together under one in-house team. Whether you are building an Instagram presence in Bangladesh or targeting customers internationally, we can build the management scope around your audience, market, content requirements, and business goals.
                </AutoLinks>
              </div>

              {/* Inclusions Checklist */}
              <div className="pt-2">
                <p className="font-mono text-xs uppercase tracking-wider text-white mb-3">
                  Full-Cycle Managed Scope Includes:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-frame-accent">
                        <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Symmetrical CTA Button Row (No Double Arrows) */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <PosterButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto text-center"
                >
                  Get Your Free Instagram Account Audit
                </PosterButton>

                <PosterButton
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto text-center"
                >
                  Request a Custom Quote
                </PosterButton>
              </div>
            </div>

            {/* Right Column: Platform Context & Secondary Action */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#16141F] p-7 md:p-8 space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Exploration Hub · </span>
                <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                  Not Ready to Talk Yet?
                </h3>
                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  Read how Framecipher builds cohesive growth systems across multi-channel social media management before you decide.
                </p>
              </div>

              <div className="pt-2 border-t border-white/[0.08]">
                <PosterButton
                  href="/services/social-media-management"
                  variant="secondary"
                  size="md"
                  className="w-full text-center"
                >
                  Explore Social Media Systems
                </PosterButton>
              </div>
            </div>
          </div>
        </div>

        {/* Realistic Expectations Ledger Card */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-400 mt-1">
              <ShieldAlert className="h-4 w-4" />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading text-base sm:text-lg font-medium tracking-tight text-white">
                A Managed Account, Not a Shortcut
              </h4>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                We do not promise viral content, artificial follower counts, arbitrary view counts, or algorithmic hacks. What we commit to is a structured strategy, professional creative execution, human-reviewed publishing, and transparent reporting that explains what your account data actually shows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
