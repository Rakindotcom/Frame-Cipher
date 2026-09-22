import { SectionIntro } from '../../../Kinetic'

const businessTypes = [
  {
    title: 'Ecommerce & Product Brands',
    body: 'Ecommerce is a natural fit for Pinterest when products are visual, discoverable, and easy to connect with a specific need or lifestyle.',
    label: 'Campaigns can focus on',
    bullets: [
      'Product discovery',
      'Shopping Ads',
      'Product Groups',
      'Seasonal collections',
      'Dynamic retargeting',
      'Catalog creative',
      'Product-page conversions',
      'Purchase tracking',
    ],
    tail: 'The strongest setup connects catalog quality, creative, targeting, product pages, and conversion tracking rather than treating Shopping Ads as a standalone campaign.',
  },
  {
    title: 'Fashion, Beauty & Lifestyle',
    body: 'Fashion, beauty, and lifestyle customers often discover products through visual inspiration, mood boards, and saved ideas before buying.',
    label: 'Campaigns can be built around',
    bullets: [
      'Outfit inspiration',
      'Beauty routines',
      'Product use cases',
      'Seasonal collections',
      'Trends',
      'Before-and-after concepts',
      'Product benefits',
      'Lifestyle positioning',
    ],
    tail: 'Creative needs to show the product in a context that feels natural to the Pinterest experience.',
  },
  {
    title: 'Home, Weddings, Food & DIY',
    body: 'Pinterest is especially relevant to categories built around planning and inspiration, where people assemble ideas over weeks or months.',
    label: 'Relevant categories include',
    bullets: [
      'Home decor',
      'Interior design',
      'Furniture',
      'Home improvement',
      'DIY',
      'Weddings',
      'Events',
      'Food',
      'Recipes',
      'Entertaining',
    ],
    tail: 'These campaigns can combine search-oriented targeting, visual creative, seasonal planning, and relevant landing pages. The earlier the customer enters the planning process, the more important timing and creative relevance become.',
  },
  {
    title: 'Service & Visually Driven Businesses',
    body: 'Pinterest is not limited to ecommerce. Some service businesses can also use Pinterest when their service has a strong visual, project-based, or planning component.',
    label: 'Examples include',
    bullets: [
      'Interior design',
      'Wedding services',
      'Photography',
      'Beauty services',
      'Travel',
      'Home improvement',
      'Event services',
      'Creative professionals',
    ],
    tail: 'We assess category fit before recommending Pinterest as a primary acquisition channel.',
  },
]

export default function BusinessTypes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Tailored approach"
          title="Pinterest Ads Strategy for Different Business Types"
        >
          Pinterest does not fit every business in the same way. We adapt the campaign strategy
          around the way customers discover, research, save, and buy in each category.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {businessTypes.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Business type 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                {item.bullets?.length > 0 && (
                  <div className="mt-5">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                      {item.label}:
                    </span>
                    <ul className="mt-3 grid gap-2 text-xs font-semibold text-frame-fg/90 sm:grid-cols-2">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.tail && (
                  <p className="mt-5 border-t border-frame-border/60 pt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
                    {item.tail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}