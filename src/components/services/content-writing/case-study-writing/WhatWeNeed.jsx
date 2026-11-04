import { SectionIntro } from '../../../Kinetic'

const inputs = [
  'Access to the relevant client or customer',
  'Basic project background',
  'Information about the original challenge',
  'Details about the solution or work performed',
  'Relevant performance data',
  'Internal stakeholder access where necessary',
  'Customer approval contact',
  'Any confidentiality requirements',
  'Existing project documentation where available',
]

export default function WhatWeNeed() {
  return (
    <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Inputs" title="What We Need From You">
          You do not need to write the case study yourself. We can handle the research and writing process, but
          access to the right information is essential. Typically, we need:
        </SectionIntro>

        <ul className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {inputs.map((item) => (
            <li key={item} className="flex items-start gap-2.5 bg-[#09090B] p-5">
              <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-[#A855F7]">
                ✓
              </span>
              <span className="text-sm font-medium leading-relaxed text-[#FAFAFA]">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-4xl border-l-2 border-[#A855F7]/40 bg-[#09090B] p-4 text-sm font-semibold leading-relaxed text-[#FAFAFA]">
          If some information cannot be publicly disclosed, we can structure the case study around the
          information you are permitted to share.
        </p>
      </div>
    </section>
  )
}
