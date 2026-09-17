import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Can you provide reporting if you're not managing our actual content?",
    "answer": "Yes, standalone reporting is available for businesses handling their own content who want an outside, analytical view of performance."
  },
  {
    "question": "What's the difference between your reports and what I can see in each platform's own dashboard?",
    "answer": "Native dashboards show raw numbers without cross-platform consolidation or context. Our reports connect the numbers to what they actually mean for your business and end with specific recommendations, not just data."
  },
  {
    "question": "How do you measure whether social media is actually working for our business?",
    "answer": "It depends on what you've defined as success leads, sales, brand awareness, community growth, we track against your actual goals rather than a generic default metric set."
  },
  {
    "question": "Do you include response time and community metrics in reports?",
    "answer": "Yes, comment and message response time, sentiment trends, and review activity are tracked alongside content performance, since they matter as much as posting metrics but rarely appear in native platform dashboards."
  },
  {
    "question": "Do you provide reporting for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we provide reporting and analytics for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Social Team]"
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
