const woocommerceFeatures = [
  {
    tag: 'WooCommerce 01',
    title: 'Product & Catalog Setup',
    description: 'Organize products, categories, variations, attributes, images, pricing, and stock information around how customers browse your catalog.',
  },
  {
    tag: 'WooCommerce 02',
    title: 'Checkout & Payment Integration',
    description: 'Configure checkout and supported payment gateways based on your target market, platform requirements, and business workflow.',
  },
  {
    tag: 'WooCommerce 03',
    title: 'Inventory & Order Management',
    description: 'Set up products, stock, orders, customer information, and administrative workflows around how your team manages fulfillment.',
  },
  {
    tag: 'WooCommerce 04',
    title: 'Custom WooCommerce Functionality',
    description: 'Extend WooCommerce with custom checkout features, product logic, shipping rules, subscriptions, integrations, or other functionality where required.',
  },
  {
    tag: 'WooCommerce 05',
    title: 'Product SEO & Structured Data',
    description: 'Build product and category structures with appropriate URLs, metadata, internal linking, and structured data foundations.',
  },
  {
    tag: 'WooCommerce 06',
    title: 'WooCommerce Integrations',
    description: 'Connect supported CRM, shipping, marketing, analytics, payment, and third-party systems based on project requirements.',
  },
]

export default function WooCommerceDev() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            WooCommerce{' '}
            <span className="italic text-frame-accent">Development.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Build a WordPress-powered online store around your products, customers, payment methods, and fulfillment workflow. WooCommerce can be a strong fit for businesses that want ecommerce and content management within the same WordPress environment.
          </p>
        </div>

        {/* 3-Column Grid of Features */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {woocommerceFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  {feat.tag}
                </span>
                <h3 className="mt-3 font-heading text-xl font-medium tracking-tight text-white">
                  {feat.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Callout */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 border-l-2 border-l-frame-accent">
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
            We recommend WooCommerce when its flexibility and WordPress content ecosystem provide a clear advantage for the business.
          </p>
        </div>
      </div>
    </section>
  )
}
