import { SectionIntro } from '../../../Kinetic'

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
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Ecommerce & Online Retail" title="WooCommerce Development">
          Build a WordPress-powered online store around your products, customers, payment methods, and fulfillment workflow. WooCommerce can be a strong fit for businesses that want ecommerce and content management within the same WordPress environment.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px md:grid-cols-2 lg:grid-cols-3">
          {woocommerceFeatures.map((feat, idx) => (
            <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{feat.tag}</span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {feat.title}
                </h3>
                <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            We recommend WooCommerce when its flexibility and WordPress content ecosystem provide a clear advantage for the business.
          </p>
        </div>
      </div>
    </section>
  )
}