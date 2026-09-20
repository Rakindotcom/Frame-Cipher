import { SectionIntro } from '../../../Kinetic'

const seoFoundations = [
  {
    title: 'Product & Category Architecture',
    desc: 'We structure categories, subcategories, product pages, and internal links so shoppers and search engines can understand how products relate to each other.',
  },
  {
    title: 'Product Schema & Rich Results',
    desc: 'Relevant structured data can be implemented for product information such as price, availability, reviews, and other supported attributes.',
  },
  {
    title: 'Canonical URLs & Duplicate Content',
    desc: 'Variant-heavy stores can generate multiple URLs for similar content. We consider canonicalization and URL handling where required to reduce unnecessary duplication.',
  },
  {
    title: 'Faceted Navigation',
    desc: 'Filters and sorting can create large numbers of URL combinations. We consider indexation and crawl behavior when implementing ecommerce filtering.',
  },
  {
    title: 'Sitemap & Indexation',
    desc: 'XML sitemaps, indexing controls, and important technical settings are reviewed as part of the website structure.',
  },
  {
    title: 'Image & Performance Optimization',
    desc: 'Product images are optimized where possible, while responsive layouts and performance considerations help create a faster shopping experience.',
  },
  {
    title: 'Product Feeds & Search Platforms',
    desc: 'Where relevant, we can prepare ecommerce product data for tools such as Google Merchant Center based on your platform and project scope.',
  },
  {
    title: 'Redesign & SEO Preservation',
    desc: 'When rebuilding an existing store, we review existing URLs, valuable product/category content, redirects, rankings, and other SEO assets before changing the structure.',
  },
]

export default function SeoReady() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Product Indexation & Schema / Organic Commerce" title="SEO-Ready E-commerce Website Development">
          Ecommerce SEO requires more than adding keywords to product descriptions. Product catalogs create unique technical challenges around categories, variants, filters, duplicate URLs, structured data, and indexation. We build the store with an SEO-ready foundation so future search and content campaigns have a stronger technical base.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {seoFoundations.map((pillar, idx) => (
            <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">SEO Pillar 0{idx + 1}</span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6">
          <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
            <strong className="text-frame-fg uppercase tracking-wider">Please Note:</strong> A technically strong ecommerce website does not guarantee rankings or sales. Search visibility depends on content quality, competition, authority, user experience, and ongoing SEO work.
          </p>
        </div>
      </div>
    </section>
  )
}