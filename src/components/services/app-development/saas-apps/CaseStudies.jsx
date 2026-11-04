'use client'

import React from 'react'
import {
  FileText,
  AlertCircle,
  Cpu,
  Layers,
  Code2,
  Rocket,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const caseStudyPillars = [
  {
    icon: FileText,
    num: '01',
    title: 'Project Overview',
    desc: 'Explain what the SaaS product does, who uses it, and what subscription or monetization business model it supports.',
  },
  {
    icon: AlertCircle,
    num: '02',
    title: 'Business Challenge',
    desc: 'Describe the customer’s operational, revenue, workflow, or product problem before modern SaaS development began.',
  },
  {
    icon: Cpu,
    num: '03',
    title: 'SaaS Architecture',
    desc: 'Show the multi-tenancy model, user and role permissions, subscription billing engine, APIs, integrations, or other architectural decisions.',
  },
  {
    icon: Layers,
    num: '04',
    title: 'Product Features',
    desc: 'Highlight the core features, onboarding funnels, automated workflows, and admin tooling that make the product valuable to subscribers.',
  },
  {
    icon: Code2,
    num: '05',
    title: 'Technology Stack',
    desc: 'Show the actual frontend, backend, database, cache, background queues, infrastructure, and third-party integration technologies used.',
  },
  {
    icon: Rocket,
    num: '06',
    title: 'Development & Deployment',
    desc: 'Explain how the product moved from initial requirements and UI/UX design through full-stack development, multi-tenant testing, CI/CD, and production deployment.',
  },
  {
    icon: TrendingUp,
    num: '07',
    title: 'Verified Outcome',
    desc: 'Use only verified results such as product launch, customer adoption, subscription growth, churn reduction, or other client-approved metrics.',
  },
]

export default function CaseStudies() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS App Development{' '}
            <span className="italic text-frame-accent">Portfolio &amp; Case Studies.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Use real product evidence to show what Framecipher has actually built. Only publish genuine Framecipher projects, architecture breakdowns, and measurable results.
          </p>
        </div>

        {/* 7 Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {caseStudyPillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.16]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.02] text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                      0{item.num}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4 flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Production Verified</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Live SaaS Demo Callout */}
        <div className="mt-12 rounded-xl border border-white/[0.06] bg-[#121214] p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-frame-accent uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4 text-frame-accent" />
              <span>Multi-Tenant Architecture In Production</span>
            </div>
            <h4 className="font-heading text-lg sm:text-xl font-medium text-white">
              Want a private walkthrough of our live SaaS platforms?
            </h4>
            <p className="text-xs sm:text-sm font-normal text-zinc-400">
              We provide private architectural walkthroughs of our live multi-tenant platforms, Stripe billing implementations, and enterprise admin dashboards during your initial consultation.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="accent">
              Schedule SaaS Architecture Review
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}

