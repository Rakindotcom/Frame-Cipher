import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How fast do you actually respond to comments and messages?",
    "answer": "Response time depends on your specific plan, with faster windows available on higher tiers, we're direct about setting a realistic, defined standard rather than a vague promise of \"quick\" responses."
  },
  {
    "question": "Do you handle negative reviews, or just delete them?",
    "answer": "We respond professionally and constructively to negative reviews rather than deleting legitimate feedback, since a thoughtful public response often builds more trust than a hidden complaint would have cost."
  },
  {
    "question": "What happens if a message needs a real answer only my team can give?",
    "answer": "That's what escalation is for, genuine customer service issues get flagged to your team quickly through a clear process, rather than getting a generic holding reply indefinitely."
  },
  {
    "question": "Is community management included in your social media management packages?",
    "answer": "It can be bundled together or scoped separately, depending on whether you need full content management or specifically want response and reputation handled, we'll clarify the right fit during your audit."
  },
  {
    "question": "Do you provide community management for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we provide community management for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Social Team]"
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
