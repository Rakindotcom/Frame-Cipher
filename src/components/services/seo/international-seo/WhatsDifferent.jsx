import { SectionIntro } from '../../../Kinetic'

const factors = [
  {
    title: 'Every Market Has Different Search Demand',
    body: [
      'People in different countries do not always search for the same product, service, or solution in the same way.',
      'Search volume, terminology, competition, seasonality, and commercial intent can vary by market. Even when the language is the same, the words and phrases people use may differ.',
    ],
    groups: [
      {
        label: 'We evaluate:',
        points: [
          'Country-level search demand',
          'Keyword variations',
          'Commercial and transactional intent',
          'Informational search behavior',
          'Regional terminology',
          'Spelling differences',
          'Seasonal patterns',
          'SERP differences',
          'Competitor visibility',
          'Content opportunities',
        ],
      },
    ],
    note: 'This helps determine which existing pages can be adapted, which pages require deeper localization, and where entirely new content is justified.',
  },
  {
    title: 'One Site Can Serve Multiple Countries or Languages',
    body: [
      'International websites can use different structures depending on the business model, target markets, technical resources, existing authority, and long-term expansion plans.',
    ],
    groups: [
      {
        label: 'Common approaches include:',
        points: [
          'Country-code top-level domains',
          'Country or language subdirectories',
          'Subdomains',
          'Language directories',
          'Country-language combinations',
        ],
      },
      {
        label: 'There is no universal structure that works for every business. We consider:',
        points: [
          'Number of target markets',
          'Number of languages',
          'Existing domain authority',
          'Brand structure',
          'Technical resources',
          'Content requirements',
          'Migration complexity',
          'Maintenance requirements',
          'Future expansion plans',
        ],
      },
    ],
    note: 'The goal is to choose a structure that is clear for users, manageable for your team, and scalable as new markets are added.',
  },
  {
    title: 'Technical Signals Must Align Across Markets',
    body: [
      'International SEO becomes more complex when regional and language versions send inconsistent signals.',
      'Canonical URLs, hreflang annotations, XML sitemaps, internal links, redirects, indexation rules, and localized content should support the same targeting strategy.',
    ],
    groups: [
      {
        label: 'We review how these elements work together across:',
        points: [
          'Regional URLs',
          'Language versions',
          'Hreflang',
          'Canonicals',
          'Internal links',
          'XML sitemaps',
          'Robots directives',
          'Indexation',
          'Redirects',
          'Structured data',
          'Page performance',
        ],
      },
    ],
    note: 'The objective is to create a clear relationship between international versions so search engines can better understand which pages serve which audiences.',
  },
  {
    title: 'Local Authority Matters in Each Target Market',
    body: [
      'A website can have strong overall authority and still face different competitive conditions in another country.',
      'Local competitors may have stronger market-specific content, more relevant industry coverage, established publications, or stronger relationships within their market.',
    ],
    groups: [
      {
        label: 'Our international authority strategy can include:',
        points: [
          'Country-specific backlink research',
          'Relevant industry publications',
          'Regional digital PR',
          'Local outreach',
          'Competitor backlink analysis',
          'Market-specific content promotion',
          'Relevant partnerships and resource opportunities',
        ],
      },
    ],
    note: 'The focus is on building relevant authority around the markets and topics that support your growth strategy.',
  },
]

export default function WhatsDifferent() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Why it&apos;s different" title="What Makes International SEO Different">
          International SEO introduces challenges that a single-market website may never face. One
          website can serve different countries, languages, currencies, search behaviors, and
          competitive environments at the same time.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          {factors.map((factor, index) => (
            <div
              key={factor.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Factor 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {factor.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {factor.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
                {factor.groups.map((group, gIdx) => (
                  <div key={gIdx} className="mt-4">
                    {group.label && (
                      <p className="text-sm font-bold text-frame-fg">{group.label}</p>
                    )}
                    <ul className="mt-2.5 space-y-2 border-t-2 border-frame-border/60 pt-3 text-xs md:text-sm font-medium text-frame-fg/90">
                      {group.points.map((point, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {factor.note && (
                  <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {factor.note}
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