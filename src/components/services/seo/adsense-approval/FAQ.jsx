import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Can you guarantee my site gets approved for AdSense?",
    "answer": "No, final approval is always Google's decision, and no provider can override their review process. We prepare your site to meet current requirements as thoroughly as possible and tell you honestly where things stand."
  },
  {
    "question": "Why was my site rejected without a clear explanation?",
    "answer": "Google's rejection notices are often generic. We review your specific site against the common, known causes, content depth, missing pages, structure, policy issues, to identify what's actually likely responsible in your case."
  },
  {
    "question": "How long should I wait before reapplying after a rejection?",
    "answer": "It depends on what caused the rejection and how much genuinely needs to change. We give honest timing guidance based on your specific situation rather than a fixed universal number."
  },
  {
    "question": "Does my site need to be a certain age or size before applying?",
    "answer": "There's no strict rule, but a site with too little content or too new to have established real substance often struggles regardless of technical readiness, we'll tell you honestly if that's the likely issue."
  },
  {
    "question": "Do you provide AdSense approval support for sites outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi sites, we provide AdSense approval support for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our SEO Team]"
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
