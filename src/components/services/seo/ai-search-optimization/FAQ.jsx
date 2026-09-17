import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "What's the difference between AEO and GEO?",
    "answer": "AEO works at the individual content level, structuring specific pages so AI systems can extract and cite a direct answer. GEO works at the brand level, building the topical authority and consistency that makes AI systems trust your business as a source repeatedly, not just once."
  },
  {
    "question": "How is AI search optimization different from traditional SEO?",
    "answer": "Traditional SEO optimizes for ranking in a list of links, rewarding backlinks and domain authority built over time. AI search optimization structures content for direct extraction and citation, weighing retrieval-readiness and entity clarity more heavily, related goals, but genuinely different mechanics."
  },
  {
    "question": "Can you guarantee my content gets cited by ChatGPT or other AI tools?",
    "answer": "No, citation decisions happen inside each AI platform's own retrieval algorithm, which no outside provider controls. We structure content according to what's currently understood to improve genuine citation likelihood, without promising a specific outcome."
  },
  {
    "question": "Is this only relevant for large brands, or does it matter for smaller businesses too?",
    "answer": "It matters for smaller businesses too, and sometimes more, a smaller site with genuinely well-structured, retrieval-ready content can get cited over a larger competitor whose content was never built with AI extraction in mind."
  },
  {
    "question": "Do you provide AI search optimization for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we provide AEO and GEO services for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our SEO Team]"
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
