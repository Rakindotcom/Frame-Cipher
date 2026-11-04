'use client'

import React from 'react'
import { FileText, KeyRound, Server, Target, ArrowRight } from 'lucide-react'

const startRequirements = [
  {
    num: '01',
    icon: FileText,
    title: 'Website & Business Information',
    body: 'Your website, platform, target market, and what you want technical SEO to help you achieve.',
  },
  {
    num: '02',
    icon: KeyRound,
    title: 'Search & Hosting Access',
    body: 'Google Search Console, analytics, hosting, and CMS access where available for accurate diagnosis.',
  },
  {
    num: '03',
    icon: Server,
    title: 'Site Size & Scope Details',
    body: 'Number of URLs, CMS or framework, and any recent design, migration, or development work.',
  },
  {
    num: '04',
    icon: Target,
    title: 'Business Goals',
    body: 'Tell us which markets matter, whether that is Bangladesh, international markets, or both.',
  },
]

const auditSteps = [
  {
    num: '01',
    title: 'Submit Your Website',
    body: 'Send us your website, target market, and a brief description of what you want technical SEO to achieve.',
  },
  {
    num: '02',
    title: 'Share Required Access',
    body: 'Search Console, hosting, analytics, and CMS access help us diagnose the actual technical condition of your website.',
  },
  {
    num: '03',
    title: 'Receive a Prioritized Audit',
    body: 'We identify the technical issues that matter most and explain what should be fixed first and why.',
  },
  {
    num: '04',
    title: 'Review the Fix Plan',
    body: 'You receive prioritized recommendations and a transparent proposal for the approved implementation scope.',
  },
  {
    num: '05',
    title: 'Implementation & Validation',
    body: 'Approved fixes are implemented and verified against the identified problems using available evidence.',
  },
  {
    num: '06',
    title: 'Monitor & Maintain',
    body: 'We track technical health so regressions, new issues, and additional opportunities are caught early.',
  },
]

export default function GettingStarted() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* Onboarding Checklist */}
      <section className="relative isolate px-4 py-20 sm:px-6 md:px-8 md:py-28 border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1 text-xs text-zinc-300 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Onboarding Checklist // Preparation
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              What You Need to Start a{' '}
              <span className="italic text-frame-accent">Technical SEO Audit</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              A technical audit starts with the right information and access.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {startRequirements.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.num}
                  className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518]"
                >
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-frame-accent/10 border border-frame-accent/20 text-frame-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-xs text-zinc-500">REQ_{item.num}</span>
                  </div>
                  <h3 className="mt-4 font-heading text-base font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                    {item.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Audit Workflow Steps */}
      <section className="relative isolate px-4 py-20 sm:px-6 md:px-8 md:py-28 border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1 text-xs text-zinc-300 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Audit Sequence // Engagement Pathway
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              After You Request Your{' '}
              <span className="italic text-frame-accent">Technical SEO Audit</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              Getting started is straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditSteps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518]"
              >
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xl font-bold text-zinc-500">
                    {step.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    Step {step.num}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 font-normal leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
