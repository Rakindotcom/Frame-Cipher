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
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Centered Section Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            SEO-Ready E-commerce{' '}
            <span className="italic text-frame-accent">Website Development.</span>
          </h2>

          <p className="text-base text-zinc-300 sm:text-lg">
            Ecommerce SEO requires more than adding keywords to product descriptions. Product catalogs create unique technical challenges around categories, variants, filters, duplicate URLs, structured data, and indexation. We build the store with an SEO-ready foundation so future search and content campaigns have a stronger technical base.
          </p>
        </div>

        {/* 4-Column Architectural Grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {seoFoundations.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  SEO 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Legal / SEO Disclaimer Box */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7">
          <p className="text-sm font-medium leading-relaxed text-zinc-300 sm:text-base">
            <strong className="text-white uppercase tracking-wider font-mono text-xs block mb-1">
              Please Note:
            </strong>
            A technically strong ecommerce website does not guarantee rankings or sales. Search visibility depends on content quality, competition, authority, user experience, and ongoing SEO work.
          </p>
        </div>
      </div>
    </section>
  )
}
