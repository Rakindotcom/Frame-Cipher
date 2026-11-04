'use client'

import React from 'react'

const comparisonData = [
  {
    factor: 'Infrastructure',
    shopify: 'Managed platform',
    woocommerce: 'Hosting managed by the business/provider',
    magento: 'More technical infrastructure responsibility',
    highlight: 'shopify',
  },
  {
    factor: 'Ease of Management',
    shopify: 'Strong',
    woocommerce: 'Strong with the right WordPress setup',
    magento: 'Requires more technical management',
    highlight: 'shopify',
  },
  {
    factor: 'Theme Customization',
    shopify: 'Strong with Liquid and Online Store 2.0',
    woocommerce: 'Highly flexible',
    magento: 'Highly flexible',
    highlight: 'shopify',
  },
  {
    factor: 'App / Extension Ecosystem',
    shopify: 'Large Shopify ecosystem',
    woocommerce: 'Large WordPress ecosystem',
    magento: 'Strong commerce-focused ecosystem',
  },
  {
    factor: 'B2B',
    shopify: 'Native B2B capabilities with plan differences',
    woocommerce: 'Often requires extensions/custom development',
    magento: 'Strong, especially with Adobe Commerce',
  },
  {
    factor: 'Multi-Market',
    shopify: 'Strong through Shopify Markets',
    woocommerce: 'Possible with additional setup',
    magento: 'Strong for complex multi-store requirements',
    highlight: 'shopify',
  },
  {
    factor: 'Custom Development',
    shopify: 'Apps, APIs, Functions, extensions, headless',
    woocommerce: 'Plugins and custom WordPress development',
    magento: 'Modules, APIs, custom development',
  },
  {
    factor: 'Best Fit',
    shopify: 'Businesses wanting managed ecommerce infrastructure with strong customization',
    woocommerce: 'Businesses wanting WordPress + ecommerce flexibility',
    magento: 'Complex catalogs, B2B, multi-store, or deeper ecommerce architecture',
  },
]

const platformRecommendations = [
  {
    platform: 'When We Recommend Shopify',
    desc: 'Shopify is often a practical fit when managed infrastructure, merchant-friendly administration, fast deployment, a large app ecosystem, and strong storefront customization are priorities.',
    accent: true,
  },
  {
    platform: 'When We Recommend WooCommerce',
    desc: 'WooCommerce can make sense when WordPress content management is central to the business and the ecommerce requirements fit naturally within the WordPress ecosystem.',
    accent: false,
  },
  {
    platform: 'When We Recommend Magento',
    desc: 'Magento or Adobe Commerce may be more appropriate when the store requires complex catalogs, B2B workflows, multiple storefronts, or deeper ecommerce integrations.',
    accent: false,
  },
]

export default function Comparison() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Shopify vs WooCommerce{' '}
            <span className="italic text-frame-accent">vs Magento.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            The right ecommerce platform depends on catalog complexity, customization requirements, B2B needs, technical ownership, integrations, budget, and how the business wants to manage the store after launch.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
          <table className="w-full text-left min-w-[720px]">
            <thead className="border-b border-white/[0.08] bg-white/[0.02]">
              <tr>
                <th className="p-5 font-mono text-[11px] uppercase tracking-wider text-zinc-400">Factor</th>
                <th className="p-5 font-mono text-[11px] uppercase tracking-wider text-frame-accent">Shopify</th>
                <th className="p-5 font-mono text-[11px] uppercase tracking-wider text-zinc-400">WooCommerce</th>
                <th className="p-5 font-mono text-[11px] uppercase tracking-wider text-zinc-400">Magento / Adobe Commerce</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-sm">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="transition-colors hover:bg-white/[0.02]">
                  <td className="p-5 font-medium text-white">{row.factor}</td>
                  <td className={`p-5 ${row.highlight === 'shopify' ? 'font-medium text-frame-accent' : 'text-zinc-300'}`}>
                    {row.shopify}
                  </td>
                  <td className="p-5 text-zinc-400">{row.woocommerce}</td>
                  <td className="p-5 text-zinc-400">{row.magento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommendation Scenarios */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {platformRecommendations.map((card, i) => (
            <div
              key={i}
              className={`rounded-xl border p-6 sm:p-8 bg-[#121214] transition-colors hover:border-white/[0.14] ${
                card.accent ? 'border-frame-accent/40' : 'border-white/[0.08]'
              }`}
            >
              <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                {card.platform}
              </h3>
              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Takeaway Footnote */}
        <p className="mt-8 text-xs sm:text-sm italic text-zinc-400">
          We recommend the platform based on the project rather than forcing every business into the same technology.
        </p>
      </div>
    </section>
  )
}
