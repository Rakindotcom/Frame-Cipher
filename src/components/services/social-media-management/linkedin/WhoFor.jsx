import { SectionIntro, PosterButton } from '../../../Kinetic'

const audiences = [
  {
    title: 'B2B Companies',
    body: 'For B2B businesses that need stronger professional visibility, company content, executive positioning, thought leadership, and relationship building.',
    points: [
      'Professional visibility',
      'Company content',
      'Executive positioning',
      'Thought leadership',
      'Relationship building',
    ],
  },
  {
    title: 'SaaS & Technology Businesses',
    body: 'For technology companies that need to explain complex products, demonstrate expertise, communicate product value, and build credibility with professional audiences.',
    points: [
      'Complex product explanation',
      'Demonstrated expertise',
      'Product value',
      'Professional credibility',
    ],
  },
  {
    title: 'Professional Services',
    body: 'For law firms, consulting firms, accounting firms, financial services businesses, agencies, IT companies, and other professional service providers that sell expertise and trust.',
    points: [
      'Law firms',
      'Consulting firms',
      'Accounting firms',
      'Financial services',
      'Agencies',
      'IT companies',
    ],
  },
  {
    title: 'Manufacturers & Exporters',
    body: 'For manufacturers, suppliers, exporters, and industrial businesses that need to communicate capabilities, products, certifications, expertise, company milestones, and international positioning.',
    points: [
      'Capabilities',
      'Products',
      'Certifications',
      'Expertise',
      'Company milestones',
      'International positioning',
    ],
  },
  {
    title: 'Consultants & Agencies',
    body: 'For consultants and agencies that need to demonstrate expertise, communicate their methodology, share industry insights, and build relationships with potential clients.',
    points: [
      'Demonstrated expertise',
      'Methodology',
      'Industry insights',
      'Client relationships',
    ],
  },
  {
    title: 'Founders & Executives',
    body: 'For founders, CEOs, directors, consultants, and subject-matter experts who want to build a stronger professional presence around their knowledge and experience.',
    points: [
      'Knowledge',
      'Experience',
      'Professional presence',
      'Thought leadership',
    ],
  },
  {
    title: 'International Businesses',
    body: 'For businesses targeting customers, partners, talent, or professional audiences outside Bangladesh.',
    points: [
      'Target market',
      'Audience',
      'Language',
      'Industry conventions',
      'Cultural context',
      'Competitors',
      'Business objectives',
    ],
    note: 'Content can be adapted to the target market rather than treating every professional audience as one global group.',
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Target audience alignment"
          title="Who Our LinkedIn Management Service Is For"
        >
          We adapt LinkedIn management to your industry, audience, sales process, expertise, content
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
              Company Page or executive profile?
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              Not sure which one matters most for your business? That is exactly what the presence
              audit is for.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact" variant="outline">
                Discuss Your LinkedIn Strategy &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
