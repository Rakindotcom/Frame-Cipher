import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Why is LinkedIn so much more expensive than Meta or Google?",
    "answer": "LinkedIn's cost reflects the precision of its targeting, verified job title, seniority, industry, and company data that other platforms can only approximate through inferred interest signals, which is a meaningfully different level of accuracy."
  },
  {
    "question": "Is LinkedIn Ads worth it for a small B2B business?",
    "answer": "It depends on deal value and sales cycle. If your average customer value justifies a higher cost-per-lead and the buying decision involves specific professional roles, LinkedIn's precision is usually worth the premium, for low-value or impulse purchases, it typically isn't."
  },
  {
    "question": "How do you measure success differently on LinkedIn compared to other platforms?",
    "answer": "We weight lead quality over lead volume specifically here, tracking how leads actually move through your sales pipeline rather than treating every form submission as an equivalent result."
  },
  {
    "question": "What's account-based marketing, and does my business need it?",
    "answer": "It's targeting a specific, named list of companies rather than a broader audience defined by title or industry, useful for businesses with a smaller number of high-value target accounts rather than a broad addressable market."
  },
  {
    "question": "Do you manage LinkedIn Ads for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi B2B businesses, we manage LinkedIn Ads for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Ads Team]"
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
