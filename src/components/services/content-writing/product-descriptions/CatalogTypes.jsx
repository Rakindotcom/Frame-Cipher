import { SectionIntro } from '../../../Kinetic'

const types = [
  {
    title: 'Fashion & Lifestyle Products',
    lead: 'Copy can focus on:',
    bullets: [
      'Material',
      'Fit',
      'Style',
      'Occasion',
      'Comfort',
      'Care',
      'Sizing',
      'Design details',
    ],
  },
  {
    title: 'Beauty & Personal Care',
    lead: 'Copy can focus on:',
    bullets: [
      'Product purpose',
      'Ingredients provided by the brand',
      'Intended use',
      'Skin or hair concerns where appropriate',
      'Application instructions',
      'Product format',
      'Verified product benefits',
    ],
    note: 'We avoid unsupported medical or performance claims.',
  },
  {
    title: 'Electronics & Accessories',
    lead: 'Copy can emphasize:',
    bullets: [
      'Compatibility',
      'Specifications',
      'Connectivity',
      'Included components',
      'Use cases',
      'Dimensions',
      'Power requirements',
      'Key differentiators',
    ],
  },
  {
    title: 'Home & Consumer Products',
    lead: 'Descriptions can focus on:',
    bullets: [
      'Practical use',
      'Materials',
      'Dimensions',
      'Capacity',
      'Setup',
      'Maintenance',
      'Intended environment',
    ],
  },
  {
    title: 'B2B & Technical Products',
    lead: 'Technical products often require more precise copy. We can structure descriptions around:',
    bullets: [
      'Specifications',
      'Applications',
      'Compatibility',
      'Operating requirements',
      'Materials',
      'Technical benefits',
      'Industries or use cases',
    ],
    note: 'Technical claims are written from the information supplied or verified during research.',
  },
]

export default function CatalogTypes() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Catalog types"
          title="Product Descriptions for Different Catalog Types"
        >
          What a buyer needs to know depends on the product category. The emphasis changes even when the
          underlying research process stays the same.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {types.map((type) => (
            <article key={type.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <div>
                <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {type.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{type.lead}</p>
                <ul className="mt-4 space-y-2">
                  {type.bullets.map((item) => (
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
              </div>

              {type.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {type.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
