'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const defaultFaqs = [
  {
    "question": "Do you build custom APIs, or just connect to existing ones?",
    "answer": "Both. We build custom REST and GraphQL APIs for applications and internal systems. We also integrate third-party APIs such as payment, CRM, ERP, banking, ecommerce, and other business services."
  },
  {
    "question": "What is the difference between API development and API integration?",
    "answer": "API development means building an API that exposes your application's data or functionality. API integration means connecting your application with an existing API provided by another system. Many projects require both."
  },
  {
    "question": "What happens if a third-party API changes or goes down?",
    "answer": "We cannot control changes or outages on another provider's system. However, we can build appropriate retry logic, timeout handling, monitoring, error handling, and recovery workflows to reduce the impact. Ongoing third-party API changes can be handled through maintenance support."
  },
  {
    "question": "Should we use REST or GraphQL?",
    "answer": "It depends on the application. REST is often a practical choice for conventional resource-based APIs. GraphQL can be useful when clients need flexible data queries through a defined schema. We choose the approach based on your data model, consumers, integration requirements, and long-term maintenance needs."
  },
  {
    "question": "Do you provide OpenAPI or Swagger documentation?",
    "answer": "Yes, where appropriate. Documentation can cover endpoints, authentication, parameters, request and response structures, and error behavior. The exact documentation format depends on the project."
  },
  {
    "question": "Can you build a public or partner API?",
    "answer": "Yes. We can design APIs for controlled access by customers, vendors, developers, or business partners. The implementation can include authentication, authorization, scopes, rate limits, versioning, and documentation."
  },
  {
    "question": "Can you modernize an existing API?",
    "answer": "Yes. We can review an existing API for architecture, documentation, security, performance, reliability, and maintainability. Depending on the system, we can refactor, optimize, document, version, or modernize parts of the existing implementation."
  },
  {
    "question": "Can you integrate local Bangladeshi payment systems like bKash or Nagad?",
    "answer": "Yes. bKash, Nagad, and similar local payment integrations can be part of API integration projects, alongside international payment platforms where the project requires them."
  },
  {
    "question": "How do you prevent duplicate API requests?",
    "answer": "For workflows where duplicate processing creates a problem, we can use appropriate idempotency patterns. This is especially useful for transaction and webhook workflows where the same event may be delivered more than once."
  },
  {
    "question": "How do you handle breaking API changes?",
    "answer": "We plan versioning and backward compatibility around the API's consumers. For third-party services, we monitor relevant changes when ongoing maintenance is included. For custom APIs, we can establish versioning and deprecation approaches so existing consumers have a controlled migration path."
  },
  {
    "question": "Do you work with clients outside Bangladesh?",
    "answer": "Yes. Framecipher is based in Dhaka and works with businesses in Bangladesh as well as clients in the US, UK, Australia, Canada, and UAE."
  }
]

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(0)
  const faqs = service?.faqs && service.faqs.length > 0 ? service.faqs : defaultFaqs

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section
      id="faq"
      className="border-b border-white/[0.08] bg-[#09090B] px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 md:px-8 md:pt-28 md:pb-16 scroll-mt-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Frequently Asked Questions About{' '}
            <span className="italic text-frame-accent">API Development &amp; Integration.</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-300">
            Common questions about custom API engineering, third-party connections, rate limits, security, and maintenance.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const questionText = faq.question || faq.q
            const answerText = faq.answer || faq.a

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors hover:border-white/[0.14]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 sm:p-7 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-base sm:text-lg font-medium text-white pr-4">
                    {questionText}
                  </h3>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-frame-accent/10 border-frame-accent/30 text-frame-accent' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.06] px-6 pb-6 pt-4 sm:px-7 sm:pb-7">
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
                      {answerText}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
