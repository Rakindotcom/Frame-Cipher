import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "What's included in an SEO audit?",
    "answer": "A technical review covering crawlability, speed, and structured data; an on-page review of content and metadata; a backlink profile assessment; and competitive analysis, all delivered as a prioritized, plain-language report rather than a raw data export."
  },
  {
    "question": "How is an SEO audit different from ongoing SEO work?",
    "answer": "An audit is a fixed-scope diagnostic deliverable, you get a report and can act on it however you choose. Ongoing SEO work is the implementation and continued optimization based on what an audit (or continued monitoring) reveals."
  },
  {
    "question": "Do I have to hire you for ongoing work after the audit?",
    "answer": "No, the audit is a standalone deliverable. Some clients execute the findings with their own team, others move into ongoing work with us. Both are genuinely fine outcomes."
  },
  {
    "question": "How long does an SEO audit take?",
    "answer": "A technical-only audit typically takes about a week. A comprehensive audit covering technical, on-page, backlink, and competitive analysis usually takes 2 to 3 weeks depending on site size."
  },
  {
    "question": "Do you provide audits for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we provide SEO audits for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our SEO Team]"
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
