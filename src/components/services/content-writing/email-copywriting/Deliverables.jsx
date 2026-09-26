import { SectionIntro, PosterButton } from '../../../Kinetic'

const deliverables = [
  'Audience and offer review',
  'Email objective definition',
  'Sequence or campaign strategy',
  'Subject line options',
  'Preview text',
  'Email body copy',
  'CTA development',
  'Sequence mapping',
  'Segment-aware messaging',
  'Brand voice alignment',
  'A/B copy variants where appropriate',
  'Platform-ready formatting',
  'One agreed revision round',
]

export default function Deliverables() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Deliverables" title="What You Receive">
          The exact deliverables depend on the project, but a typical engagement can include:
        </SectionIntro>

        <ul className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2.5 bg-frame-bg p-5">
              <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-frame-accent">
                ✓
              </span>
              <span className="text-sm font-medium leading-relaxed text-frame-fg">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-4xl border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-sm font-medium leading-relaxed text-frame-fg">
          For larger campaigns, the final scope can define the number of emails, sequence length, research depth,
          revision rounds, testing variants, and delivery format before work begins.
        </p>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            If you are unsure how many emails the project needs, that can be decided during the initial
            discussion.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Scope &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
