import { SectionIntro, PosterButton } from '../../../Kinetic'

const areas = [
  {
    eyebrow: 'Domestic reach',
    title: 'On-Page SEO in Bangladesh',
    body: 'We optimize pages for businesses targeting customers in Dhaka and across Bangladesh. On-page work accounts for Bangla and English search patterns, local search behavior, service terminology, and the commercial terms Bangladeshi users actually search for.',
  },
  {
    eyebrow: 'Global delivery',
    title: 'International Markets',
    body: 'We also support businesses targeting customers in the US, UK, Australia, Canada, and UAE. International on-page SEO accounts for different search behavior, phrasing, and intent across markets instead of applying one region\u2019s assumptions everywhere.',
  },
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Where we work"
          title="On-Page SEO for Bangladesh & International Markets"
        >
          Search intent and phrasing vary by market and language. We adapt on-page optimization
          to the audience a business is actually trying to reach.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          {areas.map((area, index) => (
            <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-10 transition-colors hover:border-frame-accent">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  {area.eyebrow}
                </span>
                <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                  {area.title}
                </h3>
                <p className="mt-5 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {area.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <p className="max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Our approach is based on the search behavior of the market being targeted rather than
            applying one region&apos;s search patterns to every page.
          </p>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact">Start an On-Page Review &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}