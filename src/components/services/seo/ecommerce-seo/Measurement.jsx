import { SectionIntro } from '../../../Kinetic'

const measurements = [
  {
    title: 'Organic Visibility',
    intro: 'We monitor how your store appears across relevant organic searches.',
    points: [
      'Search impressions',
      'Organic visibility',
      'Indexed pages',
      'Search queries',
      'SERP presence',
      'Product visibility',
      'Category visibility',
    ],
  },
  {
    title: 'Product & Category Rankings',
    intro: 'We track priority keywords across important commercial pages. This helps identify:',
    points: [
      'Ranking improvements',
      'Ranking losses',
      'New opportunities',
      'Underperforming products',
      'Underperforming categories',
      'Keyword cannibalization',
    ],
  },
  {
    title: 'Organic Clicks & CTR',
    intro: 'Search impressions do not automatically create website visits. We monitor organic clicks and click-through rates to identify pages that may need improvements to:',
    points: [
      'Search intent alignment',
      'Page titles',
      'Meta descriptions',
      'SERP relevance',
      'Search positioning',
    ],
  },
  {
    title: 'Organic Conversions',
    intro: 'We measure what organic visitors do after reaching your store.',
    points: [
      'Product views',
      'Add-to-cart actions',
      'Checkout activity',
      'Purchases',
      'Lead submissions',
    ],
  },
  {
    title: 'Revenue & Business Outcomes',
    intro: 'Where reliable ecommerce analytics are available, we connect organic search with business performance.',
    points: [
      'Organic ecommerce revenue',
      'Revenue by landing page',
      'Top revenue-driving products',
      'Organic conversion rate',
      'Average order value',
      'Assisted conversions',
    ],
    note: 'Attribution depends on your analytics configuration and the quality of available data.',
  },
]

export default function Measurement() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Transparent tracking" title="How We Measure Ecommerce SEO Performance">
          Rankings matter, but they do not tell the entire story. We measure performance across
          the path from search visibility to business outcomes.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {measurements.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Measurement 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.intro}
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

          <div className="flex flex-col justify-between border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Reporting Principle
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Reporting supports the next decision
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Reporting focuses on relevant activities, visibility, customer actions, and
                business outcomes rather than filling reports with unnecessary metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}