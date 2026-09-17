import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How do we know if we need animation instead of a filmed video?",
    "answer": "If what you're explaining has a physical form, a person, a place, a real product demonstration, filming usually makes more sense. If it's a process, a concept, or data that doesn't exist as something a camera could capture, animation is generally the better fit, we'll advise directly during discovery if a request would be better served by live-action or static design instead."
  },
  {
    "question": "Do you do 2D, 3D, or both?",
    "answer": "Both, depending on the project, 2D generally suits explainers, kinetic typography, and character animation, while 3D suits product visualization and anything needing to show depth or multiple angles."
  },
  {
    "question": "Can you animate our existing logo, or do we need a new one designed first?",
    "answer": "We can animate an existing logo as-is. If a logo isn't in a format well-suited to animation, we'll flag that directly and can coordinate with our Logo Design service if a redesign would genuinely help."
  },
  {
    "question": "How long does a typical explainer video take?",
    "answer": "Generally two to three weeks from an approved storyboard to final delivery, depending on length and complexity, we'll give a specific timeline once the script and storyboard are scoped."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we produce motion graphics and animation for clients in the US, UK, Australia, and Canada.\n\n[Talk to Our Creative Team]"
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
