import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Which platform is best for lead generation Google, Meta, or LinkedIn?",
    "answer": "It depends on your offer and buying process. Google captures existing search intent, Meta creates interest through creative, and LinkedIn targets by professional role for B2B, we typically recommend a combination based on where your actual buyers are."
  },
  {
    "question": "Should my lead form be short or long?",
    "answer": "It depends on what your sales team needs to qualify a prospect. Shorter forms generate more submissions but often lower quality; longer forms filter more but generate fewer leads, we help find the right balance for your specific sales process."
  },
  {
    "question": "How fast should we actually respond to a new lead?",
    "answer": "As fast as genuinely possible, leads contacted within minutes convert at meaningfully higher rates than those contacted hours or a day later, and we review your process specifically to help close that gap."
  },
  {
    "question": "Do you help set up CRM integration, or just the ad campaigns?",
    "answer": "Both, CRM integration and lead routing are part of our process, since a well-targeted campaign feeding a disorganized follow-up process wastes much of its own value."
  },
  {
    "question": "Do you manage lead generation campaigns for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we build lead generation campaigns for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Ads Team]"
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
