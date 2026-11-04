'use client'

import React from 'react'

const startRequirements = [
  {
    title: 'Website & Business Information',
    body: 'We need your website, core products or services, target customers, business goals, and the markets you want to reach.',
  },
  {
    title: 'Search & Analytics Access',
    body: 'Where available, access to Google Search Console, Google Analytics, Google Business Profile, and relevant website or CMS systems can help us make more informed recommendations.',
  },
  {
    title: 'Existing Marketing Assets',
    body: 'Existing content, keyword research, previous SEO work, paid campaigns, brand materials, and previous reports can provide useful context.',
  },
  {
    title: 'Business Goals',
    body: 'Tell us what organic search should help you achieve, whether that means leads, sales, calls, bookings, ecommerce revenue, signups, or stronger visibility in a new market.',
  },
]

const auditSteps = [
  {
    title: 'Submit Your Website',
    body: 'Send us your website, target market, and a brief description of what you want to achieve through search.',
  },
  {
    title: 'Receive the Initial Review',
    body: 'We review the website and identify important SEO opportunities, limitations, and areas that deserve attention.',
  },
  {
    title: 'Get Your SEO Strategy',
    body: 'We explain the key findings, priorities, recommended services, expected scope, and practical next steps based on your website.',
  },
  {
    title: 'Review the Proposal',
    body: 'You receive a custom quotation and can review the recommended work before making a commitment.',
  },
  {
    title: 'Approve the Plan',
    body: 'No major implementation begins until the agreed strategy and scope are approved.',
  },
  {
    title: 'SEO Implementation Begins',
    body: 'Our in-house team starts the approved technical, content, on-page, local, ecommerce, or authority-building work.',
  },
  {
    title: 'Monitor, Report & Improve',
    body: 'We monitor performance, report completed work and important changes, and adjust priorities as the campaign develops.',
  },
]

export default function GettingStarted() {
  return (
    <div className="border-b border-white/[0.08] bg-[#09090B] text-white">
      {/* SECTION 1: WHAT YOU NEED TO GET STARTED */}
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Onboarding Checklist // Project Prerequisites
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              What You Need to{' '}
              <span className="italic text-frame-accent">Get Started With SEO.</span>
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              A strong SEO campaign starts with the right information and access.
            </p>
          </div>

          {/* Modality 3 Matrix for 4 requirements */}
          <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {startRequirements.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-6 transition-colors duration-200 hover:bg-[#18181B] sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                      Requirement 0{index + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/10 group-hover:bg-frame-accent transition-colors" />
                  </div>

                  <h3 className="font-heading text-lg font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT HAPPENS AFTER YOU REQUEST YOUR FREE SEO AUDIT? */}
      <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Free Audit Journey // 7 Steps
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              What Happens After You Request Your{' '}
              <span className="italic text-frame-accent">Free SEO Audit?</span>
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              Getting started is straightforward.
            </p>
          </div>

          {/* Modality 3 Matrix for 7 audit steps */}
          <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {auditSteps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#18181B] sm:p-8"
              >
                <div>
                  <span className="font-mono text-3xl font-light text-zinc-600 group-hover:text-frame-accent transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className="mt-5 font-heading text-lg font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
