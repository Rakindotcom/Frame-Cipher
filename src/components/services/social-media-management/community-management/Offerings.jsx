import { SectionIntro, PosterButton } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Comment & Message Management',
    body: [
      'Most customer conversations happen in the comments and direct messages under your posts.',
      'We help you respond consistently without letting routine interactions consume internal team time.',
    ],
    list: [
      'Comment monitoring and response',
      'Direct message triage and response',
      'FAQ-based responses',
      'Brand voice consistency',
      'Escalation of unresolved questions',
    ],
    note: 'The goal is a dependable response standard, not a promise of instant replies at every hour of the day.',
  },
  {
    number: '02',
    title: 'Review Monitoring & Response',
    body: [
      'Customer reviews are often the first place potential buyers look before deciding whether to contact you.',
      'We help you monitor relevant review platforms and respond in a way that reflects your brand voice.',
    ],
    list: [
      'Review monitoring',
      'Professional response to positive and negative reviews',
      'Google review reply support',
      'Review tone alignment',
      'Escalation for serious complaints',
    ],
    cta: 'Discuss Review Management',
    note: 'A thoughtful public response to a complaint often builds more trust than the complaint itself would have cost if ignored.',
  },
  {
    number: '03',
    title: 'Customer Service Escalation',
    body: [
      'Not every question should be answered immediately with a generic response.',
      'Some conversations need access to your product, service, order, or account information that only your team can provide.',
    ],
    list: [
      'Issue classification',
      'Escalation rules',
      'Internal team coordination',
      'Follow-up tracking',
      'Resolution status updates',
    ],
    note: 'Customers should not receive an automated holding reply indefinitely. Escalation keeps response honest and useful.',
  },
  {
    number: '04',
    title: 'Moderation & Brand Safety',
    body: [
      'Not every comment deserves a reply, and not every comment should remain visible.',
      'Moderation decisions are made against clear rules, not personal reaction.',
    ],
    list: [
      'Comment moderation',
      'Spam and abuse management',
      'Fake engagement review',
      'Content removal requests',
      'Sensitive issue escalation',
    ],
    note: 'Moderation rules should be documented and agreed in advance, so decisions stay consistent even when conversations become difficult.',
  },
  {
    number: '05',
    title: 'Social Listening & Sentiment Monitoring',
    body: [
      'Community management also involves noticing what people are saying when they are not directly addressing you.',
      'Monitoring relevant keywords, brand mentions, and recurring themes helps surface potential issues early.',
    ],
    list: [
      'Brand mention monitoring',
      'Relevant keyword monitoring',
      'Sentiment direction',
      'Recurring issue tracking',
      'Reputation and trust signals',
    ],
    note: 'These signals are most useful when they reach the right person early, before a small pattern becomes a visible reputation problem.',
  },
  {
    number: '06',
    title: 'Proactive Community Engagement',
    body: [
      'Community management is not limited to reacting to inbound messages.',
      'Proactive engagement can help build a more active and connected audience around your brand.',
    ],
    list: [
      'Relevant conversation participation',
      'Audience interaction',
      'Engagement-quality support',
      'Community tone development',
      'Opportunity identification',
    ],
    note: 'Proactive engagement should feel like genuine participation rather than automated activity, which is why brand voice guidance matters here.',
  },
  {
    number: '07',
    title: 'User-Generated Content & Community Advocacy',
    body: [
      'Customers already create content about the brands they support.',
      'Community management can help identify that content, coordinate permission where relevant, and recognize contributors.',
    ],
    list: [
      'Customer content identification',
      'Permission coordination',
      'Content collection support',
      'Advocacy recognition',
      'Community appreciation',
    ],
    note: 'This is often one of the most underused opportunities in social media, because the content is already being created by people who chose to support you.',
  },
  {
    number: '08',
    title: 'Community Reporting & Insights',
    body: [
      'Ongoing community management should produce something useful for the business, not just a higher response count.',
      'Reporting can show what customers are asking, complaining about, and responding to.',
    ],
    list: [
      'Response volume reporting',
      'Recurring question reporting',
      'Escalation summaries',
      'Sentiment insights',
      'Platform-level observations',
    ],
    note: 'Recurring questions and feedback themes are often useful inputs for content planning, customer experience decisions, and marketing priorities.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Capabilities &amp; scope"
          title="What Our Community Management Service Includes"
        >
          Comment and message response, review management, escalation, moderation, social listening,
          proactive engagement, user-generated content support, and community reporting.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {block.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                  {block.title}
                </h3>
                {block.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  This can include
                </span>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {block.list.map((entry) => (
                    <li
                      key={entry}
                      className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>

              {block.note && (
                <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {block.note}
                </p>
              )}

              {block.cta && (
                <div className="mt-6">
                  <PosterButton href="/contact">{block.cta} &rarr;</PosterButton>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
