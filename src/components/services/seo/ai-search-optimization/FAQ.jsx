'use client'

import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    question: 'What is AI Search Optimization?',
    answer: 'AI Search Optimization is the process of improving how a business, its content, expertise, and supporting information can be discovered, understood, and referenced across AI-powered search and answer experiences. It builds on traditional SEO while adding focused work around answer clarity, entities, topical coverage, source credibility, and AI-search measurement.',
  },
  {
    question: 'What is AEO?',
    answer: 'AEO, or Answer Engine Optimization, focuses on making specific answers easier to surface in answer-driven search experiences. This can involve direct answers, definitions, FAQs, question-focused content, clear structure, and supporting evidence.',
  },
  {
    question: 'What is GEO?',
    answer: 'GEO, or Generative Engine Optimization, generally refers to optimizing a broader content and brand ecosystem for visibility in generative search experiences. It can involve topical authority, entity relationships, source credibility, content coverage, and citation opportunities.',
  },
  {
    question: 'Is AEO different from GEO?',
    answer: 'They can describe different layers of the same broader strategy. AEO focuses more on specific answers and content-level visibility, while GEO generally addresses broader generative visibility, citations, brand context, and authority. The terminology is not standardized across the industry, so we use both within a broader AI Search Optimization framework.',
  },
  {
    question: 'Does AI Search Optimization replace traditional SEO?',
    answer: 'No. Strong technical SEO, useful content, crawlability, indexability, internal linking, page experience, and authority remain important foundations. AI Search Optimization builds on those foundations rather than replacing them.',
  },
  {
    question: 'Can you guarantee that ChatGPT or Gemini will cite my website?',
    answer: 'No. AI platforms control their own retrieval and response systems, and citation outcomes can vary by query, source availability, platform, and time. We focus on improving the factors within our scope and measuring actual visibility rather than promising a specific citation outcome.',
  },
  {
    question: 'How do you measure AI search visibility?',
    answer: 'Depending on the project, we can measure prompt-level visibility, brand mentions, citations, competitor presence, cited sources, Google generative-search performance data where available, and downstream traffic or conversions.',
  },
  {
    question: 'Can you optimize content for AI search without hurting Google SEO?',
    answer: 'Yes. The goal is to improve clarity, usefulness, structure, entity relationships, and search-intent alignment while maintaining strong traditional SEO fundamentals. We do not recommend unnatural formatting or keyword stuffing simply to make content appear “AI optimized.”',
  },
  {
    question: 'Can small businesses benefit from AI Search Optimization?',
    answer: 'Yes. Small businesses can benefit from clearer service information, stronger entity signals, useful answers, local relevance, credible external references, and targeted visibility testing. The strategy should reflect the business’s actual market and resources rather than imitate enterprise-scale campaigns.',
  },
  {
    question: 'Can you optimize an ecommerce website for AI search?',
    answer: 'Yes. We can review product information, category content, comparisons, buying questions, product entities, structured data, supporting guides, and other content that may contribute to AI-assisted product discovery.',
  },
  {
    question: 'Can you optimize a local business for AI search?',
    answer: 'Yes. We can assess local service information, business details, reviews and reputation, local content, entity information, and relevant third-party sources.',
  },
  {
    question: 'Can you help businesses in Bangladesh improve AI search visibility?',
    answer: 'Yes. We support Bangladeshi businesses targeting local and international audiences, including websites that need English, Bangla, Banglish, multilingual, or country-specific search strategies.',
  },
  {
    question: 'Can you optimize for multiple AI platforms?',
    answer: 'Yes. The exact platforms and monitoring approach depend on the project. We can design prompt sets and visibility checks across relevant AI-powered search and answer experiences rather than relying on a single platform.',
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
            Common questions about AI Search Optimization, AEO, GEO, measurement, and what we can and
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
