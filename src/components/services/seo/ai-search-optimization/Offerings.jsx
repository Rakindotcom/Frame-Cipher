'use client'

import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const offerings = [
  {
    title: 'AI Visibility Baseline & Prompt Research',
    body: 'We begin by establishing where your brand stands today.',
    lead: 'We develop a relevant query and prompt set covering areas such as:',
    points: [
      'Brand searches',
      'Product and service queries',
      'Informational questions',
      'Commercial comparisons',
      'Recommendation prompts',
      'Problem-solving queries',
      'Local queries',
      'Competitor comparisons',
    ],
    closing:
      'We then assess which AI search experiences mention your brand, which competitors appear, what sources are cited, and how accurately your business is represented. This creates a baseline for future optimization and measurement.',
  },
  {
    title: 'Answer Engine Optimization (AEO)',
    body: 'AEO focuses on making important information clearer and easier to surface in answer-driven search experiences.',
    lead: 'We optimize relevant pages for:',
    points: [
      'Direct-answer sections',
      'Definitions',
      'Frequently asked questions',
      'Question-based content',
      'Clear explanations',
      'Comparison information',
      'Step-by-step answers',
      'Supporting evidence',
      'Concise, self-contained passages',
    ],
    closing:
      'The objective is not to write unnaturally for machines. It is to make useful answers easier for both users and modern search systems to understand.',
  },
  {
    title: 'Generative Engine Optimization (GEO)',
    body: 'GEO focuses on broader visibility across generative search experiences.',
    lead: 'We strengthen:',
    points: [
      'Topical authority',
      'Content depth',
      'Entity relationships',
      'Brand context',
      'Supporting evidence',
      'Source consistency',
      'Competitive coverage',
      'Market-specific relevance',
    ],
    closing:
      'Instead of optimizing one isolated answer, GEO looks at how the wider content and authority ecosystem supports your brand’s visibility across generative search.',
  },
  {
    title: 'AI-Ready Content & Answer Architecture',
    body: 'Content should remain useful to people first, while presenting important information clearly.',
    lead: 'We improve:',
    points: [
      'Heading structure',
      'Definitions',
      'Question-and-answer sections',
      'Summary statements',
      'Lists and tables where useful',
      'Supporting evidence',
      'Content hierarchy',
      'Internal linking',
      'Topic relationships',
      'Clear entity references',
    ],
    closing:
      'We do not apply arbitrary “AI formatting” rules. The goal is well-organized content that communicates important information clearly and supports both traditional search and AI-assisted discovery.',
  },
  {
    title: 'Entity & Knowledge Graph Optimization',
    body: 'AI systems need to understand what a business, product, service, person, or organization actually represents.',
    lead: 'We strengthen relationships between relevant entities such as:',
    points: [
      'Brand',
      'Organization',
      'Founder or experts',
      'Products',
      'Services',
      'Locations',
      'Industries',
      'Partners',
      'Publications',
      'Relevant topics',
    ],
    closing:
      'Where appropriate, we review structured data, organization information, author information, and related sources to improve the clarity and consistency of those relationships.',
  },
  {
    title: 'Technical Foundations for AI Search',
    body: 'AI Search Optimization still depends on a technically accessible, indexable, and well-structured website.',
    lead: 'We review relevant foundations such as:',
    points: [
      'Crawlability',
      'Indexation',
      'Internal linking',
      'Page accessibility',
      'Structured data',
      'Canonicals',
      'XML sitemaps',
      'Page performance',
      'Mobile usability',
      'JavaScript rendering',
      'Content accessibility',
    ],
    closing:
      'Structured data is implemented where appropriate as part of the broader search strategy. We do not treat schema as a separate AI ranking mechanism.',
  },
  {
    title: 'Third-Party Source & Brand Authority',
    body: 'Your own website is not the only source that can shape how your business is understood.',
    lead: 'We review relevant external sources such as:',
    points: [
      'Industry publications',
      'Professional profiles',
      'Business directories',
      'Review platforms',
      'Expert profiles',
      'Digital PR',
      'Relevant partnerships',
      'Trusted industry references',
    ],
    closing:
      'The objective is to strengthen credible and consistent information about your business rather than generate mentions simply for volume.',
  },
  {
    title: 'AI Citation & Visibility Monitoring',
    body: 'AI visibility needs to be measured rather than assumed.',
    lead: 'We can monitor:',
    points: [
      'Brand mentions',
      'Citation frequency',
      'Prompt-level visibility',
      'Competitor presence',
      'Frequently cited sources',
      'Accuracy of business information',
      'Changes in visibility over time',
      'Relevant Google generative-search performance data where available',
    ],
    closing:
      'The results are used to refine content, entity signals, source strategy, and future prompt testing.',
  },
]

export default function Offerings() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Service Matrix // Core Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            Our <span className="italic text-frame-accent">AI Search Optimization</span> Services
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Our AI Search Optimization services combine content strategy, technical SEO, entity
            work, source authority, and visibility measurement.
          </p>
        </div>

        {/* 8 Offerings List */}
        <div className="space-y-6 sm:space-y-8">
          {offerings.map((item, index) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 hover:border-white/[0.14] transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
            >
              {/* Left Column (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
                  Service Module 0{index + 1}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>
              </div>

              {/* Right Column (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  {item.lead}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {item.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                      <Check className="h-3.5 w-3.5 mt-0.5 text-frame-accent shrink-0" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-white/[0.06]">
                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                    {item.closing}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="max-w-2xl text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            The objective is to improve visibility across AI-driven search while strengthening the
            same content, technical, and authority foundations that matter to traditional search.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Request an AI Search Audit &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
