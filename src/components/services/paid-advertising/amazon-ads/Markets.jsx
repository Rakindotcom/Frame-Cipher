import { SectionIntro } from '../../../Kinetic'

const areas = [
  {
    title: 'Bangladesh',
    featured: true,
    body: 'We manage Amazon advertising for businesses based in Bangladesh selling through eligible Amazon marketplaces.',
    accent: 'Support from Dhaka for eligible marketplaces',
    items: [
      'Amazon US campaigns',
      'Amazon UK campaigns',
      'Amazon Canada campaigns',
      'Amazon Australia campaigns',
      'Amazon UAE campaigns',
      'Other eligible international marketplaces',
    ],
  },
  {
    title: 'United States',
    body: 'One of the largest and most competitive Amazon marketplaces, with strong Sponsored Products, Sponsored Brands, Display Ads, and DSP availability.',
    items: ['Competitive keyword and placement bidding', 'Managed for eligible accounts with full reporting'],
  },
  {
    title: 'United Kingdom',
    body: 'An established Amazon marketplace with high product-search volume. Sponsored Products, Sponsored Brands, and display options are managed where eligible.',
    items: ['Available for eligible products and accounts', 'Managed, optimized, and reported consistently'],
  },
  {
    title: 'Canada',
    body: 'An Amazon marketplace with growing ecommerce usage. Campaign management, optimization, and reporting are handled for eligible products and accounts.',
    items: ['Available for eligible products and accounts'],
  },
  {
    title: 'Australia',
    body: 'An Amazon marketplace with expanding availability. Sponsored and display advertising where eligible, with the same structured campaign approach.',
    items: ['Campaign management for eligible products and accounts'],
  },
  {
    title: 'UAE',
    body: 'An important market for Bangladesh-origin brands. Campaign management for relevant audience and product strategy.',
    items: ['Available for eligible products and accounts'],
  },
  {
    title: 'Other International Marketplaces',
    body: 'Other international Amazon marketplaces can be managed where account, category, and eligibility allow.',
    items: ['Available wherever a supported account and setup can be verified'],
  },
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Coverage" title="Amazon Ads Management for Bangladesh & International Marketplaces">
          Framecipher is based in Dhaka and works with businesses in Bangladesh as well as brands
          selling through international Amazon marketplaces.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Amazon advertising availability, features, and eligibility can vary by marketplace and
          advertiser type.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.title}
              className={`flex flex-col border-2 p-8 transition-colors hover:border-frame-accent ${
                area.featured
                  ? 'border-frame-accent bg-frame-accent/5'
                  : 'border-frame-border bg-frame-muted/10'
              }`}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {area.title}
                </span>
                {area.featured && (
                  <span className="whitespace-nowrap border border-frame-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-frame-accent">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">{area.body}</p>
              {area.accent && (
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-frame-accent">
                  {area.accent}
                </p>
              )}
              <ul className="mt-6 space-y-2.5 border-t border-frame-border pt-4">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-medium text-frame-muted-fg">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-8 md:p-10">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Amazon advertising features and eligibility can vary by marketplace, advertiser type,
            product category, and account status. We verify the relevant setup before recommending a
            campaign structure.
          </p>
        </div>
      </div>
    </section>
  )
}