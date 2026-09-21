import { SectionIntro } from '../../../Kinetic'

const auditTypes = [
  {
    title: 'Ecommerce SEO Audit',
    body: 'For ecommerce websites, we can review:',
    points: [
      'Product and category architecture',
      'Faceted navigation',
      'Product and category indexation',
      'Variant URLs',
      'Duplicate product pages',
      'Out-of-stock pages',
      'Product schema',
      'Internal linking',
      'Filters',
      'Pagination where relevant',
      'Product content',
      'Commercial category targeting',
      'Ecommerce conversion tracking',
    ],
    note: 'Audits can be tailored to platforms such as Shopify, WooCommerce, Magento, or custom ecommerce systems.',
  },
  {
    title: 'Local SEO Audit',
    body: 'For businesses targeting local customers, we can review:',
    points: [
      'Google Business Profile',
      'Local landing pages',
      'NAP consistency',
      'Local keyword targeting',
      'Review signals',
      'Citation consistency',
      'Local competitors',
      'Location-page quality',
      'Internal linking',
      'Local search visibility',
    ],
    note: 'The audit can be used as a standalone diagnostic or alongside an ongoing Local SEO strategy.',
  },
  {
    title: 'International SEO Audit',
    body: 'For multi-country and multilingual websites, we can review:',
    points: [
      'Country and language targeting',
      'URL architecture',
      'Hreflang',
      'Canonicals',
      'Regional indexation',
      'International internal linking',
      'Localized content',
      'Country-specific keyword targeting',
      'Market-level competitors',
      'Regional visibility',
    ],
    note: 'This is useful for businesses expanding into markets such as the USA, UK, UAE, Australia, and other international regions.',
  },
  {
    title: 'Enterprise & Large Website Audit',
    body: 'Large websites often require deeper auditing because small structural problems can affect thousands of URLs. Enterprise audits may include:',
    points: [
      'Large-scale crawl analysis',
      'Template-level issues',
      'Indexation patterns',
      'Crawl efficiency',
      'JavaScript rendering',
      'Faceted navigation',
      'Large content inventories',
      'Internal-link architecture',
      'Migration risks',
      'Multi-market structures',
      'Log-file analysis where available',
      'Custom technical investigations',
    ],
    note: "The scope is adjusted to the site's size, platform, business goals, and technical environment.",
  },
]

export default function AuditTypes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Built around your website" title="Specialized SEO Audit Options">
          Different websites require different audit layers. We can extend the standard audit
          based on your platform, business model, market, and technical complexity.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2">
          {auditTypes.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Option 0{index + 1}
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