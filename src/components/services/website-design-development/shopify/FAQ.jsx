'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const faqs = [
  {
    question: 'Should I choose Shopify or WooCommerce/Magento for my store?',
    answer: 'Shopify can suit merchants who want managed ecommerce infrastructure, simpler store administration, and a broad app ecosystem. WooCommerce can suit businesses that want WordPress-based content and ecommerce flexibility, while Magento or Adobe Commerce can be more appropriate for complex catalogs, B2B requirements, or multi-store operations.\n\nWe recommend the platform based on your actual catalog, business model, technical requirements, and long-term plans.',
  },
  {
    question: 'Can I use bKash or Nagad for payments on Shopify?',
    answer: "Payment options available to a Shopify merchant depend on the merchant's country, provider, and current Shopify integration availability. Because Shopify Payments is not currently listed for businesses located in Bangladesh, Bangladesh-based merchants generally need an available third-party payment provider. We review the available options before implementation.",
  },
  {
    question: 'Will adding a lot of apps slow down my store?',
    answer: 'It can.\n\nEvery additional app can introduce scripts, requests, dependencies, or functionality that affect the storefront.\n\nWe therefore evaluate whether a requirement should use a native Shopify feature, theme development, an existing app, an API integration, or custom development before adding another app.',
  },
  {
    question: 'Can you customize the checkout experience?',
    answer: "Yes, within the checkout capabilities available to the store's Shopify plan.\n\nShopify Plus provides additional checkout UI extension capabilities for supported checkout steps.\n\nWe confirm the available options during planning before promising a specific checkout customization.",
  },
  {
    question: 'What is Shopify Online Store 2.0?',
    answer: "Online Store 2.0 is Shopify's modern theme architecture built around JSON templates, sections, blocks, app blocks, and dynamic sources.\n\nIt gives developers a more modular theme architecture and allows merchants to customize more parts of the storefront through Shopify's editor.",
  },
  {
    question: 'Do I need Shopify Plus?',
    answer: 'Not necessarily.\n\nShopify provides B2B and ecommerce capabilities across different plans, while Shopify Plus provides additional features for more advanced B2B, checkout, and enterprise workflows.\n\nWe recommend Shopify Plus based on the actual requirements of the business rather than assuming every growing store needs it.',
  },
  {
    question: 'Can you build a Shopify B2B store?',
    answer: "Yes.\n\nShopify's B2B functionality can support companies, catalogs, pricing, payment terms, quantity rules, and other wholesale workflows, with additional capabilities available on Shopify Plus.",
  },
  {
    question: 'Can you migrate my WooCommerce or Magento store to Shopify?',
    answer: 'Yes.\n\nMigration can include products, collections, customers, orders, media, URLs, metadata, analytics, and required functionality based on the project scope.\n\nWe also plan redirects and SEO checks to reduce avoidable search visibility issues during the move.',
  },
  {
    question: 'Can you build a custom Shopify app?',
    answer: 'Yes.\n\nWhen standard apps or theme functionality cannot solve a requirement cleanly, we can evaluate custom Shopify app development using supported Shopify APIs, app extensions, webhooks, and backend functionality.',
  },
  {
    question: 'Can you build a headless Shopify website?',
    answer: "Yes, where the project benefits from separating the Shopify commerce backend from the frontend.\n\nShopify's Storefront API supports custom storefronts, while Hydrogen provides Shopify's React-based framework for headless commerce.",
  },
  {
    question: 'Can Shopify support multiple currencies and languages?',
    answer: 'Yes.\n\nShopify Markets supports market-specific currencies, languages, pricing, products, domains, theme content, and other regional settings.',
  },
  {
    question: 'Can you build Shopify subscription stores?',
    answer: 'Yes, where the business model and required Shopify capabilities support recurring purchases.\n\nThe exact implementation depends on the subscription model, apps, and Shopify functionality required by the project.',
  },
  {
    question: 'Can I manage my Shopify store after you build it?',
    answer: 'Yes.\n\nShopify is designed for merchant management, and we provide the agreed access and basic handover guidance so your team can manage routine products, collections, content, and store settings.',
  },
]

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)
  const faqList = (service?.faqs && service.faqs.length >= faqs.length) ? service.faqs : faqs

  if (!faqList?.length) return null

  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Schema.org FAQPage Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqList.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: f.answer,
                },
              })),
            }),
          }}
        />

        {/* Strictly Center-Aligned Header Block */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Transparent answers regarding deliverables, engineering standards, timelines, and guarantees.
          </p>
        </div>

        {/* Centered Accordion Column */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors hover:border-white/[0.14]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-base sm:text-lg font-medium text-white">
                    {faq.question}
                  </h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-400 transition-transform duration-200">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-frame-accent" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-white/[0.06] px-5 pb-6 pt-4 sm:px-6 sm:pb-8">
                    <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Consultation Prompt */}
        <div className="mx-auto max-w-4xl mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 text-center space-y-4">
          <p className="text-sm sm:text-base text-zinc-300">
            Have a question about your specific Shopify store requirements, apps, or integrations?
          </p>
          <div className="flex justify-center">
            <PosterButton href="/contact" variant="accent">
              Ask Our Shopify Engineering Team
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
