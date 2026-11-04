'use client'

import React from 'react'
import { CheckCircle2, ArrowRight, ShieldCheck, Search, FileText, CheckCircle } from 'lucide-react'
import PosterButton from '../../home/PosterButton'

const auditInputs = [
  {
    title: 'Ad Account & Platform Access',
    body: 'Relevant access to the advertising platforms, analytics, and CRM you currently use, where available.',
  },
  {
    title: 'Business & Offer Details',
    body: 'Your core products or services, target customers, target markets, and the commercial objectives paid media needs to support.',
  },
  {
    title: 'Current Tracking & Assets',
    body: 'Existing conversion setup, creatives, landing pages, and any previous reports or campaign notes.',
  },
  {
    title: 'Commercial Goals',
    body: 'What paid advertising should produce, whether that means leads, sales, bookings, sign-ups, revenue, or customer acquisition.',
  },
]

const auditFindings = [
  'Where your budget is going.',
  'What your campaigns are actually producing.',
  'What should be fixed first.',
  'Which opportunities deserve further investment.',
]

const auditSteps = [
  {
    step: '01',
    title: 'Submit Your Account & Goals',
    body: 'Send us the relevant access and a brief description of what paid advertising should produce for your business.',
  },
  {
    step: '02',
    title: 'Receive the Account Review',
    body: 'We review campaign structure, conversion setup, targeting, creative, landing-page journey, and budget allocation.',
  },
  {
    step: '03',
    title: 'Get Your Findings',
    body: 'You will see where budget is going, what campaigns are producing, what should be fixed first, and which opportunities deserve investment.',
  },
  {
    step: '04',
    title: 'Review the Proposal',
    body: 'You receive a custom quotation and can review the recommended scope and budget before making a commitment.',
  },
  {
    step: '05',
    title: 'Approve the Plan',
    body: 'No campaigns or budget changes begin without your approval.',
  },
  {
    step: '06',
    title: 'Execution Begins',
    body: 'Our in-house team manages, tests, and optimizes the agreed campaign plan.',
  },
]

export default function GettingStarted() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Start With a Free{' '}
            <span className="italic text-frame-accent">Ad Account Audit.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Your current ad account may be generating useful business results, wasting budget, or doing a little of both. The first step is to find out which is actually happening.
            Framecipher can review your current campaigns, conversion setup, targeting, creative, landing-page journey, and budget allocation, then identify the main opportunities and problems.
          </p>
        </div>

        {/* 2-Column Findings & Requirements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: What You Will See (7 cols) */}
          <div className="lg:col-span-7 rounded-xl border border-white/[0.08] bg-[#121214] p-8 md:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold">
                AUDIT DELIVERABLE
              </span>
              <Search className="h-4 w-4 text-frame-accent" />
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
              You will clearly see:
            </h3>

            <ul className="space-y-3">
              {auditFindings.map((finding) => (
                <li key={finding} className="flex items-start gap-3 text-sm sm:text-base text-zinc-200">
                  <CheckCircle2 className="h-5 w-5 text-frame-accent shrink-0 mt-0.5" />
                  <span>{finding}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/[0.06]">
              <PosterButton href="/contact" variant="accent">
                Get Your Free Ad Account Audit &rarr;
              </PosterButton>
            </div>
          </div>

          {/* Right Column: What We Need From You (5 cols) */}
          <div className="lg:col-span-5 rounded-xl border border-white/[0.08] bg-[#121214] p-8 space-y-6">
            <div className="border-b border-white/[0.06] pb-4">
              <h3 className="mt-1 font-heading text-xl font-medium tracking-tight text-white">
                What We Need
              </h3>
            </div>

            <div className="space-y-4">
              {auditInputs.map((input) => (
                <div key={input.title} className="space-y-1">
                  <div className="font-mono text-xs text-frame-accent font-semibold flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    {input.title}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pl-3.5">
                    {input.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6-Step Audit Workflow Flow */}
        <div className="space-y-6">
          <div className="border-b border-white/[0.08] pb-4">
            <h3 className="font-heading text-2xl font-medium tracking-tight text-white">
              6-Step Audit to Execution Path
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-3 transition-colors hover:border-white/[0.14]"
              >
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                  <span className="font-mono text-lg font-bold text-white/30">
                    {step.step}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                </div>
                <h4 className="font-heading text-base font-medium tracking-tight text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
