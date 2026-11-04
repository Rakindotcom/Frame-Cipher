import React from 'react'
import PosterButton from '../../../home/PosterButton'

const deliverables = [
  {
    title: 'Root Cause Diagnosis',
    body: 'A clear assessment of whether the decline appears related to a manual action, update impact, technical problem, security issue, or another search-performance factor.',
  },
  {
    title: 'Evidence & Impact Report',
    body: 'A documented report showing what changed, which pages or queries were affected, the evidence supporting the diagnosis, and the main issues requiring attention.',
  },
  {
    title: 'Prioritized Recovery Plan',
    body: 'A practical recovery roadmap organized by severity, impact, implementation requirements, and logical sequence.',
  },
  {
    title: 'Remediation & Implementation',
    body: 'Where included in the engagement, we implement the agreed technical, content, structural, or link-related fixes identified during the investigation.',
  },
  {
    title: 'Reconsideration Documentation',
    body: 'For manual actions, we organize the remediation evidence and supporting information needed for a clear reconsideration request.',
  },
  {
    title: 'Recovery Monitoring',
    body: 'We track the relevant visibility and technical indicators after remediation so the recovery process can be evaluated using evidence rather than assumptions.',
  },
]

export default function WhatYouGet() {
  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#A855F7]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
                <span>Deliverables &amp; Outcomes</span>
              </div>
              <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl leading-[1.05]">
                What You Get With Framecipher
              </h2>
              <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
                Our deliverables are designed to move from an unclear traffic loss to a documented diagnosis, prioritized action, and measurable recovery.
              </p>
              <div className="pt-2">
                <PosterButton href="/contact">
                  Start Your Recovery &rarr;
                </PosterButton>
              </div>
            </div>
          </div>

          {/* Scrolling Right Column (7 cols) with Modality 1 Divided Rows */}
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08] lg:col-span-7">
            {deliverables.map((item, index) => (
              <div
                key={item.title}
                className="group py-8 transition-colors duration-200 hover:bg-white/[0.02]"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-frame-accent">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base pl-8">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
