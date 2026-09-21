import { SectionIntro } from '../../../Kinetic'

const measurements = [
  {
    title: 'Market-Level Visibility',
    intro: 'We monitor how your website appears across target markets. This includes:',
    points: [
      'Country-level search impressions',
      'Organic visibility per market',
      'Indexed pages',
      'Search queries per market',
      'SERP presence',
      'Regional content performance',
    ],
  },
  {
    title: 'Country & Language Rankings',
    intro: 'We track priority keywords within their relevant market and language versions. This helps identify:',
    points: [
      'Ranking improvements per market',
      'Ranking losses per market',
      'Wrong-version ranking issues',
      'New keyword opportunities',
      'Underperforming regional pages',
      'Keyword cannibalization across versions',
    ],
  },
  {
    title: 'Organic Clicks & CTR',
    intro: 'Impressions do not automatically create visits. We monitor organic clicks and click-through rates to identify pages that may need:',
    points: [
      'Better search intent alignment',
      'Improved page titles',
      'Improved meta descriptions',
      'Stronger localized relevance',
      'Higher search positioning',
    ],
  },
  {
    title: 'Indexation & Technical Health',
    intro: 'International websites are prone to technical issues that grow as more regions, languages, and URLs are added. We track:',
    points: [
      'Indexed page growth by market',
      'Hreflang health',
      'Canonical consistency',
      'Internal links',
      'Redirects',
      'Sitemap coverage',
      'Technical errors',
    ],
  },
  {
    title: 'Leads, Conversions & Business Outcomes',
    intro: 'Where reliable analytics are available, we connect international search activity with business performance. This can include:',
    points: [
      'Organic leads and enquiries',
      'Organic ecommerce revenue per market',
      'Organizations by country',
      'Purchases or signups per market',
      'Conversion rate by market',
      'Assisted conversions',
    ],
    note: 'Attribution depends on your analytics configuration and the quality of available data.',
  },
]

export default function Measurement() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Transparent tracking" title="How We Measure International SEO Performance">
          Rankings matter, but they do not tell the entire story across multiple countries. We
          measure performance at the market level wherever reliable data is available.
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
                International Reporting Principle
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Market-level reporting supports decisions
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Reporting focuses on the markets that matter to the business rather than a single
                combined traffic number. This makes it easier to identify where international SEO
                is gaining traction and where further work is needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}