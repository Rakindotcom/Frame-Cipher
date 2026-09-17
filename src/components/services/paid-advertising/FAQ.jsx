import { SectionIntro } from '../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How much should I actually budget for paid advertising?",
    "answer": "It depends on your industry's competition and what a conversion is worth to your business. We help calculate a realistic starting budget during the free audit rather than recommending an arbitrary number."
  },
  {
    "question": "What's the difference between your management fee and my ad spend?",
    "answer": "The management fee pays for strategy, setup, and ongoing optimization; ad spend goes directly to the platform, usually billed separately to you, so you always know exactly what's paying for what."
  },
  {
    "question": "How is paid advertising different from SEO?",
    "answer": "Paid advertising produces traffic immediately but stops the moment it stops. SEO builds slower but keeps producing results without ongoing spend. Many businesses use both, since they solve different timing problems."
  },
  {
    "question": "Do you guarantee a specific return on ad spend?",
    "answer": "No, no agency can honestly guarantee a specific return, since results depend on your offer, market, and competition. We focus on transparent tracking and continuous optimization instead of unverifiable promises."
  },
  {
    "question": "Can you manage campaigns across multiple platforms at once?",
    "answer": "Yes, Google, Meta, LinkedIn, and the other platforms we manage are often coordinated as one strategy rather than run in isolation, since search, social, professional, and remarketing channels typically perform better together than separately."
  },
  {
    "question": "How do you decide which of these ten platforms my business should actually use?",
    "answer": "It depends on where your specific buyers actually spend attention and make decisions, a B2B service business needs a very different platform mix than an ecommerce store or a consumer app, and we recommend based on that rather than running every platform by default."
  },
  {
    "question": "Do you actually run ads inside ChatGPT?",
    "answer": "Yes, where the platform's sponsored placement options are available, it's an early, evolving channel, and we're upfront about it being less proven than Google or Meta, but early positioning in a channel like this can be a genuine advantage before it gets more competitive and expensive."
  },
  {
    "question": "Do you serve businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we manage paid advertising for clients in the US, UK, Australia, Canada, and UAE."
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
