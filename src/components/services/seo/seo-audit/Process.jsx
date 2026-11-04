'use client'

import React from 'react'
import {
  Compass,
  KeyRound,
  Search,
  FileText,
  BarChart2,
  CalendarCheck,
  Check,
} from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Business, Site & Goal Discovery',
    icon: Compass,
    lead: 'We begin by understanding your commercial objectives and current context:',
    points: [
      'Business model & target audience',
      'Primary geographic markets',
      'High-margin products & services',
      'Organic traffic & conversion goals',
      'Current SEO challenges & historical changes',
    ],
    summary: 'Prevents the audit from becoming a generic checklist disconnected from your business.',
  },
  {
    step: '02',
    title: 'Access & Data Collection',
    icon: KeyRound,
    lead: 'Where available, we collect the full dataset required for an empirical audit:',
    points: [
      'Google Search Console API export',
      'Google Analytics 4 event data',
      'Sitemap & URL indexation files',
      'Backlink profile databases',
      'Target keywords & competitor lists',
      'Platform & hosting architecture details',
    ],
    summary: 'Ensures the diagnostic relies on verified historical data.',
  },
  {
    step: '03',
    title: 'Technical Crawl & Manual Validation',
    icon: Search,
    lead: 'Automated crawls identify raw technical conditions; our engineers manually validate:',
    points: [
      'Whether automated warnings are true issues',
      'Which exact templates & pages are affected',
      'Real impact on Googlebot crawling',
      'Underlying technical causes in code',
      'Specific remediation requirements',
    ],
    summary: 'Eliminates false alarms and focuses engineering hours on real barriers.',
  },
  {
    step: '04',
    title: 'On-Page, Content & Keyword Analysis',
    icon: FileText,
    lead: 'We evaluate important pages against search intent, competitors, and quality:',
    points: [
      'Page targeting & search intent alignment',
      'Keyword cannibalization & internal overlap',
      'Thin content & outdated pages',
      'Metadata & semantic heading structure',
      'Internal link equity distribution',
      'Missing topical supporting content',
    ],
    summary: 'Focuses on improving the pages that can contribute most to revenue growth.',
  },
  {
    step: '05',
    title: 'Backlink & Competitor Analysis',
    icon: BarChart2,
    lead: 'We evaluate your backlink profile alongside the websites competing for your queries:',
    points: [
      'Domain authority & referring domains',
      'Anchor text distribution & toxic signals',
      'Competitor backlink opportunities',
      'Keyword & content gaps across the SERP',
      'SERP features & ranking page models',
    ],
    summary: 'Places your website within the competitive environment rather than in isolation.',
  },
  {
    step: '06',
    title: 'Prioritization, Roadmap & Walkthrough',
    icon: CalendarCheck,
    lead: 'Findings are prioritized by Impact, Effort, Business Importance, and Urgency:',
    points: [
      'Phased 30/60/90-day action sequence',
      'Clear engineering vs content tasks',
      'Full documented evidence & rationale',
      'Live interactive findings walkthrough',
      'Actionable handover for execution',
    ],
    summary: 'Turns audit data into a structured action plan understood before work begins.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Methodology // 6-Stage Process
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            How We Conduct an{' '}
            <span className="italic text-frame-accent">SEO Audit</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            Our process combines automated data collection, manual validation, competitive research, and business context.
          </p>
        </div>

        {/* 6 Process Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors hover:border-white/[0.16] hover:bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-frame-accent border border-white/[0.06] group-hover:bg-frame-accent/10 transition-colors">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs font-bold text-zinc-400">Step {item.step}</span>
                  </div>

                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.lead}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-4">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="font-mono text-[11px] text-zinc-400 leading-relaxed italic">
                    &rarr; {item.summary}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
