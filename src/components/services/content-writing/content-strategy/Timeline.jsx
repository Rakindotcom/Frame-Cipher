import { SectionIntro, PosterButton } from '../../../Kinetic'

const factors = [
  'Size of the content library',
  'Depth of research required',
  'Number of markets',
  'Number of brands',
  'Review availability',
  'Ongoing scope',
]

const cards = [
  {
    title: 'Revisions',
    text: 'The agreed number of revision rounds should be defined in the project scope before work begins. Substantial changes in scope may require a revised timeline or quotation.',
  },
  {
    title: 'Strategy Review',
    text: 'Every strategy includes a review opportunity so you can ask questions, clarify priorities, and provide feedback before execution begins. For ongoing engagements, strategy can be refined as performance data and business priorities change.',
  },
]

export default function Timeline() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Timeline, revisions & support"
          title="Timeline, Revisions &amp; Ongoing Support"
        >
          The timeline depends on the size of your existing content library and the depth of research required.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              Typical timeline
            </h3>
            <ul className="mt-5 space-y-2.5">
              {[
                'Content audit: 1–2 weeks',
                'Full strategy development: 1–2 additional weeks',
                'Ongoing strategy: reviewed according to the agreed engagement schedule',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border border-frame-border bg-frame-bg p-4 text-sm font-medium leading-relaxed text-frame-fg"
                >
                  <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-frame-accent">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              The exact timeline depends on
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {factors.map((item) => (
                <li
                  key={item}
                  className="border border-frame-border bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              A larger website, multiple markets, or a complex content operation may require additional time.
            </p>
          </div>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border">
            {cards.map((card) => (
              <article
                key={card.title}
                className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40"
              >
                <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Tell us the size of your library and how many markets you cover, and we will give you a realistic range
            rather than a generic estimate.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="outline">
              Discuss Your Timeline &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
