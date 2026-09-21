import { SectionIntro } from '../../../Kinetic'

const scenarios = [
  {
    title: 'Your Brand Rarely Appears in Relevant AI Answers',
    body: 'Your website may rank for important Google searches while your brand is rarely mentioned when users ask AI systems for recommendations, explanations, or comparisons.',
    points: [
      'We can identify the queries where your business should be relevant and assess whether your content and brand signals provide enough support for visibility.',
    ],
    note: null,
  },
  {
    title: 'AI Tools Describe Your Business Inaccurately',
    body: 'AI systems may sometimes surface incomplete, outdated, or inconsistent information about a company.',
    lead: 'We review how your:',
    points: [
      'Brand name',
      'Services',
      'Products',
      'Locations',
      'Expertise',
      'Leadership',
      'Industry associations',
      'Public information',
    ],
    note: 'are represented across relevant sources. The objective is to identify inconsistencies that could make your brand harder to understand or accurately describe.',
  },
  {
    title: 'Competitors Appear in AI Recommendations Instead of You',
    body: 'AI-generated answers may mention competitors even when your business offers a similar product or service.',
    lead: 'We analyze relevant prompts and compare:',
    points: [
      'Brand mentions',
      'Recommended businesses',
      'Frequently cited sources',
      'Content coverage',
      'Entity signals',
      'Competitive positioning',
    ],
    note: 'This helps identify where your competitors have stronger visibility or supporting evidence.',
  },
  {
    title: 'Your Content Ranks but Rarely Gets Referenced',
    body: 'Strong organic rankings do not automatically mean your content will appear in every AI-generated response.',
    lead: 'We review whether important content provides:',
    points: [
      'Clear answers',
      'Strong evidence',
      'Useful definitions',
      'Well-structured information',
      'Complete topic coverage',
      'Relevant entities',
      'Clear source attribution',
    ],
    note: 'The aim is to make valuable information easier to understand and reference while preserving a strong experience for traditional search users.',
  },
  {
    title: 'Your Brand Has Weak or Inconsistent Entity Signals',
    body: 'AI systems need to connect information about your organization across multiple sources.',
    lead: 'We review whether your brand, people, services, locations, and expertise are represented consistently across your website and relevant third-party sources. This can reveal gaps in:',
    points: [
      'Organization information',
      'Author identity',
      'Service descriptions',
      'Business details',
      'Brand references',
      'External profiles',
      'Structured data',
    ],
    note: null,
  },
  {
    title: "You're Expanding Into AI-Driven Search",
    body: 'AI search is becoming another discovery layer alongside traditional search, social platforms, marketplaces, and direct traffic.',
    lead: 'Businesses planning for this shift can benefit from establishing:',
    points: [
      'Clear entity information',
      'Strong topical coverage',
      'Useful answer-focused content',
      'Credible external references',
      'Consistent brand information',
      'A repeatable AI visibility measurement process',
    ],
    note: 'The earlier these foundations are built, the easier it is to evaluate what is working as AI search continues to evolve.',
  },
]

export default function WhenNeed() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="When this applies" title="When Does Your Business Need AI Search Optimization?">
          AI search optimization becomes especially useful when traditional rankings no longer
          tell the complete story of how your brand is discovered.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {scenarios.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 md:p-8"
            >
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Scenario 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
              {item.lead && (
                <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg">
                  {item.lead}
                </p>
              )}
              <ul className="mt-6 space-y-2.5 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
              {item.note && (
                <p className="mt-5 border-l-2 border-frame-accent p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}