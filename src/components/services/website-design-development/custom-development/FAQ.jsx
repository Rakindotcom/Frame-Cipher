'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const faqs = [
  {
    question: 'What is the difference between React and Next.js?',
    answer: 'React is a UI library, while Next.js is a broader React framework for building full-stack web applications. Next.js adds application features such as routing, rendering options, metadata handling, and server-side capabilities around React.',
  },
  {
    question: 'Can you migrate an existing React website to Next.js?',
    answer: 'Yes. We can review the existing React application and determine whether moving to Next.js would provide meaningful benefits in architecture, rendering, SEO, performance, or maintainability.',
  },
  {
    question: 'Can you migrate a WordPress website to Next.js?',
    answer: 'Yes. Depending on the project, WordPress can remain as the content source in a headless setup, or the content can be migrated to another suitable CMS while the frontend is rebuilt in Next.js.',
  },
  {
    question: 'Can you migrate Pages Router projects to App Router?',
    answer: 'Yes. We can assess the existing application and plan a phased or complete migration based on the current architecture and project requirements.',
  },
  {
    question: 'Can you build SaaS applications with Next.js?',
    answer: 'Yes. Next.js can support SaaS products with authentication, dashboards, user roles, APIs, billing workflows, and other custom application features.',
  },
  {
    question: 'Can you build dashboards and customer portals?',
    answer: 'Yes. We can build authenticated dashboards, account areas, customer portals, administrative interfaces, and other data-driven application experiences.',
  },
  {
    question: 'Can you integrate our CRM, ERP, payment system, or internal software?',
    answer: 'Yes, where the existing system provides a suitable API, SDK, webhook, or integration method. Compatibility and integration requirements are reviewed during technical discovery.',
  },
  {
    question: 'Can you build headless Shopify or WordPress websites with Next.js?',
    answer: 'Yes. A headless setup can be used when the business needs a more customized frontend experience or architecture than the standard storefront provides.',
  },
  {
    question: 'Can you take over an existing Next.js codebase?',
    answer: 'Yes. We can review the existing architecture, dependencies, deployment setup, code quality, technical debt, and development workflow before recommending the next steps.',
  },
  {
    question: 'Do you provide deployment and monitoring?',
    answer: "Yes, where included in the project scope. Deployment, environment configuration, monitoring, and operational support are planned according to the application's requirements.",
  },
  {
    question: 'Will I receive the source code after development?',
    answer: 'Source-code ownership, repository access, intellectual property, licenses, and third-party account ownership are handled according to the project agreement.',
  },
  {
    question: 'Is Next.js good for SEO?',
    answer: 'Next.js provides technical capabilities that can support SEO, including metadata handling and multiple rendering strategies. But rankings still depend on content quality, relevance, competition, authority, technical implementation, and ongoing optimization.',
  },
  {
    question: 'Is custom development better than WordPress, Shopify, Webflow, or Wix?',
    answer: 'Not automatically. Custom development is usually more appropriate when the project has requirements that existing platforms cannot handle efficiently. For straightforward business websites and many ecommerce projects, a suitable platform may be more practical.',
  },
  {
    question: 'Why Next.js specifically?',
    answer: 'Next.js gives you React on the frontend with server-side rendering, static generation, API routes, and built-in optimization. You get full development control and fast load times without being boxed into a CMS template.',
  },
  {
    question: 'Do you work with businesses outside Bangladesh?',
    answer: 'Yes, we work with clients internationally, including the US, UK, Australia, Canada, and UAE.',
  },
]

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)

  const seen = new Set()
  const faqList = []

  for (const item of faqs) {
    seen.add(item.question.toLowerCase().trim())
    faqList.push(item)
  }

  if (service?.faqs && Array.isArray(service.faqs)) {
    for (const item of service.faqs) {
      const q = (item.question || item.q || '').toLowerCase().trim()
      if (q && !seen.has(q)) {
        seen.add(q)
        faqList.push({
          question: item.question || item.q,
          answer: item.answer || item.a,
        })
      }
    }
  }

  if (!faqList.length) return null

  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Schema.org FAQPage Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqList.map((f) => ({
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

        {/* Strictly Center-Aligned Header Block */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Transparent answers regarding deliverables, engineering standards, timelines, and guarantees.
          </p>
        </div>

        {/* Centered Accordion Column */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors hover:border-white/[0.14]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-base sm:text-lg font-medium text-white">
                    {faq.question}
                  </h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-400 transition-transform duration-200">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-frame-accent" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-white/[0.06] px-5 pb-6 pt-4 sm:px-6 sm:pb-8">
                    <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Consultation Prompt */}
        <div className="mx-auto max-w-4xl mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 text-center space-y-4">
          <p className="text-sm sm:text-base text-zinc-300">
            Have a question about your custom Next.js application, APIs, or system architecture?
          </p>
          <div className="flex justify-center">
            <PosterButton href="/contact" variant="accent">
              Ask Our Engineering Team
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
