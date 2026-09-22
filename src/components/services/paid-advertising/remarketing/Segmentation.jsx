import { SectionIntro } from '../../../Kinetic'

const audiences = [
  {
    title: 'Site Visitors',
    body: 'People who visited your website but did not take a meaningful conversion action.',
    label: 'Possible strategies include',
    items: [
      'Brand reassurance',
      'Educational content',
      'Service benefits',
      'Product discovery',
      'Social proof',
      'Category-specific messaging',
    ],
  },
  {
    title: 'Product & Service Viewers',
    body: 'People who viewed a specific product or service page without converting. Dynamic or page-specific remarketing can make the message more relevant by reflecting the content they previously explored.',
  },
  {
    title: 'Cart & Checkout Abandoners',
    body: 'These are typically among the highest-intent pre-purchase audiences.',
    label: 'Depending on the business, messaging can include',
    items: [
      'Product reminders',
      'Reviews',
      'Benefits',
      'Objection handling',
      'Shipping information',
      'Relevant offers',
    ],
  },
  {
    title: 'Lead & Form Abandoners',
    body: 'For lead-generation businesses, people who visit a service page or start a form can be treated differently from general website visitors.',
    label: 'We can build audiences around actions such as',
    items: [
      'Service-page views',
      'Pricing-page visits',
      'Form starts',
      'Form abandonment',
      'Content engagement',
      'Consultation-page visits',
    ],
  },
  {
    title: 'Engaged Audiences',
    body: 'People can show interest without visiting your website.',
    label: 'Depending on the platform, relevant signals can include',
    items: [
      'Video engagement',
      'Social engagement',
      'Content interaction',
      'Pin engagement',
      'Ad interaction',
      'Previous campaign engagement',
    ],
  },
  {
    title: 'Past Purchasers & Existing Customers',
    body: 'Past customers can be segmented with customer exclusions preventing acquisition campaigns from unnecessarily targeting people who have already converted.',
    label: 'Past customers can be segmented for',
    items: [
      'Cross-sell',
      'Upsell',
      'Replenishment',
      'New product launches',
      'Loyalty messaging',
      'Win-back campaigns',
    ],
  },
  {
    title: 'CRM & Customer Lists',
    body: 'First-party CRM and customer data can support audience inclusion and exclusion strategies where the platform, consent requirements, and data format allow it.',
    label: 'We can work with',
    items: [
      'Customer lists',
      'Lead lists',
      'Qualified lead lists',
      'Existing customer segments',
      'Sales opportunity lists',
      'High-value customer groups',
    ],
  },
]

export default function Segmentation() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Structure" title="Audience Segmentation for Smarter Remarketing">
          Remarketing starts with understanding who should receive which message.
        </SectionIntro>

        <div className="space-y-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent md:p-12"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:max-w-md">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="text-sm font-bold uppercase tracking-widest text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-1.5 w-10 bg-frame-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
                    {audience.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                    {audience.body}
                  </p>
                </div>

                {audience.items && (
                  <div className="lg:w-1/2">
                    {audience.label && (
                      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                        {audience.label}
                      </p>
                    )}
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {audience.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm font-medium text-frame-muted-fg">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}