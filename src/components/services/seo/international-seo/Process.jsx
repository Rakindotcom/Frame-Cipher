import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Discover',
    body: 'We start by understanding your current international setup. This includes:',
    points: [
      'Existing market footprint',
      'Countries and languages',
      'Current website structure',
      'Technical setup',
      'International content',
      'Existing regional performance',
      'Business goals',
      'Expansion plans',
    ],
    note: 'This gives us a clear view of what already exists before we recommend changes.',
  },
  {
    title: 'Research',
    body: 'We research search conditions across your priority markets. This can cover:',
    points: [
      'Country-level search demand',
      'Market-specific keywords',
      'Competitive conditions',
      'Commercial intent',
      'Content opportunities',
      'Terminology differences',
      'Regional search behavior',
    ],
    note: 'Each market is evaluated on its own search environment rather than assumptions from another country.',
  },
  {
    title: 'Structure Review',
    body: 'We evaluate whether the website\u2019s international structure can support your current and future markets. This includes:',
    points: [
      'Country and language architecture',
      'URL structure',
      'Hreflang',
      'Canonicals',
      'Internal linking',
      'Sitemaps',
      'Indexation',
      'Scaling options',
    ],
    note: 'The review identifies structural constraints before content expansion happens.',
  },
  {
    title: 'Roadmap',
    body: 'We create a phased roadmap that sequences international SEO work by impact. The roadmap can cover:',
    points: [
      'Technical priorities',
      'Structure decisions',
      'Keyword mapping',
      'Content localization',
      'New content creation',
      'Internal linking',
      'Authority building',
      'Tracking setup',
      'Reporting structure',
    ],
    note: 'The plan is designed so each phase builds on the previous one.',
  },
  {
    title: 'Implement',
    body: 'We support implementation across the areas that drive the most international SEO value. This can include:',
    points: [
      'Technical SEO',
      'Site structure',
      'Regional URLs',
      'Hreflang',
      'Content localization',
      'Internal linking',
      'Authority building',
      'Market-level tracking',
    ],
    note: 'Implementation can be delivered by us or with your internal team, depending on the scope.',
  },
  {
    title: 'Measure & Scale',
    body: 'International SEO becomes more effective as market-level data improves. We track:',
    points: [
      'Country-level rankings',
      'Organic traffic',
      'Search impressions',
      'Click-through rates',
      'Indexed pages',
      'Hreflang health',
      'Technical issues',
      'Leads and conversions',
    ],
    note: 'The insights inform which markets should be expanded, optimized, or reconsidered.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Execution Framework" title="How We Approach International SEO">
          Our process moves from discovery and market research through structure review,
          implementation, and measurement. The framework is designed to scale as you add markets.
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