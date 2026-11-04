'use client'

import React from 'react'

const steps = [
  {
    title: 'Initial Website & Eligibility Review',
    body: 'We start by understanding your site, its publishing model, its audience, its current AdSense status, and the reason you are seeking approval.',
    closing: 'Then we review the eligibility factors and technical access needed for the application.',
  },
  {
    title: 'Content & Policy Assessment',
    body: 'We examine your important pages for originality, usefulness, content depth, prohibited or restricted topics, and other policy risks.',
    closing: 'We also review the broader publishing experience rather than judging one isolated article.',
  },
  {
    title: 'Technical & Structural Fixes',
    body: 'We address the site-level issues that can make the website difficult to navigate, review, or maintain.',
    closing:
      'This may include broken links, redirects, accessibility problems, structural issues, page errors, and unfinished sections.',
  },
  {
    title: 'Content and Page Improvements',
    body: 'Where necessary, we improve weak pages, strengthen important site sections, create or refine trust and transparency pages, and improve content organization.',
    closing:
      'The goal is not to inflate your page count. The goal is to make the existing site more useful and complete.',
  },
  {
    title: 'Pre-Submission Review',
    body: 'After the agreed fixes are completed, we conduct a final review against the issues identified during the initial assessment.',
    closing:
      'We only recommend submission when the agreed readiness work has been completed to a reasonable standard.',
  },
  {
    title: 'Post-Decision Support',
    body: 'Once Google makes its decision, we can help you interpret the outcome.',
    closing:
      'If the site is approved, we can support compliant setup and ad implementation. If it is not approved, we use the new information to determine what should be reviewed or corrected before the next submission.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Workflow Protocol // Execution Blueprint</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            How We Prepare Your Website for{' '}
            <span className="italic text-frame-accent">AdSense</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Each engagement follows the same path: understand the site, assess its readiness, fix what
            needs fixing, and review it again before you submit.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 hover:border-white/[0.14] hover:bg-[#18181B] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
                  Phase 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {step.body}
                </p>
              </div>

              {step.closing && (
                <div className="mt-6 border-l-2 border-frame-accent bg-[#09090B] p-3 text-xs leading-relaxed text-zinc-400 rounded-r-md">
                  {step.closing}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 text-center sm:text-left">
          <p className="text-sm sm:text-base font-medium leading-relaxed text-white">
            A prepared website that presents useful content, clear structure, and compliant
            implementation before Google reviews it.
          </p>
        </div>
      </div>
    </section>
  )
}
