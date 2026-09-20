import { SectionIntro } from '../../../Kinetic'

const ecommerceChecklist = [
  'Product and category updates',
  'Product image and content changes',
  'Checkout testing',
  'Payment gateway checks',
  'Order-flow monitoring',
  'Inventory and catalog checks',
  'Shipping integration checks',
  'Coupon and promotion functionality',
  'Form and notification checks',
  'Analytics and conversion tracking',
  'Performance monitoring during campaigns and traffic spikes',
  'Plugin, app, theme, or dependency compatibility checks',
]

export default function EcommerceMaintenance() {
  return (
    <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Revenue Protection" title="Ecommerce Website Maintenance">
          An ecommerce website needs more than regular software updates. A small technical issue can affect product discovery, checkout, payments, orders, or customer communication.
        </SectionIntro>

        <div className="mt-12 border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
          <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg mb-6">
            Our ecommerce maintenance can include:
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ecommerceChecklist.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 border border-frame-border bg-frame-muted/10 p-4">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent font-black text-xs text-frame-accent">
                  ✓
                </span>
                <span className="text-xs sm:text-sm font-medium text-frame-fg leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs sm:text-sm italic text-frame-muted-fg border-t border-frame-border pt-4">
            For WooCommerce, Shopify, Magento, or another ecommerce platform, the exact maintenance scope depends on the store architecture and connected systems.
          </p>
        </div>
      </div>
    </section>
  )
}