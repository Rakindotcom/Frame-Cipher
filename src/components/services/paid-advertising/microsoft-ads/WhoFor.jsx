import { SectionIntro } from '../../../Kinetic'

const audiences = [
  {
    title: 'B2B & Professional Services',
    body: 'B2B companies can benefit from the combination of search intent and professional audience signals.',
    items: [
      'SaaS companies',
      'Consulting firms',
      'Technology businesses',
      'Agencies',
      'Professional services',
      'Business solutions',
      'Enterprise-focused services',
    ],
  },
  {
    title: 'Ecommerce & Retail',
    body: 'Product businesses can use Microsoft Search and Shopping to reach users actively researching products. Ecommerce performance depends on product demand, feed quality, market availability, tracking, pricing, and landing-page experience.',
    items: [],
  },
  {
    title: 'High-Consideration Purchases',
    body: 'Microsoft Ads can be relevant when customers research before making a decision.',
    items: [
      'Software',
      'Business services',
      'Technology',
      'Education',
      'Financial products',
      'Professional services',
      'High-value products',
    ],
  },
  {
    title: 'International Businesses',
    body: 'Microsoft Ads may be more relevant in some international markets than others. We assess the expected search demand and audience size for the actual market rather than assuming the same opportunity exists everywhere.',
    items: [],
  },
  {
    title: 'Businesses Already Running Google Ads',
    body: 'Microsoft Ads can also serve as an additional search channel for businesses that already have a mature Google Ads strategy. In these cases, the objective is usually to identify incremental demand and additional conversions rather than simply duplicate the same account.',
    items: [],
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Fit" title="Who Is Microsoft Ads Management For?">
          Microsoft Ads can make sense for businesses that have measurable search demand in their
          target market and can benefit from another acquisition channel.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="flex flex-col border-2 border-frame-border bg-frame-muted/10 p-8 transition-colors hover:border-frame-accent"
            >
              <div className="mb-5 h-1.5 w-12 bg-frame-accent" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {audience.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {audience.body}
              </p>
              {audience.items.length > 0 && (
                <>
                  <p className="mt-6 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                    This can be useful for
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {audience.items.map((item) => (
                      <li
                        key={item}
                        className="border border-frame-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-frame-muted-fg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}