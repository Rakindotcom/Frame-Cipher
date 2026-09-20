import { SectionIntro } from '../../../Kinetic'

const whyChooseUsPillars = [
  {
    title: 'One In-House Team',
    desc: 'Strategy, ecommerce planning, design, development, integrations, and launch support stay within one coordinated team instead of being divided across unrelated vendors.',
  },
  {
    title: 'Disciplined App Architecture',
    desc: 'We do not install an app simply because one exists for a feature. We evaluate native Shopify capabilities, theme development, apps, APIs, and custom development before choosing the implementation.',
  },
  {
    title: 'Shopify-Specific Development',
    desc: 'Our Shopify work can cover Liquid themes, Online Store 2.0, app integrations, custom apps, APIs, B2B, Shopify Plus, Markets, and advanced storefront functionality where the project requires them.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend Shopify when its managed infrastructure and ecommerce capabilities fit the project. When WooCommerce, Magento, or another platform makes more sense, we explain that before development begins.',
  },
  {
    title: 'Bangladesh + International Ecommerce',
    desc: 'We build Shopify stores for Bangladesh-based businesses and international merchants, adapting the store around market, payment, shipping, content, and customer requirements.',
  },
  {
    title: 'SEO & Conversion Built In',
    desc: 'We consider technical SEO, product structure, performance, tracking, navigation, merchandising, and checkout experience during development rather than treating them as separate add-ons.',
  },
  {
    title: 'Transparent Review Process',
    desc: 'Architecture, design, development, integrations, and testing move through defined review checkpoints so you can approve the direction before the project moves forward.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="The Framecipher Advantage" title="Why Choose Framecipher for Shopify Development" align="center">
          Shopify development is not only about launching a storefront. Theme architecture, ecommerce strategy, app selection, integrations, SEO, performance, and merchant management all affect how useful the store remains after launch.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border">
          {whyChooseUsPillars.map((pillar, idx) => (
            <article key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Pillar 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {pillar.title}
                </h3>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {pillar.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}