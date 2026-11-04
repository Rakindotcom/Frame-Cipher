'use client'

import React from 'react'

const deliverables = [
  {
    title: 'AdSense Readiness Assessment',
    body: 'A structured review of your current website against relevant AdSense eligibility, content, policy, navigation, technical, and traffic considerations.',
  },
  {
    title: 'Written Findings & Priority Fixes',
    body: 'You receive clear findings that explain: What is wrong → Why it matters → What needs to change → What should be fixed first. This makes the review actionable instead of leaving you with a long list of disconnected issues.',
  },
  {
    title: 'Content and Site Corrections',
    body: 'Where included in your project scope, we fix or improve the content, pages, navigation, structure, and technical elements identified during the assessment.',
  },
  {
    title: 'Policy-Readiness Review',
    body: 'We review the site again after remediation to confirm that the identified policy and readiness issues have been addressed as thoroughly as possible.',
  },
  {
    title: 'Pre-Application Check',
    body: 'Before you submit, we perform a final readiness review to make sure the major issues identified during the engagement have been resolved.',
  },
  {
    title: 'Re-Application Guidance',
    body: 'For previously rejected sites, we provide targeted guidance on what to change before submitting again, rather than simply resending the same application.',
  },
]

export default function WhatYouGet() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Artifacts &amp; Assets // Deliverables</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            What You Get With <span className="italic text-frame-accent">Framecipher</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Our deliverables are structured so you can act on the review without interpreting a raw
            audit data dump yourself.
          </p>
        </div>

        {/* 6 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 hover:border-white/[0.14] hover:bg-[#18181B] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
                  Item 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
