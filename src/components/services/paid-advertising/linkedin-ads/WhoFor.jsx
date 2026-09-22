import { SectionIntro } from '../../../Kinetic'

const audiences = [
  {
    title: 'B2B SaaS & Technology Companies',
    body: [
      'LinkedIn can support SaaS and technology companies targeting specific business types, professional roles, technical stakeholders, and decision-makers.',
    ],
    bullets: [
      'Demo requests',
      'Enterprise enquiries',
      'Product education',
      'Webinar registrations',
      'Content downloads',
      'Account-based campaigns',
    ],
  },
  {
    title: 'Professional Services',
    body: [
      'Consulting firms, agencies, technology providers, financial services, legal businesses, and other professional services can use LinkedIn to reach relevant professional audiences.',
    ],
    bullets: [
      'Business problems',
      'Expertise',
      'Thought leadership',
      'Industry-specific content',
      'Consultation offers',
      'High-value enquiries',
    ],
  },
  {
    title: 'Enterprise & Account-Based Sales',
    body: [
      'Businesses selling to a defined list of high-value companies can use LinkedIn to reach multiple stakeholders within those organizations.',
    ],
    bullets: [
      'Named-account targeting',
      'Job functions',
      'Seniority',
      'Industry',
      'Company size',
      'Retargeting',
      'Sales outreach',
    ],
    tail: 'The objective is to support an account-level sales strategy rather than generate disconnected individual leads.',
  },
  {
    title: 'B2B Lead Generation Businesses',
    body: [
      'LinkedIn can support businesses that need a consistent flow of professional leads for their sales teams.',
    ],
    bullets: [
      'Business services',
      'Software',
      'Consulting',
      'Agencies',
      'Training',
      'Technology',
      'Enterprise solutions',
    ],
    tail: 'The right strategy depends on customer value, audience availability, sales cycle, qualification process, and sales capacity.',
  },
  {
    title: 'Businesses Selling to International B2B Markets',
    body: [
      'LinkedIn can be useful for businesses expanding into international markets where professional audiences can be clearly defined.',
    ],
    bullets: [
      'Country',
      'Industry',
      'Company type',
      'Job function',
      'Seniority',
      'Buying behavior',
      'Local competition',
      'Sales cycle',
      'Market-specific offers',
    ],
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Who we help"
          title="Who LinkedIn Ads Management Is For"
        >
          The right ICP, campaign format, and measurement approach depends on the B2B sales
          process behind the account.
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