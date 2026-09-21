import { SectionIntro } from '../../../Kinetic'

const deliverables = [
  {
    title: 'Keyword Master Sheet',
    body: 'A structured keyword dataset can include:',
    points: [
      'Keyword',
      'Search intent',
      'Search demand',
      'Competition or difficulty',
      'SERP observations',
      'Business relevance',
      'Priority',
      'Cluster',
      'Target market',
      'Recommended page',
    ],
    note: 'The exact fields depend on the scope of the project.',
  },
  {
    title: 'Keyword-to-URL Map',
    body: 'We connect keyword groups to the pages that should target them. The map can identify:',
    points: [
      'Existing pages to optimize',
      'New pages to create',
      'Pages that should be consolidated',
      'Competing URLs',
      'Primary versus secondary keyword targets',
      'Suggested page types',
    ],
    note: 'This helps turn keyword research into an actual website plan.',
  },
  {
    title: 'Topic Cluster Map',
    body: 'Related keywords and search themes are organized into logical topic groups. A cluster can include:',
    points: [
      'Core topic',
      'Supporting subtopics',
      'Related questions',
      'Commercial terms',
      'Informational terms',
      'Semantic concepts',
    ],
    note: 'This creates a clearer foundation for topical content planning.',
  },
  {
    title: 'Competitor Keyword Gap',
    body: "We identify relevant search opportunities competitors currently capture that your website does not. The analysis can show:",
    points: [
      'Competitor keyword',
      'Ranking competitor page',
      'Search intent',
      'Content type',
      'Opportunity level',
      'Potential target page',
    ],
    note: 'Only relevant and realistic opportunities are carried into the final strategy.',
  },
  {
    title: 'Priority Keyword List',
    body: 'Not every researched keyword belongs on the final execution roadmap. We prioritize terms based on factors such as:',
    points: [
      'Business relevance',
      'Search intent',
      'Ranking potential',
      'Search demand',
      'Competitive environment',
      'Conversion value',
      'Content fit',
    ],
    note: 'This gives your team a clear starting point rather than an overwhelming list.',
  },
  {
    title: 'Content Planning Inputs',
    body: 'Where included in scope, keyword research can provide the foundation for content briefs and editorial planning. These inputs can include:',
    points: [
      'Primary and secondary terms',
      'Search intent',
      'Suggested page type',
      'Supporting topics',
      'Questions to answer',
      'Competitor SERP observations',
      'Internal-link opportunities',
      'Content angles',
    ],
    note: 'The goal is to make the transition from research to content execution more efficient.',
  },
]

export default function WhatYouGet() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Deliverables" title="What You Get With Framecipher">
          Our deliverables are structured so your SEO, content, and marketing teams can move from
          research to implementation without interpreting a raw keyword export.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {deliverables.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Deliverable 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
              <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs font-medium leading-relaxed text-frame-muted-fg">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}