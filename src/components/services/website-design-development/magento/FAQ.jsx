'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { HelpCircle, ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "How do I know if my business actually needs Magento instead of Shopify or WooCommerce?",
    answer: "It depends on your requirements. Magento can be appropriate when the store needs complex catalogs, B2B pricing, multiple storefronts, deep integrations, or custom ecommerce workflows. For simpler stores, Shopify or WooCommerce may provide the required functionality with less technical overhead. We assess the requirements before recommending a platform."
  },
  {
    question: "What is the difference between Magento Open Source and Adobe Commerce?",
    answer: "Magento Open Source provides the core Magento ecommerce platform, while Adobe Commerce provides additional capabilities for more advanced commerce requirements. Adobe Commerce B2B includes features such as company accounts, shared catalogs, negotiable quotes, purchase orders, and requisition lists for supported configurations."
  },
  {
    question: "Can Magento handle B2B pricing and wholesale customers?",
    answer: "Yes. Depending on the Magento edition and configuration, B2B implementations can support customer groups, company accounts, custom pricing, shared catalogs, quote workflows, and other wholesale purchasing requirements. Advanced B2B capabilities such as shared catalogs and negotiable quotes are available through Adobe Commerce B2B."
  },
  {
    question: "Can you migrate our existing Magento store to a newer version?",
    answer: "Yes. We can review your current Magento installation, extensions, customizations, integrations, data, and SEO structure before planning an upgrade or rebuild. Migration and upgrade work should be tested in a controlled environment before production launch."
  },
  {
    question: "Do you work with Hyvä Magento themes?",
    answer: "Yes, where Hyvä is appropriate for the project's Magento architecture and extension requirements. We can assess existing themes, compatibility, storefront requirements, and migration scope before development."
  },
  {
    question: "Can you build a headless Magento store?",
    answer: "Yes, where the project genuinely benefits from a separated frontend architecture. Adobe Commerce supports headless implementations using approaches such as PWA Studio or custom frontend technologies, with API-based communication between frontend and commerce services."
  },
  {
    question: "Can you integrate Magento with ERP, CRM, PIM, or inventory systems?",
    answer: "Yes. Integration scope depends on the systems involved, available APIs, data structures, synchronization requirements, and business workflows. We review those technical dependencies before development so the integration architecture can be planned correctly."
  },
  {
    question: "Does Magento require special hosting?",
    answer: "Magento generally requires more technical infrastructure planning than a fully managed ecommerce platform. Hosting and resources should be sized around catalog size, traffic, integrations, extensions, caching, and expected order volume."
  },
  {
    question: "How much does Magento development cost?",
    answer: "Magento development costs vary according to catalog complexity, custom modules, B2B requirements, multi-store functionality, integrations, migration work, storefront architecture, infrastructure, and testing requirements. We provide a project-specific estimate after reviewing the technical scope."
  },
  {
    question: "How long does Magento development take?",
    answer: "A Magento project can take several weeks to several months depending on the catalog, custom development, integrations, migration requirements, B2B functionality, and testing scope. We provide a project timeline after the requirements and technical scope are defined."
  },
  {
    question: "Do you work with merchants outside Bangladesh?",
    answer: "Yes. We build Magento stores for businesses in Bangladesh and internationally, including clients serving the US, UK, Australia, Canada, and UAE."
  }
]

export default function FAQ({ service }) {
  const [openIdx, setOpenIdx] = useState(null)

  const localQuestions = new Set(faqs.map(f => f.question.trim().toLowerCase()))
  const incoming = (service?.faqs && Array.isArray(service.faqs)) ? service.faqs : []
  const faqList = incoming.length >= faqs.length ? incoming : [
    ...faqs,
    ...incoming.filter(f => !localQuestions.has(f.question?.trim().toLowerCase()))
  ]

  if (!faqList?.length) return null

  // Schema.org FAQPage structured data for rich search snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((faq) => ({
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
      {/* Schema.org JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY CENTER-ALIGNED ONLY FOR FAQ */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Common questions about our delivery process, technical standards, and engagement models.
          </p>
        </div>

        {/* Center-Aligned Accordion Container */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqList.map((faq, index) => {
            const isOpen = openIdx === index
            return (
              <div
                key={index}
                className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-white/[0.14] bg-[#121214]'
                    : 'border-white/[0.08] bg-[#121214]/60 hover:border-white/[0.12] hover:bg-[#121214]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between p-6 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg md:text-xl font-medium uppercase tracking-tight text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-[#09090B] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 border-frame-accent/40 text-frame-accent' : 'text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.08] p-6 text-sm sm:text-base font-normal leading-relaxed text-zinc-400 whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Consultation Block */}
        <div className="mx-auto max-w-4xl mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 text-center">
          <p className="text-sm sm:text-base font-normal text-zinc-400">
            Have a question about Adobe Commerce, B2B pricing, or ERP sync?{' '}
            <Link href="/contact" className="font-semibold text-frame-accent hover:underline ml-1">
              Talk directly with our Magento architects &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
