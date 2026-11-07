'use client'

import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    question: 'Can you guarantee Google AdSense approval?',
    answer: 'No. Google makes the final decision after reviewing the site and application. We prepare your website against relevant requirements and policies, but no third-party provider can guarantee Google’s decision.',
  },
  {
    question: 'How many articles do I need for AdSense approval?',
    answer: 'There is no universal article-count requirement published by Google. Instead, Google focuses on whether your site contains sufficient high-quality content that provides meaningful value to users. We assess the depth, originality, usefulness, and completeness of your existing content rather than selling a fixed number of articles as an approval formula.',
  },
  {
    question: 'Do I need traffic before applying for AdSense?',
    answer: 'Google’s published eligibility guidance does not define a universal minimum traffic threshold for website applications. However, traffic quality matters. Google prohibits artificially generated clicks and impressions, and certain traffic sources can create policy issues. We review obvious traffic-source risks as part of the preparation process.',
  },
  {
    question: 'Does Google require a privacy policy, About page, and Contact page?',
    answer: 'Google’s publisher requirements include specific privacy disclosures relating to advertising cookies and third-party vendors where applicable. About, Contact, Terms, and similar transparency pages are also useful for establishing a clear and trustworthy publishing site, but we do not present them as a universal four-page approval checklist for every website.',
  },
  {
    question: 'Can you fix a Low Value Content rejection?',
    answer: 'We can diagnose the content and site issues associated with a low-value or insufficient-content rejection and implement agreed improvements. That may include strengthening existing pages, improving originality, removing weak content, improving topical coverage, and making the site more useful to visitors.',
  },
  {
    question: 'Can AI-generated content be approved for AdSense?',
    answer: 'Approval should not be based on whether content was created with a particular writing tool. The more important question is whether the published content is original, useful, relevant, and compliant with Google’s applicable policies. We review your actual content quality instead of relying on an “AI content = automatic rejection” assumption.',
  },
  {
    question: 'Can a Bangla website get Google AdSense approval?',
    answer: 'Yes. Bengali is currently listed among the languages supported by Google’s publisher products. The site still needs to meet the relevant eligibility, content, navigation, and policy requirements.',
  },
  {
    question: 'Can affiliate websites use AdSense?',
    answer: 'Affiliate sites can be evaluated for AdSense, but Google warns against affiliate content that provides little or no additional value to users. We review whether your affiliate pages offer genuine original value instead of simply reproducing information available elsewhere.',
  },
  {
    question: 'How long does Google take to review an AdSense application?',
    answer: 'Google says reviews usually take a few days, but some reviews can take 2–4 weeks. Our preparation timeline is separate and depends on how much work your website needs before submission.',
  },
  {
    question: 'Do you support AdSense websites outside Bangladesh?',
    answer: 'Yes. We provide AdSense preparation and rejection-support services for websites serving audiences in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
]

export default function FAQ({ service }) {
  const faqs = resolveFaqs(service, fallbackFaqs)
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
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      {/* Schema.org FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Canonical Centered FAQ Header (§5.3) */}
        <div className="mx-auto mb-16 max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Direct Answers // Knowledge Base</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            Frequently Asked <span className="italic text-frame-accent">Questions</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Common questions about AdSense approval, requirements, reapplication, and what we can and
            can&apos;t guarantee.
          </p>
        </div>

        {/* Centered Accordion Stack (§5.3) */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-white/[0.14] bg-[#18181B]'
                    : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.12]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full cursor-pointer items-center justify-between p-6 sm:p-7 text-left font-heading text-base sm:text-lg md:text-xl font-medium uppercase tracking-tight text-white transition-colors"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-base sm:text-lg font-medium tracking-tight text-white pr-4">{faq.question}</h3>
                  <span
                    className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-[#18181B] text-frame-accent transition-transform duration-200 ${
                      isOpen ? 'rotate-45 bg-frame-accent text-[#09090B]' : ''
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-white/[0.06] p-6 sm:p-7 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    {faq.answer}
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
