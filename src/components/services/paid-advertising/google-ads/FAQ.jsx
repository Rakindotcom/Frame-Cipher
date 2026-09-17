import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How much should I budget for Google Ads?",
    "answer": "It depends on your industry's competition and what a conversion is worth to your business. We help calculate a realistic starting budget during the account audit rather than recommending a generic number."
  },
  {
    "question": "What's the difference between Search, Shopping, and Performance Max?",
    "answer": "Search shows text ads for specific searches, Shopping shows product listings for ecommerce catalogs, and Performance Max is Google's automated campaign type running across multiple placements at once. We recommend based on what your business actually sells and needs."
  },
  {
    "question": "Do you need access to my existing Google Ads account, or do we start fresh?",
    "answer": "Either works, we can audit and improve an existing account, or build a new one from scratch if you're starting for the first time. You retain ownership of the account either way."
  },
  {
    "question": "Why is my conversion tracking important if I just want more clicks?",
    "answer": "Google's own bidding algorithms optimize based on your conversion data, if tracking is broken or missing, the platform is optimizing blind, which usually means wasted spend regardless of how many clicks come through."
  },
  {
    "question": "Do you manage Google Ads for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we manage Google Ads for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Ads Team]"
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
