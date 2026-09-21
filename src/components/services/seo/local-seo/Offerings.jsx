import { SectionIntro, PosterButton } from '../../../Kinetic'

const offerings = [
  {
    title: 'Google Business Profile Optimization',
    description: 'Your Google Business Profile provides important information about your business in Google Search and Maps. We optimize the profile around your actual business, services, location, and customer needs.',
    bullets: [
      'Business information review',
      'Primary and secondary category evaluation',
      'Service and product information',
      'Business description optimization',
      'Profile completeness',
      'Photo and media recommendations',
      'Service-area configuration',
      'Business attributes',
      'Profile content guidance',
      'Local relevance improvements',
    ],
    note: 'We also check for inconsistencies or missing information that could create confusion for customers.',
  },
  {
    title: 'Local Keyword & Search Intent Mapping',
    description: 'Local keyword research identifies what customers search for and where those searches occur. We map keywords according to services, products, locations, customer intent, search modifiers, business types, local problems, and commercial intent.',
    bullets: [
      'Services',
      'Products',
      'Locations',
      'Customer intent',
      'Search modifiers',
      'Business types',
      'Local problems',
      'Commercial intent',
    ],
    note: 'Instead of forcing every location keyword onto one page, we assign search intent to the most appropriate URL or business asset. This creates a cleaner site structure and reduces unnecessary keyword repetition.',
  },
  {
    title: 'Local Website & Service-Area Page Optimization',
    description: 'Your website supports the information customers discover through local search. We optimize relevant pages around your services, locations, and customer intent.',
    bullets: [
      'Service pages',
      'Location pages',
      'City pages',
      'Branch pages',
      'Contact pages',
      'About pages',
      'Conversion elements',
      'Internal links',
      'Local business information',
      'On-page SEO elements',
    ],
    note: 'For service-area businesses, we structure location content around genuine service coverage instead of creating thin pages for every nearby city.',
  },
  {
    title: 'Citation Building & Business Information Cleanup',
    description: 'Citations are online references to your business information. Common citation data includes business name, address, phone number, website, and business category.',
    bullets: [
      'Business name',
      'Address',
      'Phone number',
      'Website',
      'Business category',
    ],
    note: 'We review relevant business directories and platforms for inaccurate, incomplete, or inconsistent information. The focus is on useful and relevant listings rather than creating large numbers of low-quality directory profiles.',
  },
  {
    title: 'Review & Reputation Management',
    description: 'Customer reviews can influence how people perceive your business before they contact you. We help create a structured approach to review management.',
    bullets: [
      'Review acquisition processes',
      'Review response guidance',
      'Customer feedback workflows',
      'Profile reputation monitoring',
      'Identifying recurring customer concerns',
      'Review policy guidance',
    ],
    note: 'We focus on genuine customer feedback rather than artificial review generation.',
  },
  {
    title: 'Google Maps & Geo-Grid Optimization',
    description: 'Local rankings can vary significantly across different parts of a city. A business may perform strongly near its location while appearing less prominently several kilometers away. We use geographic visibility analysis to understand how your business appears across relevant areas.',
    bullets: [
      'Strong visibility zones',
      'Weak coverage areas',
      'Competitor-dominated areas',
      'Location-specific opportunities',
      'Changes in local visibility',
    ],
    note: 'The findings help guide ongoing local optimization.',
  },
  {
    title: 'Local Competitor Analysis',
    description: 'Your local competitors reveal how businesses in your market compete for the same searches. We analyze relevant competitors across the signals that influence local visibility.',
    bullets: [
      'Google Business Profile presence',
      'Categories',
      'Services',
      'Reviews',
      'Website structure',
      'Local content',
      'Location targeting',
      'Search visibility',
      'Authority signals',
    ],
    note: 'The purpose is not to copy competitors. It is to identify gaps and opportunities within your own local strategy.',
  },
  {
    title: 'Local Schema & Entity Signals',
    description: 'Structured data can help search engines understand important information about your business and website. Where appropriate, we implement or review relevant schema.',
    bullets: [
      'LocalBusiness',
      'Organization',
      'Service',
      'Product',
      'Breadcrumb',
      'FAQ',
      'Location-related entities',
    ],
    note: 'We also keep your business information consistent across important digital properties.',
  },
  {
    title: 'Local Search Monitoring',
    description: 'Local SEO requires ongoing observation because search visibility can change across locations and over time. We monitor relevant local search signals to identify changes.',
    bullets: [
      'Google Maps visibility',
      'Local organic rankings',
      'Competitor presence',
      'Google Business Profile activity',
      'Review activity',
      'Website performance',
      'Search demand',
    ],
    note: 'Monitoring helps identify when the strategy needs adjustment.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Capabilities & Scope"
          title="Our Local SEO Services"
        >
          Our Local SEO services cover the main areas that influence local search visibility. Each
          service has a specific role within the broader strategy.
        </SectionIntro>

        <div className="grid sm:grid-cols-2">
          {offerings.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Service 0{String(index + 1).padStart(1, '0')}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>
              </div>
              {item.bullets?.length > 0 && (
                <ul className="mt-6 space-y-2.5 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.note && (
                <div className="mt-6 border-l-2 border-frame-accent bg-frame-bg p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.note}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not sure where to start?
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Start with a free local SEO consultation
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review your business model, target locations, Google Business Profile, website,
              and competition to recommend where local SEO work will have the most impact.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}