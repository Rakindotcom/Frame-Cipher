import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "What actually counts as an MVP versus a full app?",
    "answer": "An MVP includes only the features needed to test your core hypothesis with real users. A full app includes the complete feature set, deeper polish, and infrastructure built for scale, the MVP is usually the smarter first step before committing to that."
  },
  {
    "question": "How do you decide what features make it into the MVP?",
    "answer": "We start by identifying the specific assumption you need to test, then include only what's necessary to test it. Everything else gets logged for a later phase, not dropped entirely."
  },
  {
    "question": "Can the MVP grow into the full product, or does it get rebuilt from scratch?",
    "answer": "It depends on what the MVP validates and what technical decisions were made early on. We plan with that transition in mind where possible, so useful parts of the build carry forward instead of being discarded."
  },
  {
    "question": "How do you know if the MVP actually succeeded?",
    "answer": "Success is measured against the specific hypothesis it was built to test, using the usage data and feedback collected after launch, not a subjective sense of whether people \"seemed to like it.\""
  },
  {
    "question": "Do you work with founders outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi founders, we build MVPs for clients in the US, UK, Australia, Canada, and UAE."
  },
  {
    "question": "Is MVP development only for startup founders?",
    "answer": "No, existing businesses use MVPs to test new features or product lines before committing to a full budget, and agencies use them to prototype client concepts. The scoping process is the same regardless of whether you're launching a company or validating an idea inside one that already exists.\n\n[Talk to Our Build Team]"
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
