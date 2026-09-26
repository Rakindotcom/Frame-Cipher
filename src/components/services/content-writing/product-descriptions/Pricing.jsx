import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Standard Product Description',
    price: '৳800/SKU',
    for: 'Individual products and smaller catalogs',
    scope: 'Research, feature-to-benefit copy, one platform format',
    timeline: '2–3 business days',
    cta: 'Start With This Scope',
    features: [
      'Product research',
      'Buyer-focused copy',
      'Feature-to-benefit translation',
      'One platform format',
      'One revision round',
      'Basic duplicate-content risk review',
    ],
  },
  {
    name: 'Bulk Catalog Package — 50+ SKUs',
    tag: 'Volume rate',
    price: '৳600/SKU',
    for: 'Larger ecommerce catalogs',
    scope: 'Standard scope at volume pricing with catalog prioritization',
    timeline: 'Scheduled in agreed batches',
    cta: 'Discuss Your Catalog',
    features: [
      'Everything in the standard scope',
      'Catalog prioritization',
      'Volume-based per-SKU pricing for 50+ SKUs',
      'Batch delivery on an agreed schedule',
      'Product-copy guidelines for larger catalogs',
    ],
  },
  {
    name: 'Additional Platform Formatting',
    tag: 'Add-on',
    price: '৳200/SKU per platform',
    for: 'Multi-platform sellers',
    scope: 'Adaptation of approved copy for another platform',
    timeline: 'Added to the existing project timeline',
    cta: 'Add Another Platform',
    note: 'Applied on top of a product-description scope.',
    features: [
      'Adaptation of approved product copy',
      'Platform-specific structure and length',
      'Marketplace field formatting',
      'Consistent core product facts across listings',
    ],
  },
  {
    name: 'Custom Catalog Project',
    tag: 'Custom scope',
    price: 'Custom Quote',
    for: 'Large or specialized catalogs',
    scope: 'Scope based on catalog size, complexity, and research needs',
    timeline: 'Custom schedule after scoping',
    cta: 'Request a Custom Quote',
    features: [
      'Product-copy guidelines',
      'Category-specific structures',
      'Brand voice rules',
      'Required product fields',
      'Benefit-mapping rules',
      'Formatting standards',
      'Review procedures',
    ],
  },
]

const separate = [
  'Additional SEO deliverables',
  'Marketplace optimization',
  'Product uploads',
  'Translations',
  'Photography',
  'Design',
  'Development',
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Pricing & packages" title="Product Description Writing Pricing">
          Pricing depends on the number of SKUs, research depth, product complexity, platform requirements, and
          whether additional SEO deliverables are included.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, index) => (
            <article
              key={pkg.name}
              className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40"
            >
              <div>
                <div className="mb-3 flex min-h-[22px] items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Tier 0{index + 1}
                  </span>
                  {pkg.tag && (
                    <span className="border-2 border-frame-border px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                      {pkg.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg md:text-sm">
                  {pkg.for}
                </p>

                <div className="mt-6 border-y-2 border-frame-border/60 py-5">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Starting Price
                  </span>
                  <div className="mt-1 font-heading text-xl font-bold tracking-tight text-frame-fg md:text-2xl">
                    {pkg.price}
                  </div>
                </div>

                <p className="mt-4 text-xs font-medium leading-relaxed text-frame-fg md:text-sm">
                  {pkg.scope}
                </p>

                <ul className="mt-5 space-y-2.5 text-xs font-medium leading-relaxed text-frame-fg/90 md:text-sm">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span aria-hidden="true" className="font-bold text-frame-accent">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {pkg.note && (
                  <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                    {pkg.note}
                  </p>
                )}
              </div>

              <div className="mt-7 border-t-2 border-frame-border pt-4">
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                  Typical Timeline
                </span>
                <span className="mt-1 block text-xs font-semibold leading-relaxed text-frame-fg md:text-sm">
                  {pkg.timeline}
                </span>
                <div className="mt-5">
                  <PosterButton href="/contact" variant="outline" className="w-full">
                    {pkg.cta}
                  </PosterButton>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-[1.4fr_0.6fr]">
          <div className="bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Scoped separately
            </span>
            <h3 className="mt-3 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
              What Is Not Included in the Per-SKU Rates
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {separate.map((item) => (
                <li
                  key={item}
                  className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg">
              Prices shown are starting references. The final proposal confirms scope, pricing, revisions, and
              delivery.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6 bg-frame-accent/10 p-7 md:p-8">
            <p className="text-sm font-medium leading-relaxed text-frame-fg">
              Not sure which option fits your catalog? Send us the SKU count, the platforms involved, and what
              needs to improve.
            </p>
            <div>
              <PosterButton href="/contact" className="w-full">
                Get a Free Quote &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
