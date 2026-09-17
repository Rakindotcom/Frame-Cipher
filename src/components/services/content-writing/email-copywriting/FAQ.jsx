import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How do you write subject lines that actually get opened?",
    "answer": "We focus on genuine curiosity or clear relevance rather than clickbait, since misleading subject lines damage trust the moment the email is opened and hurt future performance. Testing variants against real data also helps refine what's actually working for your specific audience."
  },
  {
    "question": "What's the difference between a welcome sequence and a nurture sequence?",
    "answer": "A welcome sequence is the first few emails after someone signs up, focused on setting expectations and building initial trust. A nurture sequence runs longer, providing ongoing value to build a deeper relationship before regularly asking for a sale."
  },
  {
    "question": "Can you write emails for a platform we're already using?",
    "answer": "Yes, we deliver copy ready to load into your existing email platform, formatted appropriately for how you're already sending."
  },
  {
    "question": "How do you handle segmentation in email copy?",
    "answer": "Where you have segmented lists, we write a copy adjusted for each segment's actual situation, rather than one generic email sent to everyone regardless of where they are in their relationship with your business."
  },
  {
    "question": "Do you write email copy for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we write email copy for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Content Team]"
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
