import { SectionIntro } from '../../Kinetic'

const faqs = [
  {
    question: "What types of apps can you develop?",
    answer: "We develop Android, iOS, cross-platform, SaaS, web, MVP, enterprise, ecommerce, booking, logistics, marketplace, customer, and internal business applications based on project requirements."
  },
  {
    question: "Should I build native or cross-platform?",
    answer: "It depends on your required features, target users, performance needs, budget, timeline, and long-term roadmap. We assess those factors before recommending the appropriate approach."
  },
  {
    question: "Can you build an app for our existing website or business system?",
    answer: "Yes. We can connect an application with an existing website, backend, CRM, database, ecommerce system, or other business software where the required integration is technically available."
  },
  {
    question: "Do you develop the backend and admin dashboard too?",
    answer: "Yes. Where required, we can develop backend services, APIs, databases, authentication, business logic, and admin systems that support the application."
  },
  {
    question: "Can you integrate bKash, Nagad, payment gateways, or CRM systems?",
    answer: "Yes, where the required provider API or integration method is available. The exact implementation depends on the provider and project requirements."
  },
  {
    question: "Do you design the app UI/UX too?",
    answer: "Yes. UI/UX can include user flows, wireframes, prototypes, high-fidelity interface design, design systems, and usability testing where included in the project."
  },
  {
    question: "Do you test apps on real devices?",
    answer: "Testing can include supported real devices and operating-system environments relevant to the target users and project scope."
  },
  {
    question: "Can you modernize an existing app?",
    answer: "Yes. We can assess the existing codebase, architecture, dependencies, integrations, performance, and UX before recommending a modernization or redevelopment approach."
  },
  {
    question: "Can you build an MVP first?",
    answer: "Yes. An MVP can be appropriate when you want to validate a product idea with real users before investing in a larger feature set."
  },
  {
    question: "Do you submit apps to Google Play and Apple App Store?",
    answer: "Yes. Store submission support can be included in the project. Final approval remains under the control of Google and Apple."
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes. Post-launch support can include bug fixes, OS compatibility updates, dependency maintenance, performance work, integrations, and new development depending on the agreed scope."
  },
  {
    question: "Can you work with our existing development team?",
    answer: "Yes. We can provide application development, backend development, UI/UX, or technical support alongside an existing internal or external team where the project structure allows it."
  },
  {
    question: "How long does app development take?",
    answer: "The timeline depends on the platform, number of features, backend complexity, integrations, testing requirements, and review cycles. Smaller MVPs may take several weeks, while larger SaaS or enterprise products can take several months."
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
          Common questions about our app development process, platform choices, backend infrastructure, and ongoing support.
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
