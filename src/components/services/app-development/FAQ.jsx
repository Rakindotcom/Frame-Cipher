import { SectionIntro } from '../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Should I build native apps for both Android and iOS, or go cross-platform?",
    "answer": "It depends on your budget, timeline, and whether your app needs deep platform-specific features. Cross-platform (Flutter or React Native) is usually faster and cheaper for reaching both audiences; native makes sense when performance or platform-specific functionality is critical. We assess this honestly during discovery."
  },
  {
    "question": "Do you guarantee App Store approval?",
    "answer": "No, no development partner can guarantee that, since approval is decided by Apple and Google directly. We build to their current guidelines and support you through any review feedback, but the final decision isn't ours to control."
  },
  {
    "question": "What's the difference between an MVP and a full app build?",
    "answer": "An MVP is a focused version with only the core features needed to test your idea with real users. A full build includes the complete feature set, more polish, and infrastructure built for scale, MVPs are often the smarter first step before committing to full development."
  },
  {
    "question": "Do you build the backend and API, or just the app itself?",
    "answer": "Both API development and backend infrastructure are part of our process when your app needs them, whether that's a custom backend we build or integration with third-party services you already use."
  },
  {
    "question": "Do you provide support after the app launches?",
    "answer": "Yes, app maintenance and support is available as an ongoing service, covering bug fixes, OS compatibility updates, and security patches, since apps require continued attention after launch to keep working as Android and iOS update."
  },
  {
    "question": "Do you build apps for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi startups and businesses, we build apps for clients in the US, UK, Australia, Canada, and UAE."
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
