'use client'

import React, { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const officialFaqs = [
  {
    question: 'What is on-page SEO?',
    answer:
      'On-page SEO is the process of improving the content and page-level elements of a website so search engines can better understand the page and users can find the information they need. It includes areas such as search intent, content, keywords, headings, metadata, internal linking, images, semantic relevance, URLs, and relevant structured data.',
  },
  {
    question: 'How is on-page SEO different from technical SEO?',
    answer:
      'On-page SEO focuses mainly on the content and page-level structure of individual URLs. Technical SEO focuses on broader website infrastructure such as crawlability, indexation, rendering, site architecture, performance, redirects, and other technical systems. The two areas work together, but they solve different problems.',
  },
  {
    question: 'Do you optimize existing content or write new content?',
    answer:
      'We can do either. If an existing page has a strong foundation, we may improve its content, structure, metadata, and internal links. If the page has a major content gap or does not match the target search intent, creating new content may be more appropriate.',
  },
  {
    question: 'How do you determine search intent?',
    answer:
      'We analyze the target query and review the types of pages currently appearing in search results. We look at whether users are primarily looking for information, a product, a service, a comparison, a location, or another type of result. We then structure the page around the intent it is actually intended to satisfy.',
  },
  {
    question: 'What is keyword cannibalization?',
    answer:
      'Keyword cannibalization occurs when multiple pages on the same website target substantially overlapping search intent and compete for similar queries. We identify these relationships and recommend appropriate actions such as differentiating pages, consolidating content, changing internal links, repositioning targets, or redirecting pages where appropriate.',
  },
  {
    question: 'Do you optimize images as part of on-page SEO?',
    answer:
      'Yes. Image optimization can include filenames, alt text, dimensions, compression recommendations, contextual relevance, responsive considerations, and other page-level improvements. More advanced image delivery or server-side performance work may fall under technical SEO or development.',
  },
  {
    question: 'Do you provide internal linking optimization?',
    answer:
      'Yes. We review existing internal links and identify relevant opportunities to connect related pages. This can include service-to-blog links, blog-to-service links, category-to-product links, pillar-to-cluster relationships, and other contextual connections.',
  },
  {
    question: 'Do you optimize ecommerce product pages?',
    answer:
      'Yes. We can optimize product and category pages around search intent, product information, titles, descriptions, headings, internal links, images, relevant structured data, and buyer-focused content. Broader ecommerce SEO, technical store optimization, and platform-level work can be handled as separate services where required.',
  },
  {
    question: 'Will on-page SEO alone get my pages to rank?',
    answer:
      'Not always. On-page SEO can improve relevance, content quality, page structure, and search-intent alignment, but competitive rankings can also depend on technical SEO, website authority, backlinks, competition, search demand, and other factors. We therefore do not promise a specific ranking position from on-page optimization alone.',
  },
  {
    question: 'How do you measure on-page SEO performance?',
    answer:
      'Depending on the project, we can monitor organic impressions, clicks, click-through rate, query visibility, rankings, page traffic, and relevant business outcomes such as leads or conversions. The appropriate metrics depend on the page\'s purpose and the information available through tools such as Google Search Console and analytics platforms.',
  },
  {
    question: 'How long does on-page SEO take to show results?',
    answer:
      'There is no universal timeline. After changes are implemented, search engines need to crawl and process the updated page. The speed and scale of any change can vary based on the website, query competition, existing authority, search demand, and the type of optimization performed.',
  },
  {
    question: 'Do you provide ongoing on-page SEO?',
    answer:
      'Yes. Ongoing work can include content freshness updates, performance reviews, competitor monitoring, internal-link improvements, metadata refinements, content-gap analysis, and other evidence-based optimizations.',
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
              Direct Answers // Content &amp; Intent Clarity
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Common questions about on-page SEO, content, internal linking, timelines, and engagement models.
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
                  <h3 className="font-heading text-base sm:text-lg font-medium uppercase tracking-tight text-white pr-4">
                    {faq.question}
                  </h3>
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
