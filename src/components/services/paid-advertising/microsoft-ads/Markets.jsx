import { SectionIntro } from '../../../Kinetic'

const bangladeshItems = [
  'Local search behavior',
  'Geographic targeting',
  'Bangla or English messaging',
  'Local offers',
  'Lead-generation goals',
  'Website conversions',
  'Ecommerce requirements',
]

const countries = [
  {
    name: 'United States',
    body: 'For US campaigns, we adapt keyword strategy, audience targeting, creative, landing pages, conversion tracking, and campaign structure to the specific market and business model.',
  },
  {
    name: 'United Kingdom',
    body: 'For UK campaigns, we build market-specific search and audience strategies rather than simply reusing assets from another region.',
  },
  {
    name: 'Australia',
    body: 'We manage campaigns targeting Australian audiences with market-specific keywords, audience, location, and conversion strategies.',
  },
  {
    name: 'Canada',
    body: 'Canadian campaigns are structured around the actual customer segment, geography, search demand, and business objective.',
  },
  {
    name: 'UAE',
    body: 'For UAE campaigns, we consider location, audience, language, offer structure, and conversion requirements when building the account.',
  },
  {
    name: 'Other International Markets',
    body: 'We can support additional markets where Microsoft Advertising has meaningful reach and the required advertising features are available. Before launch, we evaluate the target market rather than assuming the same campaign economics apply everywhere.',
  },
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Markets" title="Microsoft Ads Management for Bangladesh and International Markets">
          Campaign strategy is adapted to the market, audience, and available search demand rather
          than copied from a single template.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border-2 border-frame-accent bg-frame-muted/10 p-8 md:p-10 xl:col-span-1">
            <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Bangladesh
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              We manage Microsoft Ads for businesses targeting customers across Bangladesh where
              sufficient search demand exists. Campaign planning can consider the local context
              rather than a generic setup.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {bangladeshItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-frame-muted-fg">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-frame-accent pl-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              Because Microsoft search volume varies by market and category, we assess the available
              opportunity before recommending a dedicated budget.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {countries.map((country) => (
              <div
                key={country.name}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <div className="mb-4 h-1.5 w-10 bg-frame-accent" />
                <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                  {country.name}
                </h4>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {country.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}