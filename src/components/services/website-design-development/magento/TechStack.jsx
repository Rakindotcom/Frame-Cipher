import { SectionIntro } from '../../../Kinetic'

const stackAreas = [
  {
    tag: 'Stack 01',
    title: 'Commerce Platform',
    desc: 'Magento Open Source or Adobe Commerce based on catalog complexity, B2B requirements, integrations, and operational needs.',
  },
  {
    tag: 'Stack 02',
    title: 'Storefront',
    desc: 'Magento storefront development, custom themes, responsive interfaces, and Hyvä where it fits the project architecture.',
  },
  {
    tag: 'Stack 03',
    title: 'APIs & Integrations',
    desc: 'REST APIs, GraphQL, webhooks, and supported integration methods for connecting Magento with business systems. Adobe Commerce documents GraphQL as an important technology for modern headless implementations.',
  },
  {
    tag: 'Stack 04',
    title: 'Catalog & Data',
    desc: 'Product attributes, categories, configurable products, customer groups, pricing rules, inventory structures, and structured product data.',
  },
  {
    tag: 'Stack 05',
    title: 'Performance & Infrastructure',
    desc: 'Caching, indexing, server resources, database optimization, CDN configuration, monitoring, and performance testing based on the expected workload.',
  },
  {
    tag: 'Stack 06',
    title: 'Security & Deployment',
    desc: 'Staging environments, access controls, backups, patch testing, version management, and controlled production deployment.',
  },
]

export default function TechStack() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Systems &amp; Architecture" title="Magento Technology Stack">
          Magento development works best when the ecommerce application, storefront, integrations, data, and infrastructure are considered as one system.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {stackAreas.map((area, idx) => (
            <div key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 min-h-[220px]">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent block mb-2">
                  {area.tag}
                </span>
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
          <p className="text-sm md:text-base font-semibold text-frame-fg">
            We use the technologies required by the project instead of building the largest possible technology stack.
          </p>
        </div>
      </div>
    </section>
  )
}