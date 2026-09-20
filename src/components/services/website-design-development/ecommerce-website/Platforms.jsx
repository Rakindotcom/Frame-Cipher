import { SectionIntro } from '../../../Kinetic'

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
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Platform Engineering / Technology Selection" title="E-commerce Platforms We Work With">
          The right ecommerce platform depends on your catalog, budget, internal management needs, integrations, and future growth plans.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {platformsList.map((platform, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Platform 0{index + 1}</span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {platform.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {platform.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
          We recommend a platform based on your actual business requirements rather than pushing one solution for every store.
        </p>
      </div>
    </section>
  )
}