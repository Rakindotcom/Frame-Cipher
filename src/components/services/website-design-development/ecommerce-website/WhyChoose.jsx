import { SectionIntro, PosterButton } from '../../../Kinetic'

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
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Strategic Value / Revenue Architecture" title="Why Choose Frame Cipher for E-commerce Development" align="center">
          Stores built to generate sustainable revenue, handle peak checkout volumes, and adapt to your operational growth.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((adv, idx) => (
            <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Pillar 0{idx + 1}</span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {adv.title}
                </h3>
                <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {adv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <PosterButton href="/contact">Request a Custom Quote &rarr;</PosterButton>
        </div>
      </div>
    </section>
  )
}