import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: "How much does iOS app development cost in Bangladesh?",
    answer: "The cost depends on features, design complexity, backend requirements, integrations, supported devices, and project scope. Our current project ranges start from around ৳320,000 for a simple iOS app or MVP."
  },
  {
    question: "How long does it take to build an iOS app?",
    answer: "A simple MVP may take around 6–8 weeks. Standard applications can take 10–14 weeks, while advanced applications can require 14–20 weeks or more."
  },
  {
    question: "Should I build native iOS or use cross-platform development?",
    answer: "Native iOS development makes sense when your product needs deeper Apple platform integration, platform-specific behavior, or a dedicated iOS experience. Cross-platform development may be suitable when you need Android and iOS from a shared codebase. The right choice depends on your product requirements."
  },
  {
    question: "Do you develop apps for both iPhone and iPad?",
    answer: "Yes. We can design and develop applications for iPhone, iPad, or both based on the project scope."
  },
  {
    question: "Can you help with App Store approval?",
    answer: "Yes. We can support the technical preparation, TestFlight workflow, App Store Connect setup, production build, submission, and required development changes within the agreed scope."
  },
  {
    question: "Can you work with an existing iOS app?",
    answer: "Yes. We can review an existing iOS application for modernization, bug fixing, performance improvements, feature development, dependency updates, or migration work."
  },
  {
    question: "Can you integrate Apple Pay, Sign in with Apple, or other Apple features?",
    answer: "Yes. Supported Apple services and device capabilities can be integrated based on your application's requirements, eligibility, and technical scope."
  },
  {
    question: "Can you build an iOS app for a business outside Bangladesh?",
    answer: "Yes. Framecipher works with businesses in Bangladesh and international markets through a remote, structured development process."
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
          Common questions about our native Swift development, App Store Connect release, Apple HIG standards, and ongoing maintenance.
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
