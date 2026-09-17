import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Do you build custom APIs, or just connect to existing ones?",
    "answer": "Both, custom API development for your own product or internal use, and integration work connecting to third-party services like payment processors, CRMs, or ERPs."
  },
  {
    "question": "What happens if a third-party API we depend on changes or goes down?",
    "answer": "We build retry logic, fallback handling, and monitoring into integrations from the start, so a temporary outage gets caught and handled instead of silently failing. For ongoing changes to a connected service's API, that's covered under maintenance."
  },
  {
    "question": "Do you provide API documentation?",
    "answer": "Yes, documentation is built alongside custom API development, not treated as an afterthought, so your team or external partners can actually use what's been built."
  },
  {
    "question": "Can you integrate local Bangladeshi payment systems like bKash or Nagad?",
    "answer": "Yes, bKash, Nagad, and similar local payment integrations are part of our regular integration work, alongside international payment platforms where a project needs both."
  },
  {
    "question": "Do you work with clients outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we build and integrate APIs for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Build Team]"
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
