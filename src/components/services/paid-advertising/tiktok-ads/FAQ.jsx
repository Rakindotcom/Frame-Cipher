import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How is TikTok Ads management different from Meta or Instagram ads?",
    "answer": "TikTok generally requires more creative volume and faster iteration, since content fatigues quicker on the platform. Targeting also leans more on behavior and content interaction than the demographic-heavy targeting common on Meta."
  },
  {
    "question": "Do we need to work with creators, or can ads run with in-house content only?",
    "answer": "In-house content can work, but creator-produced and Spark Ads content typically outperforms studio-style ads on TikTok, since it matches what people expect to see in the feed."
  },
  {
    "question": "How much creativity do we actually need each month?",
    "answer": "It depends on budget and testing pace, but businesses running structured TikTok campaigns typically need several new video variations monthly rather than one or two, we scope this specifically during onboarding rather than assuming a fixed number."
  },
  {
    "question": "Can TikTok Shop be set up if we're already selling through Shopify or another platform?",
    "answer": "Yes, TikTok Shop can typically be connected to an existing product catalog rather than requiring a separate inventory system, though the exact setup depends on the platform in use."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we manage TikTok Ads for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Ads Team]"
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
