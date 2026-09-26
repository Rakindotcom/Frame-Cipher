import { SectionIntro } from '../../../Kinetic'

const results = [
  'Little differentiation between competing product pages',
  'Copy that does not reflect your target customer',
  'Missed opportunities to explain product benefits',
  'Weak brand positioning',
  'Less original value on the product page',
  'A product page that feels interchangeable with competitors',
]

export default function WhyGenericFallsShort() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The manufacturer-copy problem"
          title="Why Generic Manufacturer Copy Falls Short"
        >
          Many ecommerce stores start with the product information supplied by a manufacturer. That information
          can be useful as a factual source. The problem begins when the same description is published unchanged
          across multiple retailer websites.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-2 lg:gap-8">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              The result can be
            </span>
            <ul className="mt-5 space-y-2.5">
              {results.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-fg"
                >
                  <span aria-hidden="true" className="mt-1 shrink-0 font-bold text-frame-accent">
                    &times;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              This does not mean Google automatically applies a &ldquo;duplicate content penalty.&rdquo; Similar
              or syndicated content can exist without triggering a manual penalty.
            </p>
            <p>
              The stronger concern is whether your page provides enough unique value and relevance for search
              engines and shoppers to choose it over competing pages.
            </p>
            <p>
              That is why we do not simply replace words with synonyms. We research the product, understand the
              intended buyer, and build original messaging around the verified product information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
