'use client'

import React, { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const promptFaqs = [
  {
    question: 'What is ecommerce SEO?',
    answer: 'Ecommerce SEO is the process of improving an online store so its products, categories, and supporting content can appear for relevant searches. It combines keyword research, product and category optimization, technical SEO, site architecture, internal linking, content, structured data, and performance analysis.',
  },
  {
    question: 'How is ecommerce SEO different from regular SEO?',
    answer: 'Ecommerce SEO must account for product catalogs, category structures, product variants, filters, inventory changes, duplicate URLs, and commercial search intent. A smaller business website usually has fewer of these catalog and indexation challenges.',
  },
  {
    question: 'Do you optimize every product page?',
    answer: 'Not necessarily. We prioritize pages based on search demand, product value, business goals, existing visibility, and catalog size. For large stores, we also create scalable optimization systems instead of treating every URL as a separate project.',
  },
  {
    question: 'Can you fix duplicate content on Shopify or WooCommerce?',
    answer: 'Yes, depending on the cause. We can investigate duplicate product URLs, variants, filters, parameters, category structures, canonical signals, and other sources of duplication. The appropriate solution depends on your platform and technical implementation.',
  },
  {
    question: 'Does product schema guarantee rich results?',
    answer: 'No. Structured data helps search engines understand eligible product information. Search engines still decide whether and how enhanced search features appear. We focus on accurate implementation and validation rather than promising a specific SERP appearance.',
  },
  {
    question: 'Do you provide SEO for Shopify and WooCommerce stores?',
    answer: 'Yes. We work with Shopify, WooCommerce, and custom ecommerce platforms. The strategy is adapted to your platform\'s technical structure and your store\'s requirements.',
  },
  {
    question: 'Can you handle a large ecommerce catalog?',
    answer: 'Yes. Large catalogs require a scalable approach to architecture, crawling, indexation, internal linking, templates, and page prioritization. We structure the SEO strategy around catalog size and technical complexity.',
  },
  {
    question: 'Do you provide ecommerce SEO outside Bangladesh?',
    answer: 'Yes. We support ecommerce businesses targeting Bangladesh and international markets, including the USA, UK, Australia, Canada, and UAE. International projects may require additional work around country targeting, language, hreflang, regional search intent, and site architecture.',
  },
  {
    question: 'How do you measure ecommerce SEO success?',
    answer: 'We look beyond keyword rankings. Depending on the available analytics data, we monitor organic visibility, clicks, CTR, product and category performance, conversions, and organic revenue.',
  },
  {
    question: 'Can you guarantee more ecommerce sales through SEO?',
    answer: 'No fixed sales or revenue amount can be guaranteed through SEO. Search demand, competition, pricing, product quality, conversion rate, seasonality, and other factors affect ecommerce sales. Our focus is on improving organic visibility and the search-to-purchase journey while measuring business outcomes where reliable data is available.',
  },
]

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState([0])

  const toggleFaq = (idx) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    )
  }

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Clarity &amp; Answers // Direct Responses
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions</span>
          </h2>
          <p className="text-base font-normal leading-relaxed text-zinc-300">
            Clear, honest answers about our ecommerce SEO methodology, platform support, and commercial performance metrics.
          </p>
        </div>

        {/* 10 FAQs Accordion */}
        <div className="mt-12 space-y-3">
          {promptFaqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx)
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-white/[0.08] bg-[#121214] transition-colors hover:border-white/[0.14] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-6 sm:p-7 text-left transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.04] text-frame-accent border border-white/[0.06] shrink-0 text-xs font-mono font-bold">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-semibold uppercase tracking-tight text-white">
                      {faq.question}
                    </h3>
                  </div>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-zinc-300 shrink-0 group-hover:border-frame-accent/40 group-hover:text-frame-accent transition-colors">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.06] px-6 sm:px-7 pb-6 pt-4">
                    <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Advisory Help Footer */}
        <div className="mt-8 flex items-center justify-center gap-2 font-mono text-xs text-zinc-400">
          <HelpCircle className="h-4 w-4 text-frame-accent" />
          <span>Have a custom catalog or platform question? Talk directly with our technical team.</span>
        </div>
      </div>
    </section>
  )
}
