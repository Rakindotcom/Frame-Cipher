import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "What's the difference between this and your Logo Design or Social Media Graphics services?",
    "answer": "Logo Design is the one-time foundational brand mark. Social Media Graphics are platform-specific feed and Story content. This service covers everything else decks, print materials, packaging, and digital ads, see the section above for the full breakdown."
  },
  {
    "question": "Do you handle print production, or just the design files?",
    "answer": "We design and prepare production-ready files to the correct specifications, and can coordinate directly with whatever print vendor a business uses, actual printing is typically handled by that vendor rather than by us directly."
  },
  {
    "question": "Can you design for our existing brand guidelines, or do we need branding done first?",
    "answer": "We can work within existing guidelines immediately. If a business doesn't have an established visual system yet, that's usually worth establishing first, see our Branding service, so design work afterward has a consistent foundation to build from."
  },
  {
    "question": "Do you offer ongoing design support, or only one-off projects?",
    "answer": "Both, the Design Retainer option is built for businesses with regular, varied design needs, while individual pieces work fine for standalone projects."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we produce graphic design for clients in the US, UK, Australia, and Canada.\n\n[Talk to Our Creative Team]"
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
