import { SectionIntro, SectionLabel } from '../../../Kinetic'

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
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Store Functionality / Operational Workflows" title="E-commerce Features & Store Functionality">
          A successful online store needs more than an attractive storefront. It needs the features that help customers shop easily and your team manage products, orders, payments, and day-to-day operations.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {storeFeatures.map((feat, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <SectionLabel className="mb-2">Feature {String(index + 1).padStart(2, '0')}</SectionLabel>
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {feat.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
          The exact functionality depends on your platform, catalog, integrations, and business workflow. We define the required features before development begins.
        </p>
      </div>
    </section>
  )
}