import { SectionIntro, PosterButton } from '../../../Kinetic'

const services = [
  {
    title: 'Ecommerce Keyword & Search Intent Mapping',
    description: 'We research keywords based on search demand, competition, commercial intent, and your product catalog. Then we map those keywords to the pages best suited to rank.',
    points: [
      'Product keywords',
      'Category keywords',
      'Brand searches',
      'Model-specific queries',
      'Long-tail searches',
      'Commercial research terms',
      'Buying guide topics',
      'Comparison queries',
      'FAQ opportunities',
    ],
    note: 'This creates a clear connection between customer searches and your ecommerce pages.',
  },
  {
    title: 'Product Page Optimization',
    description: 'We optimize priority product pages around search intent and customer needs.',
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
    note: 'We prioritize products based on search opportunity, business value, existing performance, and catalog size.',
  },
  {
    title: 'Category Page Optimization',
    description: 'Category pages often target broader commercial searches and help customers discover relevant products.',
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
      'Supporting content',
    ],
    note: 'We also look for keyword overlap between categories and products so important pages do not compete unnecessarily.',
  },
  {
    title: 'Ecommerce Technical SEO',
    description: 'Technical problems can prevent search engines from properly discovering, crawling, or indexing ecommerce pages.',
    points: [
      'Crawlability',
      'Indexation',
      'Canonicalization',
      'Duplicate content',
      'XML sitemaps',
      'Robots directives',
      'Redirects',
      'Broken links / 404s',
      'Pagination / load-more',
      'JavaScript rendering',
      'Site speed',
      'Core Web Vitals',
      'Mobile performance',
      'HTTPS and technical errors',
    ],
    note: 'Complex ecommerce stores may require SEO and development work together.',
  },
  {
    title: 'Site Architecture for Large Catalogs',
    description: 'Your ecommerce structure should make it easy for customers and search engines to understand where products belong.',
    points: [
      'Category hierarchy',
      'Subcategory structure',
      'URL patterns',
      'Product-to-category relationships',
      'Breadcrumb paths',
      'Internal linking',
      'Orphan pages',
      'Pagination',
      'Filtered URLs',
      'Product discovery paths',
    ],
    note: 'We also consider how new products and categories can be added without creating unnecessary SEO problems.',
  },
  {
    title: 'Product Schema & Rich Results',
    description: 'Structured data helps search engines understand important product information.',
    points: [
      'Products',
      'Offers',
      'Prices',
      'Availability',
      'Ratings',
      'Reviews',
      'Breadcrumbs',
    ],
    note: 'We also validate implementation and identify technical errors. Structured data can improve eligibility for enhanced search features, but it does not guarantee that Google will display rich results.',
  },
  {
    title: 'Internal Linking & Crawl Optimization',
    description: 'Internal links connect related pages and help distribute authority throughout your ecommerce site.',
    points: [
      'Categories and subcategories',
      'Categories and products',
      'Related products',
      'Buying guides and products',
      'Comparison content and commercial pages',
      'Important pages and supporting content',
    ],
    note: 'For larger catalogs, we also identify orphaned or poorly connected pages that may be difficult for search engines or shoppers to discover.',
  },
  {
    title: 'Ecommerce Content Strategy',
    description: 'Ecommerce content should support your products and customer journey.',
    points: [
      'Buying guides',
      'Product comparisons',
      'Product education',
      '\u201CBest\u201D product content',
      'How-to guides',
      'FAQs',
      'Gift guides',
      'Seasonal content',
      'Category support content',
    ],
    note: 'We then connect useful informational content with relevant product and category pages through internal linking.',
  },
  {
    title: 'Ecommerce Conversion Optimization',
    description: 'Organic traffic only creates value when visitors can move easily toward the next step.',
    points: [
      'Product page clarity',
      'Calls to action',
      'Trust signals',
      'Product discovery',
      'Mobile shopping experience',
      'Navigation',
      'Search functionality',
      'Cart entry points',
      'Checkout friction',
    ],
    note: 'We focus on practical improvements that support the journey from organic search to purchase.',
  },
  {
    title: 'Ecommerce Authority & Link Building',
    description: 'Competitive ecommerce pages may need external authority to compete for valuable searches.',
    points: [
      'Relevant industry links',
      'Product-level link opportunities',
      'Category authority',
      'Digital PR opportunities',
      'Product reviews and relevant mentions',
      'Resource-page opportunities',
      'Content-led link acquisition',
      'Brand and entity mentions',
    ],
    note: 'We prioritize relevance, quality, and long-term value rather than large volumes of low-quality links.',
  },
  {
    title: 'Google Merchant Center & Shopping Feed Optimization',
    description: 'Search SEO and product feeds serve different purposes, but both depend on accurate product information.',
    points: [
      'Product titles',
      'Descriptions',
      'Prices',
      'Availability',
      'Product identifiers',
      'Product categories',
      'Attributes',
      'Images',
      'Feed errors',
      'Product data consistency',
    ],
    note: 'Where Merchant Center support is included in your engagement, we review the product feed data that Google relies on across its shopping ecosystem.',
  },
  {
    title: 'Ongoing Ecommerce SEO Management',
    description: 'Ecommerce stores change constantly. New products, new categories, inventory shifts, seasonal demand, and market changes all call for continuous optimization.',
    points: [
      'New product optimization',
      'New category optimization',
      'Seasonal opportunities',
      'Technical monitoring',
      'Internal linking updates',
      'Content optimization',
      'Ranking analysis',
      'Organic traffic analysis',
      'Conversion tracking',
      'Revenue analysis',
      'Ongoing SEO recommendations',
    ],
    note: 'The exact monthly scope depends on your catalog size, platform, competition, and selected plan.',
  },
]

