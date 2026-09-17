import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Can you integrate with our existing ERP or legacy systems?",
    "answer": "In most cases, yes - legacy system integration is a core part of enterprise development, not an exception. Specific compatibility depends on the system, so we confirm this during discovery."
  },
  {
    "question": "How do you handle security and compliance requirements?",
    "answer": "Security architecture is planned from the discovery stage, based on your organization's specific regulatory and internal policy requirements, not added as a checklist item near the end."
  },
  {
    "question": "How is enterprise app development different from building a regular business app?",
    "answer": "Enterprise development typically involves more stakeholders, integration with existing systems, stricter security requirements, and workflows built around specific departments rather than a general audience."
  },
  {
    "question": "Do you support single sign-on (SSO) integration?",
    "answer": "Yes, SSO integration with your existing identity provider is a standard part of enterprise development, so users aren't managing yet another separate login."
  },
  {
    "question": "Do you work with organizations outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi organizations, we build enterprise applications for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Build Team]"
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
