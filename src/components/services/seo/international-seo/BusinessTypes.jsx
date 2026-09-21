import { SectionIntro } from '../../../Kinetic'

const businessTypes = [
  {
    title: 'Ecommerce & Retail Brands',
    body: 'International ecommerce SEO can cover:',
    points: [
      'Country-specific product demand',
      'Localized category pages',
      'Regional product terminology',
      'Currency and pricing information',
      'Product availability',
      'Shipping information',
      'Product and category architecture',
      'International product content',
      'Regional internal linking',
      'Market-specific buying intent',
    ],
    note: 'For larger stores, we also consider how country and language variations affect crawlability, indexation, duplication, catalog management, and product-page scalability.',
  },
  {
    title: 'SaaS & Technology Companies',
    body: 'SaaS businesses often sell the same core product across multiple markets while adapting their messaging around local needs and search behavior. International SEO can support:',
    points: [
      'Country-specific search demand',
      'Product-led content',
      'Localized landing pages',
      'Market-specific use cases',
      'Industry content',
      'Pricing localization',
      'Regional terminology',
      'Competitor analysis',
      'Commercial comparison content',
    ],
    note: 'The goal is to scale international content without creating thin regional pages that offer little unique value.',
  },
  {
    title: 'B2B & Professional Services',
    body: 'B2B search behavior can vary significantly between countries. We research local terminology, service expectations, industries, buying journeys, and search intent for each market. SEO can focus on:',
    points: [
      'Service pages',
      'Industry pages',
      'Market pages',
      'Commercial queries',
      'Informational content',
      'Thought leadership',
      'Case studies',
      'Lead-generation content',
    ],
    note: 'The structure is built around how buyers in each market discover, compare, evaluate, and contact providers.',
  },
  {
    title: 'Manufacturers & Exporters',
    body: 'Manufacturers and exporters often need international SEO across multiple products, industries, and countries. We can build strategies around:',
    points: [
      'Product terminology',
      'Technical specifications',
      'Export markets',
      'B2B search intent',
      'Industry keywords',
      'Regional demand',
      'Distributor searches',
      'Buyer searches',
      'Country-specific content',
    ],
    note: 'For Bangladeshi manufacturers and exporters, this can support international market expansion while keeping the existing local presence clear and technically separate from new market targeting.',
  },
  {
    title: 'Multi-Location Businesses',
    body: 'Businesses operating across multiple countries may need international SEO alongside country- or location-level search strategies. We can evaluate:',
    points: [
      'Country pages',
      'Regional service pages',
      'Branch information',
      'Local contact details',
      'Market-specific content',
      'Country-level search signals',
      'Internal linking between regional locations',
    ],
    note: 'The structure should distinguish genuine market differences without creating large numbers of low-value pages.',
  },
]

export default function BusinessTypes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Built around your business" title="International SEO for Different Business Types">
          International SEO strategies vary by business model. The way an ecommerce brand expands
          is different from how a SaaS company, manufacturer, or professional service business
          enters a new market.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessTypes.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Business Type 0{index + 1}
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