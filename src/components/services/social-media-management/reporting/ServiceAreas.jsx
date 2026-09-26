import { SectionIntro } from '../../../Kinetic'

const areas = [
  {
    title: 'Bangladesh',
    body: 'Framecipher is based in Dhaka and provides social media reporting and analytics for businesses across Bangladesh. Reporting can be contextualized around the business\u2019s target audience, market, platform mix, and objectives rather than relying automatically on generic global benchmarks.',
  },
  {
    title: 'International Markets',
    body: 'We also support businesses operating in the United States, the United Kingdom, Australia, Canada, the United Arab Emirates, and other international markets. International reporting can account for differences in audience location, market, platform mix, campaign objectives, and available performance data.',
  },
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service areas"
          title="Monthly Reporting &amp; Analytics Service Areas"
        >
          Performance benchmarks, platform mix, and audience composition differ by market, so reporting is
          contextualized rather than averaged.
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
