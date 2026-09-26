import { SectionIntro } from '../../../Kinetic'

const platforms = [
  {
    title: 'Shopify & WooCommerce',
    body: ['We write product copy for independent ecommerce stores that need:'],
    bullets: [
      'Product titles',
      'Short descriptions',
      'Detailed descriptions',
      'Feature bullets',
      'Benefits',
      'Specifications',
      'SEO-aware copy',
      'Category-specific formatting',
    ],
  },
  {
    title: 'Amazon',
    body: [
      'Amazon listings require platform-specific formatting and compliance with applicable listing requirements. Depending on the scope, we can work on:',
    ],
    bullets: [
      'Product titles',
      'Bullet points',
      'Product descriptions',
      'Keyword-aware listing copy',
      'Benefit-led messaging',
      'Product-detail consistency',
    ],
  },
  {
    title: 'Daraz & Other Marketplaces',
    body: [
      'Marketplace listings often require concise information that works within predefined fields. We adapt product copy to the relevant marketplace structure rather than copying the website version directly.',
    ],
  },
  {
    title: 'Etsy, eBay & Other Platforms',
    body: [
      'Different marketplaces have different audiences and content conventions. We can adapt the same verified product information into platform-appropriate copy while keeping core product facts consistent.',
    ],
  },
]

export default function Platforms() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Publishing environments"
          title="Product Description Writing for Different Platforms"
        >
          The same verified product information often needs a different structure, length, and tone depending on
          where it will be published.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {platforms.map((platform) => (
            <article key={platform.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <div>
                <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                  {platform.title}
                </h3>
                {platform.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

                {platform.bullets && (
                  <ul className="mt-4 space-y-2">
                    {platform.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm font-medium leading-relaxed text-frame-fg"
                      >
                        <span aria-hidden="true" className="mt-1 text-frame-accent">
                          &bull;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
