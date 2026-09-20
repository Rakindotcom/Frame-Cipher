import { SectionIntro } from '../../../Kinetic'

const techStack = [
  {
    name: 'Shopify Themes & Liquid',
    desc: 'Custom theme development using Shopify\'s Liquid templating language, responsive frontend development, reusable components, and structured theme architecture.',
  },
  {
    name: 'Online Store 2.0',
    desc: 'JSON templates, reusable sections, blocks, section settings, app blocks, and merchant-friendly editing managed directly through the theme editor.',
  },
  {
    name: 'Metafields & Structured Content',
    desc: 'Custom product, collection, and content data used to create flexible storefront experiences and reusable components.',
  },
  {
    name: 'Shopify APIs',
    desc: 'Admin APIs, Storefront API, webhooks, and supported integration methods for connecting Shopify with external business systems.',
  },
  {
    name: 'Shopify Functions',
    desc: 'Custom commerce logic for supported use cases such as discounts, cart validation, delivery customization, fulfillment constraints, and other platform-supported workflows.',
  },
  {
    name: 'Checkout Extensions',
    desc: 'Custom checkout experiences within the capabilities available to the store\'s Shopify plan, including checkout UI extensions on Shopify Plus.',
  },
  {
    name: 'Hydrogen & Headless Commerce',
    desc: 'Custom storefront architecture using Shopify\'s Storefront API and Hydrogen when a traditional theme is not the right frontend approach.',
  },
]

export default function TechStack() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Architecture &amp; Platform Stack" title="Shopify Technology Stack">
          Shopify development is more than configuring a theme. The right implementation depends on how the storefront, commerce data, apps, APIs, checkout, integrations, and merchant editing experience work together. Depending on the project, our Shopify development stack can include:
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-2 border-frame-border">
          {techStack.map((tech, idx) => (
            <div key={idx} className="flex flex-col justify-between bg-frame-bg p-6 sm:p-8">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                  Stack Component 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {tech.name}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 text-sm font-medium text-frame-muted-fg">
          We select the technology that solves the project requirement instead of adding complexity simply to make the technology stack look more advanced.
        </div>
      </div>
    </section>
  )
}