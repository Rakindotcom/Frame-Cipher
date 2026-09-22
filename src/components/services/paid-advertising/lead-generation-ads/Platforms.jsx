import { SectionIntro } from '../../../Kinetic'

const platforms = [
  {
    title: 'Google Ads',
    body: 'Google can capture existing demand when prospects are actively searching for a product, service, provider, quote, or solution.',
    label: 'We can build campaigns around',
    items: [
      'High-intent search terms',
      'Service and product queries',
      'Local searches',
      'Commercial landing pages',
      'Call-focused campaigns',
      'Website lead generation',
      'Google Lead Form Assets where available',
    ],
    note: 'Google Lead Form Assets are only available in supported countries and require specific campaign, conversion, and advertiser-verification conditions. We therefore confirm market eligibility before using them.',
  },
  {
    title: 'Meta Ads',
    body: 'Meta can support lead generation through native lead forms, website destinations, messaging, and other supported campaign experiences.',
    items: ['We use Meta when creative, audience signals, and offer strategy can create or capture demand effectively.'],
  },
  {
    title: 'LinkedIn Ads',
    body: 'LinkedIn can be useful for B2B campaigns where professional attributes matter to qualification.',
    label: 'We can use',
    items: [
      'LinkedIn Lead Gen Forms',
      'Website lead campaigns',
      'Company and professional audience signals',
      'Job function',
      'Job seniority',
      'Industry',
      'CRM-connected lead workflows where supported',
    ],
    note: 'LinkedIn currently supports Lead Gen Form integration with supported CRM and marketing platforms and also documents lead-to-sales reporting workflows.',
  },
  {
    title: 'Other Supported Platforms',
    body: 'Other paid channels may support lead-generation objectives depending on the market, business model, audience, and campaign requirements.',
    items: ['We recommend additional platforms only when they have a clear role in the acquisition strategy.'],
  },
]

export default function Platforms() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Platforms" title="Lead Generation Ads by Platform">
          Lead generation is a business objective, not a single advertising platform.
        </SectionIntro>

        <div className="space-y-6">
          {platforms.map((platform, index) => (
            <div
              key={platform.title}
              className="border-2 border-frame-border bg-frame-muted/10 p-8 md:p-12 transition-colors hover:border-frame-accent"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:max-w-md">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="text-sm font-bold uppercase tracking-widest text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-1.5 w-10 bg-frame-accent" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg md:text-3xl">
                    {platform.title}
                  </h3>
                  <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                    {platform.body}
                  </p>
                  {platform.note && (
                    <div className="mt-6 border-l-2 border-frame-accent bg-frame-accent/5 p-5">
                      <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                        {platform.note}
                      </p>
                    </div>
                  )}
                </div>

                <div className="lg:w-1/2">
                  {platform.label && (
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                      {platform.label}
                    </p>
                  )}
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {platform.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm font-medium text-frame-muted-fg">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}