import { SectionIntro } from '../../../Kinetic'

const paragraphs = [
  'A single strategy session typically wraps within 2 weeks of starting, including discovery and the walkthrough.',
  'Fractional advisory and ongoing consulting arrangements run month-to-month or on a quarterly basis, with regular check-ins rather than a fixed end date.',
  'Team training and enablement engagements vary more, depending on how much internal capability needs to be built and how many people are involved, this gets scoped individually based on your team\u2019s starting point.',
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Realistic expectations" title="Timeline / Duration">
          Strategy engagements have different shapes, so timelines depend on the model you choose.
        </SectionIntro>

        <div className="max-w-4xl space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}