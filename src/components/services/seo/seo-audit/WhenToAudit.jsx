'use client'

import React from 'react'
import {
  UserCheck,
  TrendingDown,
  RefreshCw,
  ShoppingBag,
  FileQuestion,
  Rocket,
  Globe,
  Check,
} from 'lucide-react'

const triggers = [
  {
    title: 'Before Hiring an SEO Provider',
    icon: UserCheck,
    lead: 'An independent audit can give you a clearer picture of your current SEO condition before signing up for ongoing services.',
    points: [
      'Existing technical problems',
      'Content weaknesses',
      'Backlink issues',
      'Competitive gaps',
      'Missed opportunities',
      'Priority areas for future SEO work',
    ],
    summary: 'This gives you a stronger baseline for evaluating any agency strategy.',
  },
  {
    title: 'After a Traffic or Ranking Drop',
    icon: TrendingDown,
    lead: 'A sudden decline in organic traffic or rankings can have multiple causes. We investigate evidence-based explanations involving:',
    points: [
      'Indexation & crawl anomalies',
      'Recent technical or code changes',
      'Content modifications',
      'Search intent algorithm shifts',
      'Lost backlinks or toxic profiles',
      'Competitor improvements',
      'Unmapped migration redirects',
      'Internal linking & cannibalization',
    ],
    summary: 'Identifies the root cause rather than assuming every ranking drop is a penalty.',
  },
  {
    title: 'Before a Website Redesign or Migration',
    icon: RefreshCw,
    lead: 'Redesigns and migrations can change URLs, templates, internal links, technical settings, and content.',
    points: [
      'Important existing URLs & ranking pages',
      '301 redirect mapping requirements',
      'Canonical tag structures',
      'Metadata & heading preservation',
      'Internal-link dependencies',
      'Indexation risk mitigation',
      'High-value content preservation',
    ],
    summary: 'Gives your development team a clear SEO baseline before major changes go live.',
  },
  {
    title: "When Traffic Isn't Turning Into Leads",
    icon: ShoppingBag,
    lead: 'A website can receive organic traffic without generating enough business value. We review whether:',
    points: [
      'The right pages attract the traffic',
      'Search intent matches your commercial offer',
      'Landing pages support conversion flows',
      'Calls to action are clear & accessible',
      'Important conversion events are tracked in GA4',
      'Commercial pages receive organic visibility',
      'Traffic comes from the right target markets',
    ],
    summary: 'Connects search visibility directly with business outcomes, not just impressions.',
  },
  {
    title: "When Content Isn't Producing Rankings",
    icon: FileQuestion,
    lead: 'Publishing more content does not automatically create more organic growth. We assess:',
    points: [
      'Keyword targeting & intent mismatch',
      'Content depth & topical coverage',
      'Content quality & originality',
      'Internal linking distribution',
      'Cannibalization & topic overlap',
      'Outdated & thin pages',
      'Competitor content & entity gaps',
    ],
    summary: 'Determines whether content needs consolidation, rewriting, or structural linking.',
  },
  {
    title: 'Before Launching a New Website',
    icon: Rocket,
    lead: 'A pre-launch SEO audit can identify problems before search engines encounter them. We review:',
    points: [
      'Site architecture & URL hierarchy',
      'Metadata & H1-H6 structure',
      'Indexation controls & robots.txt',
      'XML sitemaps & canonicals',
      'Structured data (Schema.org)',
      'Mobile performance & Core Web Vitals',
      'Analytics & Search Console setup',
    ],
    summary: 'Fixing issues before launch is far cheaper than repairing lost visibility later.',
  },
  {
    title: 'When Expanding Into New Markets',
    icon: Globe,
    lead: 'Adding countries or languages introduces another layer of SEO complexity. We audit:',
    points: [
      'Country and language targeting',
      'International site structure (ccTLD vs subfolder)',
      'Hreflang implementation & canonicals',
      'Regional URL routing & localization',
      'Country-level organic competitors',
      'International internal linking',
      'Market-level search visibility',
    ],
    summary: 'Prevents structural duplication before international expansion creates technical debt.',
  },
]

export default function WhenToAudit() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Timing &amp; Triggers // Strategic Value
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            When Should You Get an{' '}
            <span className="italic text-frame-accent">SEO Audit?</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            An SEO audit is most useful when you need to understand the cause of a problem before investing in more SEO work.
          </p>
        </div>

        {/* 7 Triggers Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {triggers.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-colors hover:border-white/[0.16] hover:bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-frame-accent border border-white/[0.06] group-hover:bg-frame-accent/10 transition-colors">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-zinc-400">Scenario 0{idx + 1}</span>
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
