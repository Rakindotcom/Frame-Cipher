import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Do we need Amazon Brand Registry to work with you?",
    "answer": "Not for Sponsored Products, which is available to any professional seller account. Sponsored Brands, Sponsored Display, and A+ Content all require Brand Registry enrollment, we'll confirm your status and help you understand next steps if you're not yet enrolled."
  },
  {
    "question": "What's a good ACOS target?",
    "answer": "It depends heavily on category, margin, and whether the goal is profitability or growth, a break-even ACOS on a low-margin product looks very different from one on a high-margin product. We set targets per product during onboarding rather than applying one number across an entire catalog."
  },
  {
    "question": "Do you manage our product listings too, or just the ads?",
    "answer": "We flag listing issues that are actively limiting ad performance, weak images, missing A+ Content, Buy Box loss, but full listing optimization and copywriting is typically a separate, coordinated workstream rather than bundled into ad management by default."
  },
  {
    "question": "How do you handle Prime Day and other high-traffic events?",
    "answer": "Seasonal surges get planned in advance, budget and bid adjustments, inventory checks with the business beforehand, and closer monitoring during the event itself, since bid competition and traffic both spike sharply during these windows."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses selling internationally, we manage Amazon Ads for clients on the US, UK, Australia, Canada, and UAE marketplaces.\n\n[Talk to Our Ads Team]"
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
