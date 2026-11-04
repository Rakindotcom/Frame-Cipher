'use client'

import React from 'react'
import { FileText, KeyRound, Layout, Target } from 'lucide-react'

const startRequirements = [
  {
    num: '01',
    icon: FileText,
    title: 'Website & Target Pages',
    body: 'Your website, the pages you most want to improve, and what you want each page to achieve.',
  },
  {
    num: '02',
    icon: KeyRound,
    title: 'Search & Analytics Access',
    body: 'Search Console and analytics access where available, so important pages are reviewed against how they actually perform.',
  },
  {
    num: '03',
    icon: Layout,
    title: 'Content & Business Context',
    body: 'Current page content, target keywords if known, and a sense of the audience and market you want to reach.',
  },
  {
    num: '04',
    icon: Target,
    title: 'Business Goals',
    body: 'Tell us which markets matter, whether that is Bangladesh, international markets, or both.',
  },
]

const onPageSteps = [
  {
    num: '01',
    title: 'Send Us Your Pages',
    body: 'Share the pages you want optimized and a brief description of what they should achieve.',
  },
  {
    num: '02',
    title: 'Share Search & Analytics Access',
    body: 'Search Console and analytics access help us review pages against real performance data.',
  },
  {
    num: '03',
    title: 'Receive an On-Page Review',
    body: 'We compare each page against the intent behind its target queries and identify the changes that matter most.',
  },
  {
    num: '04',
    title: 'Review the Optimization Plan',
    body: 'You receive a clear plan of content, structure, metadata, and internal-link changes before any work begins.',
  },
  {
    num: '05',
    title: 'Implementation & Approval',
    body: 'Approved changes are applied page by page, with your review at each stage before anything goes live.',
  },
  {
    num: '06',
    title: 'Monitor & Refine',
    body: 'We track performance after implementation and refine pages based on the evidence rather than a fixed checklist.',
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
              What You Need to Start{' '}
              <span className="italic text-frame-accent">On-Page SEO</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              On-page work starts with the right pages, access, and context.
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

      {/* Workflow Steps */}
      <section className="relative isolate px-4 py-20 sm:px-6 md:px-8 md:py-28 border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1 text-xs text-zinc-300 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Engagement Sequence // Project Flow
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              After You Request Your{' '}
              <span className="italic text-frame-accent">On-Page Review</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              Getting started is straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onPageSteps.map((step) => (
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
