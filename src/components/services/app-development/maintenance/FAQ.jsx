import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    question: "What does app maintenance and support include?",
    answer: "App maintenance can include bug fixes, OS and SDK updates, security maintenance, performance monitoring, backend and API support, integration maintenance, release support, and minor improvements. The exact scope depends on your application and selected maintenance plan."
  },
  {
    question: "Do you provide monthly app maintenance plans?",
    answer: "Yes. We offer monthly maintenance plans designed for different application sizes and support requirements. Plans currently start at ৳15,000 per month, with higher tiers for applications requiring broader support."
  },
  {
    question: "Can you maintain an app built by another developer?",
    answer: "Yes. We can take over an existing application after reviewing its codebase, dependencies, infrastructure, integrations, and current technical condition. The assessment helps establish a maintenance baseline before ongoing support begins."
  },
  {
    question: "Do you maintain both Android and iOS apps?",
    answer: "Yes. We support Android and iOS applications, with maintenance requirements determined by the application's architecture, codebase, dependencies, and integrations."
  },
  {
    question: "Do you maintain Flutter and React Native apps?",
    answer: "We can support cross-platform applications based on the project's technology, codebase condition, dependencies, and maintenance requirements. The initial assessment determines the appropriate maintenance scope."
  },
  {
    question: "Can you handle OS and SDK updates?",
    answer: "Yes. OS and SDK compatibility is an important part of ongoing application maintenance. We review relevant platform changes, update affected components, test the application, and support the release process when required."
  },
  {
    question: "Do you maintain app APIs and third-party integrations?",
    answer: "Yes. We can maintain existing APIs, backend connections, payment integrations, authentication systems, and other third-party services within the agreed scope."
  },
  {
    question: "Do you provide emergency app support?",
    answer: "Support priority can be structured around the severity of an issue. Critical production problems can be handled according to the response terms defined in the selected maintenance agreement."
  },
  {
    question: "How do your app maintenance SLAs work?",
    answer: "An SLA defines the agreed support expectations, such as issue priority, response expectations, communication, and support coverage. Specific SLA terms depend on the maintenance plan and should be agreed before the engagement begins."
  },
  {
    question: "How quickly can you start maintaining an existing app?",
    answer: "The onboarding period depends on the application's size, codebase condition, access requirements, and assessment scope. We first review the application and require access before beginning ongoing maintenance."
  },
  {
    question: "Can you add new features during maintenance?",
    answer: "Yes. Minor feature enhancements can be included within suitable maintenance plans. Larger features may require a separate development scope when they exceed the plan's included capacity."
  },
  {
    question: "How much does app maintenance cost?",
    answer: "Our current plans start at ৳15,000/month. Standard maintenance is ৳30,000/month, Growth maintenance is ৳50,000/month, and Enterprise maintenance is custom-priced. The final cost depends on the application's platform, complexity, integrations, maintenance workload, and support requirements."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Clarity"
          title="Frequently Asked Questions"
        >
          Key questions about our ongoing app maintenance agreements, response tiers, platforms, and codebase takeover procedures.
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
