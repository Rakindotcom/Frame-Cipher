'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What types of Android apps can you develop?',
    answer:
      'We develop Android applications for ecommerce, delivery, logistics, booking, marketplaces, customer services, internal business operations, SaaS products, enterprise workflows, and custom digital products.',
  },
  {
    question: 'Do you use Kotlin for Android app development?',
    answer:
      'Yes. Native Android applications are developed in Kotlin where a native Android approach is appropriate for the project.',
  },
  {
    question: 'Why choose native Android development instead of cross-platform?',
    answer:
      'Native development can be appropriate when the application needs deeper Android platform integration, native device capabilities, or tighter control over Android-specific behavior. We assess the project before recommending the technology.',
  },
  {
    question: 'How do you handle Android device fragmentation?',
    answer:
      'We define supported device and OS requirements during planning and test against the relevant device categories and Android versions for the project.',
  },
  {
    question: 'Can you build an offline Android app?',
    answer:
      'Yes. Where offline functionality is required, we can design local storage, caching, synchronization, and appropriate recovery behavior around the relevant workflows.',
  },
  {
    question: 'Can you integrate Firebase into an Android app?',
    answer:
      'Yes. Firebase services such as authentication, push notifications, analytics, and crash reporting can be integrated where they fit the application\'s requirements.',
  },
  {
    question: 'Can you integrate bKash or Nagad?',
    answer:
      'Yes, where the relevant provider integration or API is available and the required payment workflow fits the application.',
  },
  {
    question: 'Can you integrate our existing backend or APIs?',
    answer:
      'Yes. We can connect the Android application with an existing backend, custom API, CRM, database, ecommerce system, or other business software where technically supported.',
  },
  {
    question: 'Do you build the backend and admin dashboard too?',
    answer:
      'Yes. Backend services, APIs, authentication, business logic, databases, and admin systems can be developed where required by the project scope.',
  },
  {
    question: 'Do you test Android apps on real devices?',
    answer:
      'Testing can include relevant real devices and Android versions based on the target audience and agreed testing scope.',
  },
  {
    question: 'Do you handle Google Play Store submission?',
    answer:
      'Yes. Google Play submission and release support can be included in the project. Final publishing approval remains under Google\'s control.',
  },
  {
    question: 'Can you modernize an existing Android app?',
    answer:
      'Yes. We can assess the existing codebase, architecture, dependencies, UX, integrations, and performance before recommending modernization, migration, partial redevelopment, or a full rebuild.',
  },
  {
    question: 'Do I receive the Android source code?',
    answer:
      'Source-code ownership and handoff terms are defined in the project agreement and can include the application source code and relevant documentation.',
  },
  {
    question: 'How long does an Android app take to build?',
    answer:
      'Timelines depend on the features, backend, integrations, device support, testing, and project scope. Smaller MVPs may take several weeks, while complex enterprise applications can take several months.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const faqList = faqs

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
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Common questions about our native Kotlin development, device testing, backend integrations, and Google Play Store submission.
          </p>
        </div>

        {/* Accordion Container (max-w-4xl centered) */}
        <div className="mx-auto mt-16 max-w-4xl space-y-3">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors hover:border-white/[0.14]"
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
                      isOpen ? 'rotate-180 text-frame-accent border-white/[0.14] bg-white/[0.04]' : ''
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

        {/* Dedicated Support Consultation Note */}
        <div className="mx-auto mt-12 max-w-4xl rounded-xl border border-white/[0.06] bg-[#121214] p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-zinc-400 font-mono text-xs">
            <HelpCircle className="h-4 w-4 text-frame-accent" />
            <span>Have a technical Android question not answered here?</span>
            <a
              href="/contact"
              className="text-frame-accent underline underline-offset-4 hover:text-white transition-colors ml-1"
            >
              Talk directly with our Android engineers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
