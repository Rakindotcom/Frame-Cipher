import { SectionIntro } from '../../../Kinetic'

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
      'We monitor the changes made, measure affected pages and queries over time, and reassess the strategy as additional search data becomes available. Google notes that improvements after major ranking changes may take time to be reflected, so recovery should be measured through sustained trends rather than a single day\u2019s ranking movement.',
  },
]

export default function AlgorithmicRecovery() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="When it's not a manual action" title="Google Traffic Drop & Algorithmic Recovery">
          Update-related and technical traffic declines follow a different recovery path from manual
          actions, one built around analysis, improvement, and measured reassessment.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {analyses.map((item, index) => (
            <div key={item.title} className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Analysis 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
              {item.closing && (
                <p className="mt-5 border-l-2 border-frame-accent p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.closing}
                </p>
              )}
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}