import { SectionIntro } from '../../../Kinetic'

const audiences = [
  'Ecommerce and product brands',
  'Service businesses',
  'B2B and professional businesses',
  'Local and multi-location businesses',
  'Startups and growing businesses',
  'International businesses',
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Who we manage for" title="Who Our Community Management Service Is For">
          Community management is most useful for businesses whose customers already ask questions, leave
          feedback, and raise concerns in public.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article key={audience} className="bg-frame-bg p-7 md:p-8">
              <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {audience}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
