import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How many days of filming does a typical project need?",
    "answer": "It depends entirely on scope, a simple video might need a half-day shoot, while a brand film or campaign can require multiple days across different locations. We scope this specifically during pre-production planning."
  },
  {
    "question": "Can you produce video for both social media and longer formats from the same shoot?",
    "answer": "Often, yes a well-planned shoot can generate footage usable for both a longer core video and shorter platform-specific cuts, which is more efficient than separate shoots for each format."
  },
  {
    "question": "Do you provide scriptwriting, or do we need to bring our own?",
    "answer": "Concept and script development is part of the pre-production process, though we're also happy to work from a script or concept you've already developed."
  },
  {
    "question": "What happens if we're not happy with the initial edit?",
    "answer": "Review points are built into the process specifically so direction can be adjusted before final delivery, revision rounds are part of the engagement, not an extra request."
  },
  {
    "question": "Do you produce videos for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we produce video for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Creative Team]"
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
