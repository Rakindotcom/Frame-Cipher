import { SectionIntro } from '../../../Kinetic'

const scenarios = [
  {
    title: 'Before Hiring an SEO Provider',
    body: 'An independent audit can give you a clearer picture of your current SEO condition before signing up for ongoing services. You can use the findings to understand:',
    points: [
      'Existing technical problems',
      'Content weaknesses',
      'Backlink issues',
      'Competitive gaps',
      'Missed opportunities',
      'Priority areas for future SEO work',
    ],
    note: 'This also gives you a stronger baseline for evaluating an SEO strategy.',
  },
  {
    title: 'After a Traffic or Ranking Drop',
    body: 'A sudden decline in organic traffic or rankings can have multiple causes. We investigate potential issues involving:',
    points: [
      'Indexation',
      'Technical changes',
      'Content changes',
      'Search intent',
      'Algorithm-related fluctuations',
      'Lost backlinks',
      'Competitor improvements',
      'Website migrations',
      'Internal linking',
      'Cannibalization',
    ],
    note: 'The objective is to identify evidence-based explanations rather than assume every ranking drop has the same cause.',
  },
  {
    title: 'Before a Website Redesign or Migration',
    body: 'Redesigns and migrations can change URLs, templates, internal links, technical settings, and content. An audit before launch can identify:',
    points: [
      'Important existing URLs',
      'Ranking pages',
      'Redirect requirements',
      'Canonical issues',
      'Metadata changes',
      'Internal-link dependencies',
      'Indexation risks',
      'Content that should be preserved',
    ],
    note: 'This gives your development team a clearer SEO baseline before major changes go live.',
  },
  {
    title: "When Traffic Isn't Turning Into Leads",
    body: 'A website can receive organic traffic without generating enough business value. We review whether:',
    points: [
      'The right pages attract traffic',
      'Search intent matches your offer',
      'Landing pages support conversions',
      'Calls to action are clear',
      'Important conversion events are tracked',
      'Commercial pages receive enough organic visibility',
      'Traffic comes from the right queries and markets',
    ],
    note: 'An SEO audit should connect search performance with business outcomes, not stop at rankings.',
  },
  {
    title: "When Content Isn't Producing Rankings",
    body: 'Publishing more content does not automatically create more organic growth. We assess:',
    points: [
      'Keyword targeting',
      'Search intent',
      'Content depth',
      'Content quality',
      'Topic coverage',
      'Internal linking',
      'Cannibalization',
      'Content overlap',
      'Outdated pages',
      'Missing supporting content',
      'Competitor content gaps',
    ],
    note: 'The objective is to identify whether existing content needs improvement, consolidation, new internal links, or a different search strategy.',
  },
  {
    title: 'Before Launching a New Website',
    body: 'A pre-launch SEO audit can identify problems before search engines encounter them. We can review:',
    points: [
      'Site architecture',
      'URL structure',
      'Metadata',
      'Headings',
      'Indexation controls',
      'Sitemaps',
      'Canonicals',
      'Structured data',
      'Mobile performance',
      'Internal linking',
      'Redirect plans',
      'Analytics and Search Console setup',
    ],
    note: 'Fixing issues before launch is often simpler than repairing them after visibility has already been affected.',
  },
  {
    title: 'When Expanding Into New Markets',
    body: 'Adding countries or languages introduces another layer of SEO complexity. We can audit:',
    points: [
      'Country and language targeting',
      'International site structure',
      'Hreflang',
      'Canonicals',
      'Regional URLs',
      'Localization',
      'Country-level competitors',
      'International internal linking',
      'Market-level visibility',
    ],
    note: 'This helps identify structural problems before international expansion creates a much larger technical footprint.',
  },
]

export default function WhenToAudit() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="When it helps most" title="When Should You Get an SEO Audit?">
          An SEO audit is most useful when you need to understand the cause of a problem before
          investing in more SEO work.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Scenario 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                <ul className="mt-5 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
                {item.note && (
                  <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.note}
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