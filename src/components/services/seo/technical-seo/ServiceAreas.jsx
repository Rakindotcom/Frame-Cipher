import { SectionIntro, PosterButton } from '../../../Kinetic'

const areas = [
  {
    eyebrow: 'Domestic reach',
    title: 'Technical SEO in Bangladesh',
    body: 'We work with businesses targeting customers in Dhaka and across Bangladesh. Technical recommendations can account for mobile-first browsing, local search requirements, website platforms, hosting environments, and the technical needs of Bangladesh-focused businesses.',
  },
  {
    eyebrow: 'Global delivery',
    title: 'International Markets',
    body: 'We also support businesses targeting customers in markets including the US, UK, Australia, Canada, and UAE. International technical SEO may require market-specific site structures, hreflang implementation, localized URLs, canonical relationships, international sitemaps, and other technical signals.',
  },
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Where we work"
          title="Technical SEO Experience in Bangladesh & International Markets"
        >
          Framecipher provides technical SEO services for businesses across Bangladesh and
          international markets.
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
            Our approach is based on the markets you want to reach rather than applying one
            country&apos;s technical assumptions to every website.
          </p>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact">Start Your Technical SEO Audit &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}