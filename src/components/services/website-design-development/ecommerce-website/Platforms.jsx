const platformsList = [
  {
    title: 'Shopify',
    desc: 'A strong option for merchants who want managed ecommerce infrastructure, straightforward store administration, and a broad ecosystem of apps and integrations.',
  },
  {
    title: 'WooCommerce',
    desc: 'A flexible option for businesses that want greater control over their WordPress content environment, plugins, store functionality, and customization.',
  },
  {
    title: 'Magento',
    desc: 'Suitable for larger or more complex ecommerce operations that need advanced product structures, B2B functionality, inventory requirements, or custom workflows.',
  },
  {
    title: 'Custom E-commerce Development',
    desc: 'Custom development can be appropriate when standard platforms cannot meet specific functionality, integration, performance, or scalability requirements.',
  },
]

export default function Platforms() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Centered Section Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            E-commerce Platforms We{' '}
            <span className="italic text-frame-accent">Work With.</span>
          </h2>

          <p className="text-base text-zinc-300 sm:text-lg">
            The right ecommerce platform depends on your catalog, budget, internal management needs, integrations, and future growth plans.
          </p>
        </div>

        {/* 4-Column Architectural Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platformsList.map((platform, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-8"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Platform 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {platform.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {platform.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Recommendation Note */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6 border-l-2 border-l-frame-accent">
          <p className="text-sm font-medium text-zinc-300 sm:text-base">
            We recommend a platform based on your actual business requirements rather than pushing one solution for every store.
          </p>
        </div>
      </div>
    </section>
  )
}
