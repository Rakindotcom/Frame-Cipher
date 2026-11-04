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
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Centered Section Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Payments, Checkout &amp;{' '}
            <span className="italic text-frame-accent">Delivery Integration.</span>
          </h2>

          <p className="text-base text-zinc-300 sm:text-lg">
            Getting a customer to the checkout page is only part of ecommerce. The payment and delivery process also needs to work reliably from purchase to fulfillment.
          </p>
        </div>

        {/* 3-Column Architectural Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {paymentFeatures.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Gateway 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Platform Dependency Note */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6 border-l-2 border-l-frame-accent">
          <p className="text-sm font-medium text-zinc-300 sm:text-base">
            Integration availability depends on your ecommerce platform, payment provider, courier service, API access, and project scope. We confirm compatibility before development begins.
          </p>
        </div>
      </div>
    </section>
  )
}
