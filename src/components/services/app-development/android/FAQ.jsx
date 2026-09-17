import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Why build natively in Kotlin instead of using a cross-platform framework?",
    "answer": "Native Kotlin development gives direct access to Android's full platform capabilities and generally performs better for graphics-intensive or hardware-dependent features. Cross-platform frameworks are faster and cheaper when you need both Android and iOS from one codebase, we'll recommend based on your actual requirements."
  },
  {
    "question": "How do you handle Android's device fragmentation?",
    "answer": "We test across a real range of device tiers and OS versions during development, not just the latest flagship phone, since a large share of Android's actual user base is on mid-range or older devices."
  },
  {
    "question": "Do you handle Google Play Store submission?",
    "answer": "Yes, Play Store listing setup and submission is part of our process, including navigating current Google Play Developer Policy requirements before you submit."
  },
  {
    "question": "Can you integrate the app with our existing backend or third-party services?",
    "answer": "In most cases, yes API and backend integration is a standard part of Android development. Specific compatibility depends on the system, so we confirm this during the initial consultation."
  },
  {
    "question": "Do you build Android apps for businesses outside Bangladesh?",
    "answer": "Yes, we build Android apps for businesses across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Build Team]"
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
