import { SectionIntro } from '../../../Kinetic'

const measurements = [
  {
    title: 'Map Pack & Geo-Grid Visibility',
    intro: 'We monitor visibility across relevant geographic areas. This can show where your business appears strongly, where visibility is limited, how visibility changes over time, and which locations need more attention.',
    points: [
      'Where your business appears strongly',
      'Where visibility is limited',
      'How visibility changes over time',
      'Which locations need more attention',
    ],
    note: 'Geo-grid data can provide a more useful picture than checking one Google Maps position from one location.',
  },
  {
    title: 'Google Business Profile Performance',
    intro: 'We review relevant profile interactions to understand how customers discover and engage with your listing.',
    points: [
      'Profile views',
      'Website actions',
      'Calls',
      'Direction requests',
      'Search discovery',
      'Customer interactions',
    ],
    note: 'The exact metrics available can vary by business and Google\u2019s reporting environment.',
  },
  {
    title: 'Calls, Directions & Website Actions',
    intro: 'Local visibility should lead to useful customer actions. We monitor the actions that connect search activity with customer intent.',
    points: [
      'Phone calls',
      'Direction requests',
      'Website visits',
      'Contact submissions',
      'Booking actions',
      'Other tracked enquiries',
    ],
  },
  {
    title: 'Organic Local Search Performance',
    intro: 'Local customers do not only use Google Maps. They can also discover businesses through standard organic search results, so we monitor relevant organic performance.',
    points: [
      'Service keywords',
      'Location keywords',
      'Local landing pages',
      'Commercial searches',
      'Informational searches connected to your services',
    ],
  },
  {
    title: 'Leads & Business Outcomes',
    intro: 'The final objective is business value. Where tracking is available, we connect local search activity with outcomes that matter to the business.',
    points: [
      'Qualified enquiries',
      'Calls',
      'Bookings',
      'Store visits',
      'Quote requests',
      'Sales opportunities',
    ],
    note: 'This provides a more useful view of SEO performance than rankings alone.',
  },
]

export default function Measurement() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Transparent tracking"
          title="How We Measure Local SEO Performance"
        >
          Local SEO performance should be measured through more than one ranking position. We
          combine visibility data with actions and business outcomes to understand whether the
          strategy is producing useful results.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {measurements.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Measurement 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.intro}
                </p>
                <ul className="mt-5 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
                {item.note && (
                  <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}

          <div className="flex flex-col justify-between border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Reporting Principle
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Reporting supports the next decision
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Reporting focuses on relevant activities, visibility, customer actions, and
                business outcomes rather than filling reports with unnecessary metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}