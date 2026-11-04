'use client'

import React from 'react'
import {
  Search,
  Compass,
  FileText,
  Code2,
  Network,
  BarChart3,
  RefreshCw,
  Eye,
  CheckCircle2,
} from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Page & Search Intent Audit',
    para1:
      'We begin by reviewing the target page, its current search visibility, target queries, existing content, and the search results for relevant terms. We examine what type of content Google currently surfaces and identify whether the page\'s purpose matches that intent.',
    details: [
      'Existing rankings and Search Console data',
      'Current titles and descriptions',
      'Heading structure and content depth',
      'Internal links and search competitors',
      'Related queries and existing page performance',
    ],
  },
  {
    num: '02',
    icon: Compass,
    title: 'Keyword-to-Page Mapping',
    para1:
      'We determine which important queries belong to which pages. This helps prevent multiple pages from competing for the same search intent while identifying opportunities where an important keyword does not have a suitable target page.',
    para2:
      'We map primary, secondary, and supporting terms based on relevance rather than trying to assign a large number of keywords to every URL.',
  },
  {
    num: '03',
    icon: FileText,
    title: 'Content & Structure Planning',
    para1:
      'After understanding the search intent and keyword relationship, we determine what the page should contain. The structure is designed around the user\'s needs rather than a fixed template.',
    details: [
      'Recommended page sections and missing topics',
      'Supporting concepts and heading hierarchy',
      'Content priorities and internal-link opportunities',
      'Metadata recommendations and CTA placement',
      'Content consolidation opportunities',
    ],
  },
  {
    num: '04',
    icon: Code2,
    title: 'Implementation',
    para1:
      'Approved recommendations are implemented according to the project scope. Where development work is required beyond the on-page scope, we coordinate with your existing developers or Framecipher\'s development team.',
    details: [
      'Content rewriting & new content creation',
      'Metadata updates & heading restructuring',
      'Internal-link placement & image optimization',
      'URL recommendations & schema implementation',
      'Content formatting & page-level UX improvements',
    ],
  },
  {
    num: '05',
    icon: Network,
    title: 'Internal Linking',
    para1:
      'We identify contextual opportunities to connect the optimized page with related content across the website. This can strengthen topical relationships, improve navigation, and help important pages become easier to discover.',
    para2:
      'Internal linking is reviewed as part of the wider website structure rather than treated as a fixed number of links per page.',
  },
  {
    num: '06',
    icon: BarChart3,
    title: 'Performance Review',
    para1:
      'After implementation, we monitor relevant search and engagement signals. We use the available evidence to determine whether additional optimization is justified.',
    details: [
      'Organic impressions, clicks, and CTR',
      'Query visibility and ranking changes',
      'Page-level traffic and Search Console data',
      'Conversion or lead data where available',
    ],
  },
  {
    num: '07',
    icon: RefreshCw,
    title: 'Ongoing Refinement',
    para1:
      'Search results continue to change after a page is optimized. When ongoing optimization is included, we review performance and identify opportunities for refinement rather than repeatedly changing pages without evidence.',
    para2:
      'This can include content updates, metadata adjustments, internal-link improvements, search-intent changes, and competitive content analysis.',
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
              Execution Framework // 7-Stage Sequence
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            How We Approach{' '}
            <span className="italic text-frame-accent">On-Page SEO</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            We use a structured workflow so optimization decisions are based on evidence rather than a generic checklist.
          </p>
        </div>

        {/* 7 Steps Grid + 1 Balance Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-frame-accent/10 border border-frame-accent/20 text-frame-accent">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-frame-accent">
                        Stage {step.num}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-zinc-500">
                      STEP_{step.num}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                    {step.para1}
                  </p>

                  {step.para2 && (
                    <p className="mt-2 text-xs text-zinc-400 font-normal leading-relaxed border-l-2 border-white/[0.1] pl-2.5">
                      {step.para2}
                    </p>
                  )}

                  {step.details && (
                    <div className="mt-3 border-t border-white/[0.06] pt-2.5">
                      <ul className="space-y-1">
                        {step.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-1.5 text-[11px] text-zinc-400">
                            <span className="h-1 w-1 rounded-full bg-frame-accent/60 mt-1.5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )
          })}

          {/* 8th Transparency Callout Card to balance 4x2 grid */}
          <div className="relative flex flex-col justify-between rounded-2xl border border-frame-accent/40 bg-gradient-to-br from-frame-accent/10 via-[#121214] to-[#121214] p-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                <Eye className="h-4 w-4" />
                <span>Governance &amp; Review</span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                Review-Based Implementation
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                We work with a review and approval process so important content changes do not go live without your visibility. Essential for brand messaging, technical claims, and pricing integrity.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-frame-accent">
              <CheckCircle2 className="h-4 w-4" />
              <span>Full Staging Approval Included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
