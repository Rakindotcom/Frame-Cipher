import { SectionIntro } from '../../../Kinetic'

const paymentFeatures = [
  {
    title: 'Local Payment Methods',
    desc: 'For Bangladeshi merchants, we can configure supported payment methods such as bKash, Nagad, SSLCommerz, cards, and other available options based on the selected platform and gateway.',
  },
  {
    title: 'International Payments',
    desc: 'For stores targeting international customers, we can integrate suitable payment gateways based on the target market, platform, currency requirements, and gateway availability.',
  },
  {
    title: 'Cash on Delivery',
    desc: 'COD workflows can be configured where required, including order status, payment status, delivery information, and other agreed store requirements.',
  },
  {
    title: 'Courier & Delivery Integration',
    desc: 'Where supported, we can connect ecommerce stores with courier or delivery platforms to help manage shipping information, delivery status, and fulfillment workflows.',
  },
  {
    title: 'Shipping Rules & Delivery Zones',
    desc: 'Configure shipping charges, delivery areas, shipping methods, and other rules based on products, locations, order values, or business requirements.',
  },
  {
    title: 'Payment & Order Verification',
    desc: 'Payment status and order information can be connected to your store workflow so your team can process confirmed orders more efficiently.',
  },
]

export default function Payments() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Fulfillment & Payment Gateways / Zero Abandonment" title="Payments, Checkout & Delivery Integration">
          Getting a customer to the checkout page is only part of ecommerce. The payment and delivery process also needs to work reliably from purchase to fulfillment.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {paymentFeatures.map((item, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Gateway 0{index + 1}</span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
          Integration availability depends on your ecommerce platform, payment provider, courier service, API access, and project scope. We confirm compatibility before development begins.
        </p>
      </div>
    </section>
  )
}