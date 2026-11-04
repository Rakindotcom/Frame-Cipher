'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const defaultFaqs = [
  {
    question: 'What is an MVP in software development?',
    answer:
      'An MVP, or minimum viable product, is a working version of a product that contains enough functionality to test a specific assumption with real users. It is not simply an unfinished version of the final product.',
  },
  {
    question: 'What actually counts as an MVP versus a prototype?',
    answer:
      'A prototype is usually designed to test a concept, user flow, or interface. An MVP is a working product that allows real users to perform the core workflow and generate evidence about the product assumption.',
  },
  {
    question: 'How do you decide which features belong in an MVP?',
    answer:
      'We start with the main hypothesis and identify the smallest complete workflow needed to test it. Features that do not contribute to that test can be moved to a later development phase.',
  },
  {
    question: 'Is an MVP the same as a proof of concept?',
    answer:
      'No. A proof of concept primarily tests whether a technical approach is feasible. An MVP tests a working product with real users and is usually focused on product or market validation.',
  },
  {
    question: 'Can my MVP become the full product later?',
    answer:
      'Yes, where the original architecture and implementation support continued development. We consider the potential next phase when making technical and product decisions, although some parts may need to change as the validated product requirements become clearer.',
  },
  {
    question: 'How do you know if an MVP succeeded?',
    answer:
      "There is no universal success metric. We define relevant signals around the MVP's original hypothesis. Depending on the product, these may include activation, workflow completion, conversion, transactions, repeat usage, retention, or user feedback.",
  },
  {
    question: 'Do you build web and mobile MVPs?',
    answer:
      'Yes, depending on the project requirements. We can develop web applications, mobile applications, or MVPs that require both platforms.',
  },
  {
    question: 'Can you integrate payments into an MVP?',
    answer:
      'Yes. Payment integration can be included when transactions are part of the core workflow. Depending on the market and project requirements, this may include supported local or international payment services.',
  },
  {
    question: 'Can you integrate APIs and third-party services?',
    answer:
      'Yes. We can integrate APIs and external services required by the MVP, including payment, authentication, CRM, logistics, analytics, and other supported platforms.',
  },
  {
    question: 'How long does MVP development take?',
    answer:
      'A focused MVP can take around 4–14+ weeks, depending on the platform, number of core workflows, backend requirements, integrations, and testing scope. The actual timeline is confirmed after reviewing the product requirements.',
  },
  {
    question: 'How much does MVP development cost?',
    answer:
      "Framecipher's MVP pricing depends on the product scope and technical requirements. Starting reference packages can range from approximately ৳180,000 for a minimal MVP to ৳450,000+ for multi-platform development, while complex products receive a custom quote. The final price depends on the approved scope.",
  },
  {
    question: 'Do you work with founders outside Bangladesh?',
    answer:
      'Yes. Framecipher is based in Dhaka and works with businesses and product teams in Bangladesh as well as clients in the US, UK, Australia, Canada, and UAE.',
  },
  {
    question: 'Do you provide the source code and project handover?',
    answer:
      'Handover arrangements are defined in the project agreement. Depending on the engagement, the handover can include source code, repository access, documentation, deployment information, API details, design files, and other agreed technical materials.',
  },
  {
    question: 'Do you provide support after the MVP launches?',
    answer:
      'Yes. Post-launch support can include bug fixes, technical troubleshooting, third-party API updates, performance improvements, and further development. Ongoing maintenance is handled separately based on the required support scope.',
  },
]

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)
  
  // Prefer service.faqs if it has 14 questions, otherwise fallback to complete 14 defaultFaqs
  const faqList =
    service?.faqs && service.faqs.length >= 14 ? service.faqs : defaultFaqs

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section
      id="faq"
      className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 md:px-8 md:pt-28 md:pb-16 scroll-mt-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-7xl">
        {/* Canonical Center-Aligned Header (§6 Standard) */}
        <div className="mx-auto max-w-3xl text-center mb-16 space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Clear, direct answers regarding scope, validation methodology, pricing, timelines, intellectual property, and post-launch iteration.
          </p>
        </div>

        {/* Canonical Centered Accordion (§6 Standard: max-w-4xl mx-auto) */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 hover:border-white/[0.16]"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-medium text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-[#18181b] transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 border-frame-accent text-frame-accent'
                        : 'text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="border-t border-white/[0.06] px-6 pt-4 pb-6 bg-black/20">
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-300 whitespace-pre-line">
                      {faq.answer}
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
