import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Business, Site & Goal Discovery',
    body: 'We begin by understanding:',
    points: [
      'Your business model',
      'Target audience',
      'Primary markets',
      'Important products or services',
      'Organic traffic goals',
      'Conversion goals',
      'Current SEO challenges',
      'Recent website changes',
    ],
    note: 'This prevents the audit from becoming a generic checklist disconnected from your business.',
  },
  {
    title: 'Access & Data Collection',
    body: 'Where available, we collect the data needed for a meaningful audit. This may include:',
    points: [
      'Website access',
      'Google Search Console',
      'Google Analytics',
      'Sitemap information',
      'Backlink data',
      'Keyword data',
      'Competitor information',
      'Platform details',
      'Previous SEO reports',
    ],
    note: 'The exact data requirements depend on the audit scope.',
  },
  {
    title: 'Technical Crawl & Manual Validation',
    body: 'Automated crawls help identify large numbers of technical conditions quickly. We then manually review important findings to determine:',
    points: [
      'Whether the issue is real',
      'Which pages are affected',
      'Whether it matters',
      'What caused it',
      'What should be done next',
    ],
    note: 'This combination reduces the risk of treating automated warnings as equally important problems.',
  },
  {
    title: 'On-Page, Content & Keyword Analysis',
    body: 'We evaluate important pages against search intent, competitors, keyword targeting, and content quality. The review can identify:',
    points: [
      'Weak page targeting',
      'Missing content',
      'Cannibalization',
      'Overlapping pages',
      'Thin content',
      'Poor metadata',
      'Weak internal linking',
      'Unclear search intent',
    ],
    note: 'The focus is on improving the pages that can contribute most to organic growth.',
  },
  {
    title: 'Backlink & Competitor Analysis',
    body: 'We evaluate your backlink profile alongside the websites competing for relevant searches. This helps identify:',
    points: [
      'Authority gaps',
      'Relevant link opportunities',
      'Competitor strengths',
      'Content opportunities',
      'Keyword gaps',
      'SERP patterns',
      'Market-specific weaknesses',
    ],
    note: 'The objective is to understand your site within the competitive environment rather than in isolation.',
  },
  {
    title: 'Prioritization & Roadmap Development',
    body: 'Once the analysis is complete, findings are grouped and prioritized. We consider:',
    points: [
      'Impact',
      'Effort',
      'Business importance',
      'Urgency',
      'Dependency between tasks',
      'Technical complexity',
    ],
    note: 'This creates a practical sequence instead of a long list of disconnected recommendations.',
  },
  {
    title: 'Report & Findings Walkthrough',
    body: 'The final report brings the findings together into a structured action plan. We then walk through the key findings with you so the report is understood before implementation begins.',
    points: [],
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Execution Framework" title="How We Conduct an SEO Audit">
          Our process combines automated data collection, manual validation, competitive research,
          and business context.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.body}
                </p>
                {step.points.length > 0 && (
                  <ul className="mt-5 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                    {step.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {step.note && (
                  <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {step.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}