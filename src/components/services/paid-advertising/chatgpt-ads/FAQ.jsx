import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Can you actually run ads inside ChatGPT right now?",
    "answer": "It depends on current platform availability, which changes over time. We track this directly and will tell you honestly what's genuinely accessible for your business today rather than assuming a fixed answer."
  },
  {
    "question": "Is it worth investing in this channel before it's fully proven?",
    "answer": "It depends on your risk tolerance and available budget. Small-scale, disciplined testing lets you build genuine early experience without significant risk, we don't recommend large commitments to a channel this early regardless of the business."
  },
  {
    "question": "How is this different from your AI Search Optimization service?",
    "answer": "AI Search Optimization (AEO/GEO) focuses on organic visibility, getting cited naturally in AI-generated answers. This service covers paid placement specifically, though the brand foundation work genuinely overlaps and supports both."
  },
  {
    "question": "What happens if the promised ad formats don't materialize the way expected?",
    "answer": "The brand entity and foundational work still holds value on its own, since it supports organic AI visibility regardless of how paid formats specifically develop, nothing in this engagement is wasted if the paid mechanics shift."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we provide ChatGPT Ads management for clients in the US, UK, Australia, Canada, and UAE, subject to platform availability in each region.\n\n[Talk to Our Ads Team]"
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
