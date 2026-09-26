import { SectionIntro, PosterButton } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Subject Line & Preview Text Strategy',
    lead: 'The subject line and preview text create the first impression in the inbox. We develop:',
    items: [
      'Subject line options',
      'Preview text',
      'Sender-message alignment',
      'Curiosity and relevance angles',
      'Benefit-led subject lines',
      'Offer-led subject lines',
      'Testing variants where appropriate',
    ],
    note: 'We do not use misleading subject lines simply to generate an opening. The subject should create a reason to open that the email itself can support.',
    note2: 'Where testing is available, we can provide subject-line variants for your email platform to test against actual audience data.',
  },
  {
    number: '02',
    title: 'Welcome & Onboarding Sequences',
    lead: 'The first emails after signup or purchase establish expectations for the relationship. We can write:',
    items: [
      'Welcome emails',
      'Lead-magnet delivery sequences',
      'Subscriber onboarding',
      'Customer onboarding',
      'Product education',
      'First-value emails',
      'Expectation-setting emails',
      'Early engagement prompts',
    ],
    note: 'The sequence can introduce the brand, establish context, provide useful value, and guide the subscriber toward the appropriate next step.',
  },
  {
    number: '03',
    title: 'Lead Nurture & Lifecycle Campaigns',
    lead: 'Not every subscriber is ready to buy immediately. Nurture sequences can help move prospects through different stages of awareness and consideration. We can develop:',
    items: [
      'Lead nurture sequences',
      'Educational email sequences',
      'Consideration-stage emails',
      'Free-trial nurture',
      'Post-demo follow-up',
      'Post-call nurture',
      'Lifecycle messaging',
      'Segment-specific email copy',
    ],
    note: 'The messaging changes according to where the recipient is in the relationship with the business.',
  },
  {
    number: '04',
    title: 'Sales & Launch Campaigns',
    lead: 'When there is a specific offer to communicate, the sequence needs to build toward a clear action. We can write:',
    items: [
      'Product launch emails',
      'Service launch campaigns',
      'Sales sequences',
      'Promotional campaigns',
      'Early-access emails',
      'Announcement emails',
      'Offer emails',
      'Deadline emails based on genuine deadlines',
    ],
    note: 'Each email has a defined role within the campaign rather than repeating the same sales message.',
  },
  {
    number: '05',
    title: 'Newsletter & Content Emails',
    lead: 'Regular newsletters can keep your audience informed without turning every send into a sales pitch. We can write:',
    items: [
      'Weekly newsletters',
      'Monthly newsletters',
      'Educational emails',
      'Industry updates',
      'Content promotion emails',
      'Curated content emails',
      'Company announcements',
      'Product and service updates',
    ],
    note: 'The format can be adapted to your existing brand voice and publishing cadence.',
  },
  {
    number: '06',
    title: 'Ecommerce Lifecycle Emails',
    lead: 'Ecommerce businesses often need different messages at different points in the customer journey. We can write:',
    items: [
      'Abandoned-cart emails',
      'Browse-abandonment copy',
      'Post-purchase emails',
      'Product education',
      'Cross-sell messaging',
      'Upsell messaging',
      'Review-request emails',
      'Customer retention emails',
      'Win-back sequences',
    ],
    note: "The goal is to match the message to the customer's actual stage rather than send the same promotional email to everyone.",
  },
  {
    number: '07',
    title: 'Re-Engagement & Win-Back Campaigns',
    lead: 'Some subscribers stop opening, clicking, or buying. A re-engagement sequence can test whether there is still a useful relationship to rebuild. We can write:',
    items: [
      'Re-engagement emails',
      'Win-back sequences',
      'Inactivity campaigns',
      'Preference prompts',
      'Final re-engagement messages',
      'Customer reactivation campaigns',
    ],
    note: 'The goal is not to chase every inactive subscriber indefinitely. It is to give disengaged contacts a clear, relevant reason to return before they are removed from an active audience.',
  },
]

export default function Offerings() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Capabilities & scope" title="What Our Email Copywriting Service Includes">
          Email copy can sit at any point in the customer journey. The format changes, but each message still
          needs a clear purpose.
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
                <div className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  <p>{block.note}</p>
                  {block.note2 && <p className="mt-2">{block.note2}</p>}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Not sure which type of email program you need? Start with what the email has to achieve.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request an Email Copywriting Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
