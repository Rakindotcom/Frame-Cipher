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
    <section className="border-2 border-frame-border bg-frame-bg p-6 md:p-10" id="faqs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replaceAll('<', '\\u003c') }}
      />

      <div className="border-b border-frame-border pb-6">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-frame-accent" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-frame-accent">
            Methodology & FAQs
          </span>
        </div>
        <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
          {title}
        </h3>
        <p className="mt-1 text-xs md:text-sm text-frame-muted-fg">
          Common algorithmic questions, unit economic rules, and media planning guidelines.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div
              key={idx}
              className={`border-2 transition-all ${
                isOpen
                  ? 'border-frame-accent bg-frame-muted/10'
                  : 'border-frame-border bg-frame-bg hover:border-frame-fg/30'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-heading text-base md:text-lg font-bold text-frame-fg pr-4">
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 shrink-0 text-frame-accent" />
                ) : (
                  <ChevronDown className="h-5 w-5 shrink-0 text-frame-muted-fg" />
                )}
              </button>

              {isOpen && (
                <div className="border-t border-frame-border/60 p-5 text-xs md:text-sm leading-relaxed text-frame-muted-fg">
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
