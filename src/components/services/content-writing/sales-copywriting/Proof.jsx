import { SectionIntro, PosterButton } from '../../../Kinetic'

const proof = [
  'Sales page samples',
  'Before-and-after messaging',
  'Proposal examples',
  'Pitch deck excerpts',
  'VSL script samples',
  'Offer-positioning examples',
  'Client testimonials',
  'Case studies',
  'Verified performance results',
]

export default function Proof() {
  return (
    <section className="border-y border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Samples & proof" title="Sales Copywriting Samples & Client Proof" />

        <ul className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {proof.map((item) => (
            <li key={item} className="flex items-start gap-2.5 bg-[#09090B] p-5">
              <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
              <span className="text-sm font-medium leading-relaxed text-[#FAFAFA]">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            Examples on this page are limited to work that has been completed and approved for publication.
          </p>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            <PosterButton href="/contact">View Sales Copy Samples &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Talk About Your Project &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
