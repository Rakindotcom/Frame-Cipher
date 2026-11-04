'use client'

import React from 'react'
import { CheckCircle2, ArrowRight, Target, Users, BarChart3, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const keyElements = [
  'Ideal customer profiles',
  'Buying committees',
  'Target accounts',
  'Professional audience signals',
  'B2B offers and content',
  'Lead qualification',
  'CRM and conversion data',
  'Sales feedback',
  'Pipeline outcomes',
]

const supportedOutcomes = [
  'Qualified B2B leads',
  'Demo requests',
  'Consultation bookings',
  'Enterprise enquiries',
  'Webinar registrations',
  'Content downloads',
  'Website conversions',
  'Account engagement',
  'Sales opportunities',
]

const pillars = [
  'ICP-driven targeting',
  'B2B creative',
  'Qualified-lead measurement',
  'Pipeline-focused optimization',
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            LinkedIn Ads Built for B2B Demand,{' '}
            <span className="italic text-frame-accent">Qualified Leads &amp; Pipeline Growth.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            LinkedIn advertising is particularly useful when your target audience can be defined by professional characteristics such as company, industry, job function, seniority, skills, or other professional attributes.
          </p>
        </div>

        {/* 2-Column Split: Editorial Narrative vs. Campaign Foundation Ledger */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start pb-14 border-b border-white/[0.08]">
          {/* Left Column: Analytical Copy */}
          <div className="space-y-6 text-base sm:text-lg font-normal leading-relaxed text-zinc-300 lg:col-span-7">
            <p>
              But precise targeting alone does not create a strong B2B campaign. The campaign also needs a clear offer, credible messaging, appropriate creative, reliable conversion tracking, and a process for determining whether leads actually fit your sales pipeline.
            </p>
            <p className="text-sm sm:text-base text-zinc-400">
              LinkedIn&rsquo;s current audience system includes AI-powered options such as Audience Expansion, Auto-Targeting, Buyer Groups, and Predictive Audiences. These can help advertisers expand or refine professional audiences while still working from business-specific signals.
            </p>
            <p className="text-sm sm:text-base text-zinc-400">
              That means modern LinkedIn Ads management is not simply about selecting hundreds of job titles. It is about giving the platform useful signals while maintaining a clear understanding of who the business actually wants to reach.
            </p>

            {/* Pillar Badges */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-zinc-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Surface Card */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:col-span-5 space-y-6">
            <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
              We Build Campaigns Around:
            </h3>
            <ul className="space-y-3">
              {keyElements.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b border-white/[0.04] pb-2 text-sm text-zinc-300 group hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="font-mono text-[11px] text-frame-accent font-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{item}</span>
                  </span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-zinc-600 group-hover:text-frame-accent transition-colors" />
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <PosterButton href="/contact" variant="accent" className="w-full">
                Get a Free Consultation &rarr;
              </PosterButton>
            </div>
          </div>
        </div>

        {/* Supported Commercial Outcomes Grid */}
        <div className="pt-12">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
              Depending on the business, the primary goal may be:
            </h3>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
              Objective-First Setup
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3.5">
            {supportedOutcomes.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#121214]/60 p-4 transition-colors hover:border-white/[0.14] hover:bg-[#18181B]"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-black text-frame-accent">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="font-heading text-xs sm:text-sm font-medium tracking-tight text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
