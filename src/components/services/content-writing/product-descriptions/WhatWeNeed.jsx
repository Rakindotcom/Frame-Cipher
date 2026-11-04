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
    <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Client inputs" title="What We Need From You">
          The more accurate the product information, the more accurate the final copy. Useful source materials
          include:
        </SectionIntro>

        <ul className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2 lg:grid-cols-4">
          {sources.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 bg-[#09090B] p-4 text-sm font-medium leading-relaxed text-[#FAFAFA]"
            >
              <span aria-hidden="true" className="mt-0.5 h-2 w-2 shrink-0 bg-frame-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2">
          <div className="bg-[#09090B] p-7 md:p-8">
            <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
              You do not need everything
            </h3>
            <p className="mt-3 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
              You do not need to provide every item above. A partial set of reliable information is often enough
              to start.
            </p>
          </div>
          <div className="bg-[#A855F7]/10 p-7 md:p-8">
            <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#A855F7] md:text-lg">
              If information is missing
            </h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-[#FAFAFA]">
              If important product information is missing, we will flag it before making claims that cannot be
              supported.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
