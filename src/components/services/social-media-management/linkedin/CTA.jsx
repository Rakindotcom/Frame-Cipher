'use client'

import React from 'react'
import { Check, ShieldCheck, Sparkles, Building2, UserCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const included = [
  'Company Page management',
  'Executive profiles & ghostwriting',
  'Thought leadership & frameworks',
  'Visual carousels & PDF documents',
  'Profile & page SEO optimization',
  'Community engagement & escalation',
  'Employee advocacy coordination',
  'Monthly executive reporting',
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
                  B2B Presence Audit &amp; Strategy Discovery
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-white">
                Ready to Build a Stronger{' '}
                <span className="italic text-frame-accent">LinkedIn Presence?</span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-300 max-w-2xl">
                Your LinkedIn presence should do more than keep your Company Page active. It should help people understand your business, recognize your expertise, trust your leadership, and see why your company is worth a conversation.
              </p>

              <div className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400 max-w-2xl">
                <AutoLinks currentPath="/services/social-media-management/linkedin" allowed={["/services/content-creation"]}>
                  Framecipher brings LinkedIn strategy, Company Page management, executive profiles, thought leadership, content creation, profile optimization, engagement, employee advocacy, publishing, and reporting together under one in-house team. Whether you are building a stronger LinkedIn presence in Bangladesh or targeting professional audiences internationally, we can build the management scope around your business, audience, industry, executives, and goals.
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
                  Get Your Free LinkedIn Presence Audit
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
                  A Managed Presence, Not an Overnight Shortcut
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  LinkedIn is a relationship, credibility, and authority platform. It works best when consistent content, authentic executive positioning, professional company updates, and genuine engagement reinforce each other over time.
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Framecipher manages that process systematically so your business stays visible, credible, and top-of-mind with the people who matter most to your commercial growth.
                </p>
              </div>

              <div className="space-y-3 border-t border-white/[0.08] pt-5">
                <div className="flex items-start gap-3">
                  <Building2 className="h-4 w-4 text-frame-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-mono uppercase text-white">Company Page Authority</div>
                    <div className="text-[11px] text-zinc-400">Institutional validation &amp; market positioning</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <UserCheck className="h-4 w-4 text-frame-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-mono uppercase text-white">Executive Thought Leadership</div>
                    <div className="text-[11px] text-zinc-400">Authentic human perspective &amp; industry gravity</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-mono uppercase text-white">100% Client-Owned Accounts</div>
                    <div className="text-[11px] text-zinc-400">All company &amp; executive assets remain yours</div>
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
