import { AutoLinks } from '../../../seo/AutoLinks'
import PosterButton from '../../../home/PosterButton'

const whyChooseUs = [
  {
    title: 'One In-House Team',
    desc: 'Strategy, product UX, development, payment integration, and technical implementation stay under one team, creating clearer communication from planning through launch.',
  },
  {
    title: 'Built Around Your Catalog and Buyers',
    desc: 'We start with how your products are organized and how customers make purchase decisions. The store structure follows those behaviors instead of a generic template.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    desc: 'We work with Shopify, WooCommerce, Magento, and custom development based on project requirements. We recommend the approach that fits your catalog, operations, budget, and growth plans.',
  },
  {
    title: 'Local & International Commerce Experience',
    desc: 'For Bangladesh-based merchants, we can account for local payments and ecommerce workflows. For international stores, we consider the target market, payment requirements, and platform capabilities.',
  },
  {
    title: 'Conversion-Focused Development',
    desc: 'Product pages, navigation, cart, checkout, mobile UX, and calls to action are designed around reducing friction between product discovery and purchase.',
  },
  {
    title: 'Transparent Review Process',
    desc: 'You review important stages of strategy, architecture, design, and development before we move forward, so the final store does not come as a surprise at launch.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-6">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white max-w-full break-words">
                Why Merchants Choose{' '}
                <span className="italic text-frame-accent">Frame Cipher.</span>
              </h2>

              <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
                Stores built to generate sustainable revenue, handle peak checkout volumes, and adapt to your operational growth.
              </p>

              {/* Performance / Accountability Metric Card */}
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2">
                <span className="font-mono text-3xl font-medium text-white sm:text-4xl">
                  100%
                </span>
                <span className="block font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Store &amp; Inventory Ownership
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  You own all store templates, custom code, product databases, and gateway credentials upon final handover.
                </p>
              </div>

              <div className="pt-2">
                <PosterButton href="/contact" variant="accent">
                  Request a Custom Quote
                </PosterButton>
              </div>
            </div>
          </div>

          {/* Scrolling Right Column (7 cols): Editorial Divided Rows */}
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08] lg:col-span-7">
            {whyChooseUs.map((adv, idx) => (
              <div
                key={idx}
                className="group py-8 transition-colors duration-200 hover:bg-white/[0.02]"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs font-semibold text-frame-accent">
                    0{idx + 1}
                  </span>
                  <div className="space-y-3">
                    <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                      {adv.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                      <AutoLinks currentPath="/services/website-design-development/ecommerce-website" allowed={["/services/website-design-development/custom-development"]}>
                        {adv.desc}
                      </AutoLinks>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
