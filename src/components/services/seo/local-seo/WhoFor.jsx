import { SectionIntro } from '../../../Kinetic'

const businessModels = [
  {
    eyebrow: 'Storefront Businesses',
    body: 'Storefront businesses serve customers from a physical location. These businesses can use local search to help nearby customers discover their location, services, opening hours, contact details, and other useful information.',
    examples: [
      'Retail stores',
      'Restaurants',
      'Salons',
      'Clinics',
      'Gyms',
      'Showrooms',
      'Offices',
      'Local professional services',
    ],
  },
  {
    eyebrow: 'Service-Area Businesses',
    body: 'Service-area businesses travel to customers instead of relying on customers visiting a storefront. Their local presence needs to communicate where they provide services while following Google\u2019s eligibility and profile guidelines.',
    examples: [
      'Plumbers',
      'Electricians',
      'Cleaning companies',
      'Home repair services',
      'Pest control businesses',
      'Moving companies',
      'Appliance repair services',
    ],
  },
  {
    eyebrow: 'Multi-Location Businesses',
    body: 'Multi-location businesses operate from several branches or locations. Each location can have different customers, competitors, search patterns, and local requirements. A multi-location strategy therefore needs consistent management without treating every branch as identical.',
    examples: [
      'Retail chains',
      'Restaurant groups',
      'Clinics',
      'Education providers',
      'Franchise businesses',
      'Service companies with multiple branches',
    ],
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Who we help"
          title="Who Is Local SEO For?"
        >
          Local SEO can support several business models. The right approach depends on how
          customers find and interact with your business.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-3">
          {businessModels.map((model, index) => (
            <div
              key={model.eyebrow}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Business Model 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {model.eyebrow}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {model.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5 border-t-2 border-frame-border/60 pt-5">
                  {model.examples.map((example) => (
                    <span
                      key={example}
                      className="border border-frame-border/80 bg-frame-bg px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-frame-muted-fg"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}