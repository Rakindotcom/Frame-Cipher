import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Discovery & Qualification',
    body: 'We start by understanding who buys, what you offer, and how your sales process actually works.',
    label: 'We start by understanding',
    items: [
      'Your ideal customer',
      'Offer',
      'Qualification criteria',
      'Sales process',
      'Average deal value',
      'Sales cycle',
      'Follow-up process',
      'CRM setup',
      'Target markets',
    ],
  },
  {
    title: 'Platform & Offer Strategy',
    body: 'We choose the relevant platforms and build the offer around the customer journey.',
    label: 'The strategy may include',
    items: [
      'Google Search',
      'Google Lead Form Assets where available',
      'Meta Lead Ads',
      'LinkedIn Lead Gen Forms',
      'Website lead campaigns',
      'Calls',
      'Messaging',
      'Booking or consultation flows',
    ],
  },
  {
    title: 'Lead Destination & CRM Setup',
    body: 'We build or configure the selected lead destination and connect it to the appropriate sales process.',
    label: 'This may include',
    items: [
      'Form setup',
      'Qualification questions',
      'Landing pages',
      'CRM mapping',
      'Lead routing',
      'Notifications',
      'Source tracking',
      'Conversion measurement',
    ],
  },
  {
    title: 'Campaign Launch & QA',
    body: 'Before launch, we review every element that can break a lead campaign between the ad and the follow-up.',
    label: 'Before launch, we review',
    items: [
      'Tracking',
      'Forms',
      'CRM routing',
      'Conversion events',
      'URLs',
      'Ad copy',
      'Creative',
      'Audience settings',
      'Budget',
      'Geographic targeting',
    ],
  },
  {
    title: 'Lead Quality Optimization',
    body: 'After launch, we evaluate the evidence and adjust toward the campaigns and audiences producing quality.',
    label: 'After launch, we evaluate',
    items: [
      'Lead volume',
      'Lead quality',
      'Cost per qualified lead',
      'Sales feedback',
      'Audience performance',
      'Creative performance',
      'Offer performance',
      'Funnel behavior',
    ],
  },
  {
    title: 'Sales-Aligned Reporting',
    body: 'Reporting can include spend, media metrics, lead metrics, and downstream sales outcomes where the CRM data exists.',
    label: 'Reporting can include',
    items: [
      'Spend',
      'Impressions',
      'Clicks',
      'CTR',
      'Leads',
      'CPL',
      'Qualified leads',
      'CPQL',
      'Opportunities',
      'Cost per opportunity',
      'Customers',
      'CAC',
      'Revenue',
      'ROAS where applicable',
    ],
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Process" title="Our Lead Generation Ads Process">
          We apply the same structured method to every program, with the specific implementation
          adapted to each business and sales process.
        </SectionIntro>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.title} className="border-2 border-frame-border bg-frame-bg p-8 md:p-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:max-w-md">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="font-heading text-3xl font-bold text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-1.5 w-10 bg-frame-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                    {step.body}
                  </p>
                </div>

                <div className="lg:w-1/2">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                    {step.label}
                  </p>
                  <ul className="grid gap-3 md:grid-cols-2">
                    {step.items.map((item) => (
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