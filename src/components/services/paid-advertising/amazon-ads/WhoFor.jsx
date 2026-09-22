import { SectionIntro } from '../../../Kinetic'

const audiences = [
  {
    title: 'Amazon-First Brands',
    body: 'Brands whose primary ecommerce channel is Amazon can use structured advertising management to improve product visibility, acquisition, and campaign efficiency.',
  },
  {
    title: 'Private Label & Branded Products',
    body: 'Private-label and branded products can benefit from product-level targeting, keyword discovery, Sponsored Brands, Brand Stores, and broader audience strategies where eligible.',
  },
  {
    title: 'Ecommerce Brands Expanding to Amazon',
    body: 'Brands already selling through their own websites can use Amazon as an additional sales channel while keeping external acquisition and Amazon advertising strategy connected.',
  },
  {
    title: 'Multi-Marketplace Sellers',
    body: 'Businesses selling across Amazon marketplaces can use market-specific campaign structures, budgets, products, and messaging rather than applying one identical setup everywhere.',
  },
  {
    title: 'Brands With Existing Amazon Sales',
    body: 'For mature accounts, the opportunity may be less about simply launching ads and more about improving what is already running.',
    items: [
      'Scaling winning products',
      'Reducing wasted spend',
      'Expanding keyword coverage',
      'Improving product targeting',
      'Managing profitability',
      'Supporting new product launches',
      'Expanding into new marketplaces',
    ],
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Fit" title="Who Is Amazon Ads Management For?">
          Structured Amazon advertising management can fit several types of brands and sellers.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="flex flex-col border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent"
            >
              <div className="mb-5 h-1.5 w-12 bg-frame-accent" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {audience.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {audience.body}
              </p>
              {audience.items && (
                <ul className="mt-6 space-y-2.5 border-t border-frame-border pt-4">
                  {audience.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-medium text-frame-muted-fg">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}