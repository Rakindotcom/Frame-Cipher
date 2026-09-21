import { SectionIntro } from '../../../Kinetic'

const marketBlocks = [
  {
    title: 'SEO Audits for Bangladeshi Businesses',
    body: 'We audit websites for Bangladeshi ecommerce brands, service businesses, B2B companies, startups, and established organizations. Depending on the website, we can evaluate:',
    points: [
      'Technical SEO and mobile performance',
      'Local and national search visibility',
      'Bangladesh-specific keyword targeting',
      'Content and search intent',
      'Competitor positioning',
      'Conversion tracking',
      'Ecommerce SEO issues',
      'Website redesign and migration risks',
    ],
    note: 'The goal is to identify the issues that may be limiting organic visibility, traffic quality, leads, or sales in the Bangladesh market.',
  },
  {
    title: 'SEO Audits for International Markets',
    body: 'Websites targeting international audiences require additional market-level analysis. We can review:',
    points: [
      'Country-specific keyword targeting',
      'International competitors',
      'Regional search visibility',
      'Localization quality',
      'Country and language architecture',
      'Hreflang implementation',
      'International internal linking',
      'Market-specific content gaps',
      'Regional technical issues',
    ],
    note: 'This helps determine whether your website is properly structured for the markets you want to reach and whether important SEO opportunities are being missed.',
  },
]

const tokens = ['Bangladesh', 'Dhaka', 'USA', 'UK', 'UAE', 'Australia', 'Canada', 'Other regions']

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Markets we audit" title="Bangladesh & International Markets">
          SEO problems do not look the same in every market. Search behavior, competitors, keyword
          usage, website expectations, and conversion patterns can vary between Bangladesh and
          international markets. Framecipher adapts the audit scope to the target market, business
          model, website structure, and growth objectives instead of applying the same checklist to
          every website.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2">
          {marketBlocks.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
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
              {item.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-bg p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.note}
                </p>
              )}
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