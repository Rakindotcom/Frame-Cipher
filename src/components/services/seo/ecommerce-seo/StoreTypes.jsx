import { SectionIntro } from '../../../Kinetic'

const storeTypes = [
  {
    title: 'Small & Growing Online Stores',
    body: 'Smaller stores usually need focused optimization rather than hundreds of individual SEO tasks. We prioritize:',
    points: [
      'Important categories',
      'Best-selling products',
      'Commercial keywords',
      'Technical foundations',
      'Internal linking',
      'Product content',
      'High-value content opportunities',
    ],
    note: 'This creates a stronger foundation as the catalog grows.',
  },
  {
    title: 'Large Product Catalogs',
    body: 'Large catalogs require scalable SEO systems. We focus on:',
    points: [
      'Catalog architecture',
      'Crawl efficiency',
      'Indexation',
      'Faceted navigation',
      'Templates',
      'Internal linking',
      'Product prioritization',
      'Category structure',
      'Duplicate management',
      'Scalable content optimization',
    ],
    note: 'The goal is to improve large sections of the catalog without treating every URL as an isolated project.',
  },
  {
    title: 'Multi-Category Ecommerce Stores',
    body: 'Stores with several product categories need clear commercial and topical organization. We structure SEO around:',
    points: [
      'Primary categories',
      'Subcategories',
      'Product groups',
      'Brand relationships',
      'Search intent',
      'Supporting content',
      'Internal links',
    ],
    note: 'This helps reduce overlap between pages targeting similar searches.',
  },
  {
    title: 'International Ecommerce Stores',
    body: 'Selling across multiple countries introduces additional SEO requirements. We can plan for:',
    points: [
      'Country-specific search intent',
      'International keyword research',
      'Regional landing pages',
      'Language targeting',
      'Hreflang implementation',
      'Country-specific content',
      'Currency and product information',
      'International site architecture',
      'Duplicate regional content',
    ],
    note: 'The right setup depends on your target countries, languages, domains, and ecommerce platform.',
  },
]

export default function StoreTypes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Built around your store" title="Ecommerce SEO for Different Store Types">
          Your catalog size, business model, and target market affect how your ecommerce SEO
          strategy should be structured.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2">
          {storeTypes.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Store Type 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
                {item.note && (
                  <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.note}
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