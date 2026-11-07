'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

export default function CalculatorFaqSection({ faqs, title = 'Frequently Asked Questions & Methodologies' }) {
  const [openIndex, setOpenIndex] = useState(0)

  if (!faqs || faqs.length === 0) return null

  // Generate Schema.org JSON-LD for FAQPage
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
    <section className="w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-4 sm:p-6 md:p-10" id="faqs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replaceAll('<', '\\u003c') }}
      />

      <div className="border-b border-white/[0.08] pb-6">
        <h3 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-1 text-xs md:text-sm text-zinc-400 wide:text-lg">
          Common algorithmic questions, unit economic rules, and media planning guidelines.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div
              key={idx}
              className={`rounded-lg border transition-all ${
                isOpen
                  ? 'border-white/[0.18] bg-[#18181B]'
                  : 'border-white/[0.08] bg-[#151518] hover:border-white/[0.14]'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="flex w-full items-center justify-between p-5 text-left cursor-pointer touch-manipulation select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent rounded-lg"
              >
                <h3 className="font-heading text-base md:text-lg font-medium text-white pr-4">
                  {faq.question}
                </h3>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 shrink-0 text-frame-accent" />
                ) : (
                  <ChevronDown className="h-5 w-5 shrink-0 text-zinc-400" />
                )}
              </button>

              {isOpen && (
                <div className="border-t border-white/[0.08] p-5 text-xs md:text-sm leading-relaxed text-zinc-300 wide:text-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
