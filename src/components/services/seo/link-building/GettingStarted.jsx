'use client'

import React from 'react'
import {
  Globe,
  BarChart3,
  Search,
  Compass,
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const startRequirements = [
  {
    icon: Globe,
    title: 'Website & Target Pages',
    body: 'Your website and the specific priority pages you want the campaign to support, whether those are key service pages, product categories, or linkable research assets.',
  },
  {
    icon: BarChart3,
    title: 'Search & Analytics Access',
    body: 'Google Search Console and Google Analytics access where available, so our team can evaluate referring domain movement against real impressions and traffic.',
  },
  {
    icon: Search,
    title: 'Backlink & Competitor Context',
    body: 'Business name, any existing backlink profile data, and the primary competitors you want us to benchmark for link gap analysis.',
  },
  {
    icon: Compass,
    title: 'Business Goals & Target Markets',
    body: 'Clarity on target geographic markets (Bangladesh, international territories such as US/UK/CA/AU/UAE, or both) and primary commercial objectives.',
  },
]

const linkBuildingSteps = [
  {
    number: '01',
    title: 'Send Us Your Website',
    body: 'Share your website URL, the key pages you want referenced, and a brief description of your market and targets.',
  },
  {
    number: '02',
    title: 'Share Access & Context',
    body: 'Granting Search Console and analytics access lets us review historical backlink performance against search reality.',
  },
  {
    number: '03',
    title: 'Receive a Backlink Audit',
    body: 'Within approximately one week, you receive a full profile audit and competitor link gap analysis.',
  },
  {
    number: '04',
    title: 'Review the Target List',
    body: 'You review the campaign strategy, vetted publisher prospects, and outreach angles before any pitches are sent.',
  },
  {
    number: '05',
    title: 'Approve & Start Outreach',
    body: 'Approved targets move into personalized editorial pitching, guest content creation, and digital PR outreach.',
  },
  {
    number: '06',
    title: 'Monitor & Report',
    body: 'We verify every live placement, monitor domain changes, and provide transparent monthly reporting.',
  },
]

export default function GettingStarted() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Onboarding &amp; Launch
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            What You Need to{' '}
            <span className="italic text-frame-accent">Start Link Building</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Off-page work begins with clear priority pages, access to performance data, and insight into your competitive landscape.
          </p>
        </div>

        {/* 4 Requirements Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {startRequirements.map((req, idx) => {
            const Icon = req.icon
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 flex flex-col justify-between hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-frame-accent/15 text-frame-accent border border-frame-accent/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium text-white">
                    {req.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {req.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* 6 Step Roadmap */}
        <div className="mt-16">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
              Campaign Lifecycle
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white">
              The 6-Step Onboarding Process
            </h3>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {linkBuildingSteps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 flex flex-col justify-between hover:border-white/20 transition-colors"
              >
                <div>
                  <span className="font-mono text-2xl font-light text-frame-accent">
                    {step.number}
                  </span>
                  <h4 className="mt-3 font-heading text-base sm:text-lg font-medium text-white">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-heading text-xl font-medium text-white">
              Ready to evaluate your backlink baseline?
            </h3>
            <p className="text-sm text-zinc-400">
              Get an honest review of your existing profile and realistic gap opportunities.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Get Your Off-Page SEO Consultation &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
