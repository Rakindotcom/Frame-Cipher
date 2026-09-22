import { SectionIntro } from '../../../Kinetic'

const areas = [
  {
    title: 'Bangladesh',
    featured: true,
    body: 'Framecipher manages remarketing campaigns for businesses targeting customers across Bangladesh.',
    accent: 'Campaigns can be adapted to',
    items: [
      'Local buying behavior',
      'Bangla or English messaging',
      'Ecommerce funnels',
      'Lead-generation journeys',
      'WhatsApp or other customer follow-up flows where appropriate',
      'Local offers',
      'Geographic audiences',
    ],
  },
  {
    title: 'United States',
    body: 'For US campaigns, we adapt audience strategy, recency, creative, offers, and tracking to the customer journey and market.',
    items: ['Customer journey and market adaptation'],
  },
  {
    title: 'United Kingdom',
    body: 'UK remarketing campaigns are structured around the relevant customer journey, audience signals, consent requirements, and campaign objectives.',
    items: ['Consent-aware audience and measurement'],
  },
  {
    title: 'Australia',
    body: 'For Australian audiences, we adapt segmentation, messaging, targeting, and reporting to the market and business model.',
    items: ['Market and business-model adaptation'],
  },
  {
    title: 'Canada',
    body: 'Canadian campaigns can be structured around product, service, geography, customer behavior, and buying cycle.',
    items: ['Geography and customer-behavior targeting'],
  },
  {
    title: 'UAE',
    body: 'For UAE campaigns, we consider audience, language, location, product or service type, and customer journey when structuring remarketing.',
    items: ['Language and location-aware campaigns'],
  },
  {
    title: 'Other International Markets',
    body: 'We can support additional markets where the required advertising platforms, audience features, targeting options, and consent frameworks are available.',
    items: ['Platform and consent eligibility verified per market'],
  },
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Coverage" title="Remarketing Services for Bangladesh & International Markets">
          Framecipher manages remarketing campaigns for businesses in Bangladesh and international
          markets.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.title}
              className={`flex flex-col border-2 p-8 transition-colors hover:border-frame-accent ${
                area.featured
                  ? 'border-frame-accent bg-frame-accent/5'
                  : 'border-frame-border bg-frame-muted/10'
              }`}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {area.title}
                </span>
                {area.featured && (
                  <span className="whitespace-nowrap border border-frame-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-frame-accent">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">{area.body}</p>
              {area.accent && (
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-frame-accent">
                  {area.accent}
                </p>
              )}
              <ul className="mt-6 space-y-2.5 border-t border-frame-border pt-4">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-medium text-frame-muted-fg">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}