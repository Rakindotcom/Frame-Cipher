import { SectionIntro } from '../../../Kinetic'

const phases = [
  {
    number: '01',
    title: 'Individual Page',
    body: 'A standard website page commonly takes 3 to 5 business days from confirmed discovery and brief to final draft, depending on research and page complexity.',
  },
  {
    number: '02',
    title: 'Core Website Package',
    body: 'A homepage, About page, and several service pages typically take 1 to 2 weeks, depending on the number of pages, feedback cycles, and messaging requirements.',
  },
  {
    number: '03',
    title: 'Full Website Project',
    body: 'Larger websites commonly require 2 to 4 weeks or more, depending on page count, business complexity, research requirements, approvals, and revision scope.',
  },
  {
    number: '04',
    title: 'Specialist or Complex Projects',
    body: 'Projects involving technical subjects, multiple markets, extensive interviews, complex product information, or substantial restructuring may require additional planning.',
  },
]

export default function Timeline() {
  return (
    <section className="border-t border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Timeline &amp; delivery"
          title="Website Content Writing Timeline"
        >
          Timeline is confirmed before work begins, and a clear discovery and messaging phase can reduce
          unnecessary revisions later.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="flex flex-col justify-between bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {phase.number}
                </span>
                <h3 className="mt-5 font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
                  {phase.title}
                </h3>
                <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
                  {phase.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 border-l-2 border-[#A855F7]/40 bg-[#121214] p-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
          A clear discovery and messaging phase can reduce unnecessary revisions later because the core
          direction is established before full-page production begins.
        </p>
      </div>
    </section>
  )
}
