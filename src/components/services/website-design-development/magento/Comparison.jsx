import { SectionIntro } from '../../../Kinetic'

const comparisonData = [
  {
    factor: 'Large Catalogs',
    magento: 'Strong fit for complex catalog structures',
    shopify: 'Strong for many ecommerce stores',
    woocommerce: 'Strong with the right architecture',
  },
  {
    factor: 'B2B Workflows',
    magento: 'Strong, especially with Adobe Commerce B2B',
    shopify: 'Supported through platform features and apps',
    woocommerce: 'Often requires additional extensions',
  },
  {
    factor: 'Multi-Store Operations',
    magento: 'Strong for complex multi-site structures',
    shopify: "Supported through Shopify's ecosystem",
    woocommerce: 'Possible with additional architecture',
  },
  {
    factor: 'Custom Development',
    magento: 'High flexibility',
    shopify: "Strong within Shopify's framework",
    woocommerce: 'High flexibility within WordPress',
  },
  {
    factor: 'Integrations',
    magento: 'Strong for complex system integrations',
    shopify: 'Broad app ecosystem',
    woocommerce: 'Broad plugin ecosystem',
  },
  {
    factor: 'Infrastructure',
    magento: 'More technical responsibility',
    shopify: 'More managed',
    woocommerce: 'Depends on hosting and implementation',
  },
  {
    factor: 'Maintenance',
    magento: 'Requires active technical management',
    shopify: 'More managed',
    woocommerce: 'Requires technical management',
  },
  {
    factor: 'Best Fit',
    magento: 'Complex, customized, B2B, or multi-store ecommerce',
    shopify: 'Businesses prioritizing managed commerce operations',
    woocommerce: 'Businesses wanting WordPress flexibility with ecommerce',
  },
]

export default function Comparison() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Platform Decision / Architecture" title="Magento vs Shopify vs WooCommerce">
          Magento is not automatically the right platform for every ecommerce business. The right choice depends on catalog complexity, B2B requirements, integrations, operational workflows, budget, maintenance requirements, and the level of control the business needs.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[680px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/40">
              <tr>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Magento / Adobe Commerce</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Shopify</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">WooCommerce</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                  <td className="p-4 md:p-6 font-bold text-frame-fg">{row.factor}</td>
                  <td className="p-4 md:p-6 text-frame-accent font-bold">{row.magento}</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">{row.shopify}</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">{row.woocommerce}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SCENARIO RECOMMENDATIONS */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Decision Path 01</span>
            <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
              When We Recommend Magento
            </h3>
            <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We consider Magento when a project has meaningful requirements around B2B pricing, complex catalogs, multiple storefronts, deep integrations, custom workflows, or greater control over the ecommerce architecture.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Decision Path 02</span>
            <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
              When We Recommend Shopify or WooCommerce
            </h3>
            <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              For smaller or less complex stores, another platform may provide the required functionality with less technical overhead. We review the actual requirements before recommending a platform.
            </p>
          </div>
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <p className="text-sm md:text-base font-bold uppercase tracking-wider text-frame-fg">
            The goal is not to sell the most powerful technology. It is to choose the architecture that fits the business.
          </p>
        </div>
      </div>
    </section>
  )
}