const storeFeatures = [
  {
    title: 'Product Catalog & Variations',
    desc: 'Organize products into clear categories with images, pricing, descriptions, attributes, variants, stock status, and related products. The structure is planned around how customers browse and search your catalog.',
  },
  {
    title: 'Product Search & Filtering',
    desc: 'Help shoppers find the right products quickly with relevant search, categories, filters, sorting, and navigation based on your catalog.',
  },
  {
    title: 'Shopping Cart & Checkout',
    desc: 'Build a clear path from product selection to purchase with cart management, shipping options, coupons, order summaries, and a checkout experience designed to reduce unnecessary friction.',
  },
  {
    title: 'Customer Accounts & Order Tracking',
    desc: 'Where required, customers can create accounts, view order history, manage details, and track order progress through the selected ecommerce platform.',
  },
  {
    title: 'Inventory & Order Management',
    desc: 'Configure product stock, variants, low-stock handling, order processing, and administrative workflows around how your business manages inventory and fulfillment.',
  },
  {
    title: 'Promotions & Discounts',
    desc: 'Support promotional pricing, coupon codes, sale campaigns, discount rules, and other ecommerce offers based on the platform and business requirements.',
  },
  {
    title: 'Reviews & Product Content',
    desc: 'Product reviews, ratings, FAQs, related products, and other content elements can help shoppers make more confident purchase decisions.',
  },
  {
    title: 'Analytics & Ecommerce Reporting',
    desc: 'Connect your store with suitable analytics and reporting tools so you can monitor traffic, product performance, customer behavior, and conversion activity.',
  },
]

export default function Features() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Centered Section Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            E-commerce Features &amp;{' '}
            <span className="italic text-frame-accent">Store Functionality.</span>
          </h2>

          <p className="text-base text-zinc-300 sm:text-lg">
            A successful online store needs more than an attractive storefront. It needs the features that help customers shop easily and your team manage products, orders, payments, and day-to-day operations.
          </p>
        </div>

        {/* 4-Column Architectural Grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {storeFeatures.map((feat, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Feature {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {feat.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Workflow Note Banner */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6 border-l-2 border-l-frame-accent">
          <p className="text-sm font-medium text-zinc-300 sm:text-base">
            The exact functionality depends on your platform, catalog, integrations, and business workflow. We define the required features before development begins.
          </p>
        </div>
      </div>
    </section>
  )
}
