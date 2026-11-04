import React from 'react'

const whyMagentoWorks = [
  {
    tag: '01',
    title: 'Large & Structured Catalogs',
    desc: 'Magento provides extensive control over products, categories, attributes, pricing structures, and catalog organization for businesses managing complex product ranges.',
  },
  {
    tag: '02',
    title: 'B2B Commerce',
    desc: 'For businesses with company accounts, customer-specific pricing, shared catalogs, quote workflows, or other wholesale requirements, Adobe Commerce B2B provides dedicated capabilities.',
  },
  {
    tag: '03',
    title: 'Multi-Store & Multi-Region Operations',
    desc: 'Magento can support multiple websites, stores, and store views within a broader commerce architecture for different brands, regions, customer segments, or localized storefronts.',
  },
  {
    tag: '04',
    title: 'Complex Integrations',
    desc: 'Magento can operate as the ecommerce layer connecting product, inventory, customer, fulfillment, payment, ERP, CRM, PIM, and other business systems.',
  },
  {
    tag: '05',
    title: 'Multiple Inventory Sources',
    desc: 'Magento inventory architectures can support multiple stock sources and fulfillment locations when the business operates across warehouses, stores, or other inventory locations.',
  },
  {
    tag: '06',
    title: 'Custom Ecommerce Workflows',
    desc: 'When standard storefront functionality does not meet requirements, Magento can be extended through modules, APIs, integrations, custom frontend development, and supported extensions.',
  },
]

export default function WhyMagento() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Why Magento Works for{' '}
            <span className="italic text-frame-accent">Complex Ecommerce.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Magento becomes more valuable when ecommerce requirements extend beyond a simple product catalog and standard checkout.
          </p>
        </div>

        {/* 6 Advantage Cards */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {whyMagentoWorks.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between gap-6 p-7 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02] lg:flex-row lg:items-start lg:gap-12"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent block mb-2">
                  {item.tag}
                </span>
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Takeaway Card */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm md:text-base font-normal leading-relaxed text-zinc-400">
            The goal is not to make every ecommerce project more complicated. It is to use Magento when the business actually benefits from this level of control.
          </p>
        </div>
      </div>
    </section>
  )
}
