import { SectionIntro } from '../../../Kinetic'

const areas = [
  {
    label: 'Primary market',
    title: 'Bangladesh',
    body: [
      'We provide landing page copywriting for businesses targeting customers across Bangladesh. Depending on the audience, we can develop English, Bangla, or Bangla-English copy where appropriate. The language should reflect how the intended audience actually understands the offer rather than simply translating English sentences word for word.',
    ],
  },
  {
    label: 'International',
    title: 'US, UK, Australia, Canada &amp; UAE',
    body: [
      'We also work with businesses targeting markets including the United States, United Kingdom, Australia, Canada, and the UAE. International landing page copy may require adjustments to terminology, offers, examples, pricing presentation, trust signals, and audience expectations.',
    ],
  },
]

export default function ServiceAreas() {
  return (
    <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Markets &amp; languages" title="Landing Page Copywriting Service Areas">
          Landing page copy should be written for a specific market and audience, not for a generic international
          one.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2">
          {areas.map((area) => (
            <article key={area.title} className="bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
                {area.label}
              </span>
              <h3
                className="mt-3 font-heading text-lg font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-xl"
                dangerouslySetInnerHTML={{ __html: area.title }}
              />
              <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
                {area.body[0]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
