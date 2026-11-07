'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const defaultFaqs = [
  {
    question: 'What does app maintenance and support include?',
    answer:
      'App maintenance can include bug fixes, OS and SDK updates, security maintenance, performance monitoring, backend and API support, integration maintenance, release support, and minor improvements. The exact scope depends on your application and selected maintenance plan.',
  },
  {
    question: 'Do you provide monthly app maintenance plans?',
    answer:
      'Yes. We offer monthly maintenance plans designed for different application sizes and support requirements. Plans currently start at ৳15,000 per month, with higher tiers for applications requiring broader support.',
  },
  {
    question: 'Can you maintain an app built by another developer?',
    answer:
      'Yes. We can take over an existing application after reviewing its codebase, dependencies, infrastructure, integrations, and current technical condition. The assessment helps establish a maintenance baseline before ongoing support begins.',
  },
  {
    question: 'Do you maintain both Android and iOS apps?',
    answer:
      "Yes. We support Android and iOS applications, with maintenance requirements determined by the application's architecture, codebase, dependencies, and integrations.",
  },
  {
    question: 'Do you maintain Flutter and React Native apps?',
    answer:
      "We can support cross-platform applications based on the project's technology, codebase condition, dependencies, and maintenance requirements. The initial assessment determines the appropriate maintenance scope.",
  },
  {
    question: 'Can you handle OS and SDK updates?',
    answer:
      'Yes. OS and SDK compatibility is an important part of ongoing application maintenance. We review relevant platform changes, update affected components, test the application, and support the release process when required.',
  },
  {
    question: 'Do you maintain app APIs and third-party integrations?',
    answer:
      'Yes. We can maintain existing APIs, backend connections, payment integrations, authentication systems, and other third-party services within the agreed scope.',
  },
  {
    question: 'Do you provide emergency app support?',
    answer:
      'Support priority can be structured around the severity of an issue. Critical production problems can be handled according to the response terms defined in the selected maintenance agreement.',
  },
  {
    question: 'How do your app maintenance SLAs work?',
    answer:
      'An SLA defines the agreed support expectations, such as issue priority, response expectations, communication, and support coverage. Specific SLA terms depend on the maintenance plan and should be agreed before the engagement begins.',
  },
  {
    question: 'How quickly can you start maintaining an existing app?',
    answer:
      "The onboarding period depends on the application's size, codebase condition, access requirements, and assessment scope. We first review the application and require access before beginning ongoing maintenance.",
  },
  {
    question: 'Can you add new features during maintenance?',
    answer:
      "Yes. Minor feature enhancements can be included within suitable maintenance plans. Larger features may require a separate development scope when they exceed the plan's included capacity.",
  },
  {
    question: 'How much does app maintenance cost?',
    answer:
      "Our current plans start at ৳15,000/month. Standard maintenance is ৳30,000/month, Growth maintenance is ৳50,000/month, and Enterprise maintenance is custom-priced. The final cost depends on the application's platform, complexity, integrations, maintenance workload, and support requirements.",
  },
]

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)
  const faqList =
    service?.faqs && service.faqs.length >= 12 ? service.faqs : defaultFaqs

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
            Clear, direct answers regarding maintenance scope, SLA commitments, codebase takeovers, payment integrations, and monthly retainers.
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
                  <h3 className="font-heading text-base sm:text-lg font-medium text-white">
                    {faq.question}
                  </h3>
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
