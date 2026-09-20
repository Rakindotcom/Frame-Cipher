import { SectionIntro } from '../../Kinetic'

const platforms = [
  {
    title: 'WordPress SEO',
    body: 'We optimize WordPress websites across content structure, metadata, internal linking, indexation, performance, schema, redirects, and technical configuration.',
    note: 'Where plugins are involved, we also look for unnecessary duplication, conflicting settings, and technical configurations that can create unwanted SEO signals.',
  },
  {
    title: 'Shopify SEO',
    body: 'Shopify SEO requires attention to products, collections, navigation, canonicalization, filters, structured data, content, and indexation. We optimize ecommerce search visibility while keeping the store practical for your team to manage.',
  },
  {
    title: 'Webflow SEO',
    body: 'Webflow provides strong control over design and content, but SEO still depends on proper architecture and implementation. We can optimize metadata, CMS structures, redirects, sitemap settings, canonical signals, page performance, structured data, and content organization.',
  },
  {
    title: 'Wix SEO',
    body: 'Wix websites can achieve strong organic visibility when their structure, content, metadata, internal links, indexing settings, and technical configuration are handled correctly. We optimize Wix websites around search intent and the SEO factors relevant to their structure.',
  },
  {
    title: 'Magento SEO',
    body: 'Large Magento stores can face complex challenges involving product catalogs, layered navigation, filters, duplicate URLs, and indexation. Our SEO work can address product and category structure, crawl efficiency, canonicalization, structured data, and ecommerce-specific technical issues.',
  },
  {
    title: 'Custom Website & Next.js SEO',
    body: 'Custom websites need SEO considerations at the development level. We can work with developers on metadata, rendering, canonical URLs, structured data, XML sitemaps, redirects, URL architecture, indexation, and other technical requirements.',
  },
]

const migrationSteps = [
  {
    title: 'Website Migration SEO',
    body: 'We review existing URLs, important landing pages, rankings, traffic, metadata, internal links, and indexation before a migration.',
  },
  {
    title: 'URL & Redirect Mapping',
    body: 'Old URLs need to point to appropriate new destinations where the content has moved. We can plan redirect mappings and identify URLs that should not simply redirect to unrelated pages.',
  },
  {
    title: 'Pre-Launch SEO Checks',
    body: 'Before launch, we can review indexation controls, metadata, canonical tags, internal links, XML sitemaps, robots directives, structured data, and other important SEO elements.',
  },
  {
    title: 'Staging & Indexation Checks',
    body: 'Development and staging environments should not accidentally become indexed as production content. We check the relevant indexation controls during the launch process.',
  },
  {
    title: 'Post-Launch Monitoring',
    body: 'After launch, we monitor important URLs, redirects, indexation, crawl signals, traffic, rankings, and other available data to identify problems early.',
  },
]

export default function Platforms() {
  return (
    <div className="border-t-2 border-frame-border bg-frame-bg text-frame-fg">
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Built & implementation"
            title="Platform & CMS SEO"
          >
            SEO implementation changes according to how a website is built. The CMS, templates,
            URL structure, rendering system, and technical controls can all affect the work
            required.
          </SectionIntro>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform, index) => (
              <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent">
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
                    <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                      {platform.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Launch protection"
            title="SEO Migration & Website Launch Support"
          >
            Changing a website without protecting its existing search visibility can create
            avoidable SEO problems. We can support website launches, redesigns, CMS migrations,
            domain changes, and major structural updates with SEO requirements considered before
            and after launch.
          </SectionIntro>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {migrationSteps.map((step, index) => (
              <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
                <div>
                  <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}