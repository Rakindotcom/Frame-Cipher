const businessModels = [
  {
    title: 'B2C E-commerce',
    desc: 'Direct-to-consumer stores designed around product discovery, fast checkout, promotions, customer accounts, and repeat purchases.',
  },
  {
    title: 'B2B E-commerce',
    desc: 'Stores for businesses that may need account-based pricing, bulk orders, quote requests, approval workflows, or custom purchasing processes.',
  },
  {
    title: 'Multi-Vendor Marketplaces',
    desc: 'Platforms where multiple sellers manage products and customers purchase from different vendors through one marketplace.',
  },
  {
    title: 'Subscription Commerce',
    desc: 'Stores supporting recurring products, memberships, subscriptions, or scheduled purchases where the selected platform supports the required workflow.',
  },
  {
    title: 'Digital Products',
    desc: 'Online stores for software, courses, downloadable products, memberships, licenses, and other non-physical products.',
  },
  {
    title: 'Omnichannel & Retail Businesses',
    desc: 'Ecommerce websites that need to work alongside physical stores, POS systems, inventory systems, or other sales channels where supported.',
  },
]

export default function Models() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Centered Section Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            E-commerce Solutions for{' '}
            <span className="italic text-frame-accent">Different Business Models.</span>
          </h2>

          <p className="text-base text-zinc-300 sm:text-lg">
            Not every online store works the same way. The right website structure depends on what you sell, who you sell to, and how customers purchase from you.
          </p>
        </div>

        {/* 3-Column Architectural Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {businessModels.map((model, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {model.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {model.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Platform Strategy Note */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6 border-l-2 border-l-frame-accent">
          <p className="text-sm font-medium text-zinc-300 sm:text-base">
            We recommend the platform and architecture based on your business model rather than forcing every store into the same ecommerce setup.
          </p>
        </div>
      </div>
    </section>
  )
}
