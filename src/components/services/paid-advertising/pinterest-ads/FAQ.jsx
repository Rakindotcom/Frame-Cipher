import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How much should I budget for Pinterest Ads?",
    "answer": "Most businesses see meaningful test results starting around ৳30,000–50,000/month in ad spend, separate from management fees, though this varies by category competitiveness and catalog size."
  },
  {
    "question": "Do I need a large product catalog to run Pinterest Ads?",
    "answer": "No. Catalog and Shopping Ads work best with a larger catalog, but awareness and consideration campaigns work fine for smaller product ranges or service businesses with strong visual content."
  },
  {
    "question": "How is Pinterest different from running the same budget on Meta?",
    "answer": "Pinterest generally has a longer consideration window and skews toward planning-stage intent rather than impulse engagement, so campaigns are usually judged over a longer timeframe and creative is built to be saved rather than just clicked."
  },
  {
    "question": "Can you manage Pinterest alongside our existing Meta or Google campaigns?",
    "answer": "Yes, we coordinate targeting and retargeting logic across platforms where it makes sense, so Pinterest and other channels aren't working against each other."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we manage Pinterest Ads for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Ads Team]"
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
