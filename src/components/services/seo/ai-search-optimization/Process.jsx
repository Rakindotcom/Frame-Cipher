'use client'

import React from 'react'
import { Check } from 'lucide-react'

const steps = [
  {
    title: 'Business & AI Search Discovery',
    body: 'We start by understanding:',
    points: [
      'Your business',
      'Products and services',
      'Target customers',
      'Priority markets',
      'Important competitors',
      'Business goals',
      'Existing SEO performance',
      'AI-search objectives',
    ],
    closing:
      'This provides the context for determining which AI-search opportunities actually matter.',
  },
  {
    title: 'Prompt & Visibility Assessment',
    body: 'We build a relevant prompt and query set around your business.',
    lead: 'We assess:',
    points: [
      'Whether your brand appears',
      'Which competitors appear',
      'Which sources are cited',
      'How your business is described',
      'Where important queries produce no visibility',
      'Which topics show clear opportunities',
    ],
    closing: 'This creates a baseline before implementation begins.',
  },
  {
    title: 'Content, Entity & Source Analysis',
    body: 'Next, we review the information available about your brand.',
    lead: 'This can include:',
    points: [
      'Website content',
      'Author information',
      'Structured data',
      'Service pages',
      'Product pages',
      'External references',
      'Industry profiles',
      'Third-party mentions',
      'Competitor sources',
    ],
    closing:
      'We then identify the gaps that could affect how clearly your brand and expertise are understood.',
  },
  {
    title: 'AEO & Content Implementation',
    body: 'We improve priority content based on actual query and SERP requirements.',
    lead: 'This can include:',
    points: [
      'Direct answers',
      'Definitions',
      'FAQ sections',
      'Clear headings',
      'Supporting evidence',
      'Content restructuring',
      'Better internal linking',
      'Search-intent alignment',
    ],
    closing:
      'The goal is to improve clarity and usefulness without forcing unnatural AI-focused writing.',
  },
  {
    title: 'GEO & Authority Development',
    body: 'We strengthen broader topical and entity signals through:',
    points: [
      'Topic coverage',
      'Supporting content',
      'Entity relationships',
      'Author/expert information',
      'Third-party source opportunities',
      'Brand consistency',
      'Digital PR where appropriate',
    ],
    closing:
      'This helps build a stronger information footprint around the business.',
  },
  {
    title: 'Measurement & Iteration',
    body: 'AI search is evolving, so the strategy needs to evolve with it.',
    points: [],
    closing:
      'We repeat relevant prompt testing, monitor citations and mentions, compare competitors, review performance data, and refine the content and source strategy based on observed results.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Workflow Protocol // Execution Blueprint</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            How We Approach{' '}
            <span className="italic text-frame-accent">AI Search Optimization</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Our process combines business context, prompt research, SEO fundamentals, content
            analysis, entity work, source evaluation, and ongoing measurement.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 hover:border-white/[0.14] hover:bg-[#18181B] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
                  Phase 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>

                {item.lead && (
                  <p className="mt-4 text-xs font-mono uppercase tracking-wider text-zinc-400">
                    {item.lead}
                  </p>
                )}

                {item.points.length > 0 && (
                  <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4 text-xs sm:text-sm text-zinc-300">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <Check className="h-3.5 w-3.5 mt-0.5 text-frame-accent shrink-0" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                  {item.closing}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
