import { SectionIntro } from '../../../Kinetic'

const audiences = [
  {
    title: 'Lead Generation Businesses',
    body: [
      'Google Ads can be effective for businesses where each qualified enquiry has meaningful commercial value. This includes professional services, agencies, healthcare businesses where applicable, education providers, home and local services, B2B businesses, and high-value service providers.',
      'The strategy focuses on qualified enquiries rather than maximizing form volume without considering lead quality.',
    ],
  },
  {
    title: 'Ecommerce Brands',
    body: [
      'Ecommerce campaigns need a different approach from lead generation. We can manage Search, Shopping, Performance Max, remarketing, product feeds, Merchant Center, conversion value tracking, and product-level performance.',
      'The focus is on sales and profitable growth rather than traffic alone.',
    ],
  },
  {
    title: 'Local Businesses',
    body: [
      'For local businesses, we consider geographic targeting, service areas, local search behavior, calls, enquiries, and the actual value of serving customers in specific locations.',
      'Campaign structure can be designed around single-location businesses, multi-location businesses, service-area businesses, local ecommerce, and appointment-driven businesses.',
    ],
  },
  {
    title: 'B2B & High-Value Services',
    body: [
      'B2B and high-value services often have longer sales cycles and fewer conversions than ecommerce. Campaign management may need stronger attention to lead quality, search intent, CRM stages, qualified leads, sales opportunities, offline conversion signals, and market segmentation.',
      'The objective is to connect advertising with meaningful business progression rather than treating every lead as equally valuable.',
    ],
  },
  {
    title: 'International Expansion',
    body: [
      'Businesses entering new markets need more than one campaign copied into another country. We adapt strategy around country-specific search behavior, competition, language, location targeting, currency, local offers, landing-page relevance, time zones, and market-specific conversion goals.',
      'Each market should be evaluated on its own commercial conditions rather than judged against another country\u2019s performance without context.',
    ],
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Who we help"
          title="Who Google Ads Management Is For"
        >
          The right campaign structure, tracking, and optimization approach depends on the
          business model behind the account.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-3">
          {audiences.map((item, index) => (
            <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8 transition-colors hover:border-frame-accent">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Business 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}