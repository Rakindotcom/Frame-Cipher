'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { HelpCircle, ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "How is Webflow different from WordPress or Wix?",
    answer: "Webflow gives strong visual design control while providing structured CMS functionality and a managed hosting environment. WordPress offers a broader plugin ecosystem and deeper extensibility, while Wix focuses more on simple website management and built-in business tools.\n\nWe recommend the platform based on the actual project requirements."
  },
  {
    question: "Can you convert a Figma design into Webflow?",
    answer: "Yes. We can translate approved Figma designs into responsive Webflow pages, reusable components, CMS structures, interactions, and responsive layouts while keeping the implementation maintainable after launch."
  },
  {
    question: "Can my marketing team manage the Webflow CMS?",
    answer: "Yes. We design CMS Collections and fields around your team's publishing workflow and provide the agreed training and handover guidance after launch."
  },
  {
    question: "Can you migrate my WordPress website to Webflow?",
    answer: "Yes. Migration can include content, CMS restructuring, metadata, images, URLs, redirects, forms, analytics, and other agreed functionality. We also review the SEO structure before launch."
  },
  {
    question: "Will my SEO rankings be affected by a Webflow migration?",
    answer: "A migration can affect search visibility when URLs, redirects, metadata, internal links, canonical signals, or other SEO elements are changed incorrectly.\n\nWe plan migration around these elements and test them before and after launch."
  },
  {
    question: "Can you build multilingual Webflow websites?",
    answer: "Yes. Webflow supports localization for supported projects, including localized pages, CMS content, components, URLs, and SEO settings."
  },
  {
    question: "Can you integrate Webflow with our CRM or other business tools?",
    answer: "Yes. We can connect Webflow with supported CRM, marketing, booking, analytics, automation, and other external systems using native integrations, apps, APIs, embeds, or custom code where appropriate."
  },
  {
    question: "Do you use custom JavaScript in Webflow?",
    answer: "Only when it solves a genuine requirement that cannot be handled appropriately through native Webflow functionality, integrations, or apps.\n\nWhere custom code is used, we aim to keep it documented and maintainable."
  },
  {
    question: "Can you build Webflow ecommerce websites?",
    answer: "Yes. Webflow can work for design-focused ecommerce projects with suitable catalog and operational requirements.\n\nFor larger catalogs, complex inventory, or advanced ecommerce workflows, we may recommend Shopify, WooCommerce, Magento, or another platform."
  },
  {
    question: "Will custom animations slow down my site?",
    answer: "They can when they are implemented without considering device capability, asset weight, and page complexity.\n\nWe test interaction-heavy pages across devices and optimize assets, implementation, and animation behavior as part of QA."
  },
  {
    question: "Do you work with brands outside Bangladesh?",
    answer: "Yes. We build Webflow websites for brands across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE."
  },
  {
    question: "Will I own my Webflow website after launch?",
    answer: "The ownership, account access, assets, licenses, custom code, and documentation transferred at project close depend on the project agreement.\n\nWe provide the agreed access and handover materials defined in the engagement."
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
            Have a question about Figma conversion, Client-First styling, or CMS architectures?{' '}
            <Link href="/contact" className="font-semibold text-frame-accent hover:underline ml-1">
              Talk directly with our Webflow specialists &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
