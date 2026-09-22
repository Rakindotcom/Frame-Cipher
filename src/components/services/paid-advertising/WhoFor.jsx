import { SectionIntro } from '../../Kinetic'

const audiences = [
  {
    title: 'Ecommerce',
    body: 'For ecommerce businesses, we focus on product discovery, purchase intent, shopping campaigns, catalog or product advertising, remarketing, creative testing, and conversion efficiency. Campaign decisions are connected to product value, margins, average order value, and customer acquisition economics.',
  },
  {
    title: 'Lead Generation',
    body: 'For service businesses and other lead-driven companies, the goal is not to collect as many forms as possible. We focus on generating relevant inquiries that match the business\'s actual service area, customer profile, offer, and sales process.',
    tail: 'Where possible, lead quality should feed back into campaign optimization rather than stopping measurement at the form submission.',
  },
  {
    title: 'B2B',
    body: 'B2B campaigns often require more deliberate audience selection, stronger educational messaging, longer consideration periods, and more careful lead evaluation. We can structure campaigns around decision-makers, industries, account characteristics, search intent, and different stages of the buying journey.',
  },
  {
    title: 'Local Businesses',
    body: 'Local businesses can use paid advertising to generate calls, bookings, inquiries, store visits, service requests, and local product demand. Campaigns can be structured around relevant locations, service areas, local intent, and the actions that matter most to the business.',
  },
  {
    title: 'SaaS & Technology',
    body: 'SaaS and technology companies often need to balance acquisition cost against trial quality, activation, retention, and customer value. Paid campaigns can support product discovery, demo requests, trials, sign-ups, remarketing, and targeted acquisition while measurement is connected to the actual customer journey.',
  },
  {
    title: 'Startups & Growth Businesses',
    body: 'Startups often need to learn quickly which audiences, offers, channels, and messages can produce viable customer acquisition. We use testing and measurement to identify what deserves additional budget rather than assuming scale should come first.',
  },
  {
    title: 'Established Brands',
    body: 'Larger businesses may need multi-platform, multi-market, multi-product, or multi-team campaign management. We can structure paid media around different business units, markets, audience segments, and conversion objectives while keeping reporting and budget visibility centralized.',
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Who we help"
          title="Who We Help With Paid Advertising"
        >
          Paid advertising can serve very different business models. Campaign strategy should
          reflect those differences.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-3">
          {audiences.map((item, index) => (
            <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Business 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                {item.tail && (
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.tail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}