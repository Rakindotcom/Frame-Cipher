import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Is remarketing going to annoy people who've already decided not to buy?",
    "answer": "It can, if frequency isn't managed, which is exactly why frequency capping and audience exclusion are core parts of how we run it, not an afterthought. A capped, segmented remarketing program is a different experience for the person seeing it than an unlimited one showing the same ad on a loop."
  },
  {
    "question": "Does remarketing still work with iOS tracking restrictions and cookie changes?",
    "answer": "Yes, but it requires server-side tracking and first-party data as part of the setup rather than relying on browser pixels alone, accounts still running on pixel-only tracking are working with a meaningfully smaller, less accurate picture than they were a few years ago."
  },
  {
    "question": "How much website traffic do we need for remarketing to make sense?",
    "answer": "There's no fixed minimum, but very low-traffic sites take longer to build audiences large enough to target efficiently, we'll assess actual traffic volume during onboarding and set realistic expectations before recommending a full cross-platform program."
  },
  {
    "question": "How long should someone keep seeing our remarketing ads after they visit?",
    "answer": "This depends on the sales cycle, a same-day impulse purchase and a considered, multi-week B2B decision need very different windows. We set this per business rather than applying a default attribution window across every account."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we run remarketing programs for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Ads Team]"
  }
]
  if (!faqs?.length) return null

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
        >
          Common questions about our delivery process, technical standards, and engagement models.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg marker:content-none">
                <span>{faq.question}</span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
