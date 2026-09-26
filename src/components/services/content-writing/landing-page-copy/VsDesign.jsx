import { SectionIntro, PosterButton } from '../../../Kinetic'

const columns = [
  {
    label: 'This Service',
    title: 'Landing Page Copywriting',
    highlight: true,
    points: [
      'We write the message, structure, and conversion-focused content for the page.',
      'The focus is the offer, the audience, the traffic source, the objections, and the primary conversion goal.',
      'The page copy is one part of the complete landing page experience.',
    ],
  },
  {
    label: 'Related Service',
    title: 'Landing Page Design &amp; Development',
    highlight: false,
    points: [
      'Design covers layout, visual hierarchy, typography, imagery, and how the page is structured on screen.',
      'Development covers responsiveness, performance, forms, tracking, and implementation.',
      'Design and development decisions influence how the copy is actually experienced.',
    ],
  },
]

export default function VsDesign() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope"
          title="Landing Page Copywriting vs. Landing Page Design &amp; Development"
        >
          Copy, design, and development solve different problems. Knowing which one is missing helps avoid
          unnecessary work.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {columns.map((column) => (
            <article
              key={column.title}
              className={
                column.highlight
                  ? 'flex flex-col bg-frame-accent/10 p-7 md:p-8'
                  : 'flex flex-col bg-frame-bg p-7 md:p-8'
              }
            >
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-muted-fg">
                {column.label}
              </span>
              <h3
                className={
                  column.highlight
                    ? 'mt-3 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-accent md:text-xl'
                    : 'mt-3 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl'
                }
                dangerouslySetInnerHTML={{ __html: column.title }}
              />
              <ul className="mt-5 space-y-2.5">
                {column.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-fg"
                  >
                    <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            The strongest landing pages are usually built when copy, design, and development work together. If
            you only need the copy, we can deliver the copy. If you need the complete page, that can be scoped
            separately.
          </p>
          <div className="shrink-0">
            <PosterButton href="/services/website-design-development/landing-pages" variant="outline">
              Explore Landing Page Development &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
