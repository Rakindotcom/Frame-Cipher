import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: "What types of Android apps can you develop?",
    answer: "We develop Android applications for ecommerce, delivery, logistics, booking, marketplaces, customer services, internal business operations, SaaS products, enterprise workflows, and custom digital products."
  },
  {
    question: "Do you use Kotlin for Android app development?",
    answer: "Yes. Native Android applications are developed in Kotlin where a native Android approach is appropriate for the project."
  },
  {
    question: "Why choose native Android development instead of cross-platform?",
    answer: "Native development can be appropriate when the application needs deeper Android platform integration, native device capabilities, or tighter control over Android-specific behavior. We assess the project before recommending the technology."
  },
  {
    question: "How do you handle Android device fragmentation?",
    answer: "We define supported device and OS requirements during planning and test against the relevant device categories and Android versions for the project."
  },
  {
    question: "Can you build an offline Android app?",
    answer: "Yes. Where offline functionality is required, we can design local storage, caching, synchronization, and appropriate recovery behavior around the relevant workflows."
  },
  {
    question: "Can you integrate Firebase into an Android app?",
    answer: "Yes. Firebase services such as authentication, push notifications, analytics, and crash reporting can be integrated where they fit the application's requirements."
  },
  {
    question: "Can you integrate bKash or Nagad?",
    answer: "Yes, where the relevant provider integration or API is available and the required payment workflow fits the application."
  },
  {
    question: "Can you integrate our existing backend or APIs?",
    answer: "Yes. We can connect the Android application with an existing backend, custom API, CRM, database, ecommerce system, or other business software where technically supported."
  },
  {
    question: "Do you build the backend and admin dashboard too?",
    answer: "Yes. Backend services, APIs, authentication, business logic, databases, and admin systems can be developed where required by the project scope."
  },
  {
    question: "Do you test Android apps on real devices?",
    answer: "Testing can include relevant real devices and Android versions based on the target audience and agreed testing scope."
  },
  {
    question: "Do you handle Google Play Store submission?",
    answer: "Yes. Google Play submission and release support can be included in the project. Final publishing approval remains under Google's control."
  },
  {
    question: "Can you modernize an existing Android app?",
    answer: "Yes. We can assess the existing codebase, architecture, dependencies, UX, integrations, and performance before recommending modernization, migration, partial redevelopment, or a full rebuild."
  },
  {
    question: "Do I receive the Android source code?",
    answer: "Source-code ownership and handoff terms are defined in the project agreement and can include the application source code and relevant documentation."
  },
  {
    question: "How long does an Android app take to build?",
    answer: "Timelines depend on the features, backend, integrations, device support, testing, and project scope. Smaller MVPs may take several weeks, while complex enterprise applications can take several months."
  }
]

export default function FAQ({ service }) {
  const faqList = (service?.faqs && service.faqs.length > 0) ? service.faqs : faqs

  return (
    <section id="faq" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
        >
          Common questions about our native Kotlin development, device testing, backend integrations, and Google Play Store submission.
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
