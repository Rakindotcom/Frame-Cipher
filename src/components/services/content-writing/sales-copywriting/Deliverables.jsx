import { SectionIntro, PosterButton } from '../../../Kinetic'

const deliverables = [
  'Audience and offer research',
  'Buyer and objection analysis',
  'Value proposition development',
  'Sales messaging direction',
  'Persuasion structure',
  'Headline and hook options',
  'Main sales copy',
  'Benefit and offer messaging',
  'Proof integration',
  'Objection-handling copy',
  'CTA strategy',
  'Format-specific adaptation',
  'One agreed revision round',
  'Final copy prepared for implementation',
]

export default function Deliverables() {
  return (
    <section className="border-y border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Deliverables" title="What You Receive">
          The exact deliverables depend on the project, but a typical sales-copy engagement can include:
        </SectionIntro>

        <ul className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 bg-[#09090B] p-4 text-sm font-medium leading-relaxed text-[#FAFAFA]"
            >
              <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-[#A855F7]">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 border-l-2 border-[#A855F7]/40 bg-[#121214] p-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
          For larger projects, we can define the deliverables, research depth, number of pages or assets,
          revision scope, and timeline before writing begins.
        </p>

        <div className="mt-8 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            The scope is agreed before drafting, so the argument is built for the format you actually need.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Scope &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
