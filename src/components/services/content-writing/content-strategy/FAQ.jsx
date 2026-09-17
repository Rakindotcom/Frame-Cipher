import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "What's the difference between a content calendar and a content strategy?",
    "answer": "A calendar is a production schedule, what gets published and when. A strategy is the reasoning behind what belongs on that calendar in the first place, tied to actual business goals rather than just filling dates."
  },
  {
    "question": "Do you write the content too, or just build the strategy?",
    "answer": "Both are available, some businesses want the strategic plan to execute with their own team, others want us to handle both the strategy and the actual writing that follows from it."
  },
  {
    "question": "How often should a content strategy actually be revisited?",
    "answer": "Quarterly is a reasonable standard rhythm for most businesses, frequent enough to stay current as results and market conditions shift, without constantly rebuilding the plan from scratch."
  },
  {
    "question": "Can you build a strategy around content we've already published?",
    "answer": "Yes, the audit stage specifically reviews existing content, and the strategy is built to make sense of and build on what's already there, not ignore it and start from zero."
  },
  {
    "question": "Do you build content strategy for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we build content strategy for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Content Team]"
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
