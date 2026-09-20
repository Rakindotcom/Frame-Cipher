import { SectionIntro } from '../../../Kinetic'

const whyShopifyBenefits = [
  {
    title: 'Managed Ecommerce Infrastructure',
    desc: 'Shopify manages much of the underlying platform infrastructure, allowing merchants to focus more on products, customers, merchandising, and ecommerce operations.',
  },
  {
    title: 'Merchant-Friendly Store Management',
    desc: 'Online Store 2.0 gives merchants flexible sections, blocks, templates, and dynamic sources that make many routine storefront changes easier to manage without code.',
  },
  {
    title: 'Large App & Integration Ecosystem',
    desc: 'Shopify can connect with a wide range of business tools and can be extended through apps, APIs, app extensions, and custom development.',
  },
  {
    title: 'International Selling',
    desc: 'Shopify Markets supports market-specific experiences involving currencies, languages, pricing, products, domains, and other regional settings.',
  },
  {
    title: 'B2B Ecommerce',
    desc: 'Shopify provides native B2B functionality for supported plans, including company structures, catalogs, pricing, payment terms, and wholesale workflows. Additional capabilities are available through Shopify Plus.',
  },
  {
    title: 'Room for Custom Development',
    desc: 'When native Shopify features or standard apps are not enough, stores can be extended through custom apps, APIs, Functions, theme extensions, and custom storefronts.',
  },
]

export default function WhyShopify() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Commercial Scalability" title="Why Shopify Works for Modern Ecommerce">
          Shopify is useful for businesses that want managed ecommerce infrastructure without taking responsibility for traditional server management, while still having room for customization through themes, apps, APIs, and supported development tools.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {whyShopifyBenefits.map((item, idx) => (
            <article key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30">
              <div>
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent block mb-2">
                  Benefit 0{idx + 1}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                {item.desc}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs sm:text-sm italic text-frame-muted-fg">
          Shopify works best when its managed infrastructure and extensibility match the way your business operates.
        </p>
      </div>
    </section>
  )
}