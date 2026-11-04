'use client'

import React from 'react'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    question: 'How often should a website be maintained?',
    answer: 'Maintenance frequency depends on the platform, update cycle, website complexity, traffic, integrations, and business importance. More active or complex websites generally need closer monitoring and more frequent maintenance.',
  },
  {
    question: 'Do you test website updates before applying them?',
    answer: 'Where the platform and environment support a staging workflow, we can review and test updates before moving them to production.',
  },
  {
    question: 'Are backups actually tested?',
    answer: 'Our maintenance approach includes recovery testing rather than treating the existence of a backup as proof that recovery will work.',
  },
  {
    question: 'Do you maintain websites built by other developers?',
    answer: 'Yes. We start with an assessment of the current website, access, security, backups, dependencies, integrations, and known issues before taking over ongoing maintenance.',
  },
  {
    question: 'What happens if my website goes down?',
    answer: 'We investigate the incident, identify the cause, and work to restore critical functionality as quickly as the applicable support plan allows. Where an appropriate tested backup exists, it may be used as part of recovery.',
  },
  {
    question: 'What happens if my website gets hacked?',
    answer: 'We assess the incident, identify the affected areas, work to remove the issue where possible, restore the website when appropriate, and address the underlying security weaknesses within the agreed scope.',
  },
  {
    question: 'Is content updating included in website maintenance?',
    answer: 'Minor text, image, product, or page updates can be included depending on the maintenance plan. Larger content projects or extensive new page creation are usually scoped separately.',
  },
  {
    question: 'Do you maintain ecommerce websites?',
    answer: 'Yes. Ecommerce maintenance can include product updates, checkout checks, payment integrations, order flows, inventory-related systems, performance, and connected apps or plugins.',
  },
  {
    question: 'Do you provide website maintenance for WordPress, Shopify, Wix, Webflow, and custom websites?',
    answer: 'Yes, maintenance can be structured around supported platforms including WordPress, WooCommerce, Shopify, Wix, Webflow, Magento, and custom applications such as Next.js.',
  },
  {
    question: 'Does website maintenance include SEO?',
    answer: 'Technical SEO checks and maintenance can be included where specified, such as broken links, metadata changes, indexation issues, redirects, and technical problems. A full ongoing SEO campaign is a separate service.',
  },
  {
    question: 'Does website maintenance include a redesign?',
    answer: 'No. A redesign changes the website\'s structure, interface, or user experience substantially and is normally treated as a separate project.',
  },
  {
    question: 'Can I cancel my maintenance plan?',
    answer: 'The cancellation terms depend on the maintenance agreement and selected plan. These terms should be clearly stated before the service begins.',
  },
  {
    question: 'Can I request additional work outside my maintenance plan?',
    answer: 'Yes. Larger features, redesigns, major integrations, extensive content work, migrations, or development projects can be scoped and quoted separately.',
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
            Clear answers regarding maintenance frequency, update safety, backup recovery, and scope boundaries.
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
                <span>{faq.question}</span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] font-mono text-sm text-frame-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-white/[0.08] p-6 text-sm md:text-base font-normal leading-relaxed text-zinc-300 whitespace-pre-line">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
