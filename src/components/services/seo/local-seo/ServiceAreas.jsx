import { SectionIntro, PosterButton } from '../../../Kinetic'

const areas = [
  {
    eyebrow: 'Domestic reach',
    title: 'Local SEO Across Bangladesh',
    body: 'For businesses targeting Bangladesh, we structure local SEO around relevant cities, areas, neighborhoods, services, and customer search behavior. We build location targeting around actual service coverage rather than adding city names without purpose.',
    tags: [
      'Dhaka',
      'Chattogram',
      'Sylhet',
      'Gazipur',
      'Narayanganj',
      'Rajshahi',
      'Khulna',
      'Other target areas',
    ],
  },
  {
    eyebrow: 'Global delivery',
    title: 'Local SEO for International Markets',
    body: 'Businesses targeting customers outside Bangladesh may need location-specific strategies for different countries, cities, or service areas. The strategy depends on your business model, target locations, competition, and customer search behavior.',
    tags: [
      'United States',
      'United Kingdom',
      'Canada',
      'Australia',
      'United Arab Emirates',
      'Other relevant markets',
    ],
  },
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Where we work"
          title="Local SEO for Bangladesh & International Markets"
        >
          Local search behavior varies by market. We adapt the strategy to the locations your
          business actually serves.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          {areas.map((area) => (
            <div key={area.title} className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-10 transition-colors hover:border-frame-accent">
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
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-frame-border/80 bg-frame-bg px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-frame-muted-fg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <PosterButton href="/contact">Start Your Local SEO Strategy &rarr;</PosterButton>
        </div>
      </div>
    </section>
  )
}