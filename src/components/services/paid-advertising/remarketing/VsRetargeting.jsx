import { SectionIntro } from '../../../Kinetic'

const terms = [
  {
    title: 'Retargeting',
    body: 'Advertising to people based on previous interactions such as website visits, product views, or engagement.',
  },
  {
    title: 'Remarketing',
    body: 'Re-engaging previous visitors, customers, leads, or other known audiences more broadly than one ad-set to a single visitor pool.',
  },
]

export default function VsRetargeting() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Clarity" title="Remarketing vs Retargeting">
          The terms remarketing and retargeting are often used interchangeably in paid advertising.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          In practical terms, retargeting usually refers to advertising to people based on previous
          interactions such as website visits, product views, or engagement. Remarketing is often
          used more broadly for re-engaging previous visitors, customers, leads, or other known
          audiences.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {terms.map((term) => (
            <div
              key={term.title}
              className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent"
            >
              <div className="mb-5 h-1.5 w-12 bg-frame-accent" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {term.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {term.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-8 md:p-12">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Framecipher uses Remarketing Services as the broader service term while applying the
            audience strategy that fits each platform and funnel.
          </p>
        </div>
      </div>
    </section>
  )
}