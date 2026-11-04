import React from 'react'

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
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Magento vs Shopify vs{' '}
            <span className="italic text-frame-accent">WooCommerce.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Magento is not automatically the right platform for every ecommerce business. The right choice depends on catalog complexity, B2B requirements, integrations, operational workflows, budget, maintenance requirements, and the level of control the business needs.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
          <table className="w-full text-left min-w-[680px]">
            <thead className="border-b border-white/[0.08] bg-white/[0.02]">
              <tr>
                <th className="p-4 sm:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Factor</th>
                <th className="p-4 sm:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Magento / Adobe Commerce</th>
                <th className="p-4 sm:p-6 font-mono text-xs uppercase tracking-wider text-zinc-400">Shopify</th>
                <th className="p-4 sm:p-6 font-mono text-xs uppercase tracking-wider text-zinc-400">WooCommerce</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08] text-sm sm:text-base font-normal">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 sm:p-6 font-medium text-white">{row.factor}</td>
                  <td className="p-4 sm:p-6 text-frame-accent font-medium">{row.magento}</td>
                  <td className="p-4 sm:p-6 text-zinc-400">{row.shopify}</td>
                  <td className="p-4 sm:p-6 text-zinc-400">{row.woocommerce}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Scenario Recommendations */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-200 hover:border-white/[0.14]">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">01</span>
            <h3 className="mt-2 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
              When We Recommend Magento
            </h3>
            <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
              We consider Magento when a project has meaningful requirements around B2B pricing, complex catalogs, multiple storefronts, deep integrations, custom workflows, or greater control over the ecommerce architecture.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-200 hover:border-white/[0.14]">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">02</span>
            <h3 className="mt-2 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
              When We Recommend Shopify or WooCommerce
            </h3>
            <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
              For smaller or less complex stores, another platform may provide the required functionality with less technical overhead. We review the actual requirements before recommending a platform.
            </p>
          </div>
        </div>

        {/* Takeaway Card */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-zinc-300">
            The goal is not to sell the most powerful technology. It is to choose the architecture that fits the business.
          </p>
        </div>
      </div>
    </section>
  )
}
