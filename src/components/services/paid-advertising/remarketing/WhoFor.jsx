import { SectionIntro } from '../../../Kinetic'

const audiences = [
  {
    title: 'Ecommerce Businesses',
    body: 'Remarketing can support the purchase journey for online stores.',
    label: 'Useful for',
    items: [
      'Product viewers',
      'Cart abandoners',
      'Checkout abandoners',
      'Past purchasers',
      'Cross-sell campaigns',
      'Dynamic product campaigns',
    ],
  },
  {
    title: 'Lead Generation Businesses',
    body: 'Service and lead-based businesses can re-engage people who showed interest without converting yet.',
    label: 'Useful for',
    items: [
      'Service-page visitors',
      'Pricing-page visitors',
      'Form abandoners',
      'Qualified leads',
      'Consultation visitors',
      'Existing prospect lists',
    ],
  },
  {
    title: 'B2B Businesses',
    body: 'Longer sales cycles often require different remarketing windows and messaging stages.',
    label: 'Remarketing can support',
    items: [
      'Content engagement',
      'Service research',
      'Lead nurturing',
      'Sales opportunity audiences',
      'Account-based follow-up where platform capabilities allow',
    ],
  },
  {
    title: 'SaaS & Subscription Businesses',
    body: 'Product-led and subscription businesses have their own remarketing opportunities.',
    label: 'Remarketing can support',
    items: [
      'Product-page visitors',
      'Trial visitors',
      'Demo visitors',
      'Trial abandoners',
      'Existing customers',
      'Upgrade campaigns',
    ],
  },
  {
    title: 'High-Consideration Products & Services',
    body: 'When customers need more time to compare, evaluate, or gain confidence, sequential remarketing can help maintain relevant brand visibility throughout the decision process.',
  },
  {
    title: 'Repeat-Purchase Businesses',
    body: 'Products with replenishment or repeat-purchase cycles benefit from campaign structures designed around customer returning.',
    label: 'Remarketing can support',
    items: [
      'Replenishment windows',
      'Cross-sell products',
      'New launches',
      'Customer offers',
      'Loyalty campaigns',
    ],
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Fit" title="Who Is Remarketing Services For?">
          Structured remarketing can serve several types of businesses and buying journeys.
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
              {audience.items && (
                <>
                  <p className="mt-5 mb-3 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                    {audience.label}
                  </p>
                  <ul className="space-y-2.5">
                    {audience.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm font-medium text-frame-muted-fg">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                        <span>{item}</span>
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