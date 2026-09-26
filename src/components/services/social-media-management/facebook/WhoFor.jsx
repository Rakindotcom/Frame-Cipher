import { SectionIntro, PosterButton } from '../../../Kinetic'

const audiences = [
  {
    title: 'Local Businesses',
    body: 'Ideal for businesses that depend on local customers, inquiries, appointments, visits, or service areas.',
    points: [
      'Restaurants',
      'Clinics',
      'Salons',
      'Retail stores',
      'Service providers',
      'Local professional services',
      'Education businesses',
      'Hospitality businesses',
    ],
  },
  {
    title: 'Ecommerce & Product Brands',
    body: 'We manage content and customer interactions around products, offers, product education, social proof, and customer questions.',
    points: [
      'Product-focused posts',
      'Reels',
      'Promotional content',
      'Reviews',
      'Messenger inquiries',
    ],
  },
  {
    title: 'Service Businesses',
    body: 'For service companies, Facebook can help explain what you do before someone contacts you. We build content around the questions customers actually ask.',
    points: [
      'Services',
      'Expertise',
      'Customer questions',
      'Case examples',
      'Testimonials',
      'Educational content',
      'FAQs',
      'Offers',
    ],
  },
  {
    title: 'Professional & B2B Businesses',
    body: 'B2B businesses can use Facebook to support brand visibility, employer presence, customer trust, company updates, and audience education.',
    points: ['Brand visibility', 'Employer presence', 'Customer trust', 'Company updates', 'Audience education'],
    note: 'Facebook may not be the primary lead-generation channel for every B2B company, so we assess its role within the broader marketing strategy.',
  },
  {
    title: 'Multi-Location Businesses',
    body: 'Businesses operating across multiple locations need consistent information without making every Page look identical.',
    points: [
      'Location-specific information',
      'Local offers',
      'Regional content',
      'Reviews',
      'Customer questions',
      'Consistent brand standards',
    ],
  },
  {
    title: 'International Brands',
    body: 'We manage Facebook Pages for businesses targeting markets outside Bangladesh, adapting content, communication style, publishing workflow, and audience considerations per market.',
    points: ['United States', 'United Kingdom', 'Australia', 'Canada', 'United Arab Emirates'],
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Target audience alignment"
          title="Who Our Facebook Management Service Is For"
        >
          Facebook plays a different role depending on your business model, so the plan, publishing
          cadence, and community scope are adjusted accordingly.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <article key={audience.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="flex h-10 w-10 items-center justify-center border-2 border-frame-accent/40 bg-frame-accent/10 font-heading text-sm font-bold text-frame-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {audience.body}
                </p>
              </div>

              <ul className="mt-6 space-y-2.5 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90 md:text-sm">
                {audience.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                      <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>

              {audience.note && (
                <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {audience.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Facebook is one channel. We also manage Instagram, LinkedIn, TikTok, and YouTube through
            the same in-house team when you need a coordinated presence.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Talk to Us About Your Market &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
