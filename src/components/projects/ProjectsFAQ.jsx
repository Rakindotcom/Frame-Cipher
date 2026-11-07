'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Are all client deliverables created 100% in-house?',
    answer:
      'Yes. Every web application, commercial video, performance ad creative, SEO architecture, and brand system shown in our work archive is produced directly by our full-time engineering and production team in Dhaka. We never outsource core client deliverables.',
  },
  {
    question: 'How do you structure project timelines and deliverables?',
    answer:
      'Timelines vary by scope: sprint deliverables (such as commercial video packages or paid ad creative batches) typically run 2–3 weeks, while comprehensive web applications and full-funnel marketing systems run 4–8 weeks with weekly live milestone reviews and staging access.',
  },
  {
    question: 'Can we hire Frame Cipher for a single service or project type?',
    answer:
      'Absolutely. While many clients leverage our full 360 ecosystem (Brand + Content + Tech + Growth), every project line is modular. You can engage us specifically for website engineering, commercial video shoots, or dedicated performance marketing.',
  },
  {
    question: 'Do you work with international clients across different time zones?',
    answer:
      'Yes. Over 60% of our portfolio represents clients in the United States, United Kingdom, United Arab Emirates, and Europe. We operate with asynchronous reporting, structured Slack/WhatsApp channels, and flexible overlap hours for live strategic reviews.',
  },
  {
    question: 'How can we inspect live demos or detailed case breakdowns of your work?',
    answer:
      'You can filter by project category directly in our portfolio above to inspect live websites, watch high-definition video productions, and review verified ROAS metrics. For confidential enterprise software or deeper briefs, schedule a consultation with our team.',
  },
]

export default function ProjectsFAQ() {
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
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-purple-600">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
            <span>Due Diligence &amp; Standards</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-semibold leading-[0.96] tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Everything you need to know about our production standards, delivery timelines, and technical execution.
          </p>
        </div>

        {/* Centered Accordion Column */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] transition-all duration-300 hover:border-purple-600/40 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-inset touch-manipulation select-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-lg sm:text-xl font-medium leading-snug tracking-tight text-white pr-4">
                    {faq.question}
                  </h3>
                  <span className="shrink-0 rounded-full border border-white/[0.08] bg-[#18181B] p-2 text-zinc-400">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-purple-600" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.08] px-6 pb-6 pt-4 bg-[#18181B]/40">
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
