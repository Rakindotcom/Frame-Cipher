import { SectionIntro } from '../../../Kinetic'

const marketBlocks = [
  {
    title: 'AI Search Optimization for Bangladeshi Businesses',
    body: 'Bangladeshi businesses may need to establish stronger visibility around:',
    points: [
      'Local businesses',
      'Ecommerce brands',
      'Professional services',
      'B2B companies',
      'Export businesses',
      'Expert-led brands',
      'Local and national search queries',
    ],
    closing:
      'We assess how the business is described across its website and relevant external sources, then identify opportunities to improve visibility and accuracy within AI-driven search.',
  },
  {
    title: 'International AI Search Optimization',
    body: 'For businesses targeting markets outside Bangladesh, we research how AI search visibility varies by:',
    points: [
      'Country',
      'Language',
      'Search intent',
      'Competitor',
      'Product or service',
      'Market expectations',
      'Source ecosystem',
    ],
    closing:
      'This helps identify whether the same brand information remains useful and accurate across different markets.',
  },
  {
    title: 'Multi-Market AI Visibility',
    body: 'International businesses may need separate visibility testing for different countries and languages.',
    lead: 'We can compare:',
    points: [
      'Brand mentions',
      'Competitor presence',
      'Frequently cited sources',
      'Query coverage',
      'Regional content gaps',
      'Market-specific opportunities',
    ],
    closing:
      'This provides a clearer picture of where AI visibility is strong and where further work may be needed.',
  },
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Markets we serve" title="Bangladesh & International Markets">
          AI search behavior varies by language, market, industry, and query type. Framecipher
          provides AI Search Optimization for businesses in Bangladesh and international markets,
          adapting research and implementation to the audience and geographic markets being
          targeted.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-3">
          {marketBlocks.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col border-2 border-frame-border bg-frame-muted/30 p-7 md:p-8"
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
              <p className="mt-5 border-l-2 border-frame-accent p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.closing}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}