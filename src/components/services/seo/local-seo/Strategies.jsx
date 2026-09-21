import { SectionIntro } from '../../../Kinetic'

const strategies = [
  {
    title: 'Retail, Restaurants & Physical Locations',
    body: 'Customers often need quick information before visiting a physical business. The strategy can focus on location discovery, opening hours, products or services, directions, photos, customer reviews, nearby search intent, local landing pages, and store-specific information.',
    bullets: [
      'For restaurants, relevant searches may also include cuisine, menu items, dining occasions, and nearby locations.',
      'For retail businesses, product categories and local shopping intent can become important parts of the website and search strategy.',
    ],
    focus: [
      'Location discovery',
      'Opening hours',
      'Products or services',
      'Directions',
      'Customer reviews',
      'Nearby search intent',
    ],
  },
  {
    title: 'Clinics, Professional Services & Offices',
    body: 'Professional services often involve stronger research before a customer makes contact. The strategy needs clear service information, location relevance, trust signals, and useful content. Service pages should explain what the business provides while location pages should help customers understand where the service is available.',
    bullets: [
      'Medical practices and dental clinics',
      'Law firms, accounting firms, and consulting businesses',
      'Financial services and real estate offices',
    ],
    focus: [
      'Service pages',
      'Location relevance',
      'Trust signals',
      'Useful content',
    ],
  },
  {
    title: 'Service-Area Businesses',
    body: 'Service-area businesses need to reach customers across defined geographic areas. The strategy can include service-location mapping, service pages, relevant location pages, local search intent, Google Business Profile configuration, geographic visibility tracking, and local authority development.',
    bullets: [
      'We avoid creating location pages that provide little value. Each target area should have a genuine reason to exist.',
    ],
    focus: [
      'Service-location mapping',
      'Relevant location pages',
      'Google Business Profile configuration',
      'Geographic visibility tracking',
    ],
  },
  {
    title: 'Multi-Location & Franchise Businesses',
    body: 'Multi-location businesses need consistency at scale. The strategy can include location-specific landing pages, branch information, location-level keyword mapping, profile management, review workflows, local competitor research, branch-level performance tracking, and centralized reporting.',
    bullets: [
      'Each location receives the relevant local treatment while following the broader brand structure.',
    ],
    focus: [
      'Location-specific landing pages',
      'Location-level keyword mapping',
      'Review workflows',
      'Centralized reporting',
    ],
  },
]

export default function Strategies() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Strategy by business"
          title="Local SEO Strategies by Business Type"
        >
          Different businesses compete in different local search environments. We adapt the
          strategy to the way customers discover and buy from each business.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2">
          {strategies.map((item, index) => (
            <div key={item.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Strategy 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                <div className="mt-5 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.bullets.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="mt-6 border-t-2 border-frame-border/60 pt-5">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-3">
                  Strategic Focus
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.focus.map((focus) => (
                    <span
                      key={focus}
                      className="border border-frame-border/80 bg-frame-muted/20 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-frame-muted-fg"
                    >
                      {focus}
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