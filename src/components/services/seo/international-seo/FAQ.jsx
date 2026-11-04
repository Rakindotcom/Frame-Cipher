'use client'

import React, { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { resolveFaqs } from '../../../../lib/seo/faq'

const completeFaqs = [
  {
    "question": "What is international SEO?",
    "answer": "International SEO is the process of optimizing a website to reach users in different countries, regions, or languages. It combines technical SEO, site architecture, hreflang, keyword research, localization, content, authority building, and market-level performance analysis."
  },
  {
    "question": "Do I need international SEO if my website is already ranking?",
    "answer": "A website can rank well in one market while having limited visibility in another. International SEO helps determine whether your structure, content, technical signals, and authority are aligned with each target market."
  },
  {
    "question": "Should I use a ccTLD, subdirectory, or subdomain?",
    "answer": "There is no universal answer. The right structure depends on your markets, resources, existing website, brand strategy, technical setup, and future expansion plans. We assess those factors before making a recommendation."
  },
  {
    "question": "What is hreflang?",
    "answer": "Hreflang is a technical annotation that helps search engines understand which regional or language version of a page is intended for a particular audience. It is especially useful when a website has multiple localized versions of similar pages."
  },
  {
    "question": "Is hreflang enough for international SEO?",
    "answer": "No. Hreflang is one part of international SEO. A strong strategy also requires appropriate architecture, localized content, technical SEO, keyword research, internal linking, authority, and market-level measurement."
  },
  {
    "question": "Is translation enough for international SEO?",
    "answer": "No. Translation changes the language, but SEO localization also considers search intent, local terminology, cultural context, currency, units, user expectations, content structure, and market-specific competition."
  },
  {
    "question": "Can you help a Bangladeshi business expand into the USA or UK?",
    "answer": "Yes. We can help with international architecture, market research, keyword mapping, content localization, technical implementation, and the wider SEO strategy needed for entering a new market."
  },
  {
    "question": "Can you manage SEO for multiple countries at the same time?",
    "answer": "Yes. The scope depends on the number of markets, languages, pages, technical complexity, and content requirements. Each market can be tracked separately so important changes are not hidden inside one combined report."
  },
  {
    "question": "Can international SEO help ecommerce businesses?",
    "answer": "Yes. International ecommerce SEO can cover country-specific product demand, category structures, product localization, currency, regional search intent, technical SEO, and international authority. The strategy should also account for product availability, shipping, and market-specific buying behavior."
  },
  {
    "question": "Can you help with an international website migration?",
    "answer": "Yes. We can support migrations involving domain changes, country folders, language restructuring, platform migrations, and other architecture changes. Migration planning can include URL mapping, redirects, canonicals, hreflang, internal links, sitemaps, and post-launch monitoring."
  },
  {
    "question": "How do you measure international SEO success?",
    "answer": "We measure performance by market rather than treating the entire website as one search market. Depending on the analytics setup, reporting can include rankings, impressions, clicks, traffic, conversions, leads, and revenue."
  },
  {
    "question": "Do you guarantee international SEO rankings?",
    "answer": "No. SEO cannot responsibly guarantee a specific ranking position or ranking date. We focus on implementing the right technical, content, authority, and market strategy and improving it through actual performance data."
  },
  {
    "question": "Do you work with businesses already operating internationally?",
    "answer": "Yes. Alongside businesses expanding for the first time, we work with established international clients across the US, UK, Australia, Canada, and UAE refining their existing multi-market structure, resolving hreflang conflicts, and improving regional search signals."
  },
  {
    "question": "Do I need a separate website for each country?",
    "answer": "Not always. One website can serve multiple countries and languages using country domains, regional subfolders, language subfolders, or subdomains. Each option has trade-offs for authority, maintenance, and targeting. We review your markets, business model, and technical resources before recommending a structure instead of assuming a separate site is needed."
  },
  {
    "question": "How long does international SEO take?",
    "answer": "Technical fixes and structure changes can be completed relatively quickly, but rankings, traffic, and business outcomes build over time and can vary by market. The timeline depends on the number of markets, website structure, technical condition, competition, authority, content localization needs, and implementation speed."
  },
  {
    "question": "How do you handle duplicate content across countries?",
    "answer": "Similar regional pages are not automatically a problem, but pages with little meaningful regional value combined with inconsistent targeting signals can be. We review content similarity, search intent, canonicals, hreflang, internal links, and indexation, then differentiate, consolidate, improve, or restructure pages where appropriate."
  },
  {
    "question": "How do I know which markets to target first?",
    "answer": "We research potential markets based on country-level search demand, commercial opportunity, competition, product or service relevance, localization requirements, and your expansion goals. The result is a market-priority roadmap rather than treating every possible country as an equal investment."
  }
]

export default function FAQ({ service }) {
  // Always ensure all complete FAQs are included, falling back to completeFaqs
  const serviceFaqs = resolveFaqs(service, completeFaqs)
  const faqs = serviceFaqs && serviceFaqs.length >= completeFaqs.length ? serviceFaqs : completeFaqs
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Schema.org FAQPage JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
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

        {/* Centered Header Block */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <HelpCircle className="h-3.5 w-3.5 text-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">Direct Answers</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Transparent answers regarding international SEO, market targeting, hreflang, timelines, and guarantees.
          </p>
        </div>

        {/* Centered Accordion Column */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 hover:border-white/[0.14]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-white">
                    {faq.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-400 transition-transform duration-200">
                    {isOpen ? <ChevronUp className="h-4 w-4 text-[#A855F7]" /> : <ChevronDown className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-white/[0.06] px-5 pb-6 pt-4 sm:px-6 sm:pb-8">
                    <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                      {faq.answer}
                    </p>
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
