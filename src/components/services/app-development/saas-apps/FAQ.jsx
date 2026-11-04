'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const defaultFaqs = [
  {
    question: 'What is SaaS app development?',
    answer:
      'SaaS app development is the process of building software that customers access as an ongoing online service. It typically includes customer accounts, tenant management, permissions, billing, analytics, integrations, and infrastructure for continuous operation.',
  },
  {
    question: 'How is SaaS different from a regular web application?',
    answer:
      'A regular web application may serve one company or workflow. SaaS is designed to support multiple customers with customer-specific data, permissions, billing, and ongoing product management.',
  },
  {
    question: 'How much does SaaS development cost in Bangladesh?',
    answer:
      'The cost depends on architecture, billing, features, integrations, user roles, backend requirements, and infrastructure. Framecipher\'s current reference ranges begin at around ৳450,000 for a focused SaaS MVP.',
  },
  {
    question: 'How long does it take to build a SaaS product?',
    answer:
      'A focused MVP can take around 10 to 14 weeks. Standard SaaS products may require 16 to 22 weeks, while advanced platforms can take 22 to 30 weeks or more.',
  },
  {
    question: 'What is multi-tenant SaaS architecture?',
    answer:
      'Multi-tenant architecture allows multiple customers or organizations to use the same SaaS platform while keeping their data and access logically separated.',
  },
  {
    question: 'Can you build subscription billing and payment systems?',
    answer:
      'Yes. We can integrate subscription billing, plans, trials, upgrades, downgrades, cancellations, invoices, payment events, and plan-based access according to the product requirements.',
  },
  {
    question: 'Can you integrate Stripe, Paddle, bKash, or Nagad?',
    answer:
      'The available payment options depend on the product, target market, provider capabilities, and project requirements. Supported local or international gateways can be evaluated during architecture planning.',
  },
  {
    question: 'Can you build SaaS MVPs for startups?',
    answer:
      'Yes. We can define the core product, architecture, onboarding, billing path, analytics, and initial workflows around an MVP scope.',
  },
  {
    question: 'Can you modernize an existing SaaS product?',
    answer:
      'Yes. We can review the current architecture, dependencies, performance, database, integrations, and feature set before recommending modernization or further development.',
  },
  {
    question: 'Can you build mobile apps for a SaaS platform?',
    answer:
      'Yes. Suitable SaaS products can be extended with iOS, Android, or cross-platform mobile applications connected to the same backend and customer accounts.',
  },
  {
    question: 'Do you work with SaaS clients outside Bangladesh?',
    answer:
      'Yes. Framecipher works with businesses in Bangladesh and international markets through a structured remote development process.',
  },
]

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)
  const faqList =
    service?.faqs && service.faqs.length > 0 ? service.faqs : defaultFaqs

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((item) => ({
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
      className="border-b border-white/[0.08] pt-16 pb-12 sm:pt-20 sm:pb-14 md:pt-28 md:pb-16 bg-[#09090B] text-white scroll-mt-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Common questions about multi-tenancy, Stripe billing integration, SaaS MVPs, and scaling considerations.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-3">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors hover:border-white/[0.14]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 sm:p-7 text-left transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.02] text-zinc-400 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 text-frame-accent border-frame-accent/40 bg-frame-accent/10'
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

        <div className="mx-auto mt-12 max-w-4xl rounded-xl border border-white/[0.06] bg-[#121214] p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-zinc-400 font-mono text-xs">
            <HelpCircle className="h-4 w-4 text-frame-accent" />
            <span>Have a technical SaaS question not answered here?</span>
            <a
              href="/contact"
              className="text-frame-accent underline underline-offset-4 hover:text-white transition-colors ml-1"
            >
              Talk directly with our SaaS architecture leads
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
