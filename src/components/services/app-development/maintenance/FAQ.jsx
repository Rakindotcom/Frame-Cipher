'use client'

import React, { useState } from 'react'
import { ChevronDown, MessageSquare } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

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
      'Yes. OS and SDK compatibility is an essential part of mobile application maintenance. We help identify necessary updates and address deprecations, permission changes, and framework adjustments.',
  },
  {
    question: 'How do you monitor app crashes and performance?',
    answer:
      'Depending on the application, we use monitoring tools such as Sentry, Firebase Crashlytics, Datadog, and cloud logging services to identify crashes, exceptions, latency issues, and infrastructure problems.',
  },
  {
    question: 'What response time can we expect for critical bugs?',
    answer:
      'Critical issues receive higher priority based on the agreed maintenance plan and SLA terms. Response times and escalation workflows are established before ongoing maintenance begins.',
  },
  {
    question: 'Do you maintain backend systems and APIs as well?',
    answer:
      'Yes. Many applications require backend, database, API, and cloud infrastructure support to remain reliable. We can include backend maintenance within the support plan.',
  },
  {
    question: 'How long does it take to start maintaining an existing app?',
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
      className="relative isolate border-b border-white/10 bg-[#09090B] px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 md:px-8 md:pt-28 md:pb-16 scroll-mt-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-7xl">
        {/* Canonical Center-Aligned Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Frequently Asked Questions About App Maintenance.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Clear, direct answers regarding maintenance scope, SLA commitments, codebase takeovers, payment integrations, and monthly retainers.
          </p>
        </div>

        {/* Centered Accordion (max-w-4xl mx-auto) */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] transition-all duration-200 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
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
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 border-purple-600/40 bg-purple-600/20 text-purple-400'
                        : 'border-white/10 bg-[#121214] text-zinc-400 group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="border-t border-white/10 px-6 pt-4 pb-6 bg-[#121214]/50">
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-300 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Support Callout Card */}
        <div className="mx-auto mt-12 max-w-4xl relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-medium text-white">
                Have a specific question about your application?
              </h4>
              <p className="text-sm text-zinc-300">
                Share your codebase details or current issues with our engineering team.
              </p>
            </div>
          </div>
          <PosterButton href="/contact" variant="primary" className="h-[52px] shrink-0">
            Ask an Engineer
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
