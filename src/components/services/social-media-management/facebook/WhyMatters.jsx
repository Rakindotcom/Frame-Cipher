const reasons = [
  {
    title: 'Build Trust Before the Purchase',
    body: 'Potential customers may check your Facebook Page before contacting or buying from you. Recent content, clear business information, useful responses, reviews, and consistent branding can help answer an important question: Is this business active and trustworthy? Your Page should make that decision easier.',
    points: ['Recent content', 'Clear business information', 'Useful responses', 'Reviews and consistent branding'],
  },
  {
    title: 'Manage Customer Questions & Messenger',
    body: 'Customers often want answers before they buy. They may ask about price, availability, location, delivery, services, product details, business hours, and support.',
    points: ['Price and availability', 'Location and delivery', 'Services and product details', 'Business hours and support'],
    note: 'A consistent response process can reduce unnecessary friction between interest and inquiry.',
  },
  {
    title: 'Monitor Reviews & Reputation',
    body: 'Reviews and public conversations contribute to the overall impression of your business. Professional responses can show that your business pays attention to customers, including when feedback is negative.',
    points: ['Review monitoring', 'Professional responses', 'Escalation of serious issues to internal team'],
  },
  {
    title: 'Improve Local Discovery',
    body: 'For local businesses, your Facebook presence can support customer discovery alongside your website, Google Business Profile, Maps presence, and other local channels.',
    points: ['Clear business information', 'Relevant local content', 'Location details', 'Consistent branding'],
  },
  {
    title: 'Build Community Where It Fits',
    body: 'Some businesses benefit from an active Facebook community. Others do not. We assess whether a Group, recurring discussion, customer community, or other Facebook feature fits your business before adding it to the strategy.',
    points: ['Group strategic fit assessment', 'Recurring discussion prompts', 'Customer community structure'],
  },
]

export default function WhyMatters() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="flex items-center gap-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            Business Context
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Facebook Management Still Matters for Businesses
          </h2>
          <p className="mt-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Facebook is no longer simply a place to publish promotional posts. For many businesses, it
            functions as a trust, communication, discovery, and community channel.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.18] hover:bg-[#151518]"
            >
              <div>
                <span className="font-mono text-xs font-medium text-frame-accent">
                  Reason {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                  {reason.body}
                </p>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-5">
                {reason.points && (
                  <ul className="space-y-2">
                    {reason.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                        <svg
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {reason.note && (
                  <div className="mt-4 rounded-xl border border-white/[0.06] bg-[#09090B]/60 p-3 text-xs leading-relaxed text-[#A1A1AA]">
                    {reason.note}
                  </div>
                )}
              </div>
            </article>
          ))}

          {/* The Practical Test Card */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-frame-accent">
                The Practical Test
              </span>
              <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                Inspect your Page like a customer.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                Open your Page as a first-time visitor would. If it does not answer what you do, where
                you operate, and how to reach you, that gap is costing you trust before anyone contacts
                you.
              </p>
            </div>
            <div className="mt-6 border-t border-white/[0.08] pt-4 text-xs font-mono text-[#71717A]">
              Audits reveal these gaps in minutes.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
