import { SectionIntro } from '../../../Kinetic'

const services = [
  {
    title: 'Platform & Campaign Strategy',
    body: 'We start with the buyer, offer, and sales process rather than choosing a platform first. The right channel mix depends on where your buyers search, research, compare, and make decisions.',
    items: [
      'Channel selection',
      'Campaign objective planning',
      'Audience strategy',
      'Geographic targeting',
      'Keyword and audience research',
      'Budget allocation',
      'Funnel planning',
      'Competitor research',
      'Campaign structure',
      'Measurement planning',
    ],
  },
  {
    title: 'Lead Destination & Form Strategy',
    body: 'The lead destination can have a major effect on both conversion and qualification. We choose the lowest-friction path that still gives your sales team the information it needs.',
    items: [
      'Native lead form strategy',
      'Website landing-page strategy',
      'Call-focused campaigns',
      'Messaging-based lead flows where supported',
      'Consultation and booking flows',
      'Form field planning',
      'Qualification questions',
      'Thank-you page strategy',
      'Next-step instructions',
    ],
  },
  {
    title: 'Form & Qualification Design',
    body: 'Form design involves balancing completion rate with lead quality. Short forms can reduce friction, while additional questions can improve filtering. The right balance depends on the sales process, lead value, and qualification requirements.',
    items: [
      'Form field optimization',
      'Qualification question design',
      'Required vs optional fields',
      'Business-specific qualification logic',
      'Progressive qualification across touchpoints',
      'Form testing',
      'Thank-you page optimization',
      'Follow-up expectation setting',
    ],
  },
  {
    title: 'Offer & Creative Strategy',
    body: 'The offer affects who responds to your campaign. We test offers for lead quality, not simply submission volume.',
    label: 'What We Do',
    items: [
      'Consultation offers',
      'Quote requests',
      'Demo requests',
      'Assessments',
      'Audits',
      'Downloadable resources',
      'Promotional offers where appropriate',
      'Ad copy',
      'Creative concepts',
      'Hook and message testing',
      'Offer testing',
    ],
  },
  {
    title: 'CRM Integration & Lead Routing',
    body: 'A lead should move into the sales process as quickly and reliably as possible. Supported integrations depend on the advertising platform, CRM, available APIs, and account setup. LinkedIn, for example, supports Lead Gen Form integrations with supported CRM and marketing platforms for automated lead handling.',
    label: 'What We Do',
    items: [
      'CRM integration',
      'Lead routing',
      'Lead notifications',
      'Source tracking',
      'Campaign and ad attribution',
      'Lead-status mapping',
      'Lead scoring support',
      'Sales-stage tracking',
      'Duplicate handling',
      'CRM field mapping',
    ],
  },
  {
    title: 'Lead Quality Tracking & Offline Conversion Feedback',
    body: 'The most useful signal is not always the form submission. Where platform and CRM integrations support it, downstream outcomes can be used to improve measurement and campaign optimization. For Google Ads, Enhanced Conversions for Leads can use hashed first-party information together with offline conversion data to improve conversion measurement and bidding. Google\u2019s current 2026 documentation also directs new offline conversion workflows toward Data Manager.',
    label: 'We can help connect the funnel from',
    items: [
      'Lead \u2192 Qualified Lead \u2192 Opportunity \u2192 Customer \u2192 Revenue',
    ],
  },
]

const measured = [
  'Leads',
  'Qualified leads',
  'Sales opportunities',
  'Customers',
  'Cost per lead',
  'Cost per qualified lead',
  'Cost per opportunity',
  'Customer acquisition cost',
  'Revenue',
  'Lead-to-customer rate',
]

const tested = [
  'Ad messaging',
  'Headlines',
  'Offers',
  'Creative formats',
  'Audience segments',
  'Lead destinations',
  'Form structures',
  'Qualification questions',
  'Calls to action',
  'Landing-page variations',
]

export default function Includes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Services" title="Our Lead Generation Ads Services">
          Everything required to generate, route, qualify, and measure leads around the sales
          outcomes that matter.
        </SectionIntro>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={service.title}
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
                    {service.title}
                  </h3>
                  <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                    {service.body}
                  </p>
                </div>

                <div className="lg:w-1/2">
                  {service.label && (
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                      {service.label}
                    </p>
                  )}
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.items.map((item) => (
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

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-muted/10 p-8 md:p-10">
            <p className="mb-6 text-sm font-bold uppercase tracking-widest text-frame-accent">
              What We Measure
            </p>
            <div className="flex flex-wrap gap-2">
              {measured.map((item) => (
                <span key={item} className="border border-frame-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="border-2 border-frame-border bg-frame-muted/10 p-8 md:p-10">
            <p className="mb-6 text-sm font-bold uppercase tracking-widest text-frame-accent">
              What We Test
            </p>
            <div className="flex flex-wrap gap-2">
              {tested.map((item) => (
                <span key={item} className="border border-frame-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-3xl border-l-2 border-frame-accent pl-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          The goal is to learn which combinations attract the prospects your sales team actually
          wants.
        </p>
      </div>
    </section>
  )
}