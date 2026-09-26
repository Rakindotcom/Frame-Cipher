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
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Inputs" title="What We Need From You">
          You do not need to write the case study yourself. We can handle the research and writing process, but
          access to the right information is essential. Typically, we need:
        </SectionIntro>

        <ul className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {inputs.map((item) => (
            <li key={item} className="flex items-start gap-2.5 bg-frame-bg p-5">
              <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-frame-accent">
                ✓
              </span>
              <span className="text-sm font-medium leading-relaxed text-frame-fg">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-4xl border-l-2 border-frame-accent bg-frame-bg p-4 text-sm font-semibold leading-relaxed text-frame-fg">
          If some information cannot be publicly disclosed, we can structure the case study around the
          information you are permitted to share.
        </p>
      </div>
    </section>
  )
}
