import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How do I know if I need custom development instead of a platform like WordPress or Shopify?",
    "answer": "Custom development makes sense when you have unique business logic, complex data relationships, specific performance requirements, or integrations a platform can't support natively. For most standard business sites or stores, a platform build gets you the same result faster and at lower cost, we'll assess this honestly during consultation."
  },
  {
    "question": "Why Next.js specifically?",
    "answer": "Next.js is a modern React framework that gives direct control over rendering and performance strategy, with strong support for both content-heavy pages and complex application logic, a combination that suits businesses needing both marketing pages and custom functionality in one system."
  },
  {
    "question": "Is custom development more expensive than a platform build?",
    "answer": "Generally, yes, custom development involves building functionality from scratch rather than configuring existing tools, which takes more time and technical work. It's a worthwhile investment when your requirements genuinely need it, and an unnecessary cost when they don't."
  },
  {
    "question": "Can you integrate our custom application with existing business systems?",
    "answer": "In most cases, yes, integrating with CRMs, ERPs, payment processors, or internal tools is a common part of custom development. Specific compatibility depends on the system, so we confirm this during technical discovery."
  },
  {
    "question": "Do you work with businesses outside Bangladesh?",
    "answer": "Yes, we build custom applications for businesses across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Build Team]"
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
