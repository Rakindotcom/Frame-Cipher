import { SectionIntro } from '../../../Kinetic'

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
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Platform Decision Framework" title="Shopify vs WooCommerce vs Magento">
          The right ecommerce platform depends on catalog complexity, customization requirements, B2B needs, technical ownership, integrations, budget, and how the business wants to manage the store after launch.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[720px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/40">
              <tr>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Shopify</th>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">WooCommerce</th>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Magento / Adobe Commerce</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm font-medium">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                  <td className="p-5 md:p-6 font-bold text-frame-fg">{row.factor}</td>
                  <td className={`p-5 md:p-6 ${row.highlight === 'shopify' ? 'font-bold text-frame-accent' : 'text-frame-fg'}`}>
                    {row.shopify}
                  </td>
                  <td className="p-5 md:p-6 text-frame-muted-fg">{row.woocommerce}</td>
                  <td className="p-5 md:p-6 text-frame-muted-fg">{row.magento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RECOMMENDATION SCENARIOS */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {platformRecommendations.map((card, i) => (
            <div
              key={i}
              className={`border-2 p-6 sm:p-8 bg-frame-bg ${
                card.accent ? 'border-frame-accent' : 'border-frame-border'
              }`}
            >
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-frame-fg">
                {card.platform}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs sm:text-sm italic text-frame-muted-fg">
          We recommend the platform based on the project rather than forcing every business into the same technology.
        </p>
      </div>
    </section>
  )
}