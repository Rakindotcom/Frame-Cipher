'use client'

import React from 'react'
import {
  FileSpreadsheet,
  MapPin,
  Network,
  Crosshair,
  ListFilter,
  FileText,
  Check,
} from 'lucide-react'

const deliverables = [
  {
    number: '01',
    icon: FileSpreadsheet,
    title: 'Keyword Master Sheet',
    description:
      'A structured, multi-tabbed master dataset organized for practical execution across your marketing and search teams.',
    points: [
      'Keyword string & search intent category',
      'Normalized search demand & seasonality',
      'Difficulty score & SERP competitiveness observations',
      'Business relevance & conversion priority scoring',
      'Topic cluster alignment & recommended home URL',
    ],
    note: 'The master dataset provides complete transparency into all researched terms with zero raw tool clutter.',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Keyword-to-URL Map',
    description:
      'We establish a definitive 1-to-1 connection between validated keyword clusters and the exact web pages that target them.',
    points: [
      'Existing pages scheduled for re-optimization',
      'Net-new landing pages and articles to create',
      'URLs requiring consolidation or 301 redirects',
      'Resolution of internal cannibalization conflicts',
      'Primary vs. secondary keyword targets per page',
    ],
    note: 'Transforms abstract keyword research into an architectural execution roadmap your web developers can build.',
  },
  {
    number: '03',
    icon: Network,
    title: 'Topic Cluster Map',
    description:
      'Related queries and semantic entities are mapped into hierarchical topic silos to establish undeniable topical authority.',
    points: [
      'Core pillar topics & commercial hubs',
      'Supporting subtopics & long-tail articles',
      'High-intent commercial modifiers & buyer questions',
      'Internal linking relationships and contextual SILO flow',
    ],
    note: 'Creates an organized architectural foundation for scalable organic content marketing.',
  },
  {
    number: '04',
    icon: Crosshair,
    title: 'Competitor Keyword Gap Matrix',
    description:
      'Identifies proven organic keywords driving conversions for direct rivals that your website currently ignores.',
    points: [
      'Top competitor keywords & ranking position breakdown',
      'Competitor page formats (product, guide, comparison)',
      'Opportunity level & ranking feasibility score',
      'Recommended counter-strategy and home URL target',
    ],
    note: 'Only realistic, commercially valuable competitor opportunities are selected into your execution backlog.',
  },
  {
    number: '05',
    icon: ListFilter,
    title: 'Priority Keyword List',
    description:
      'Not every discovered keyword belongs on your immediate roadmap. We prioritize terms by an empirical RICE impact matrix.',
    points: [
      'Immediate Quick Wins (high relevance, low competition)',
      'Core Commercial Priorities (medium-term revenue drivers)',
      'Category Authority Terms (long-term market share builders)',
      'Estimated ranking velocity and developer effort',
    ],
    note: 'Gives your content team an unambiguous, prioritized starting queue rather than an overwhelming 5,000-row spreadsheet.',
  },
  {
    number: '06',
    icon: FileText,
    title: 'Content Planning Inputs & Briefs',
    description:
      'Where included in scope, research feeds directly into structured content briefs and editorial production blueprints.',
    points: [
      'Target primary and secondary semantic keywords',
      'Exact search intent profile and suggested page type',
      'Mandatory user questions (People Also Ask) to resolve',
      'Internal linking instructions and competitor benchmark angles',
    ],
    note: 'Enables copywriters to draft comprehensive, intent-matching content without costly revision cycles.',
  },
]

export default function WhatYouGet() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
              Core Deliverables
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            What You Get With <span className="italic text-frame-accent">Framecipher</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Our deliverables are structured so your SEO, content, and engineering teams can move directly from research to implementation without wasting weeks deciphering raw software exports.
          </p>
        </div>

        {/* 6 Deliverables 3-Column Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518] md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-frame-accent">
                      Deliverable {item.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-zinc-300 transition-colors group-hover:border-frame-accent/30 group-hover:text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-4 text-xs text-zinc-300">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 text-xs text-zinc-400 font-normal leading-relaxed">
                  {item.note}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
