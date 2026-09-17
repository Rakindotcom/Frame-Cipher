import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Should I choose Flutter or React Native?",
    "answer": "It depends on your app's needs. Flutter tends to offer more consistent UI rendering across platforms; React Native has a larger ecosystem of existing libraries and works well if your team already knows JavaScript. We'll walk through the tradeoffs based on your specific project."
  },
  {
    "question": "Will a cross-platform app feel as good as two separate native apps?",
    "answer": "When built properly, yes, for most use cases. The difference shows up in graphics-intensive or deeply platform-specific features, where native modules fill the gap rather than forcing a compromise."
  },
  {
    "question": "Is cross-platform actually cheaper than building native apps for both platforms?",
    "answer": "Generally, yes, one codebase for shared logic costs less than building and maintaining two entirely separate native apps, though the exact savings depend on how much native module work your app ends up needing."
  },
  {
    "question": "Do you handle submission to both Google Play and the App Store?",
    "answer": "Yes, both submissions are part of our process, each prepared to that platform's own current requirements rather than treated as a single combined step."
  },
  {
    "question": "Do you work with clients outside Bangladesh?",
    "answer": "We do, alongside Bangladeshi businesses, we build cross-platform apps for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Build Team]"
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
