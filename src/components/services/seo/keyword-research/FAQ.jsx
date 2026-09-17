import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Why not just target the highest search volume terms?",
    "answer": "High volume doesn't mean realistic opportunity, a term dominated by established national sites may be effectively out of reach regardless of how many people search it. We prioritize by what your site can actually compete for, not volume alone."
  },
  {
    "question": "How do you figure out what customers actually search, versus industry terminology?",
    "answer": "We research actual search query data, question patterns, and language people use in reviews and forums, not just the vocabulary a business uses internally to describe itself."
  },
  {
    "question": "What's the difference between keyword research and an SEO audit?",
    "answer": "An audit reviews your existing site's condition and performance. Keyword research identifies new opportunities and terms to target going forward, they're complementary, but answer different questions."
  },
  {
    "question": "Do you provide ongoing keyword research, or just a one-time list?",
    "answer": "Both, a one-time comprehensive map for businesses planning a content strategy, or ongoing monitoring for businesses that want new opportunities tracked continuously as search trends shift."
  },
  {
    "question": "Do you research keywords for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we provide keyword research for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our SEO Team]"
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
