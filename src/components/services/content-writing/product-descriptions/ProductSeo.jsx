import { SectionIntro } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Product Search Intent & Keyword Research',
    body: [
      'We identify relevant terms based on how potential buyers search for the product. Depending on the product, this can include:',
    ],
    bullets: [
      'Product names',
      'Product types',
      'Features',
      'Materials',
      'Use cases',
      'Compatibility terms',
      'Size-related searches',
      'Problem-based searches',
      'Long-tail commercial queries',
    ],
  },
  {
    number: '02',
    title: 'Titles, Headings & Metadata',
    body: ['Where included in the project scope, we can provide recommendations or copy for:'],
    bullets: [
      'Product titles',
      'H1 headings',
      'Supporting headings',
      'Meta titles',
      'Meta descriptions',
      'Short descriptions',
    ],
    note: 'The goal is to make the product page clear for both shoppers and search engines.',
  },
  {
    number: '03',
    title: 'Internal-Link Recommendations',
    body: [
      'Relevant internal links can help shoppers discover related products, categories, guides, and supporting information. Depending on the catalog, we can recommend links between:',
    ],
    bullets: [
      'Product pages',
      'Category pages',
      'Related products',
      'Buying guides',
      'Product comparisons',
      'Supporting blog content',
    ],
  },
  {
    number: '04',
    title: 'Product Structured Data Coordination',
    body: [
      'Product structured data can help eligible ecommerce pages provide Google with product information such as price, availability, ratings, and other supported attributes. Google supports Product structured data for product snippets and merchant listing experiences. We can provide structured-data recommendations as part of an SEO-focused product-page project.',
    ],
    note: 'Implementation should be handled and validated on the website so the markup accurately represents the visible product information.',
  },
  {
    number: '05',
    title: 'Variant & Duplicate-Content Considerations',
    body: [
      'Products with multiple sizes, colors, models, or other variants need careful handling. We review whether the copy, URLs, and product relationships are being presented consistently and whether unnecessary repetition can be reduced.',
    ],
    note: 'For variant-heavy catalogs, Google provides specific guidance for ProductGroup and Product structured data.',
  },
]

export default function ProductSeo() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Product-page SEO" title="Product Page SEO Without Keyword Stuffing">
          SEO-aware product copy should help search engines understand the product without making the
          description harder for a shopper to read.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                    {block.number}
                  </span>
                  <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                    {block.title}
                  </h3>
                </div>

                {block.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

                {block.bullets && (
                  <ul className="mt-4 space-y-2">
                    {block.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm font-medium leading-relaxed text-frame-fg"
                      >
                        <span aria-hidden="true" className="mt-1 text-frame-accent">
                          &bull;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {block.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {block.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
