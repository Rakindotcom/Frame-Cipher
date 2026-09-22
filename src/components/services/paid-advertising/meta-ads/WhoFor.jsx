import { SectionIntro } from '../../../Kinetic'

const audiences = [
  {
    title: 'Ecommerce Brands',
    body: [
      'Meta can support product discovery, prospecting, remarketing, catalog advertising, and repeat purchase campaigns.',
    ],
    bullets: [
      'Product sales',
      'Catalog campaigns',
      'Advantage+ sales',
      'Product retargeting',
      'Customer acquisition',
      'Repeat purchases',
      'Conversion value',
      'Creative testing',
    ],
    tail: 'The focus is on purchases and business value rather than engagement metrics alone.',
  },
  {
    title: 'Lead Generation Businesses',
    body: [
      'Meta can work well for services where customers need to discover the offer, develop interest, and submit an enquiry. This includes professional services, education, home services, local services, agencies, B2B businesses, appointment-based businesses, and high-value services.',
      'Lead quality is more important than maximizing raw form volume.',
    ],
  },
  {
    title: 'Local Businesses',
    body: [
      'For local businesses, Meta can support awareness, local demand creation, lead generation, calls, messages, and retargeting.',
    ],
    bullets: [
      'Specific cities',
      'Service areas',
      'Store locations',
      'Local offers',
      'Appointment journeys',
      'Messenger or WhatsApp enquiries',
    ],
    tail: 'For Bangladesh businesses, we can also align creative and conversion flows with local buying behavior where relevant.',
  },
  {
    title: 'B2B & High-Value Services',
    body: [
      'B2B and higher-ticket businesses often have longer sales cycles. We therefore pay greater attention to lead quality, audience signals, messaging, qualification, CRM stages, qualified opportunities, sales feedback, and downstream conversion data.',
      'The goal is not simply to generate the cheapest possible lead. It is to create a campaign that can contribute useful prospects to the sales process.',
    ],
  },
  {
    title: 'Brands Expanding Into New Markets',
    body: [
      'Meta can reach customers across countries, but the same creative and offer do not necessarily perform equally everywhere.',
    ],
    bullets: [
      'Market-specific research',
      'Localized creative',
      'Country-level targeting',
      'Language adaptation',
      'Currency and offer considerations',
      'Local landing pages',
      'Market-level reporting',
      'Different customer motivations',
    ],
    tail: 'We evaluate each target market on its own commercial conditions.',
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Who we help"
          title="Who Meta Ads Management Is For"
        >
          The right creative, audience approach, and conversion measurement depends on the
          business model behind the account.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-3">
          {audiences.map((item, index) => (
            <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8 transition-colors hover:border-frame-accent">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Business 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
                {item.bullets?.length > 0 && (
                  <ul className="mt-4 grid gap-1.5 text-xs font-semibold text-frame-fg/90 sm:grid-cols-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.tail && (
                  <p className="mt-4 border-t border-frame-border/60 pt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
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