import { SectionIntro } from '../../../Kinetic'

const sources = [
  'Product specifications',
  'Manufacturer documentation',
  'Product images',
  'Existing product pages',
  'Product samples where available',
  'Brand guidelines',
  'Target customer information',
  'Customer reviews',
  'Competitor product URLs',
  'Certifications',
  'Warranty information',
  'Usage or care instructions',
]

export default function WhatWeNeed() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Client inputs" title="What We Need From You">
          The more accurate the product information, the more accurate the final copy. Useful source materials
          include:
        </SectionIntro>

        <ul className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-4">
          {sources.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 bg-frame-bg p-4 text-sm font-medium leading-relaxed text-frame-fg"
            >
              <span aria-hidden="true" className="mt-0.5 h-2 w-2 shrink-0 bg-frame-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-8">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              You do not need everything
            </h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
              You do not need to provide every item above. A partial set of reliable information is often enough
              to start.
            </p>
          </div>
          <div className="bg-frame-accent/10 p-7 md:p-8">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-accent md:text-lg">
              If information is missing
            </h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-frame-fg">
              If important product information is missing, we will flag it before making claims that cannot be
              supported.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
