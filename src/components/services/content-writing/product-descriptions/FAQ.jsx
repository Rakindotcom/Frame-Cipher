import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Will you just rewrite our existing manufacturer descriptions?",
    "answer": "No, reworded manufacturer copy still carries the same duplicate-content risk in most cases. We research the product and write from a genuinely different angle, not a synonym-swapped version of the original."
  },
  {
    "question": "Can you handle a large catalog, or is this only for a handful of products?",
    "answer": "Both bulk catalog work is a core part of this service, prioritized by which products most need original copy first rather than treated as an all-or-nothing project."
  },
  {
    "question": "Do you write differently for Amazon versus our own website?",
    "answer": "Yes, Amazon has its own structural conventions and character limits, and copy written for a business's own site can be longer and more SEO-focused. We format for the specific platform rather than posting the same copy everywhere unchanged."
  },
  {
    "question": "Do we need to provide product samples or photos?",
    "answer": "It helps but isn't required that detailed spec sheets, existing photos, or a product sample all improve research quality, and we'll tell you directly if a particular product needs more information before we can write something genuinely accurate."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we write product description copy for clients in the US, UK, Australia, and Canada.\n\n[Talk to Our Content Team]"
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
