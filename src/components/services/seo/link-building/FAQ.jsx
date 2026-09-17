import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Why not just buy links to move faster?",
    "answer": "Bought links, especially in bulk, carry real penalty risk, Google's systems are increasingly good at detecting unnatural link patterns, and a resulting penalty typically costs far more time to recover from than the links would have saved."
  },
  {
    "question": "How many links will I get each month?",
    "answer": "It depends on your plan and industry, and we won't promise a fixed number regardless of outreach conditions, quality and relevance matter more than hitting an arbitrary count."
  },
  {
    "question": "Do you guarantee placement on specific high-authority sites?",
    "answer": "No, publication decisions belong to the sites we're pitching, not to us. We pursue genuinely relevant, high-quality targets, but final acceptance is always the publisher's call."
  },
  {
    "question": "What happens if my site already has some low-quality or spammy backlinks?",
    "answer": "We review your existing backlink profile as part of the initial audit and can prepare a disavow file for genuinely harmful links, separate from the ongoing outreach work."
  },
  {
    "question": "Do you build links for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we build authority for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our SEO Team]"
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
