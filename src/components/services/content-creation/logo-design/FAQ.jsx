import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "What's the difference between this and your Branding service?",
    "answer": "This service is the logo itself. Branding is the full visual system around it color, typography, imagery style, and guidelines. Many businesses start with a logo and build out full branding afterward; see the section above for the full distinction."
  },
  {
    "question": "How many logo concepts do we get to choose from?",
    "answer": "Standard engagements include three distinct initial concepts, developed as genuinely different directions rather than variations on one idea, refined further based on which direction resonates."
  },
  {
    "question": "We already have a logo, Can you improve it instead of starting over?",
    "answer": "Yes, logo redesign is scoped specifically to assess what's working in an existing mark and evolve it, rather than discarding existing brand recognition and starting from a blank page."
  },
  {
    "question": "What files do we actually get at the end?",
    "answer": "A full package including vector source files, various formats for print, web, and app icon use, color and reversed versions, and basic usage guidelines not just a single PNG."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we design logos for clients in the US, UK, Australia, and Canada.\n\n[Talk to Our Creative Team]"
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
