'use client'

import React from 'react'
import { Check, ShieldCheck, Sparkles, Video, Search } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const included = [
  'Strategy, audience & competitor research',
  'Search-aware content & TikTok SEO',
  'High-velocity vertical video production',
  'Trend monitoring & brand adaptation',
  'Strategic publishing & optimal scheduling',
  'Community engagement & comment moderation',
  'Creator & UGC campaign coordination',
  'Actionable monthly reporting & testing',
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
            className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            {/* Left Column: Direct Value Offer */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  TikTok Presence Audit &amp; Strategy Discovery
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-white">
                Ready to Build a Stronger{' '}
                <span className="italic text-frame-accent">TikTok Presence?</span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-300 max-w-2xl">
                Your TikTok account should do more than fill a content calendar. It should give your business a consistent way to get discovered, communicate its value, engage with the right audience, and learn from real content performance.
              </p>

              <div className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400 max-w-2xl">
                <AutoLinks currentPath="/services/social-media-management/tiktok-management" allowed={["/services/content-creation", "/services/video-production"]}>
                  Framecipher can manage the strategy, content, publishing, community, TikTok SEO, testing, and reporting through one in-house team. Whether you are building a TikTok presence in Bangladesh or targeting international audiences, we can shape the scope around your business, products, market, and goals.
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
                  Get Your Free TikTok Audit
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

            {/* Right Column: Platform Context & Realistic Expectations Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#16141F] p-7 md:p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-frame-accent">
                  <Sparkles className="h-4 w-4 text-frame-accent" />
                  <span className="font-mono text-xs uppercase tracking-wider text-white">
                    Platform Reality · Principles
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium text-white">
                  A Repeatable System, Not a Viral Gamble
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  TikTok rewards consistency, clear audience targeting, search discoverability, and high-retention video hooks. Trying to chase every random trend or relying on a single viral video is not a sustainable business strategy.
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  We build a disciplined, repeatable content system that continuously tests concepts, compounds search traffic, and converts viewers into engaged customers.
                </p>
              </div>

              <div className="space-y-3 border-t border-white/[0.08] pt-5">
                <div className="flex items-start gap-3">
                  <Video className="h-4 w-4 text-frame-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-mono uppercase text-white">High-Retention Hooks</div>
                    <div className="text-[11px] text-zinc-400">Structured pacing, proof &amp; narrative direction</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Search className="h-4 w-4 text-frame-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-mono uppercase text-white">Search-Aware Discoverability</div>
                    <div className="text-[11px] text-zinc-400">Capturing intent across TikTok search queries</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-mono uppercase text-white">100% Client-Owned Accounts</div>
                    <div className="text-[11px] text-zinc-400">All footage, edits &amp; profile assets remain yours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
