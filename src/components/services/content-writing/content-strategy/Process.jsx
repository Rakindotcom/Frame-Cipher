import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    number: '1',
    title: 'Discovery & Business Goal Alignment',
    description:
      'We start by understanding your business, offers, audience, market, competitors, and content goals. We identify what content needs to contribute to the wider business plan.',
  },
  {
    number: '2',
    title: 'Content Audit & Performance Review',
    description:
      'We assess your existing content to understand what is already working and where your biggest weaknesses and opportunities exist.',
  },
  {
    number: '3',
    title: 'Audience, Search & Competitor Research',
    description:
      'We study audience needs, search intent, competitive coverage, content gaps, and relevant topic opportunities.',
  },
  {
    number: '4',
    title: 'Topic Architecture & Priority Mapping',
    description:
      'We organize opportunities into pillars, clusters, page types, buyer stages, and priority levels. This is where the strategy becomes a structured content system.',
  },
  {
    number: '5',
    title: 'Briefs, Calendar & Distribution Planning',
    description:
      'We turn the strategy into practical execution materials. Depending on scope, this includes content briefs, editorial calendars, internal-linking recommendations, distribution ideas, and repurposing opportunities.',
  },
  {
    number: '6',
    title: 'Measurement, Review & Refinement',
    description:
      'After execution begins, performance data helps determine what should be improved, expanded, refreshed, or deprioritized. Content strategy should respond to evidence rather than remain fixed forever.',
  },
]

export default function Process() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Workflow" title="How We Build Your Content Strategy">
          Six stages that move from understanding what exists to deciding what happens next.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="flex flex-col bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40"
            >
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-accent">
                {step.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {step.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
