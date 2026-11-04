'use client'

import React from 'react'
import {
  Compass,
  Database,
  BarChart2,
  CheckCircle,
  Crosshair,
  Layers,
  FileCheck2,
  Check,
} from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Compass,
    title: 'Business & Goal Discovery',
    description:
      'Before opening tools, we deeply align with your product lines, target buyers, commercial margins, primary markets, and existing technical site structure.',
    points: [
      'Core products, services & high-margin offerings',
      'Target customer personas & buyer profiles',
      'Geographic market focus & conversion targets',
      'Current organic rankings & domain authority baseline',
    ],
    note: 'Ensures that every keyword recommendation directly supports real-world commercial pipeline targets.',
  },
  {
    step: '02',
    icon: Database,
    title: 'Seed Expansion & Multi-Source Data Collection',
    description:
      'We construct a comprehensive seed repository and expand it using multiple enterprise search platforms, search logs, and live SERP data.',
    points: [
      'Multi-engine search query databases (Ahrefs, Semrush)',
      'Google Search Console historical impression query logs',
      'Google Autocomplete, Related Searches & People Also Ask',
      'Direct competitor seed harvest & customer vernacular analysis',
    ],
    note: 'Builds an exhaustive, un-siloed candidate keyword pool before applying rigorous strategic filters.',
  },
  {
    step: '03',
    icon: BarChart2,
    title: 'SERP, Volume & Competition Analysis',
    description:
      'Each promising keyword is evaluated within its live search environment to distinguish theoretical search demand from realistic ranking opportunity.',
    points: [
      'Monthly search demand & historical volatility',
      'Domain and URL-level ranking strength of incumbents',
      'Dominant content types (e.g. ecommerce PLP vs. in-depth guide)',
      'SERP feature real estate (AI Overviews, Snippets, Local Packs)',
    ],
    note: 'Eliminates unwinnable head terms early, preserving bandwidth for high-probability commercial targets.',
  },
  {
    step: '04',
    icon: CheckCircle,
    title: 'Intent & Opportunity Scoring',
    description:
      'We classify terms by explicit search intent and score opportunities by their revenue potential and realistic ranking feasibility.',
    points: [
      'Explicit intent tagging (Informational, Commercial, Transactional)',
      'Conversion likelihood & buyer readiness score',
      'Technical content requirements vs. internal writer capacity',
      'Empirical RICE prioritization score (Reach, Impact, Confidence, Effort)',
    ],
    note: 'Creates an actionable, prioritized execution hierarchy rather than an unmanageable list sorted by volume.',
  },
  {
    step: '05',
    icon: Crosshair,
    title: 'Competitor & Gap Analysis',
    description:
      'We cross-reference your candidate pool against active industry rivals to identify high-value search demand your site currently ignores.',
    points: [
      'Core commercial keywords driving competitor organic revenue',
      'Critical topic voids and underserved customer queries',
      'Shared ranking battlegrounds and competitor weaknesses',
      'Long-tail, low-competition gap opportunities',
    ],
    note: 'Recommendations are strictly filtered through your domain authority and business model to ensure achievable wins.',
  },
  {
    step: '06',
    icon: Layers,
    title: 'Clustering & Architectural Page Mapping',
    description:
      'Related queries are grouped into topical silos and mapped to designated home URLs to create an unambiguous site hierarchy.',
    points: [
      '1 Intent → 1 URL mapping rule enforcement',
      'Service, Product, Category, and Guide URL assignment',
      'Detection and elimination of internal keyword cannibalization',
      'Internal linking hierarchy and topic cluster architecture',
    ],
    note: 'Prevents multiple URLs from competing for identical queries, establishing clear ranking signals for Google.',
  },
  {
    step: '07',
    icon: FileCheck2,
    title: 'Final Quality Review & Delivery Walkthrough',
    description:
      'Before handoff, our senior SEO strategists manually verify the entire dataset for intent accuracy, deduplication, and immediate actionable clarity.',
    points: [
      'Manual verification of intent and page type assignments',
      'Priority roadmap sequencing for immediate execution',
      'Complete Master Dataset, URL Map & Topic Cluster Sheets',
      'Live executive walkthrough to guide content and engineering teams',
    ],
    note: 'Your team receives a structured, defensible organic blueprint ready for direct content production and developer execution.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Execution Methodology
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            How We Conduct <span className="italic text-frame-accent">Keyword Research</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Our 7-step process moves methodically from commercial business understanding to search discovery, competitive gap analysis, semantic clustering, and architectural page mapping.
          </p>
        </div>

        {/* 7-Step Process Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((item, idx) => {
            const Icon = item.icon
            const isLast = idx === steps.length - 1
            return (
              <div
                key={item.step}
                className={`group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518] md:p-8 ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-frame-accent">
                      Step {item.step}
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
