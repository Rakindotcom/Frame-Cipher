'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react'

const faqs = [
  {
    question: 'How do you measure and verify the growth metrics in these case studies?',
    answer:
      'All metrics are pulled directly from verified platform analytics — Google Analytics 4, Meta Ads Manager, Google Search Console, Shopify Analytics, and YouTube Studio. For confidentiality, certain client sales volumes are expressed in percentage growth and ROAS multiples while keeping performance verified.',
  },
  {
    question: 'How quickly can our brand expect to see measurable results?',
    answer:
      'For Paid Ads (Meta, Google, TikTok), campaigns typically exit the algorithmic learning phase within 10–14 days, after which scaling and ROAS compounding begin. For Organic Search & SEO systems, topical authority and ranking gains typically compound across months 2 through 6.',
  },
  {
    question: 'Are all case studies based on full-system or individual engagements?',
    answer:
      'Our case studies span both. Some clients started with a single focused problem (e.g. Meta Ads ROAS turnaround or an e-commerce website overhaul) and later expanded into our full 360 Growth Ecosystem, while others engaged our full team from day one.',
  },
  {
    question: 'Can we speak with past clients or review unredacted reports?',
    answer:
      'Yes. During our initial strategic consultation and under standard mutual non-disclosure, we can share deeper campaign walk-throughs, historical ROAS dashboards, and client references relevant to your vertical.',
  },
  {
    question: 'How do we get a diagnostic growth review for our own business?',
    answer:
      'You can schedule a consultation with our leadership team. We analyze your current ad spend, website conversion architecture, or SEO positioning, and deliver an actionable growth roadmap before any contractual commitment.',
  },
]

export default function CaseStudiesFAQ() {
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
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      {/* Schema.org FAQPage Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Strictly Centered Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Questions about our{' '}
            <span className="italic text-frame-accent">
              case studies.
            </span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Learn more about our methodology, verified outcome tracking, and how we replicate growth results for new partners.
          </p>
        </div>

        {/* Centered Accordion Column */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 hover:border-white/[0.14]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent focus-visible:ring-inset touch-manipulation select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg sm:text-xl font-medium leading-snug tracking-tight text-white pr-4">
                    {faq.question}
                  </span>
                  <span className="shrink-0 rounded-full border border-white/[0.08] bg-[#18181B] p-2 text-zinc-400">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-frame-accent" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.08] px-6 pb-6 pt-4">
                    <p className="text-base font-normal leading-relaxed text-zinc-300">
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

