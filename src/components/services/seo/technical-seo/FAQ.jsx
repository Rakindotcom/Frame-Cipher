'use client'

import React, { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const officialFaqs = [
  {
    question: 'What is technical SEO?',
    answer:
      'Technical SEO focuses on the website infrastructure that helps search engines crawl, render, understand, and index your pages. It covers areas such as site architecture, indexation, performance, structured data, redirects, canonicalization, and rendering.',
  },
  {
    question: 'Why does my website need a technical SEO audit?',
    answer:
      'A website can look normal to visitors while having technical problems that affect search engines. An audit can identify crawl, indexation, performance, architecture, structured-data, and other technical issues that may limit organic visibility.',
  },
  {
    question: 'Does technical SEO improve Google rankings?',
    answer:
      'Technical SEO can remove technical barriers that prevent search engines from properly accessing, understanding, or indexing important pages. However, rankings also depend on content, relevance, authority, competition, search demand, and other factors.',
  },
  {
    question: 'Can you fix technical SEO issues instead of only providing an audit?',
    answer:
      'Yes. We provide both technical audits and implementation services. The scope depends on the issues identified, your platform, and whether implementation is handled by Framecipher or your existing development team.',
  },
  {
    question: 'Do you provide JavaScript SEO for React and Next.js websites?',
    answer:
      'Yes. We can review JavaScript rendering, dynamically generated content, internal links, metadata, indexability, and other technical SEO requirements for React, Next.js, and other JavaScript-based websites.',
  },
  {
    question: 'Do you analyze server logs?',
    answer:
      'Where server log access is available and useful for the website, we can analyze crawler activity to identify crawl patterns, wasted crawling, status-code issues, and other technical signals.',
  },
  {
    question: 'Can you handle SEO during a website migration?',
    answer:
      'Yes. We can support URL mapping, redirect planning, canonical updates, sitemap changes, staging checks, internal-link reviews, and post-launch technical monitoring.',
  },
  {
    question: 'How do you verify technical SEO fixes?',
    answer:
      'We validate fixes using appropriate technical checks, crawling, Search Console data, structured-data testing, performance measurements, or other relevant evidence depending on the issue.',
  },
  {
    question: 'Do you provide ongoing technical SEO monitoring?',
    answer:
      'Yes. Ongoing monitoring can track crawlability, indexation, Core Web Vitals, Search Console issues, redirects, structured data, broken links, and technical regressions.',
  },
  {
    question: 'How much does technical SEO cost in Bangladesh?',
    answer:
      "Framecipher's starting reference prices range from ৳20,000 for a technical SEO audit to ৳80,000+ for an advanced technical overhaul, with ongoing monitoring starting at ৳15,000/month. Final pricing depends on the website and required scope.",
  },
]

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="relative isolate bg-[#09090B] px-4 pt-20 pb-12 sm:px-6 md:px-8 md:pt-28 md:pb-16 text-white border-b border-white/[0.08]">
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: officialFaqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer,
              },
            })),
          }).replaceAll('<', '\\u003c'),
        }}
      />
      <div className="mx-auto max-w-4xl">
        {/* Centered Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Direct Answers // Technical Clarity
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Common questions about technical SEO, delivery, validation, and engagement models.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {officialFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] overflow-hidden transition-colors hover:border-white/[0.14]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-medium uppercase tracking-tight text-white pr-4">
                    {faq.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-zinc-300">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.06] p-5 sm:p-6 pt-4 text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
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
