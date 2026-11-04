'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const defaultFaqs = [
  {
    question: 'Should I choose Flutter or React Native?',
    answer:
      'It depends on your application\'s requirements, existing technology, UI needs, integrations, team, and long-term roadmap. We compare both options before recommending the framework.',
  },
  {
    question: 'Will a cross-platform app feel as good as two separate native apps?',
    answer:
      'A well-designed cross-platform app can provide a strong experience on both platforms. Platform-specific features can also use native modules when shared implementation is not the right fit.',
  },
  {
    question: 'Is cross-platform actually cheaper than building native apps for both platforms?',
    answer:
      'It can reduce duplicated development work when large parts of the product can be shared. The final cost still depends on native features, backend requirements, integrations, design complexity, testing, and scope.',
  },
  {
    question: 'Can cross-platform apps use native device features?',
    answer:
      'Yes. Flutter and React Native applications can connect with native Android and iOS functionality when the product requires platform-specific APIs or device capabilities.',
  },
  {
    question: 'Do you handle submission to both Google Play and the App Store?',
    answer:
      'Yes. We support the release workflow for both platforms within the agreed project scope, including build preparation, testing, submission, and required technical changes.',
  },
  {
    question: 'Can you migrate an existing native app to Flutter or React Native?',
    answer:
      'Yes. We can review an existing native application and determine whether migration, partial modernization, or continued native development makes more sense.',
  },
  {
    question: 'Can you build an MVP for both Android and iOS?',
    answer:
      'Yes. Cross-platform development can be suitable for MVPs that need both platforms and have substantial shared functionality.',
  },
  {
    question: 'Do you work with clients outside Bangladesh?',
    answer:
      'Yes. Framecipher works with businesses in Bangladesh as well as international clients through a structured remote development process.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Common questions about Flutter vs React Native, dual-store release, native bridges, and cross-platform maintenance.
          </p>
        </div>

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
                  <span className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.02] text-zinc-400 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 text-frame-accent border-frame-accent/40 bg-frame-accent/10'
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

        <div className="mx-auto mt-12 max-w-4xl rounded-xl border border-white/[0.06] bg-[#121214] p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-zinc-400 font-mono text-xs">
            <HelpCircle className="h-4 w-4 text-frame-accent" />
            <span>Have a technical cross-platform question not answered here?</span>
            <a
              href="/contact"
              className="text-frame-accent underline underline-offset-4 hover:text-white transition-colors ml-1"
            >
              Talk directly with our mobile engineering leads
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
