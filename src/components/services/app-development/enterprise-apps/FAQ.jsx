'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const defaultFaqs = [
  {
    "question": "Can you integrate with our existing ERP or legacy systems?",
    "answer": "Yes. Enterprise applications can connect with existing ERP, CRM, HRMS, databases, APIs, and other systems. Compatibility is reviewed during discovery before the integration approach is finalized."
  },
  {
    "question": "How do you handle enterprise security and compliance requirements?",
    "answer": "Security requirements are reviewed during discovery and reflected in authentication, authorization, data protection, logging, API security, and other relevant architecture decisions."
  },
  {
    "question": "How is enterprise app development different from a regular business app?",
    "answer": "Enterprise projects often involve more user groups, more complex workflows, stricter security requirements, multiple integrations, larger datasets, and longer operational lifecycles."
  },
  {
    "question": "Do you support single sign-on (SSO) integration?",
    "answer": "Yes. Where compatible with your identity provider and project requirements, we can integrate SSO into the application."
  },
  {
    "question": "Can you modernize an existing enterprise application?",
    "answer": "Yes. We can assess legacy code, databases, integrations, infrastructure, and interfaces before recommending modernization, migration, or continued development."
  },
  {
    "question": "Can you build enterprise mobile applications?",
    "answer": "Yes. We can build employee, field-force, sales, approval, inventory, customer, and other enterprise mobile applications based on the required workflow."
  },
  {
    "question": "Can you migrate data from a legacy system?",
    "answer": "Yes. Data migration can include assessment, mapping, transformation, validation, incremental migration, testing, and rollback planning within the project scope."
  },
  {
    "question": "Do you support phased enterprise rollouts?",
    "answer": "Yes. Where a phased approach is appropriate, the system can be introduced through pilots or department-based stages to reduce rollout risk."
  },
  {
    "question": "How much does enterprise app development cost in Bangladesh?",
    "answer": "Cost depends on application scope, integrations, security requirements, number of users and roles, existing systems, infrastructure, and migration needs. Our current reference projects start from around ৳500,000 for a departmental tool."
  },
  {
    "question": "How long does an enterprise application take to build?",
    "answer": "A departmental system may take around 12–16 weeks. Larger multi-department or highly integrated systems can require 18–36 weeks or more."
  },
  {
    "question": "Do you work with organizations outside Bangladesh?",
    "answer": "Yes. Framecipher works with organizations in Bangladesh and international markets through a structured remote development process."
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
            <span className="italic text-frame-accent">Enterprise App Development.</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-300">
            Common questions about ERP integrations, enterprise security, legacy modernization, timelines, and costs.
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
                  <span className="font-heading text-base sm:text-lg font-medium text-white pr-4">
                    {questionText}
                  </span>
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
