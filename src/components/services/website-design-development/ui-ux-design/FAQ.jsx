import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "What's the difference between UI design and UX design?",
    "answer": "UX design focuses on how a product works, user flow, structure, and ease of completing tasks. UI design focuses on how it looks, visual style, typography, and interface elements. Both are handled together in our process, since visual design built on unvalidated structure tends to underperform."
  },
  {
    "question": "Do I need UI/UX design if I'm using a platform like WordPress or Shopify?",
    "answer": "Yes, platform themes provide a starting structure, but user flow, information architecture, and visual customization still benefit from dedicated design work, especially for anything beyond a straightforward template use case."
  },
  {
    "question": "Do you conduct usability testing with real users?",
    "answer": "Yes, when scoped into the project, we test prototypes with real or representative users to catch friction points before development, rather than relying only on internal review."
  },
  {
    "question": "Can you design for a mobile app, not just a website?",
    "answer": "Yes, the same user flow mapping, wireframing, and UI design process applies to app interfaces, adjusted for mobile-specific interaction patterns and platform conventions."
  },
  {
    "question": "Do you work with clients outside Bangladesh?",
    "answer": "Yes, we provide UI/UX design for businesses and products across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Design Team]"
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
