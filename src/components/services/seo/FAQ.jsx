'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const documentFaqs = [
  {
    question: 'How much do SEO services cost in Bangladesh?',
    answer: "SEO pricing depends on the website, competition, target market, technical condition, content requirements, and scope. Framecipher's current starting reference plans range from ৳25,000 to ৳75,000 per month, with custom pricing for larger or international projects.",
  },
  {
    question: 'How long does SEO take to show results?',
    answer: 'Technical improvements can sometimes appear within weeks, while meaningful organic growth usually requires several months. The timeline depends on competition, website authority, technical condition, content quality, implementation speed, and ongoing SEO activity.',
  },
  {
    question: 'What is included in an SEO campaign?',
    answer: 'Depending on the project, an SEO campaign can include technical SEO, keyword research, search-intent analysis, on-page SEO, content strategy, competitor analysis, local or ecommerce SEO, authority building, AI search optimization, reporting, and ongoing optimization.',
  },
  {
    question: 'Do you provide local SEO in Bangladesh?',
    answer: 'Yes. Local SEO can include Google Business Profile optimization, local keyword research, Google Maps visibility, location pages, citations, review strategy, local content, and competitor analysis.',
  },
  {
    question: 'Can you optimize Shopify, WordPress, Wix, Webflow, Magento, or custom websites?',
    answer: 'Yes. SEO implementation is adapted to the platform. We work across WordPress, Shopify, Wix, Webflow, Magento, and custom development environments including Next.js.',
  },
  {
    question: 'Do you provide international SEO?',
    answer: 'Yes. International SEO can cover country-specific keyword research, localization, international site architecture, hreflang where appropriate, local content, and market-specific authority building.',
  },
  {
    question: 'Can SEO help an ecommerce website?',
    answer: 'Yes. Ecommerce SEO can improve product and category visibility, internal linking, commercial keyword targeting, structured data, indexation, and other technical areas that affect how search engines discover and understand a store.',
  },
  {
    question: 'Do you offer AI search optimization?',
    answer: 'Yes. We offer AI-search-focused optimization around content structure, entity clarity, useful answers, topical coverage, and supporting authority. Specific AI citations or placements cannot be guaranteed.',
  },
  {
    question: 'Can you help recover a website after a ranking drop?',
    answer: 'Yes. We can investigate technical problems, indexing changes, content issues, backlink concerns, competitor changes, manual actions, and other potential causes before recommending a recovery approach.',
  },
  {
    question: 'Do you guarantee a #1 Google ranking?',
    answer: "No. Google rankings depend on many factors outside an agency's control. We focus on transparent SEO work, measurable progress, and continuous optimization rather than guaranteed positions.",
  },
  {
    question: "What's the difference between SEO and AI search optimization?",
    answer: "Traditional SEO targets Google's organic results. AI search optimization structures content so tools like ChatGPT and Perplexity can cite it directly in generated answers, increasingly important as more queries get answered without a click at all.",
  },
  {
    question: 'Can you help recover from a Google penalty?',
    answer: 'Yes, penalty recovery starts with diagnosing whether the drop is algorithmic or a manual action, then building a documented path back, which we cover in more depth on our Penalty Recovery page.',
  },
  {
    question: "What's included in an SEO audit?",
    answer: 'A technical review, on-page assessment, content gap analysis, and backlink quality check, delivered as a written report with prioritized recommendations you can act on with or without further work from us.',
  },
  {
    question: 'Do you serve businesses outside Bangladesh?',
    answer: 'Yes, alongside Bangladeshi businesses, we work with clients in the US, UK, Australia, Canada, and UAE, using the same audit-first process regardless of location.',
  },
]

function normalizeQuestion(q) {
  return (q || '').toLowerCase().replace(/[^a-z0-9]/g, '')
}

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)

  // Merge document FAQs with any dynamic service FAQs without duplicates
  const mergedFaqs = React.useMemo(() => {
    const seen = new Set()
    const result = []

    // 1. Add all document FAQs first (ensuring 100% of user content is present)
    for (const f of documentFaqs) {
      const k = normalizeQuestion(f.question)
      seen.add(k)
      result.push(f)
    }

    // 2. Add any additional unique FAQs from service prop
    if (service?.faqs && Array.isArray(service.faqs)) {
      for (const f of service.faqs) {
        const q = f.question || f.q
        const a = f.answer || f.a
        if (!q || !a) continue
        const k = normalizeQuestion(q)
        if (!seen.has(k)) {
          seen.add(k)
          result.push({ question: q, answer: a })
        }
      }
    }

    return result
  }, [service])

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mergedFaqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section
      id="faq"
      className="border-b border-white/[0.08] bg-[#09090B] px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 md:px-8 md:pt-28 md:pb-16 text-white scroll-mt-20"
    >
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Strictly Center-Aligned Header (§5.3 Standard) */}
        <div className="mx-auto mb-14 max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Direct Answers // SEO Knowledge Base
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Common questions about SEO pricing, timelines, audits, AI search, and the services covered in a campaign.
          </p>
        </div>

        {/* Accordion Container (max-w-4xl centered) */}
        <div className="mx-auto max-w-4xl space-y-3">
          {mergedFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] transition-colors hover:border-white/[0.14]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 sm:p-7 text-left transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg sm:text-xl font-medium uppercase tracking-tight text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.02] text-zinc-400 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 text-frame-accent border-purple-500/40 bg-purple-500/10'
                        : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.06] px-6 sm:px-7 pt-4 pb-6 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Support Callout */}
        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-white/[0.06] bg-[#121214] p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-zinc-400 font-mono text-xs">
            <HelpCircle className="h-4 w-4 text-frame-accent" />
            <span>Have an SEO question not covered here?</span>
            <a
              href="/contact"
              className="text-frame-accent underline underline-offset-4 hover:text-white transition-colors ml-1"
            >
              Talk directly with our SEO strategists
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
