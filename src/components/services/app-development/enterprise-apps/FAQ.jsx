'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

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
      className="relative border-b border-white/10 bg-[#0A0A0C] px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 md:px-8 md:pt-28 md:pb-16 scroll-mt-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Frequently Asked Questions About Enterprise App Development.
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
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] transition-all duration-300 hover:border-white/20 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
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
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-600/20 bg-purple-600/10 text-purple-600 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-purple-600 text-white border-purple-600' : ''
                      }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-6 pb-6 pt-4 sm:px-7 sm:pb-7">
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                      {answerText}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Support callout */}
        <div className="mt-12 group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 text-center sm:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <h3 className="font-heading text-lg font-medium text-white">
            Still have questions about your enterprise project?
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            Our enterprise architects are available to review your systems and workflows.
          </p>
          <div className="mt-6 flex justify-center">
            <PosterButton href="/contact" variant="accent" className="h-[52px] px-8 text-sm font-medium">
              Speak With an Enterprise Architect
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
