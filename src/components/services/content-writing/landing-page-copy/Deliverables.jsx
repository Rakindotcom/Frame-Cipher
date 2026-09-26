import { SectionIntro } from '../../../Kinetic'

const deliverables = [
  {
    number: '01',
    title: 'Research &amp; Messaging Brief',
    body: [
      'A summary of the audience, offer, traffic source, key benefits, objections, and messaging direction used for the page.',
    ],
  },
  {
    number: '02',
    title: 'Complete Landing Page Copy',
    body: [
      'The full written page, including the hero section, supporting sections, and closing call to action.',
    ],
  },
  {
    number: '03',
    title: 'CTA &amp; Microcopy Recommendations',
    body: [
      'Recommended call to action wording, button text, and microcopy where the conversion depends on clarity at the moment of action.',
    ],
  },
  {
    number: '04',
    title: 'Section Structure',
    body: [
      'A recommended section order with the purpose of each section, so the page can be built without guesswork.',
    ],
  },
  {
    number: '05',
    title: 'SEO-Aware Recommendations',
    body: [
      'Suggestions for heading structure, on-page phrasing, and internal linking where they support the campaign goal.',
    ],
  },
  {
    number: '06',
    title: 'Revision &amp; Final Delivery',
    body: [
      'The agreed revision round, followed by final delivery in a format that is easy for your team, designer, or developer to use.',
    ],
  },
]

export default function Deliverables() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Deliverables" title="What You Receive With Your Landing Page Copy">
          The final scope depends on the package, but the standard deliverables are designed to be handed
          directly to a designer or developer.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => (
            <article key={item.number} className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                {item.number}
              </span>
              <h3
                className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{item.body[0]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
