import { SectionIntro } from '../../../Kinetic'

const inputs = [
  'Business and offer information',
  'Target audience details',
  'Customer research',
  'Existing email examples',
  'Brand guidelines',
  'Preferred tone of voice',
  'Product or service information',
  'Pricing and offer details',
  'Testimonials or case studies',
  'Verified results or supporting data',
  'Previous campaign performance',
  'Email platform information',
  'Existing automation or sequence maps',
]

export default function WhatWeNeed() {
  return (
    <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Inputs" title="What We Need From You">
          Useful source information helps us make the copy more specific. Depending on the project, we may need:
        </SectionIntro>

        <ul className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {inputs.map((item) => (
            <li key={item} className="flex items-start gap-2.5 bg-[#09090B] p-5">
              <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
              <span className="text-sm font-medium leading-relaxed text-[#FAFAFA]">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-4xl border-l-2 border-[#A855F7]/40 bg-[#09090B] p-4 text-sm font-semibold leading-relaxed text-[#FAFAFA]">
          You do not need to have everything prepared before contacting us. We can identify the missing information
          during the initial project discussion.
        </p>
      </div>
    </section>
  )
}
