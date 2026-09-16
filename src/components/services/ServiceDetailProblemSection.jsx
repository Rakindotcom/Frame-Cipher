import { InversionCard, SectionIntro } from '../Kinetic'

export default function ServiceDetailProblemSection({ landing }) {
  if (!landing?.problems?.length) return null

  return (
    <section className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[95vw] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="sticky top-28 self-start">
          <SectionIntro eyebrow="Search intent" title="The problems this page is built to solve.">
            {landing.problemIntro}
          </SectionIntro>
        </div>

        <div className="grid bg-frame-border gap-px md:grid-cols-2">
          {landing.problems.map((problem, index) => (
            <InversionCard key={problem.title} title={problem.title} number={String(index + 1).padStart(2, '0')}>
              <p>{problem.text}</p>
            </InversionCard>
          ))}
        </div>
      </div>
    </section>
  )
}
