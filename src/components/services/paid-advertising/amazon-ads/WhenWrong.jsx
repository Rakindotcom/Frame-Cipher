import { SectionIntro } from '../../../Kinetic'

const mistakes = [
  {
    title: 'The Product Detail Page Is Part of the Ad Strategy',
    body: 'For Sponsored Products, shoppers can be taken directly to the advertised product detail page. If the listing does not communicate the product value clearly, the campaign can generate expensive traffic without enough conversions.',
    items: [
      'Product images',
      'Product title',
      'Bullet points',
      'Product description',
      'A+ Content where eligible',
      'Reviews and ratings',
      'Pricing',
      'Featured Offer eligibility',
      'Product availability',
    ],
    label: 'We review factors such as',
  },
  {
    title: 'Advertising and Organic Visibility Should Be Measured Separately',
    body: 'Advertising and organic sales can influence the same overall business performance, but Amazon\u2019s complete organic ranking system is proprietary.',
    items: [
      'We do not promise that advertising will automatically improve organic rankings',
      'We monitor paid sales, total sales, conversion performance, marketplace visibility, and product-level economics together',
    ],
  },
  {
    title: 'Featured Offer Eligibility Matters',
    body: 'Amazon states that products must be Featured Offer eligible to run sponsored advertising campaigns. Eligibility can depend on factors such as price competitiveness, inventory, shipping, and customer-service performance.',
    items: ['A bid increase cannot solve every retail-readiness problem'],
  },
  {
    title: 'Competitors Are Visible Alongside Your Product',
    body: 'Amazon shoppers can compare competing products within the same marketplace experience.',
    items: [
      'Product positioning',
      'Pricing',
      'Reviews',
      'Images',
      'Offer quality',
    ],
    label: 'That makes these important parts of advertising performance',
  },
  {
    title: 'Inventory Can Affect Advertising Performance',
    body: 'Out-of-stock products can become ineligible for advertising and create missed sales opportunities. Amazon recommends maintaining sufficient inventory when preparing products for advertising.',
    items: ['We therefore consider stock availability when planning and scaling campaigns'],
  },
]

export default function WhenWrong() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Context" title="Where Amazon Ad Accounts Commonly Go Wrong">
          One of the most common mistakes is treating Amazon like a pure traffic source.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Amazon is a marketplace. The customer sees your product, competing products, pricing,
          reviews, availability, and other purchase signals in the same shopping environment. That
          changes how advertising should be managed.
        </p>

        <div className="space-y-6">
          {mistakes.map((mistake, index) => (
            <div
              key={mistake.title}
              className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent md:p-12"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:max-w-md">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="font-heading text-3xl font-bold text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-1.5 w-10 bg-frame-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
                    {mistake.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                    {mistake.body}
                  </p>
                </div>

                {mistake.items.length > 0 && (
                  <div className="lg:w-1/2">
                    {mistake.label && (
                      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                        {mistake.label}
                      </p>
                    )}
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {mistake.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm font-medium text-frame-muted-fg">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}