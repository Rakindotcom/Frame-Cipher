import { SectionIntro, PosterButton } from '../../../Kinetic'

const deliverables = [
  'Product research',
  'Buyer and use-case research',
  'Keyword research',
  'Product title',
  'Short description',
  'Full product description',
  'Benefit bullets',
  'Feature-to-benefit messaging',
  'Specification formatting',
  'Platform-specific formatting',
  'SEO recommendations',
  'Meta title and description',
  'Internal-link recommendations',
  'Product structured-data recommendations',
  'Variant copy guidance',
  'One round of revisions',
]

export default function Deliverables() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Deliverables" title="What You Receive">
          Depending on your selected scope, a Product Description Writing project can include:
        </SectionIntro>

        <ul className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 bg-frame-bg p-4 text-sm font-medium leading-relaxed text-frame-fg"
            >
              <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-frame-accent">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            The exact deliverables are confirmed before work begins, so the scope always matches what the
            catalog actually needs.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Custom Product Copy Scope &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
