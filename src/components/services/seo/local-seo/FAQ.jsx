import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "What's the Google Map Pack, and why does it matter?",
    "answer": "It's the three-business block that appears at the top of local search results, and it captures the majority of clicks for location-based searches. Appearing there consistently takes a combination of profile quality, on-page local signals, and review authority working together."
  },
  {
    "question": "How is local SEO different from regular SEO?",
    "answer": "Regular SEO targets broad, often national visibility. Local SEO focuses specifically on ranking for searches tied to a location, \"near me\" searches, city-specific terms, and depends heavily on your Google Business Profile and citation consistency, which general SEO doesn't address."
  },
  {
    "question": "Can you manage multiple business locations?",
    "answer": "Yes, multi-location management is available, with each profile optimized individually and consolidated reporting so you can see performance across all locations at once."
  },
  {
    "question": "How do you generate reviews without violating Google's policies?",
    "answer": "We use practical, compliant approaches, making it easy for genuinely satisfied customers to leave a review, rather than incentivized or fake reviews, which risk your entire profile being suspended."
  },
  {
    "question": "Do you provide local SEO for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we provide local SEO for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our SEO Team]"
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
