import React from 'react'

const analyses = [
  {
    title: 'Update Timing & Impact Correlation',
    body: 'We compare the timing of your traffic and ranking changes with relevant Google updates and major site changes.',
    closing:
      'Timing alone does not prove causation, so we combine update correlation with page-level, query-level, technical, and competitive analysis.',
  },
  {
    title: 'Page & Query-Level Loss Analysis',
    body: 'We identify which URLs and search queries experienced the largest changes.',
    closing:
      'This can include comparing clicks, impressions, average position, CTR, country, device, search intent, content type, and affected topic groups to determine where the decline is concentrated.',
  },
  {
    title: 'Content Quality & People-First Assessment',
    body: 'We review the pages that lost visibility for usefulness, originality, completeness, search intent alignment, first-hand value, and overall content quality.',
    closing:
      'The objective is not to add content simply because rankings dropped. It is to determine what users and search results now appear to value more clearly.',
  },
  {
    title: 'Technical & UX Validation',
    body: 'We validate technical foundations that may have contributed to the decline, including indexing, crawlability, page accessibility, redirects, canonicalization, internal links, performance, mobile usability, and other relevant implementation issues.',
    closing: '',
  },
  {
    title: 'Competitor & SERP Reassessment',
    body: 'We compare affected queries against current search results to identify meaningful differences in content depth, topical coverage, intent satisfaction, structure, credibility signals, and SERP features.',
    closing:
      'This helps separate genuine site weaknesses from broader changes in the competitive search landscape.',
  },
  {
    title: 'Recovery Monitoring & Reassessment',
    body: 'Algorithmic recovery is not a one-time submission.',
    closing:
      'We monitor the changes made, measure affected pages and queries over time, and reassess the strategy as additional search data becomes available. Google notes that improvements after major ranking changes may take time to be reflected, so recovery should be measured through sustained trends rather than a single day’s ranking movement.',
  },
]

export default function AlgorithmicRecovery() {
  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#A855F7]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Algorithmic Investigation</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl">
            Google Traffic Drop &amp; Algorithmic Recovery
          </h2>
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            Update-related and technical traffic declines follow a different recovery path from manual actions, one built around empirical analysis, systemic improvement, and measured reassessment.
          </p>
        </div>

        {/* Modality 1: Editorial Divided Rows Container */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {analyses.map((item, index) => (
            <div
              key={item.title}
              className="group py-8 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-baseline md:gap-8">
                {/* Col 1-3: Number and Category */}
                <div className="md:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                    Analysis // 0{index + 1}
                  </span>
                </div>

                {/* Col 4-7: Headline / Analysis Title */}
                <div className="md:col-span-4">
                  <h3 className="text-lg font-medium text-white transition-colors duration-200 group-hover:text-emerald-300 sm:text-xl">
                    {item.title}
                  </h3>
                </div>

                {/* Col 8-12: Description / Solution */}
                <div className="md:col-span-5 space-y-3">
                  <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                    {item.body}
                  </p>
                  {item.closing && (
                    <p className="border-l-2 border-emerald-500 pl-3 text-xs leading-relaxed text-zinc-400">
                      {item.closing}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
