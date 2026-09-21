import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Business & Goal Discovery',
    body: 'Before researching keywords, we understand:',
    points: [
      'Products and services',
      'Target customers',
      'Business goals',
      'Primary markets',
      'Geographic focus',
      'Conversion goals',
      'Existing website structure',
      'Current SEO performance',
    ],
    note: 'This ensures keyword recommendations are connected to actual business priorities.',
  },
  {
    title: 'Seed Expansion & Data Collection',
    body: 'We build an initial seed set from your business and expand it using relevant keyword and search data. Depending on the project, research may include:',
    points: [
      'SEO keyword platforms',
      'Search Console',
      'Search suggestions',
      'Related searches',
      'People Also Ask',
      'SERP analysis',
      'Competitor research',
      'Customer-language patterns',
      'Market-specific query research',
    ],
    note: 'The objective is to build a broad opportunity set before filtering it.',
  },
  {
    title: 'SERP, Volume & Competition Analysis',
    body: 'Each significant keyword is evaluated in its actual search environment. We review:',
    points: [
      'Search demand',
      'Ranking difficulty',
      'Search results',
      'SERP features',
      'Ranking domains',
      'Ranking page types',
      'Search intent',
      'Competitive strength',
    ],
    note: 'This helps distinguish theoretical search volume from realistic opportunity.',
  },
  {
    title: 'Intent & Opportunity Scoring',
    body: 'We classify search intent and evaluate how valuable and achievable each opportunity is. Factors can include:',
    points: [
      'Business relevance',
      'Search intent',
      'Search demand',
      'SERP competitiveness',
      'Current authority',
      'Conversion potential',
      'Content requirements',
      'Market relevance',
    ],
    note: 'This creates a more useful priority system than sorting keywords by volume alone.',
  },
  {
    title: 'Competitor & Gap Analysis',
    body: 'We compare the keyword landscape against relevant competitors. We look for:',
    points: [
      'Missing topics',
      'Keyword gaps',
      'Content gaps',
      'Competitor strengths',
      'Ranking opportunities',
      'Commercial gaps',
      'Supporting-topic opportunities',
    ],
    note: 'The final recommendations are filtered through your own business model and ranking potential.',
  },
  {
    title: 'Clustering & Page Mapping',
    body: 'Related keywords are grouped according to search intent and topic relationship. We then determine:',
    points: [
      'Which keywords belong on the same page',
      'Which require separate pages',
      'Which should support a primary topic',
      'Which URLs should be optimized',
      'Which new pages should be created',
      'Which pages may be competing unnecessarily',
    ],
    note: 'This creates a structured relationship between search demand and website architecture.',
  },
  {
    title: 'Final Review & Delivery',
    body: 'Before delivery, we review the final keyword set for:',
    points: [
      'Relevance',
      'Duplication',
      'Intent accuracy',
      'Opportunity level',
      'Page mapping',
      'Priority',
      'Market targeting',
    ],
    note: 'The final output is organized for practical use by your SEO, content, and marketing teams.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="How we work" title="How We Conduct Keyword Research">
          Our process moves from business understanding to search discovery, competitive analysis,
          clustering, mapping, and final prioritization.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                <ul className="mt-5 space-y-2 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}