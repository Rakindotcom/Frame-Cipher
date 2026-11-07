'use client'

import React, { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const allAuditFaqs = [
  {
    question: 'What is an SEO audit?',
    answer: "An SEO audit is a structured review of a website's technical setup, content, on-page optimization, backlinks, search visibility, and competitive environment. A good audit does more than identify issues. It explains which issues matter, why they matter, and what to do next.",
  },
  {
    question: "What's included in an SEO audit?",
    answer: 'The exact scope depends on the package, but an audit can include technical SEO, on-page SEO, content and keyword analysis, backlink review, competitor analysis, Search Console and analytics analysis, and specialized audits for ecommerce, local, international, or enterprise websites.',
  },
  {
    question: 'How is an SEO audit different from ongoing SEO?',
    answer: 'An SEO audit is a diagnostic project. It identifies problems, opportunities, and priorities. Ongoing SEO involves implementing those recommendations, monitoring performance, creating or improving content, building authority, and continuously optimizing the website.',
  },
  {
    question: 'Do I have to hire Framecipher for implementation after the audit?',
    answer: 'No. The audit can be used as a standalone deliverable. Your internal team or another SEO provider can implement the recommendations. You can also work with Framecipher when you need help executing the roadmap.',
  },
  {
    question: 'How long does an SEO audit take?',
    answer: 'A technical audit can usually be completed in about one week. A standard audit typically takes one to two weeks, while a comprehensive audit generally takes two to three weeks. Large ecommerce or enterprise websites may require a longer or customized timeline.',
  },
  {
    question: 'Do you need Google Search Console and Analytics access?',
    answer: 'Access is helpful when available because it provides additional information about search visibility, queries, traffic, landing pages, and conversions. An audit can still be completed without these platforms, but some performance and conversion insights may be limited.',
  },
  {
    question: 'Can you audit an ecommerce website?',
    answer: 'Yes. We can audit ecommerce websites for technical, product, category, internal-linking, indexation, structured-data, content, and conversion issues. The audit can also include platform-specific considerations for Shopify, WooCommerce, Magento, or custom ecommerce systems.',
  },
  {
    question: 'Can you audit a website before launch?',
    answer: 'Yes. A pre-launch SEO audit can identify architecture, metadata, indexation, redirects, sitemap, structured-data, performance, and tracking issues before the website goes live.',
  },
  {
    question: 'Can you audit a website migration or redesign?',
    answer: 'Yes. We can assess the current website, identify important URLs and SEO assets, review planned changes, and identify risks involving redirects, canonicals, internal links, content, indexation, and tracking.',
  },
  {
    question: 'Can you audit an international website?',
    answer: 'Yes. We can review country and language targeting, hreflang, regional URLs, localization, international internal linking, market-specific competitors, and country-level search visibility.',
  },
  {
    question: 'Do you audit AI search visibility?',
    answer: 'Yes, where it is relevant to the project. We can assess content structure, entity clarity, structured data, question coverage, extractability, E-E-A-T signals, and other factors related to visibility in modern AI-driven search experiences.',
  },
  {
    question: 'What SEO tools do you use?',
    answer: 'The tools depend on the website and audit scope. Depending on the project, we may use SEO crawlers, Google Search Console, Google Analytics, PageSpeed and performance data, backlink databases, keyword platforms, structured-data validation tools, and manual browser and source-code analysis.',
  },
  {
    question: 'Do you guarantee SEO rankings after an audit?',
    answer: 'No. An audit identifies problems and opportunities. Ranking performance depends on the quality of implementation, competition, content, authority, search demand, user behavior, and other factors outside the audit itself.',
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
            Clear, honest answers about our diagnostic process, scopes, timelines, tools, and guarantees.
          </p>
        </div>

        {/* 13 FAQs Accordion */}
        <div className="mt-12 space-y-3">
          {allAuditFaqs.map((faq, idx) => {
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

        {/* Help Advisory Footer */}
        <div className="mt-8 flex items-center justify-center gap-2 font-mono text-xs text-zinc-400">
          <HelpCircle className="h-4 w-4 text-frame-accent" />
          <span>Need custom audit requirements or migration scopes? Speak with our engineering lead.</span>
        </div>
      </div>
    </section>
  )
}
