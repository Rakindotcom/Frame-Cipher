import { SectionIntro } from '../../../Kinetic'

const audiences = [
  {
    title: 'B2B & Professional Services',
    body: 'Longer sales cycles can benefit from CRM-based qualification and downstream conversion tracking.',
    label: 'Useful for businesses selling',
    items: [
      'Consulting',
      'Technology',
      'SaaS',
      'Agencies',
      'Professional services',
      'Business solutions',
      'Enterprise services',
    ],
  },
  {
    title: 'Local Service Businesses',
    body: 'Campaigns can be structured around geographic demand and the contact method most appropriate for the business.',
    label: 'Lead generation ads can support',
    items: [
      'Consultations',
      'Quote requests',
      'Phone inquiries',
      'Appointments',
      'Service bookings',
      'Local inquiries',
    ],
  },
  {
    title: 'SaaS & Technology Businesses',
    body: 'Lead campaigns can support the software evaluation and trial journey.',
    label: 'Lead campaigns can support',
    items: [
      'Demo requests',
      'Free trials',
      'Product consultations',
      'Enterprise inquiries',
      'Webinar registrations',
      'Sales conversations',
    ],
  },
  {
    title: 'Education & Training',
    body: 'Campaigns can generate interest for courses and programs.',
    label: 'Campaigns can generate',
    items: [
      'Course inquiries',
      'Admission leads',
      'Consultation requests',
      'Program information requests',
      'Webinar registrations',
    ],
  },
  {
    title: 'High-Ticket Services',
    body: 'For expensive or complex purchases, lead generation can help turn research activity into qualified conversations.',
    label: 'Examples include',
    items: [
      'Business services',
      'Real estate',
      'Technology solutions',
      'Professional services',
      'High-value consulting',
      'Specialized services',
    ],
  },
  {
    title: 'Consultation-Based Businesses',
    body: 'Businesses that sell through calls, meetings, consultations, or assessments can use lead campaigns when the sales process is clearly defined.',
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Fit" title="Who Is Lead Generation Ads For?">
          Lead generation campaigns fit businesses where an inquiry, call, booking, or consultation
          is a meaningful step toward a customer.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="flex flex-col border-2 border-frame-border bg-frame-muted/10 p-8 transition-colors hover:border-frame-accent"
            >
              <div className="mb-5 h-1.5 w-12 bg-frame-accent" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {audience.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {audience.body}
              </p>
              {audience.items && (
                <>
                  <p className="mb-3 mt-5 text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
                    {audience.label}
                  </p>
                  <ul className="space-y-2.5">
                    {audience.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm font-medium text-frame-muted-fg">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}