import { SectionIntro } from '../../../Kinetic'

const areas = [
  {
    title: 'Bangladesh',
    body: 'Framecipher is based in Dhaka and provides community management for businesses across Bangladesh. Where relevant, response workflows can support Bangla-English communication based on your audience and brand requirements.',
  },
  {
    title: 'International Markets',
    body: 'We also support businesses serving international audiences, including the United States, the United Kingdom, Australia, Canada, the United Arab Emirates, and other international markets.',
  },
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service areas"
          title="Community Management Service Areas"
        >
          Time zones, language, audience expectations, and platform usage patterns differ by market, so
          coverage accounts for those differences instead of applying one region’s response habits
          everywhere.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {areas.map((area) => (
            <article key={area.title} className="bg-frame-bg p-7 md:p-8">
              <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {area.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {area.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
