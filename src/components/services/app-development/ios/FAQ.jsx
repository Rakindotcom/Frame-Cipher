'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const defaultFaqs = [
  {
    question: 'How much does iOS app development cost in Bangladesh?',
    answer:
      'The cost depends on features, design complexity, backend requirements, integrations, supported devices, and project scope. Our current project ranges start from around ৳320,000 for a simple iOS app or MVP.',
  },
  {
    question: 'How long does it take to build an iOS app?',
    answer:
      'A simple MVP may take around 6–8 weeks. Standard applications can take 10–14 weeks, while advanced applications can require 14–20 weeks or more.',
  },
  {
    question: 'Should I build native iOS or use cross-platform development?',
    answer:
      'Native iOS development makes sense when your product needs deeper Apple platform integration, platform-specific behavior, or a dedicated iOS experience. Cross-platform development may be suitable when you need Android and iOS from a shared codebase. The right choice depends on your product requirements.',
  },
  {
    question: 'Do you develop apps for both iPhone and iPad?',
    answer:
      'Yes. We can design and develop applications for iPhone, iPad, or both based on the project scope.',
  },
  {
    question: 'Can you help with App Store approval?',
    answer:
      'Yes. We can support the technical preparation, TestFlight workflow, App Store Connect setup, production build, submission, and required development changes within the agreed scope.',
  },
  {
    question: 'Can you work with an existing iOS app?',
    answer:
      'Yes. We can review an existing iOS application for modernization, bug fixing, performance improvements, feature development, dependency updates, or migration work.',
  },
  {
    question: 'Can you integrate Apple Pay, Sign in with Apple, or other Apple features?',
    answer:
      'Yes. Supported Apple services and device capabilities can be integrated based on your application\'s requirements, eligibility, and technical scope.',
  },
  {
    question: 'Can you build an iOS app for a business outside Bangladesh?',
    answer:
      'Yes. Framecipher works with businesses in Bangladesh and international markets through a remote, structured development process.',
  },
  {
    question: 'How long does an App Store review actually take?',
    answer:
      'Apple\'s review typically takes between 24 and 48 hours for standard submissions, though initial releases or apps with complex integrations can take slightly longer. We build review buffers into project planning and prepare submissions strictly against Apple Review Guidelines to avoid avoidable revision cycles.',
  },
]

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)
  const faqList =
    service?.faqs && service.faqs.length > 0 ? service.faqs : defaultFaqs

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  // Schema.org FAQPage JSON-LD
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
      className="border-b border-white/[0.08] pt-16 pb-12 sm:pt-20 sm:pb-14 md:pt-28 md:pb-16 bg-[#09090B] text-white scroll-mt-20"
    >
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Strictly Center-Aligned Header (§8.1 Standard) */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Frequently Asked Questions About iOS App Development.
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Common questions about our native Swift development, App Store Connect release, Apple HIG standards, and ongoing maintenance.
          </p>
        </div>

        {/* Accordion Container (max-w-4xl centered) */}
        <div className="mx-auto mt-16 max-w-4xl space-y-3">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 sm:p-7 text-left transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.02] text-zinc-400 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 text-purple-400 border-purple-500/40 bg-purple-500/10'
                        : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.06] px-6 sm:px-7 pt-4 pb-6 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Support Callout */}
        <div className="mx-auto mt-12 max-w-4xl relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#121214] p-6 text-center before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="flex items-center justify-center gap-2 text-zinc-400 font-mono text-xs">
            <HelpCircle className="h-4 w-4 text-purple-600" />
            <span>Have a technical iOS question not answered here?</span>
            <a
              href="/contact"
              className="text-purple-400 underline underline-offset-4 hover:text-white transition-colors ml-1 font-semibold"
            >
              Talk directly with our iOS engineering leads
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
