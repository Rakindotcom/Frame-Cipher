import { SectionIntro, PosterButton } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Account & Business Audit',
    body: 'We begin by reviewing your existing LinkedIn presence and understanding your business. We then identify the most important priorities for your LinkedIn management program.',
    bullets: [
      'Company Page',
      'Executive profiles',
      'Profile positioning',
      'Page information',
      'Existing content',
      'Content performance',
      'Audience',
      'Competitors',
      'Engagement',
      'Visual identity',
      'Business objectives',
      'Content gaps',
      'Existing assets',
    ],
  },
  {
    number: '02',
    title: 'Audience, ICP & Competitor Research',
    body: 'We research your ideal customer profile and the professional audiences you want to reach. This research informs both company and executive content.',
    bullets: [
      'ICP research',
      'Audience research',
      'Industry research',
      'Competitor analysis',
      'Competitor content patterns',
      'Customer questions',
      'Buyer concerns',
      'Industry conversations',
      'Content gaps',
      'Market opportunities',
    ],
  },
  {
    number: '03',
    title: 'Positioning & Voice Development',
    body: 'Before writing executive content, we need to understand the person behind the profile.',
    bullets: [
      'Executive positioning',
      'Brand positioning',
      'Content pillars',
      'Tone of voice',
      'Writing style',
      'Preferred terminology',
      'Areas of expertise',
      'Topics to avoid',
      'Personal stories',
      'Professional experiences',
      'Opinions and perspectives',
      'Approval requirements',
    ],
    note: 'For ghostwriting, we can use interviews, questionnaires, existing content, voice references, and direct feedback to develop a stronger understanding of the executive’s communication style.',
  },
  {
    number: '04',
    title: 'Content Strategy & Calendar',
    body: 'We develop a structured LinkedIn content calendar based on your objectives and audience. The content mix is adjusted based on your business, industry, sales cycle, audience, and performance data.',
    bullets: [
      'Company Page content',
      'Executive content',
      'Thought leadership',
      'Industry insights',
      'Educational posts',
      'Case studies',
      'Carousels',
      'Documents',
      'Employer-brand content',
      'Product or service education',
      'Events',
      'Newsletters',
      'Campaign content',
      'Calls to action',
      'Publishing cadence',
    ],
  },
  {
    number: '05',
    title: 'Content Creation & Approval',
    body: 'Our team develops the agreed content for your company page and executive profiles. Content goes through an agreed review and approval process before publishing.',
    bullets: [
      'LinkedIn posts',
      'Executive ghostwriting',
      'Carousels',
      'Document posts',
      'Captions',
      'Hooks',
      'Thought leadership',
      'Case-study content',
      'Company updates',
      'Visual content',
      'Newsletter content',
      'Event content',
    ],
  },
  {
    number: '06',
    title: 'Publishing & Engagement',
    body: 'Approved content is scheduled or published according to the agreed calendar. Our team can also manage the agreed engagement activities.',
    bullets: [
      'Comment monitoring',
      'Page responses',
      'Strategic commenting',
      'Community interaction',
      'Executive engagement guidance',
      'Conversation monitoring',
      'Inquiry escalation',
    ],
    note: 'For executives, personal participation can remain with the executive whenever a conversation requires their direct expertise or relationship.',
  },
  {
    number: '07',
    title: 'Reporting & Optimization',
    body: 'We review performance regularly and use the findings to improve future content. The next content cycle is then refined using those insights.',
    bullets: [
      'Strong-performing topics',
      'Strong-performing formats',
      'Audience response',
      'Executive content performance',
      'Company Page performance',
      'Follower trends',
      'Profile activity',
      'Engagement quality',
      'Website activity',
      'Business-relevant actions',
    ],
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution framework"
          title="How Our LinkedIn Management Process Works"
        >
          Our process connects research, positioning, content creation, publishing, engagement,
          reporting, and ongoing optimization.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90">
                  {step.body}
                </p>
              </div>

              <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90 transition-colors duration-200 group-hover:border-frame-accent-fg/30 group-hover:text-frame-accent-fg/90 md:text-sm">
                {step.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-frame-accent transition-colors duration-200 group-hover:bg-frame-accent-fg" />
                    <span className="leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

              {step.note && (
                <p className="mt-4 text-xs font-semibold leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/80">
                  {step.note}
                </p>
              )}
            </article>
          ))}

          <div className="flex flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Continuous, not one-off
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90 md:text-base">
              The audit comes first, so recommendations are based on your actual pages, profiles, and
              performance rather than a generic checklist.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact">Get Your Free LinkedIn Presence Audit &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
