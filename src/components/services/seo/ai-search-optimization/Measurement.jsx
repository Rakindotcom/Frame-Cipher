import { SectionIntro } from '../../../Kinetic'

const measurements = [
  {
    title: 'AI Citation & Mention Coverage',
    body: 'We monitor how often your brand or content appears in relevant AI-generated answers.',
    lead: 'We can examine:',
    points: [
      'Mention frequency',
      'Citation frequency',
      'Referenced pages',
      'Source domains',
      'Query categories',
      'Competitor mentions',
    ],
  },
  {
    title: 'Prompt-Level Visibility',
    body: 'We track visibility across a defined prompt set rather than relying on a handful of anecdotal searches.',
    lead: 'This can reveal:',
    points: [
      'Queries where your brand appears',
      'Queries where competitors appear',
      'Topics with weak coverage',
      'Changes over time',
      'Market-specific differences',
    ],
  },
  {
    title: 'Competitor AI Visibility',
    body: 'Your AI visibility is easier to evaluate when compared with the businesses competing for the same audience.',
    lead: 'We compare:',
    points: [
      'Brand mentions',
      'Citation frequency',
      'Source coverage',
      'Recommendation visibility',
      'Topic coverage',
      'Market-level differences',
    ],
  },
  {
    title: 'Google Generative Search Performance',
    body: "Where relevant data is available, we review Google's reporting for generative search experiences alongside traditional Search Console performance.",
    lead: 'This can help connect AI-related search visibility with:',
    points: ['Impressions', 'Clicks', 'Queries', 'Landing pages', 'Search trends'],
  },
  {
    title: 'Brand Accuracy & Source Consistency',
    body: 'Visibility alone is not enough. We also evaluate whether AI systems and external sources describe the business accurately and consistently.',
    lead: 'We look for:',
    points: [
      'Incorrect information',
      'Outdated services',
      'Wrong business details',
      'Conflicting descriptions',
      'Inconsistent expertise or positioning',
    ],
  },
  {
    title: 'Traffic, Leads & Business Outcomes',
    body: 'AI visibility should eventually connect to business performance where measurable.',
    lead: 'Depending on the tracking setup, we can evaluate:',
    points: [
      'Organic traffic',
      'AI-related referral traffic where identifiable',
      'Form submissions',
      'Calls',
      'Purchases',
      'Demo requests',
      'Qualified leads',
      'Revenue',
    ],
    note: 'Not every AI interaction produces a measurable click, so reporting should distinguish visibility indicators from directly attributable business outcomes.',
  },
]

export default function Measurement() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Transparent tracking" title="How We Measure AI Search Visibility">
          AI visibility should be measured at the query, brand, source, and business level where
          reliable data is available.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {measurements.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Measurement 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg">
                  {item.lead}
                </p>
                <ul className="mt-5 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
                {item.note && (
                  <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.note}
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