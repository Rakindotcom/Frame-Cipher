import { SectionIntro } from '../../../Kinetic'

const areas = [
  {
    title: 'Bangladesh',
    featured: true,
    body: 'Framecipher builds lead-generation campaigns for businesses targeting customers across Bangladesh.',
    accent: 'Campaign strategy can account for',
    items: [
      'Local search behavior',
      'Bangla or English messaging',
      'Geographic targeting',
      'Local offers',
      'Website forms',
      'Native lead forms where available',
      'Phone inquiries',
      'WhatsApp or other messaging flows where appropriate',
      'Lead qualification requirements',
    ],
  },
  {
    title: 'United States',
    body: 'For US campaigns, we adapt keyword strategy, creative, audience targeting, qualification, CRM measurement, and follow-up expectations to the specific customer segment.',
    items: ['Segment-adapted keyword and creative strategy'],
  },
  {
    title: 'United Kingdom',
    body: 'UK campaigns can be structured around market-specific demand, offer positioning, consent requirements, audience strategy, and sales process.',
    items: ['Consent-aware measurement and audience'],
  },
  {
    title: 'Australia',
    body: 'For Australian campaigns, we consider market-specific audience behavior, location, creative, qualification, and conversion tracking.',
    items: ['Market-specific behavior and tracking'],
  },
  {
    title: 'Canada',
    body: 'Canadian campaigns are adapted to the target market, geography, buyer segment, sales cycle, and available conversion data.',
    items: ['Buyer-segment and geography adaptation'],
  },
  {
    title: 'UAE',
    body: 'For UAE campaigns, we consider audience, language, geography, offer structure, and sales process when building the lead-generation strategy.',
    items: ['Language and offer-structure strategy'],
  },
  {
    title: 'Other International Markets',
    body: 'Framecipher can support additional markets where the relevant advertising platforms, campaign objectives, targeting options, and lead features are available.',
    items: ['Platform and lead-feature eligibility verified per market'],
  },
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Coverage" title="Lead Generation Ads for Bangladesh & International Markets">
          Framecipher builds lead-generation campaigns for businesses in Bangladesh and
          international markets.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          The best lead destination depends on the business and audience. We do not assume every
          customer wants to use the same contact method.
        </p>

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