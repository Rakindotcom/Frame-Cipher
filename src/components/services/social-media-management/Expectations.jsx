'use client'

import React from 'react'
import PosterButton from '../../home/PosterButton'
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react'

const milestones = [
  {
    phase: '01',
    label: 'Initial Social Audit',
    timing: 'Within a few business days',
    detail: 'The initial social audit is typically completed within a few business days.',
  },
  {
    phase: '02',
    label: 'Strategy & First Monthly Calendar',
    timing: '1 to 2 weeks',
    detail: 'Your initial content strategy and first monthly calendar are usually prepared within one to two weeks after the engagement begins, depending on the scope and approval process.',
  },
  {
    phase: '03',
    label: 'Publishing & Community Management',
    timing: 'Once approved',
    detail: 'Once the strategy and content are approved, regular publishing and community management begin.',
  },
  {
    phase: '04',
    label: 'Meaningful Outcomes',
    timing: 'Cumulative over several months',
    detail: 'Social media growth is cumulative. Early performance signals may appear within the first few weeks, while meaningful audience and business outcomes generally require consistent management over several months.',
  },
]

const includedDeliverables = [
  'A clear social media strategy',
  'Platform-specific content planning',
  'A documented content calendar',
  'Original social content based on your plan',
  'Publishing and scheduling',
  'Community and inbox management',
  'Profile optimization',
  'Performance reporting',
  'Ongoing strategy adjustments',
  'Client review and approval before publishing',
]

export default function Expectations() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl space-y-20">
        {/* SUB-SECTION 1: Timeline & What to Expect */}
        <div>
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
                 TIMELINE &amp; WHAT TO EXPECT 
              </p>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Timeline &amp; What to{' '}
              <span className="italic text-[#A855F7]">Expect.</span>
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              The initial social audit is typically completed within a few business days. Your initial content strategy and first monthly calendar are usually prepared within one to two weeks after the engagement begins, depending on the scope and approval process. Once the strategy and content are approved, regular publishing and community management begin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {milestones.map((m) => (
              <div
                key={m.phase}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="font-mono text-xs uppercase text-[#A855F7]">
                    Stage {m.phase}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase">
                    Timeline
                  </span>
                </div>
                <h3 className="font-heading text-lg font-medium text-white">
                  {m.label}
                </h3>
                <div className="rounded border border-white/[0.06] bg-[#18181B] px-2.5 py-1 font-mono text-[11px] text-[#A855F7]">
                  {m.timing}
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                Timeline Variables
              </span>
              <p className="text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                Social media growth is cumulative. Early performance signals may appear within the first few weeks, while meaningful audience and business outcomes generally require consistent management over several months.
              </p>
              <p className="text-xs sm:text-sm font-normal text-zinc-400 leading-relaxed">
                The timeline varies by platform, industry, audience, starting position, content quality, posting frequency, and business goals.
              </p>
            </div>
            <PosterButton href="/contact" variant="accent" className="shrink-0">
              Start Your Social Media Management
            </PosterButton>
          </div>
        </div>

        {/* SUB-SECTION 2: What You Can Expect From Our Service */}
        <div className="border-t border-white/[0.08] pt-16">
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
                 SERVICE DELIVERABLES 
              </p>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              What You Can Expect From{' '}
              <span className="italic text-[#A855F7]">Our Service.</span>
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              You can expect a structured social media management process rather than a simple monthly content drop. That includes:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* 10 Checklist Items (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {includedDeliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-[#121214] p-4"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#A855F7] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-white leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Commitment Card (5 cols) */}
            <div className="lg:col-span-5 rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#A855F7]">
                <ShieldCheck className="h-4 w-4" />
                <span>Sustainable Social Management</span>
              </div>
              <h3 className="font-heading text-xl font-medium text-white">
                Sustainable Management, Not Vanity Metrics
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                Our goal is to keep your social presence active, useful, consistent, and aligned with your business.
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                We focus on sustainable management rather than chasing vanity metrics or promising viral results.
              </p>
              <div className="pt-2">
                <PosterButton href="/contact" variant="outline" className="w-full justify-center">
                  Get Your Free Social Audit
                </PosterButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
