import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'Build Trust Before the Purchase',
    body: 'Potential customers may check your Facebook Page before contacting or buying from you. Recent content, clear business information, useful responses, reviews, and consistent branding help answer an important question: is this business active and trustworthy?',
    points: ['Recent content', 'Clear business information', 'Useful responses', 'Reviews and consistent branding'],
  },
  {
    title: 'Manage Customer Questions & Messenger',
    body: 'Customers often want answers before they buy. They may ask about price, availability, location, delivery, services, product details, business hours, or support.',
    points: ['Price', 'Availability', 'Location', 'Delivery', 'Services and product details', 'Business hours and support'],
    note: 'A consistent response process can reduce unnecessary friction between interest and inquiry.',
  },
  {
    title: 'Monitor Reviews & Reputation',
    body: 'Reviews and public conversations contribute to the overall impression of your business. Professional responses show that your business pays attention to customers, including when feedback is negative.',
    points: ['Review monitoring', 'Professional responses', 'Escalation of issues requiring your internal team'],
  },
  {
    title: 'Improve Local Discovery',
    body: 'For local businesses, your Facebook presence can support customer discovery alongside your website, Google Business Profile, Maps presence, and other local channels.',
    points: ['Clear business information', 'Relevant content', 'Location details', 'Consistent branding'],
  },
  {
    title: 'Build Community Where It Fits',
    body: 'Some businesses benefit from an active Facebook community. Others do not. We assess whether a Group, recurring discussion, customer community, or other Facebook feature fits your business before adding it to the strategy.',
    points: ['Group fit assessment', 'Recurring discussion prompts', 'Customer community structure'],
  },
]

export default function WhyMatters() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Business context"
          title="Why Facebook Management Still Matters for Businesses"
        >
          Facebook is no longer simply a place to publish promotional posts. For many businesses, it
          functions as a trust, communication, discovery, and community channel.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <article key={reason.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Reason {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {reason.body}
                </p>
              </div>

              {reason.points?.length > 0 && (
                <ul className="mt-6 space-y-2.5 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90 md:text-sm">
                  {reason.points.map((point, pIdx) => (
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

              {reason.note && (
                <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {reason.note}
                </p>
              )}
            </article>
          ))}

          <div className="flex flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              The practical test
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              Open your Page as a first-time visitor would. If it does not answer what you do, where
              you operate, and how to reach you, that gap is costing you trust before anyone contacts
              you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
