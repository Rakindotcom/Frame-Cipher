import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "What's the difference between this and your YouTube Management service?",
    "answer": "YouTube Management covers the full channel operation SEO, strategy, thumbnail testing, upload cadence, with production included as part of that engagement. This page is standalone production for businesses that need YouTube-quality video without full channel management, or extra production volume beyond what a management plan covers."
  },
  {
    "question": "Do you handle scripting, or do we need to provide our own?",
    "answer": "Scripting and outline development are included as standard, though we're also happy to film against a script a business already has."
  },
  {
    "question": "Can you match our existing brand's visual style?",
    "answer": "Yes, where a business has existing brand guidelines, production is built to match them; where it doesn't, we can coordinate with our Branding service to establish that style first."
  },
  {
    "question": "Do you provide equipment and a filming location, or do we need our own?",
    "answer": "We can film on-location at a business's site or arrange a studio setup, depending on what the content needs, this gets scoped during pre-production planning."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we produce YouTube videos for clients in the US, UK, Australia, and Canada.\n\n[Talk to Our Creative Team]"
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
