import { PosterButton } from '../../../Kinetic'

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
      'Services & expertise',
      'Customer questions & FAQs',
      'Case examples & proof',
      'Testimonials & reviews',
      'Educational content',
      'Special offers & campaigns',
    ],
  },
  {
    title: 'Professional & B2B Businesses',
    body: 'B2B businesses can use Facebook to support brand visibility, employer presence, customer trust, company updates, and audience education.',
    points: [
      'Brand visibility',
      'Employer presence',
      'Customer trust',
      'Company updates',
      'Audience education',
    ],
    note: 'Facebook may not be the primary lead-generation channel for every B2B company, so we assess its role within the broader marketing strategy.',
  },
  {
    title: 'Multi-Location Businesses',
    body: 'Businesses operating across multiple locations need consistent information without making every Page look identical.',
    points: [
      'Location-specific information',
      'Local offers & updates',
      'Regional content',
      'Reviews per branch',
      'Customer questions',
      'Consistent brand standards',
    ],
  },
  {
    title: 'International Brands',
    body: 'We manage Facebook Pages for businesses targeting markets outside Bangladesh, adapting content, communication style, publishing workflow, and audience considerations per market.',
    points: [
      'United States',
      'United Kingdom',
      'Australia',
      'Canada',
      'United Arab Emirates',
    ],
  },
]

export default function WhoFor() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="flex items-center gap-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            Target Audience Alignment
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Who Our Facebook Management Service Is For
          </h2>
          <p className="mt-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Facebook plays a different role depending on your business model, so the plan, publishing
            cadence, and community scope are adjusted accordingly.
          </p>
        </div>

        {/* Audiences Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.18] hover:bg-[#151518]"
            >
              <div>
                <span className="font-mono text-xs font-medium text-frame-accent">
                  Segment {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                  {audience.body}
                </p>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A]">
                  Tailored Focus
                </span>
                <ul className="mt-3 space-y-2">
                  {audience.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                      <svg
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>

                {audience.note && (
                  <div className="mt-4 rounded-xl border border-white/[0.06] bg-[#09090B]/60 p-3 text-xs leading-relaxed text-[#A1A1AA]">
                    {audience.note}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="mb-14 max-w-3xl space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-frame-accent">
              Multi-Channel Coordination
            </span>
            <p className="mt-2 text-base leading-relaxed text-[#FAFAFA] sm:text-lg">
              Facebook is one channel. We also manage Instagram, LinkedIn, TikTok, and YouTube through
              the same in-house team when you need a coordinated presence.
            </p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <PosterButton href="/contact">Talk to Us About Your Market</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
