'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react'

const faqs = [
  {
    question: 'Can I hire just one service instead of the full system?',
    answer:
      'Yes. Every service can be scoped and started alone, from a single SEO package to a one-off video shoot. The system simply gets stronger when strategy, production, technology, and campaigns share the same path.',
  },
  {
    question: 'Can I combine services into a custom package?',
    answer:
      'Yes. Most clients start with one Service Bundle, then add or swap services as their goals change. Tell us your goal and budget, and we can build a custom mix around it.',
  },
  {
    question: 'Do you work with clients outside Bangladesh?',
    answer:
      'Yes. Frame Cipher has worked with brands in 20+ countries, fully remote, through video calls, shared project boards, and async reporting.',
  },
  {
    question: 'Will you keep helping after the project is live?',
    answer:
      'Yes. Every package includes defined handover, support, and next-step recommendations. Most clients continue with a retainer or a follow-up project once they see results.',
  },
  {
    question: 'Do you build both websites and custom software?',
    answer:
      'Yes. Website development covers marketing sites, e-commerce stores, and content platforms. Custom software covers CRMs, ERPs, inventory, POS, dashboards, and business automation.',
  },
  {
    question: 'How do I get a quotation or proposal?',
    answer:
      'Share your goals through the contact form or a quick call. We respond with a clear proposal: scope, package selection, timeline, and exact pricing, with no obligation.',
  },
]

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Schema.org FAQPage JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      {/* Schema.org FAQPage Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Strictly Centered Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Questions before you{' '}
            <span className="text-white">
              start.
            </span>
          </h2>
          <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg mx-auto max-w-2xl">
            The short answers to the questions we hear most while teams decide which service to start with.
          </p>
        </div>

        {/* Strictly Centered Accordion Container */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="group rounded-2xl border border-white/[0.08] bg-[#121214] overflow-hidden transition-all duration-300 hover:border-purple-500/30"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-inset cursor-pointer touch-manipulation select-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3.5 pr-4">
                    <span className="font-mono text-xs text-purple-400 font-medium tabular-nums">
                      0{index + 1}
                    </span>
                    <h3 className="font-medium text-sm sm:text-base text-white">
                      {faq.question}
                    </h3>
                  </span>
                  <span className="shrink-0 rounded-full border border-white/[0.08] bg-[#18181B] p-2 text-zinc-400 group-hover:text-white transition-colors">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-purple-400" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.08] px-5 pb-6 pt-3 sm:px-6">
                    <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
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
