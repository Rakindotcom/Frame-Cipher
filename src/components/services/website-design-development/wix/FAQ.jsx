'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { HelpCircle, ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "Is Wix a good choice for my business, or should I go with WordPress?",
    answer: "It depends on your business goals and website requirements. Wix is a good fit for businesses that want a fast launch, simple content management, and an easy-to-edit website. WordPress may be better for businesses that need greater content flexibility, extensive integrations, or more complex custom functionality. We recommend the platform based on your actual requirements."
  },
  {
    question: "Can I edit the site myself after you build it?",
    answer: "Yes. Wix is designed for self-editing, so you can update text, images, pages, and other content without relying on a developer for every change. We also provide the agreed handover and basic guidance so you can manage the website confidently."
  },
  {
    question: "Does Wix work well for SEO?",
    answer: "Yes. Wix supports the core SEO features needed for many business websites. We configure the available technical SEO elements, including metadata, heading structure, URLs, image optimization, and other relevant settings. Where the platform has limitations, we explain them clearly before development so you can choose the right solution for your goals."
  },
  {
    question: "Can you build a Wix ecommerce website?",
    answer: "Yes. We can build Wix ecommerce websites with product catalogs, product pages, checkout, payments, shipping, inventory, and other supported store functionality based on your business requirements and target market."
  },
  {
    question: "Do you work with clients outside Bangladesh?",
    answer: "Yes. We build Wix websites for businesses in Bangladesh and international clients, including businesses in the US, UK, Australia, Canada, and UAE."
  },
  {
    question: "Can you build with Wix Studio instead of the standard Wix Editor?",
    answer: "Yes. We use Wix Studio when a project requires more advanced responsive control, design flexibility, or development functionality beyond a standard Wix setup."
  },
  {
    question: "Can you build dynamic pages with Wix CMS?",
    answer: "Yes. Wix CMS can be used to organize structured content and create dynamic page templates for services, projects, listings, locations, profiles, and other content types."
  },
  {
    question: "Can you add custom functionality with Velo?",
    answer: "Yes. When standard Wix features are not enough, we can use Velo, supported APIs, and custom development where appropriate to add more advanced functionality."
  },
  {
    question: "Can you connect Wix with third-party tools?",
    answer: "Yes. We can configure supported apps, APIs, and third-party services based on your integration requirements, such as forms, CRM systems, analytics, marketing tools, and other business platforms."
  },
  {
    question: "Can you redesign an existing Wix website?",
    answer: "Yes. We can redesign an existing Wix website to improve its visual design, structure, user experience, mobile responsiveness, and conversion flow. When appropriate, we can also rebuild it using Wix Studio."
  },
  {
    question: "Can you migrate my website from WordPress or another platform to Wix?",
    answer: "Yes. We can migrate your website from WordPress or another platform to Wix based on the project scope. Migration may include content, media, page structure, metadata, redirects, analytics, and required functionality."
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

  // Schema.org FAQPage structured data for rich snippets
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
            Have a question about Wix Studio, Velo code, or ecommerce setups?{' '}
            <Link href="/contact" className="font-semibold text-frame-accent hover:underline ml-1">
              Talk directly with our Wix specialists &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
