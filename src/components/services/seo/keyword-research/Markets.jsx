import { SectionIntro } from '../../../Kinetic'

const marketBlocks = [
  {
    title: 'Keyword Research for Bangladeshi Businesses',
    body: 'We support Bangladeshi ecommerce brands, service businesses, B2B companies, startups, exporters, and established organizations. Research can account for:',
    points: [
      'Bangladesh-specific terminology',
      'Local commercial intent',
      'City and regional modifiers',
      'English search behavior',
      'Bangla search behavior',
      'Banglish variations',
      'Local competitors',
      'Mobile-focused search behavior',
      'National versus local search demand',
    ],
    note: 'The goal is to identify how the target audience actually searches rather than assuming that the terminology used on the website is the terminology customers use.',
  },
  {
    title: 'International Keyword Research',
    body: 'For businesses targeting international markets, we research each market according to its own search environment. This can include:',
    points: [
      'Country-specific terminology',
      'Language variations',
      'Regional spelling',
      'Local search intent',
      'Market-level competitors',
      'Search demand',
      'Commercial modifiers',
      'Localized product or service terms',
      'SERP differences',
    ],
    note: "We avoid treating direct translation as keyword research. The strategy is built around how users actually search in each target market.",
  },
  {
    title: 'Multi-Market Keyword Mapping',
    body: 'Businesses targeting several countries need keyword strategies that remain organized as the website expands. We can map:',
    points: [
      'Country-specific keywords',
      'Language versions',
      'Regional landing pages',
      'Market-specific products or services',
      'Country-level supporting content',
      'International content clusters',
    ],
    note: 'This helps prevent multiple markets from competing for the same search intent and creates a clearer structure for future expansion.',
  },
]

const tokens = [
  'Bangladesh',
  'Dhaka',
  'Bangla',
  'Banglish',
  'English search',
  'International markets',
  'Multi-market mapping',
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Markets we research" title="Bangladesh & International Markets">
          Keyword research must reflect the market where the search actually happens. Search
          terminology, language, competitors, search demand, and buying behavior can vary between
          Bangladesh and international markets. Framecipher researches these differences before
          finalizing a keyword strategy.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-3">
          {marketBlocks.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Market 0{index + 1}
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
              <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {tokens.map((token) => (
            <span
              key={token}
              className="border-2 border-frame-border bg-frame-bg px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-frame-accent"
            >
              {token}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}