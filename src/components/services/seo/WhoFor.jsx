import { SectionIntro } from '../../Kinetic'

const audiences = [
  {
    title: 'Businesses With Low Organic Traffic',
    body: 'If your website receives little search traffic, we can identify whether the issue comes from technical limitations, keyword targeting, content coverage, authority, or search demand.',
  },
  {
    title: 'Businesses With Traffic but Few Leads',
    body: 'Traffic alone does not guarantee business growth. We can review search intent, landing pages, content relevance, user experience, and conversion paths to identify where organic visitors may be dropping out.',
  },
  {
    title: 'New Websites & New Businesses',
    body: 'New websites need a search strategy from the beginning. We can help establish keyword targeting, site architecture, technical foundations, content priorities, and indexing requirements before organic visibility becomes harder to build.',
  },
  {
    title: 'Websites That Have Lost Rankings',
    body: 'A ranking decline can have multiple causes. We investigate the available evidence before recommending recovery work.',
  },
  {
    title: 'Businesses Entering New Markets',
    body: 'Businesses expanding into new countries, cities, or customer segments need search strategies built around the new market rather than simply duplicating existing pages.',
  },
  {
    title: 'Businesses Scaling Ecommerce',
    body: 'Growing stores often face more complex problems around product architecture, filters, indexation, category pages, internal linking, and content.',
  },
  {
    title: 'Teams That Need SEO Strategy & Execution',
    body: 'If you have an internal marketing or development team, we can provide strategy, audits, recommendations, implementation support, or ongoing SEO execution based on your needs.',
  },
]

const businessTypes = [
  {
    title: 'Local & Small Businesses',
    body: 'We focus on service-area searches, local landing pages, Google Business Profile optimization, Google Maps visibility, reviews, citations, service pages, and conversion paths such as calls, forms, and messaging.',
  },
  {
    title: 'Ecommerce Businesses',
    body: 'Ecommerce SEO focuses on products, categories, commercial search terms, technical architecture, buyer-focused content, internal linking, and product discovery.',
  },
  {
    title: 'B2B & Corporate Websites',
    body: 'B2B searches often involve longer research journeys. We can build visibility around services, solutions, industries, use cases, technical questions, comparison searches, and other topics that support buyers before a sales conversation.',
  },
  {
    title: 'SaaS & Startups',
    body: 'SaaS businesses often compete with established websites for valuable searches. We can focus on realistic keyword opportunities, product-led content, comparison pages, solution pages, technical SEO, and scalable content structures.',
  },
  {
    title: 'International Businesses',
    body: 'International businesses need more than translated pages. We align keyword research, localization, architecture, technical signals, and market-specific content with each target market.',
  },
]

export default function WhoFor() {
  return (
    <div className="border-t-2 border-frame-border bg-frame-bg text-frame-fg">
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Who we help"
            title="Who Is Our SEO Service For?"
          >
            Our SEO services can support businesses at different stages of search growth.
          </SectionIntro>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item, index) => (
              <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
                <div>
                  <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Industry application"
            title="SEO for Different Business Types"
          >
            SEO should reflect how your business sells, how customers search, and what the
            website needs to achieve.
          </SectionIntro>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map((type, index) => (
              <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Business Type 0{index + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {type.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {type.body}
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