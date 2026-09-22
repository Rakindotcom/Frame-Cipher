import { SectionIntro } from '../../../Kinetic'

const signals = [
  'The product detail page is weak or not conversion-ready',
  'Pricing is uncompetitive or margins cannot support paid acquisition',
  'Inventory levels are too low to sustain campaign demand',
  'Reviews and ratings are below the competitive threshold',
  'The marketplace or category has limited search demand',
  'The product is not eligible for the required advertising formats',
  'Conversion tracking or marketplace data is insufficient',
  'The product has not validated product-market fit yet',
]

export default function WhenNotRight() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Honest assessment" title="When Amazon Ads May Not Be the Right Primary Investment">
          Amazon Ads is not automatically the right investment for every product or business.
        </SectionIntro>

        <div className="border-2 border-frame-border bg-frame-bg p-8 md:p-12">
          <p className="mb-8 text-sm font-bold uppercase tracking-widest text-frame-accent">
            It may be premature when
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {signals.map((signal) => (
              <li key={signal} className="flex items-start gap-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-frame-accent">
                  &#10005;
                </span>
                <span>{signal}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl border-l-2 border-frame-accent pl-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            In these situations, improving the product, listing, pricing, inventory, or marketplace
            strategy may need to happen before aggressively increasing ad spend.
          </p>
        </div>
      </div>
    </section>
  )
}