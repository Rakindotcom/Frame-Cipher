import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "Do you build custom APIs, or just connect to existing ones?",
    "answer": "Both.\n\nWe build custom REST and GraphQL APIs for applications and internal systems. We also integrate third-party APIs such as payment, CRM, ERP, banking, ecommerce, and other business services."
  },
  {
    "question": "What is the difference between API development and API integration?",
    "answer": "API development means building an API that exposes your application's data or functionality.\n\nAPI integration means connecting your application with an existing API provided by another system.\n\nMany projects require both."
  },
  {
    "question": "What happens if a third-party API changes or goes down?",
    "answer": "We cannot control changes or outages on another provider's system.\n\nHowever, we can build appropriate retry logic, timeout handling, monitoring, error handling, and recovery workflows to reduce the impact.\n\nOngoing third-party API changes can be handled through maintenance support."
  },
  {
    "question": "Should we use REST or GraphQL?",
    "answer": "It depends on the application.\n\nREST is often a practical choice for conventional resource-based APIs. GraphQL can be useful when clients need flexible data queries through a defined schema.\n\nWe choose the approach based on your data model, consumers, integration requirements, and long-term maintenance needs."
  },
  {
    "question": "Do you provide OpenAPI or Swagger documentation?",
    "answer": "Yes, where appropriate.\n\nDocumentation can cover endpoints, authentication, parameters, request and response structures, and error behavior.\n\nThe exact documentation format depends on the project."
  },
  {
    "question": "Can you build a public or partner API?",
    "answer": "Yes.\n\nWe can design APIs for controlled access by customers, vendors, developers, or business partners.\n\nThe implementation can include authentication, authorization, scopes, rate limits, versioning, and documentation."
  },
  {
    "question": "Can you modernize an existing API?",
    "answer": "Yes.\n\nWe can review an existing API for architecture, documentation, security, performance, reliability, and maintainability.\n\nDepending on the system, we can refactor, optimize, document, version, or modernize parts of the existing implementation."
  },
  {
    "question": "Can you integrate local Bangladeshi payment systems like bKash or Nagad?",
    "answer": "Yes.\n\nbKash, Nagad, and similar local payment integrations can be part of API integration projects, alongside international payment platforms where the project requires them."
  },
  {
    "question": "How do you prevent duplicate API requests?",
    "answer": "For workflows where duplicate processing creates a problem, we can use appropriate idempotency patterns.\n\nThis is especially useful for transaction and webhook workflows where the same event may be delivered more than once."
  },
  {
    "question": "How do you handle breaking API changes?",
    "answer": "We plan versioning and backward compatibility around the API's consumers.\n\nFor third-party services, we monitor relevant changes when ongoing maintenance is included.\n\nFor custom APIs, we can establish versioning and deprecation approaches so existing consumers have a controlled migration path."
  },
  {
    "question": "Do you work with clients outside Bangladesh?",
    "answer": "Yes.\n\nFramecipher is based in Dhaka and works with businesses in Bangladesh as well as clients in the US, UK, Australia, Canada, and UAE."
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
