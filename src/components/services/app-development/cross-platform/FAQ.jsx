import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "Should I choose Flutter or React Native?",
    "answer": "It depends on your application's requirements, existing technology, UI needs, integrations, team, and long-term roadmap. We compare both options before recommending the framework."
  },
  {
    "question": "Will a cross-platform app feel as good as two separate native apps?",
    "answer": "A well-designed cross-platform app can provide a strong experience on both platforms. Platform-specific features can also use native modules when shared implementation is not the right fit."
  },
  {
    "question": "Is cross-platform actually cheaper than building native apps for both platforms?",
    "answer": "It can reduce duplicated development work when large parts of the product can be shared. The final cost still depends on native features, backend requirements, integrations, design complexity, testing, and scope."
  },
  {
    "question": "Can cross-platform apps use native device features?",
    "answer": "Yes. Flutter and React Native applications can connect with native Android and iOS functionality when the product requires platform-specific APIs or device capabilities."
  },
  {
    "question": "Do you handle submission to both Google Play and the App Store?",
    "answer": "Yes. We support the release workflow for both platforms within the agreed project scope, including build preparation, testing, submission, and required technical changes."
  },
  {
    "question": "Can you migrate an existing native app to Flutter or React Native?",
    "answer": "Yes. We can review an existing native application and determine whether migration, partial modernization, or continued native development makes more sense."
  },
  {
    "question": "Can you build an MVP for both Android and iOS?",
    "answer": "Yes. Cross-platform development can be suitable for MVPs that need both platforms and have substantial shared functionality."
  },
  {
    "question": "Do you work with clients outside Bangladesh?",
    "answer": "Yes. Framecipher works with businesses in Bangladesh as well as international clients through a structured remote development process."
  }
]

export default function FAQ({ service }) {
  const faqList = (service?.faqs && service.faqs.length > 0) ? service.faqs : faqs
  if (!faqList?.length) return null

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
          {faqList.map((faq, index) => (
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
              <div className="border-t-2 border-frame-border p-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg whitespace-pre-line">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