const platforms = [
  {
    title: 'Shopify SEO',
    description: 'We optimize Shopify stores around their product, collection, theme, app, and URL structures.',
    points: [
      'Product and collection optimization',
      'Shopify metadata',
      'Canonical review',
      'Duplicate URL management',
      'Collection structure',
      'Internal linking',
      'XML sitemap review',
      'Theme performance',
      'App-related SEO issues',
      'Product structured data',
      'Indexation controls',
    ],
  },
  {
    title: 'WooCommerce SEO',
    description: 'WooCommerce provides extensive flexibility, but plugins, taxonomies, attributes, filters, and themes can create SEO complexity.',
    points: [
      'Product and category optimization',
      'WooCommerce taxonomy structure',
      'SEO plugin configuration',
      'Product attributes',
      'Faceted navigation',
      'Canonicals',
      'XML sitemaps',
      'Schema',
      'Performance',
      'Internal linking',
      'Indexation management',
    ],
  },
  {
    title: 'Custom Ecommerce SEO',
    description: 'Custom ecommerce platforms often require SEO and development to work together.',
    points: [
      'Product URLs',
      'Category structures',
      'Rendering',
      'JavaScript',
      'Pagination',
      'Filters',
      'Search functionality',
      'Canonicals',
      'Structured data',
      'XML sitemaps',
      'Redirects',
      'Indexation controls',
    ],
    note: 'This approach is useful when important SEO improvements require development-level changes.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Capabilities & Scope" title="Our Ecommerce SEO Services">
          Our ecommerce SEO services cover the areas that influence how products and categories
          are discovered, crawled, indexed, ranked, and converted.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Capability 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>
                <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.points.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
                {item.note && (
                  <p className="mt-5 border-l-2 border-frame-accent bg-frame-bg p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}

          <div className="flex flex-col border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Capability 13
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Platform-Specific Ecommerce SEO
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                We optimize across the platforms we build on: Shopify, WooCommerce, and custom
                ecommerce builds.
              </p>
              <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                {['Shopify SEO', 'WooCommerce SEO', 'Custom Ecommerce SEO'].map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                    <span className="leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-2 border-frame-border bg-frame-bg">
          <div className="border-b-2 border-frame-border p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Built for your platform
            </span>
            <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Platform-Specific Ecommerce SEO
            </h3>
            <p className="mt-4 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              Different ecommerce platforms create different technical structures and SEO
              challenges. We adapt the strategy to your platform instead of applying the same
              checklist to every store.
            </p>
          </div>
          <div className="grid gap-6 p-7 lg:grid-cols-3 md:p-10">
            {platforms.map((platform) => (
              <div
                key={platform.title}
                className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent"
              >
                <div>
                  <h4 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {platform.title}
                  </h4>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {platform.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                    {platform.points.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {platform.note && (
                    <p className="mt-5 border-l-2 border-frame-accent bg-frame-bg p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                      {platform.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not sure where to start?
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Start with a free consultation
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review your store and recommend which ecommerce SEO services will have the most
              impact first.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}