import { SectionIntro, PosterButton } from '../../../Kinetic'

const evidence = [
  'Landing page samples',
  'Before-and-after copy',
  'Client testimonials',
  'Campaign case studies',
  'Screenshots',
  'Approved performance results',
  'Relevant project outcomes',
]

export default function Proof() {
  return (
    <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Samples &amp; proof"
          title="Landing Page Copywriting Samples &amp; Client Proof"
        />

        <ul className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {evidence.map((item) => (
            <li key={item} className="flex items-start gap-2.5 bg-[#09090B] p-5">
              <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
              <span className="text-sm font-medium leading-relaxed text-[#FAFAFA]">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            We do not publish invented conversion statistics or unverified results. Examples on this page are
            limited to work that has been completed and approved for publication.
          </p>
          <div className="shrink-0">
            <PosterButton href="/projects" variant="outline">
              View Our Portfolio &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
