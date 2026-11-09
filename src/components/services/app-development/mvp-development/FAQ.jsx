'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

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
  const [openIndex, setOpenIndex] = useState(0)
  
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
      className="relative isolate border-b border-white/10 bg-[#0A0A0C] px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 md:px-8 md:pt-28 md:pb-16 scroll-mt-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Frequently Asked Questions About MVP Development.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Clear, direct answers regarding scope, validation methodology, pricing, timelines, intellectual property, and post-launch iteration.
          </p>
        </div>

        {/* Centered Accordion */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] transition-all duration-300 hover:border-white/20 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-base sm:text-lg font-medium text-white">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-600/20 bg-purple-600/10 text-purple-600 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-purple-600 text-white border-purple-600'
                        : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="border-t border-white/10 px-6 pt-4 pb-6">
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-300 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Support callout */}
        <div className="mx-auto max-w-4xl mt-12 group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 text-center sm:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <h3 className="font-heading text-lg font-medium text-white">
            Have a custom product hypothesis to validate?
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            Our MVP strategists can review your workflows, core assumptions, and target users.
          </p>
          <div className="mt-6 flex justify-center">
            <PosterButton href="/contact" variant="accent" className="h-[52px] px-8 text-sm font-medium">
              Discuss Your MVP Scope
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
