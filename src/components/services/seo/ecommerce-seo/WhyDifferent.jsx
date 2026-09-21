import { SectionIntro } from '../../../Kinetic'

const factors = [
  {
    title: 'Buyer Intent Comes Before Traffic Volume',
    body: [
      'Not every search visitor is ready to buy. Someone searching a product name may be close to purchase, while another visitor may simply be researching options or comparing brands.',
    ],
    points: [
      'Product searches',
      'Category searches',
      'Brand searches',
      'Model-specific queries',
      'Comparison searches',
      'Research queries',
      'Educational or supporting topics',
    ],
    note: 'We map commercial and research intent to the right pages instead of chasing volume that never converts.',
  },
  {
    title: 'Large Catalogs Create Technical Complexity',
    body: [
      'A store with thousands of products can create technical issues a small website never faces. Variants, filters, pagination, duplicates, and out-of-stock pages all need controlled handling.',
    ],
    points: [
      'Duplicate product and variant pages',
      'Filtered and faceted URLs',
      'Pagination and load-more patterns',
      'Crawl budget and indexation',
      'Canonicalization and redirects',
      'JavaScript rendering',
      'Site speed and Core Web Vitals',
      'Out-of-stock and discontinued products',
      'Orphaned pages',
      'XML sitemaps and indexation signals',
      'Partial content duplication',
      'Technical errors across templates',
    ],
    note: 'A single technical decision can affect hundreds or thousands of product URLs at once.',
  },
  {
    title: 'Category Pages Often Drive Commercial Discovery',
    body: [
      'Customers frequently begin with a general search and discover products through category pages. These pages need to justify relevance to the search and help shoppers navigate toward a buying decision.',
    ],
    points: [
      'Category keyword targeting',
      'Search-intent alignment',
      'Category titles and headings',
      'Category descriptions',
      'Subcategory structure',
      'Internal linking',
      'Product discovery',
      'Metadata',
      'Breadcrumbs',
      'Supporting category content',
    ],
    note: 'We also manage keyword overlap between categories and products so important pages do not compete unnecessarily.',
  },
  {
    title: 'Product Pages Need More Than Manufacturer Copy',
    body: [
      'A product page copied from the manufacturer rarely answers the questions real buyers ask. Useful product content helps both visibility and conversion.',
    ],
    points: [
      'Product titles',
      'Meta titles and descriptions',
      'Product descriptions',
      'Headings',
      'Product attributes',
      'Image optimization',
      'Alt text',
      'Product FAQs',
      'Internal links',
      'Reviews and user-generated content',
      'Structured data',
      'Canonical signals',
    ],
    note: 'The result is a page that is relevant to search intent and useful to a shopper deciding what to buy.',
  },
]

export default function WhyDifferent() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Why it&apos;s different"
          title="Why Ecommerce SEO Is Different"
        >
          An ecommerce website can contain hundreds or thousands of URLs. Products, categories,
          variants, filters, reviews, pagination, and inventory changes can all affect organic
          search performance. That makes ecommerce SEO different from optimizing a typical
          business website. A strong strategy must consider both search visibility and the
          shopping journey.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2">
          {factors.map((factor, index) => (
            <div
              key={factor.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Factor 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {factor.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {factor.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
                <ul className="mt-5 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                  {factor.points.map((point, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
                {factor.note && (
                  <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {factor.note}
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