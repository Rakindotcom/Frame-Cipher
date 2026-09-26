import { SectionIntro, PosterButton } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Client Interviews & Research',
    lead: 'A credible case study starts with research. The strongest details often come from a real conversation, so we structure interviews to uncover information that generic questionnaires often miss. What we cover:',
    items: [
      'Customer interview preparation',
      'Client interview coordination',
      'Internal team interviews',
      'Project and campaign research',
      'Existing document and material review',
      'Data and result collection',
      'Timeline and milestone research',
      'Quote identification and selection',
    ],
    note: 'The goal is to understand what actually happened, not reconstruct the project from marketing language.',
  },
  {
    number: '02',
    title: 'Case Study Strategy & Story Selection',
    lead: 'Not every successful project makes a strong case study. We help identify stories that have a clear result, a relevant customer problem, and enough detail to support a credible narrative. We can evaluate potential stories based on:',
    items: [
      'Relevance to your target market',
      'Strength of the customer outcome',
      'Availability of measurable evidence',
      'Customer willingness to participate',
      'Strategic importance of the account',
      'Common buyer objections',
      'Industry or use-case relevance',
      'Potential for future content repurposing',
    ],
    note: 'This helps you build case studies that support your sales priorities rather than simply documenting whichever project finished most recently.',
  },
  {
    number: '03',
    title: 'Problem, Solution & Process Narrative',
    lead: 'We turn research into a structured story that readers can follow. The narrative typically covers:',
    items: [
      'The challenge: What problem was the customer facing?',
      'The context: Why did the problem matter?',
      'The approach: What solution or service was selected?',
      'The process: What actually happened during the engagement?',
      'The result: What changed, and how was that change measured?',
    ],
    note: 'The process matters because a result without context can be difficult for a skeptical reader to evaluate.',
  },
  {
    number: '04',
    title: 'Results, Metrics & Proof',
    lead: 'Specific evidence gives the story weight. Depending on the project, relevant metrics may include:',
    items: [
      'Revenue growth',
      'Lead generation',
      'Conversion rate',
      'Cost reduction',
      'Time savings',
      'Traffic growth',
      'Customer acquisition',
      'Retention',
      'Operational efficiency',
      'Productivity',
      'Sales performance',
      'Project completion improvements',
      'Other measurable business outcomes',
    ],
    note: 'We present available results with appropriate context rather than forcing every project into the same metric structure.',
  },
  {
    number: '05',
    title: 'Customer Quotes & Approval Coordination',
    lead: 'A customer quote can add a perspective that company-written copy cannot replicate. We help identify useful quotes from interviews or approved customer feedback and integrate them naturally into the narrative. We also coordinate the review process so the customer can verify:',
    items: [
      'Their statements',
      'Company information',
      'Results and metrics',
      'Project details',
      'Approved terminology',
      'Publication permissions',
    ],
    note: "Nothing should be presented as a customer's statement or result without appropriate confirmation.",
  },
  {
    number: '06',
    title: 'Multi-Format Case Study Content',
    lead: 'The research behind one customer story can support several marketing assets. Depending on your requirements, we can adapt the core story into:',
    items: [
      'Full-length case study',
      'Short case study summary',
      'Sales one-pager',
      'Proposal content',
      'Presentation copy',
      'Website proof sections',
      'Social media content',
      'Email or newsletter content',
      'Customer quote extracts',
    ],
    note: 'This allows your original interview and research effort to continue creating value beyond a single published page.',
  },
]

export default function Offerings() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Capabilities & scope" title="What Our Case Study Writing Service Includes">
          Writing comes after we understand the customer, the problem, the work performed, and the outcome.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {block.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {block.lead}
                </p>

                <ul className="mt-4 space-y-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm font-medium leading-relaxed text-frame-fg"
                    >
                      <span aria-hidden="true" className="mt-1 text-frame-accent">
                        &bull;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {block.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {block.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Not sure which customer story is worth documenting first? Start with the result you most need to prove.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
