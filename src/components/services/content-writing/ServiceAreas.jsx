import { SectionIntro } from '../../Kinetic'

const areas = [
  {
    title: 'Bangladesh',
    body: 'Framecipher provides content writing services for businesses across Bangladesh, including Dhaka and other locations. Depending on the audience and project, content can be produced in English, Bangla, or a suitable bilingual format. Local audience considerations, terminology, offers, and cultural context can be incorporated where relevant.',
  },
  {
    title: 'International Markets',
    body: 'We also support businesses targeting markets such as the United States, the United Kingdom, Australia, Canada, the UAE, and other international markets. International content is developed around the intended audience and market rather than simply translating an existing piece word for word.',
  },
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service areas"
          title="Content Writing Services in Bangladesh &amp; International Markets"
        >
          Content for international audiences should be adapted to that audience, not simply reworded from a
          local version.
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
