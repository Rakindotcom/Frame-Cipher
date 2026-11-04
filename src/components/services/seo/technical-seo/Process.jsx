'use client'

import React from 'react'
import { CheckCircle2, Eye } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Technical Audit',
    para1:
      'We examine the website’s technical infrastructure, crawlability, indexation, performance, architecture, and other relevant areas to identify issues affecting organic visibility.',
  },
  {
    num: '02',
    title: 'Prioritization',
    para1:
      'Not every technical issue deserves the same level of attention. We prioritize recommendations based on potential impact, urgency, business importance, implementation requirements, and available resources.',
  },
  {
    num: '03',
    title: 'Implementation',
    para1:
      'Approved technical changes are implemented directly by our team or coordinated with your existing developers, depending on the project.',
    para2:
      'Changes can include technical configuration, redirects, structured data, internal linking, performance improvements, indexing controls, and other approved fixes.',
  },
  {
    num: '04',
    title: 'Validation',
    para1:
      'We verify whether the implemented changes actually resolved the identified problem.',
    para2:
      'Depending on the issue, validation may involve technical testing, crawling, Search Console checks, structured-data validation, performance testing, or other available evidence.',
  },
  {
    num: '05',
    title: 'Monitoring',
    para1:
      'After implementation, we monitor the relevant technical signals to identify regressions, new issues, or additional opportunities.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1 text-xs text-zinc-300 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Execution Framework // 5-Stage Protocol
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            How We Approach{' '}
            <span className="italic text-frame-accent">Technical SEO</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            We focus on fixing the right problems in the right order rather than trying to change everything at once.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <span className="font-mono text-2xl font-bold tracking-tight text-zinc-500 group-hover:text-frame-accent transition-colors">
                    {step.num}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                    Phase {step.num}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {step.title}
                </h3>

                <div className="mt-3 space-y-2 text-sm text-zinc-300 font-normal leading-relaxed">
                  <p>{step.para1}</p>
                  {step.para2 && (
                    <p className="border-l-2 border-white/[0.1] pl-3 text-zinc-400">
                      {step.para2}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* 6th Transparency Block to complete grid */}
          <div className="relative flex flex-col justify-between rounded-2xl border border-frame-accent/30 bg-gradient-to-br from-frame-accent/10 via-[#121214] to-[#121214] p-6 sm:p-7">
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                <Eye className="h-4 w-4" />
                <span>Transparency by Default</span>
              </div>
              <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                Pre-Deployment Verification
              </h3>
              <p className="mt-3 text-sm text-zinc-300 font-normal leading-relaxed">
                Every approved technical change is reviewed before it touches the live site, so nothing happens without your visibility into what is changing and why.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-frame-accent">
              <CheckCircle2 className="h-4 w-4" />
              <span>Full Staging Checks Included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
