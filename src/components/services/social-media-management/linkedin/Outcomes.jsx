import { SectionIntro, PosterButton } from '../../../Kinetic'

const outcomes = [
  {
    title: 'Build B2B Visibility',
    body: 'Consistent and relevant LinkedIn content can help your business remain visible within professional audiences. We build content around your industry, expertise, customers, market, and business priorities.',
  },
  {
    title: 'Strengthen Executive Authority',
    body: 'Founders and executives can use LinkedIn to communicate their expertise, experiences, opinions, and professional perspective. We turn those insights into structured thought leadership content while keeping the executive’s authentic voice central.',
  },
  {
    title: 'Build Professional Credibility',
    body: 'Your LinkedIn presence should answer an important question for potential customers: why should I take this business or professional seriously?',
    points: [
      'Company information',
      'Expertise',
      'Case studies',
      'Useful content',
      'Professional profiles',
      'Customer-focused insights',
      'Consistent communication',
    ],
  },
  {
    title: 'Support Lead Generation',
    body: 'LinkedIn can contribute to the B2B customer journey by helping potential customers understand your expertise before they contact you. We can align content and calls to action with:',
    points: [
      'Customer questions',
      'Buyer concerns',
      'Service education',
      'Case studies',
      'Industry insights',
      'Website content',
      'Contact opportunities',
      'Sales conversations',
    ],
    note: 'Where appropriate, organic LinkedIn management can also work alongside separate paid campaigns and lead-generation activity.',
  },
  {
    title: 'Support Recruitment & Employer Brand',
    body: 'LinkedIn can also support recruitment and employer branding. The goal is to communicate what your organization is like, not simply announce vacancies.',
    points: [
      'Company culture',
      'Employee stories',
      'Hiring announcements',
      'Team achievements',
      'Workplace initiatives',
      'Leadership',
      'Professional development',
      'Company milestones',
      'Open positions',
    ],
  },
  {
    title: 'Build Industry Relationships',
    body: 'LinkedIn is also a professional relationship-building platform. Relevant engagement can help your business participate in industry conversations, stay connected with partners, engage with peers, and maintain relationships with potential customers.',
    note: 'We focus on relevant and meaningful interaction rather than indiscriminate networking.',
  },
]

export default function Outcomes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Realistic outcomes"
          title="What LinkedIn Management Can Help Your Business Achieve"
        >
          LinkedIn cannot guarantee a specific number of leads, followers, impressions, or sales. But a
          structured LinkedIn presence can support important business objectives when strategy, content,
          engagement, and measurement work together.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <article key={item.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {item.body}
                </p>
              </div>

              {item.points?.length > 0 && (
                <ul className="mt-6 space-y-2.5 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90 md:text-sm">
                  {item.points.map((point, pIdx) => (
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
              )}

              {item.note && (
                <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {item.note}
                </p>
              )}
            </article>
          ))}

          <div className="flex flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              The honest framing
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90 md:text-base">
              We build and manage a structured LinkedIn presence, then use real performance data to
              improve it. We do not promise viral posts, follower counts, or guaranteed leads and sales.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact" variant="outline">
                Request Your LinkedIn Management Quote &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
