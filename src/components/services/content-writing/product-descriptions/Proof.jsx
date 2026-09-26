import { SectionIntro, PosterButton } from '../../../Kinetic'

const proof = [
  'Published product-page samples',
  'Before-and-after product copy',
  'Ecommerce copywriting case studies',
  'Client testimonials',
  'Approved screenshots',
  'Catalog-writing examples',
  'Verified performance results where publication is permitted',
]

export default function Proof() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Samples &amp; proof"
          title="Product Description Samples &amp; Client Proof"
        />

        <ul className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {proof.map((item) => (
            <li key={item} className="flex items-start gap-2.5 bg-frame-bg p-5">
              <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
              <span className="text-sm font-medium leading-relaxed text-frame-fg">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Examples on this page are limited to work that has been completed and approved for publication.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="outline">
              Request a Product Copy Sample &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
