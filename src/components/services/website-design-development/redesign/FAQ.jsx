'use client'

import React from 'react'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    question: 'Will a redesign hurt my current Google rankings?',
    answer: 'It can if URLs, content, redirects, indexing, or technical SEO elements are changed without proper planning. We establish an SEO baseline, review valuable pages, plan redirects, preserve important content, and perform pre- and post-launch checks to reduce unnecessary search risk.',
  },
  {
    question: 'Do you only redesign business websites?',
    answer: 'No. We redesign business and corporate websites, ecommerce stores, blogs, publishing platforms, portfolios, membership websites, directories, and other website types. The audit and redesign scope are based on what that specific website needs.',
  },
  {
    question: 'Do I need a full rebuild, or just a visual refresh?',
    answer: 'It depends on the condition of the existing website. If the platform and structure are sound but the design is outdated, a visual refresh may be enough. If the platform, architecture, code, or structure is limiting the website, a deeper redesign or migration may be more appropriate.',
  },
  {
    question: 'What should I keep from my existing website during a redesign?',
    answer: 'We review existing URLs, ranking pages, organic traffic, backlinks, valuable content, conversion data, analytics, integrations, and other important assets before deciding what should be preserved or changed.',
  },
  {
    question: 'Can you redesign my website without changing the domain?',
    answer: 'Yes. A redesign can usually be completed without changing the domain when the existing domain is appropriate for the business.',
  },
  {
    question: 'Will you preserve my existing URLs?',
    answer: 'Where practical, we preserve existing URLs. When URLs need to change, we create a redirect strategy that maps old URLs to relevant new destinations.',
  },
  {
    question: 'Can you redesign only part of my website?',
    answer: 'Yes. If the audit shows that only specific pages or sections need improvement, we can scope the project around those areas instead of rebuilding the entire website.',
  },
  {
    question: 'Can you redesign my website without changing the CMS?',
    answer: 'Yes, when the existing platform can support the required improvements. We recommend migration when the current platform is genuinely limiting performance, functionality, management, or scalability.',
  },
  {
    question: 'How long does a website redesign take?',
    answer: 'Most projects take around 2 to 14+ weeks. The actual timeline depends on the redesign scope, number of pages, platform, migration requirements, integrations, content volume, and project complexity.',
  },
  {
    question: 'Do you work with businesses outside Bangladesh?',
    answer: 'Yes. Framecipher provides website redesign services for businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
]

export default function FAQ({ service }) {
  const faqs = (service?.faqs && service.faqs.length >= fallbackFaqs.length) ? resolveFaqs(service, fallbackFaqs) : fallbackFaqs

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
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Strictly Center-Aligned Header (§5.3 Standard) */}
        <div className="mx-auto mb-14 max-w-3xl text-center space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Common questions about website redesigns, SEO preservation, technical platforms, and timelines.
          </p>
        </div>

        {/* Center-Aligned Accordion Container (max-w-4xl) */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-xl border border-white/[0.08] bg-[#121214] transition-colors open:border-white/[0.14]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-base sm:text-lg md:text-xl font-medium uppercase tracking-tight text-white marker:content-none">
                <h3 className="font-heading text-base sm:text-lg font-medium tracking-tight text-white pr-4">{faq.question}</h3>
                <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-[#09090B] font-mono text-sm text-frame-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-white/[0.08] p-6 text-sm sm:text-base font-normal leading-relaxed text-zinc-300 whitespace-pre-line">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
