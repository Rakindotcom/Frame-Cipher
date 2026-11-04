'use client'

import React from 'react'

const processSteps = [
  {
    title: 'Business & Search Discovery',
    description: 'We learn about your business, customers, products or services, target market, competitors, website setup, and existing marketing activity. This gives the SEO strategy the context it needs.',
  },
  {
    title: 'Technical & SEO Audit',
    description: 'We review the website to identify technical, on-page, content, authority, and visibility issues. Findings are prioritized according to impact, urgency, business value, and implementation difficulty.',
  },
  {
    title: 'Competitor & Keyword Analysis',
    description: 'We identify important searches, ranking pages, search intent, competitor strategies, and content gaps relevant to your market.',
  },
  {
    title: 'SEO Roadmap & Priority Setting',
    description: 'We turn the findings into a practical roadmap covering the areas that require attention. Depending on the project, this can include technical fixes, page optimization, content work, internal linking, authority building, local SEO, ecommerce improvements, and AI search optimization.',
  },
  {
    title: 'Technical & On-Page Execution',
    description: 'Approved recommendations are implemented across the website. This may include technical fixes, metadata, structured data, internal links, redirects, content improvements, and other SEO changes.',
  },
  {
    title: 'Content & Authority Building',
    description: 'We create, optimize, refresh, and expand content where needed while pursuing relevant authority-building opportunities. The focus is on search intent and business value rather than publishing content simply to increase page count.',
  },
  {
    title: 'Reporting & Continuous Optimization',
    description: 'SEO is monitored after implementation. We review performance, investigate problems, identify new opportunities, and adjust priorities according to the evidence available.',
  },
]

export default function Process() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Execution Framework // 7-Step Sprint Model
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our SEO{' '}
            <span className="italic text-frame-accent">Process.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            We begin by understanding your business and search landscape before deciding what should change.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix Grid */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#18181B] sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    Step 0{index + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/10 group-hover:bg-frame-accent transition-colors" />
                </div>

                <h3 className="font-heading text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
