import { SectionIntro } from '../../../Kinetic'

const whyMagentoWorks = [
  {
    tag: 'Advantage 01',
    title: 'Large & Structured Catalogs',
    desc: 'Magento provides extensive control over products, categories, attributes, pricing structures, and catalog organization for businesses managing complex product ranges.',
  },
  {
    tag: 'Advantage 02',
    title: 'B2B Commerce',
    desc: 'For businesses with company accounts, customer-specific pricing, shared catalogs, quote workflows, or other wholesale requirements, Adobe Commerce B2B provides dedicated capabilities.',
  },
  {
    tag: 'Advantage 03',
    title: 'Multi-Store & Multi-Region Operations',
    desc: 'Magento can support multiple websites, stores, and store views within a broader commerce architecture for different brands, regions, customer segments, or localized storefronts.',
  },
  {
    tag: 'Advantage 04',
    title: 'Complex Integrations',
    desc: 'Magento can operate as the ecommerce layer connecting product, inventory, customer, fulfillment, payment, ERP, CRM, PIM, and other business systems.',
  },
  {
    tag: 'Advantage 05',
    title: 'Multiple Inventory Sources',
    desc: 'Magento inventory architectures can support multiple stock sources and fulfillment locations when the business operates across warehouses, stores, or other inventory locations.',
  },
  {
    tag: 'Advantage 06',
    title: 'Custom Ecommerce Workflows',
    desc: 'When standard storefront functionality does not meet requirements, Magento can be extended through modules, APIs, integrations, custom frontend development, and supported extensions.',
  },
]

export default function WhyMagento() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Operational Scale" title="Why Magento Works for Complex Ecommerce">
          Magento becomes more valuable when ecommerce requirements extend beyond a simple product catalog and standard checkout.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {whyMagentoWorks.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 min-h-[220px]">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent block mb-2">
                  {item.tag}
                </span>
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            The goal is not to make every ecommerce project more complicated. It is to use Magento when the business actually benefits from this level of control.
          </p>
        </div>
      </div>
    </section>
  )
}