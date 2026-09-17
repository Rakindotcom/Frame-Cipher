import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "What's the difference between this and your Graphic Design service?",
    "answer": "Graphic Design covers everything outside social platforms, decks, print, packaging, digital ads. This service is specifically built for feed, Story, and carousel formats, with their particular sizing and safe-zone constraints."
  },
  {
    "question": "If we're already using your Social Media Management services, do we need this separately?",
    "answer": "No, if you're working with us on platform-specific management, ongoing graphic production for that platform happens inside that engagement already. This service is for businesses that need graphics without full management, or extra volume beyond what a management plan covers."
  },
  {
    "question": "Can you build templates we can reuse ourselves without hiring you for every graphic?",
    "answer": "Yes, the Template System option is built specifically for that, handed off in an editable format with guidelines for keeping future output consistent."
  },
  {
    "question": "Do you design carousels as one connected sequence, or just individual slides?",
    "answer": "As a sequence, carousel work includes planning the overall arc, a dedicated hook slide, and a deliberate closing slide, not slides designed independently and grouped together afterward."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we design social media graphics for clients in the US, UK, Australia, and Canada.\n\n[Talk to Our Creative Team]"
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
