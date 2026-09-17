import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Why build natively in Swift instead of using a cross-platform framework?",
    "answer": "Native gets you direct access to everything iOS can do, often before cross-platform frameworks catch up. Cross-platform makes sense when you need Android and iOS from one codebase, faster and cheaper, it depends on what your project actually needs."
  },
  {
    "question": "Do you guarantee App Store approval?",
    "answer": "No one can, honestly, that decision sits with Apple. We build to current guidelines from the outset, which lowers rejection risk, and we're there to help if review feedback comes back."
  },
  {
    "question": "How long does an App Store review actually take?",
    "answer": "That's set by Apple, not us, and it varies. We build typical review timing into project planning and prepare submissions carefully to reduce the odds of a revision request slowing things down."
  },
  {
    "question": "Can you build in Apple-specific features like Apple Pay or HealthKit?",
    "answer": "Yes, when the app calls for it. What's involved depends on the specific feature we'll walk through during your initial consultation."
  },
  {
    "question": "Do you work with clients outside Bangladesh?",
    "answer": "We do, alongside Bangladeshi businesses, we build iOS apps for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Build Team]"
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
