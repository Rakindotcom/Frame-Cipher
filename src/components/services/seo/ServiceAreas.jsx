import { SectionIntro, PosterButton } from '../../Kinetic'

const areas = [
  {
    eyebrow: 'Domestic reach',
    title: 'SEO Services Across Bangladesh',
    body: 'We help businesses across Bangladesh, including Dhaka and other major cities, improve organic visibility through local SEO, keyword research, technical SEO, content optimization, Google Business Profile optimization, and competitor analysis. We support businesses targeting local areas, multiple cities, or customers nationwide.',
  },
  {
    eyebrow: 'Global delivery',
    title: 'International SEO Services',
    body: 'We help businesses target international markets, including the US, UK, Australia, Canada, and UAE. Our approach includes market-specific keyword research, localized content, technical SEO, international site architecture, and competitor analysis based on each target market.',
  },
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Where we work"
          title="Service Areas in Bangladesh and International Markets"
        >
          Framecipher provides SEO services for businesses targeting customers across Bangladesh
          and international markets. We adapt our strategy to your audience, search behavior,
          competition, and business goals.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          {areas.map((area, index) => (
            <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-10">
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

        <div className="mt-10">
          <PosterButton href="/contact">Start Your SEO Strategy &rarr;</PosterButton>
        </div>
      </div>
    </section>
  )
}