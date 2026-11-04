'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react'
import PosterButton from '../../home/PosterButton'

const defaultFaqs = [
  {
    question: "What's the difference between a website redesign and a new build?",
    answer: "A redesign keeps your existing domain and often your content and SEO rankings while rebuilding the design and structure. A new build starts from scratch and makes sense when the current site's foundation, platform, structure, or content isn't worth preserving."
  },
  {
    question: "Which platform is right for my business: WordPress, Shopify, or custom development?",
    answer: "It depends on your needs: WordPress suits content-heavy sites needing ongoing control, Shopify suits straightforward e-commerce, and custom development suits businesses with specific performance or integration needs a template can't meet. We recommend based on your actual requirements, not a default platform."
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer: "Yes, ongoing updates, security monitoring, and technical fixes are available as a separate maintenance service. This doesn't include content or SEO strategy work, which are handled under our marketing services."
  },
  {
    question: "How much does a website cost in Bangladesh?",
    answer: "Cost depends on platform, page count, custom functionality, and whether e-commerce or ongoing maintenance is included. A free consultation gives you a specific quote based on your actual requirements rather than a generic package price."
  },
  {
    question: "Do you build websites for international clients?",
    answer: "Yes, alongside Bangladeshi businesses, we work with clients in the US, UK, Australia, and Canada, adjusting for different market expectations and platform preferences as needed."
  },
  {
    question: "What happens if I need changes after the site is delivered?",
    answer: "Minor revisions during the build are handled through the review and approval process at each stage. Changes requested after launch fall under either a maintenance plan or a separate scope of work, depending on what's needed."
  }
]

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)
  const faqList = (service?.faqs && service.faqs.length > 0) ? service.faqs : defaultFaqs

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Schema.org FAQPage JSON-LD
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
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      {/* Schema.org FAQPage Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Strictly Centered Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Questions about our{' '}
            <span className="italic text-frame-accent">web development.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Direct answers about platforms, architecture, pricing, delivery cycles, and post-launch maintenance.
          </p>
        </div>

        {/* Centered Accordion Column */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 hover:border-white/[0.14]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg sm:text-xl font-medium uppercase leading-snug tracking-tight text-white pr-4">
                    {faq.question}
                  </span>
                  <span className="shrink-0 rounded-full border border-white/[0.08] bg-[#18181B] p-2 text-zinc-400">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-frame-accent" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.08] px-6 pb-6 pt-4">
                    <p className="text-base font-normal leading-relaxed text-zinc-300 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact Prompt Callout */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 max-w-4xl mx-auto">
          <p className="text-sm sm:text-base font-medium text-white max-w-xl">
            Have a specific platform or budget in mind? Contact us, and we&apos;ll give you a straight answer on what fits.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="accent">
              Talk to Our Dev Team
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
