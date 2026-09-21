import { SectionIntro } from '../../../Kinetic'

const platforms = [
  {
    title: 'WordPress',
    body: 'We work with WordPress websites on crawlability, indexation, redirects, canonicalization, XML sitemaps, performance, structured data, internal linking, and technical configuration.',
    note: 'We also investigate plugin conflicts, duplicate metadata, unnecessary URL variations, and other issues created by complex WordPress setups.',
  },
  {
    title: 'Shopify',
    body: 'Shopify technical SEO requires attention to products, collections, navigation, canonical signals, filters, indexation, structured data, and store architecture.',
    note: 'We focus on improving search visibility while keeping the ecommerce setup practical for your team to manage.',
  },
  {
    title: 'Webflow',
    body: 'We can optimize Webflow websites across technical architecture, metadata, redirects, sitemaps, canonical signals, performance, CMS structures, and structured data.',
  },
  {
    title: 'Wix',
    body: 'We review Wix websites for crawlability, indexation, internal linking, metadata, site structure, redirects, performance, and other technical SEO factors supported by the platform.',
  },
  {
    title: 'Magento',
    body: 'Large Magento stores can create complex crawl and indexation challenges through catalogs, filters, layered navigation, parameter URLs, duplicate pages, and large numbers of product variations.',
    note: 'We address these issues through better architecture, canonicalization, indexation controls, crawl management, structured data, and product/category optimization.',
  },
  {
    title: 'Custom Websites & Next.js',
    body: 'Custom websites allow greater technical control but also require SEO considerations during development.',
    note: 'We work with custom and Next.js websites on rendering, metadata, canonical URLs, structured data, XML sitemaps, redirects, URL architecture, indexation, JavaScript SEO, and other technical requirements.',
  },
]

export default function Platforms() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Built differently"
          title="Technical SEO for Different Platforms"
        >
          Technical SEO requirements vary by CMS, framework, hosting environment, and development
          architecture. We adapt implementation to the platform rather than applying one technical
          checklist everywhere.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Platform 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {platform.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {platform.body}
                </p>
                {platform.note && (
                  <p className="mt-4 border-l-2 border-frame-accent bg-frame-bg p-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {platform.note}
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