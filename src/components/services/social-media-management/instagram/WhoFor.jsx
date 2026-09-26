import { SectionIntro, PosterButton } from '../../../Kinetic'

const audiences = [
  {
    title: 'Ecommerce & Product Brands',
    body: 'For brands that need consistent product content, Reels, social proof, product education, launches, UGC, and customer communication.',
    points: [
      'Product-focused Reels',
      'Carousels',
      'Product education',
      'Launches',
      'UGC',
      'Social proof',
      'Customer inquiries',
    ],
  },
  {
    title: 'Local Businesses',
    body: 'For restaurants, salons, clinics, retail stores, service providers, and other businesses that want to build local visibility and stronger customer relationships through Instagram.',
    points: [
      'Restaurants',
      'Salons',
      'Clinics',
      'Retail stores',
      'Service providers',
      'Local customer questions',
      'Stronger customer relationships',
    ],
  },
  {
    title: 'Service Businesses',
    body: 'For businesses that need to explain services, demonstrate expertise, answer customer questions, build trust, and generate inquiries.',
    points: [
      'Service explanation',
      'Demonstrated expertise',
      'Customer questions',
      'Trust building',
      'Inquiry generation',
    ],
  },
  {
    title: 'Fashion, Beauty & Lifestyle Brands',
    body: 'For visually driven brands that benefit from Reels, product storytelling, creator content, UGC, visual consistency, and community engagement.',
    points: [
      'Reels',
      'Product storytelling',
      'Creator content',
      'UGC',
      'Visual consistency',
      'Community engagement',
    ],
  },
  {
    title: 'Professional & B2B Businesses',
    body: 'For professional firms and B2B brands that want to communicate expertise, people, company culture, services, case studies, and industry insights.',
    points: [
      'Expertise',
      'People',
      'Company culture',
      'Services',
      'Case studies',
      'Industry insights',
    ],
  },
  {
    title: 'Founders & Personal Brands',
    body: 'For founders, consultants, professionals, and creators who want a consistent content system built around their expertise, personality, experience, and business goals.',
    points: [
      'Expertise',
      'Personality',
      'Experience',
      'Personal brand consistency',
      'Business goals',
    ],
  },
  {
    title: 'International Businesses',
    body: 'For businesses targeting audiences outside Bangladesh. Content planning can be adapted to the target market, audience, language, cultural context, competitors, publishing patterns, and business objectives.',
    points: [
      'Target market',
      'Audience',
      'Language',
      'Cultural context',
      'Competitors',
      'Publishing patterns',
      'Business objectives',
    ],
    note: 'The strategy is adapted to the market rather than treating every audience as one global group.',
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Target audience alignment"
          title="Who Our Instagram Management Service Is For"
        >
          We adapt the Instagram management strategy to your audience, offer, sales process, content
          requirements, and business goals.
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

          <div className="flex flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not a fit?
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              Ask before you commit. If Instagram is the wrong primary channel for your business, we
              will say so and point you toward the channel that fits.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact" variant="outline">
                Discuss Your Instagram Strategy &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
