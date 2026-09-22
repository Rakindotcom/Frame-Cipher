import { SectionIntro } from '../../../Kinetic'

const solutions = [
  {
    title: 'Sponsored Products',
    body: 'Sponsored Products are cost-per-click ads for individual products that can appear in shopping results and on product detail pages. They are often a core part of Amazon advertising because they connect targeting with product-level purchase intent.',
  },
  {
    title: 'Sponsored Brands',
    body: 'Sponsored Brands can feature a brand logo, headline, video, or multiple products and can direct shoppers to eligible product pages, custom landing pages, or Brand Stores. Sponsored Brands are available to eligible advertisers, including professional sellers enrolled in Amazon Brand Registry and other qualifying advertiser types. Availability varies by marketplace.',
  },
  {
    title: 'Sponsored Brands Video',
    body: 'Video can help brands demonstrate products, explain benefits, and communicate the value proposition in a more visual format. We coordinate video concepts and assets around the product, audience, placement, and campaign objective.',
  },
  {
    title: 'Amazon Display Ads',
    body: 'Amazon\u2019s current display offering includes the self-service product formerly known as Sponsored Display, now positioned as Display Ads through sponsored ads. Display advertising can reach audiences across Amazon properties and third-party destinations, depending on the campaign setup. We use Display Ads for relevant audience, remarketing, and product-discovery strategies.',
  },
  {
    title: 'Amazon DSP',
    body: 'Amazon DSP provides programmatic display and video advertising at scale. Amazon offers both self-service and managed-service options, and DSP can be used by advertisers that sell on Amazon as well as advertisers that do not. For Framecipher clients, DSP is considered when the audience strategy, budget, product portfolio, and business objectives justify a broader programmatic approach.',
  },
  {
    title: 'Amazon Brand Stores',
    body: 'Brand Stores provide a dedicated Amazon destination where eligible brands can showcase products, brand messaging, and curated shopping experiences. They can also serve as landing destinations for Sponsored Brands and display advertising campaigns. We can coordinate advertising strategy with Brand Store structure when the account requires it.',
  },
]

export default function Solutions() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Solutions" title="Amazon Advertising Solutions We Manage">
          We work across the Amazon advertising ecosystem that is available for the account,
          product, and marketplace.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Amazon&apos;s current advertising ecosystem includes sponsored ads, display advertising,
          Brand Stores, and Amazon DSP, with availability varying by marketplace and advertiser
          type.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="border-2 border-frame-border bg-frame-muted/10 p-8 transition-colors hover:border-frame-accent"
            >
              <div className="mb-5 h-1.5 w-12 bg-frame-accent" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {solution.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {solution.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}