'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const defaultFaqs = [
  {
    question: 'What is the difference between a custom web application and a SaaS product?',
    answer:
      'A custom web app usually serves one company or workflow. A SaaS product is multi-tenant: multiple customer organizations access it with isolated data, tiered subscriptions, automated billing, self-service onboarding, and granular role permissions.',
  },
  {
    question: 'How do you handle multi-tenant data isolation?',
    answer:
      'Depending on your compliance and scale requirements, we implement logical isolation using tenant IDs with row-level security (RLS), schema-per-tenant, or fully separate database instances for enterprise tiers.',
  },
  {
    question: 'Which payment gateways do you support for SaaS subscription billing?',
    answer:
      'We integrate Stripe (Billing, Invoicing, Customer Portal), Paddle, and LemonSqueezy for global subscriptions, as well as bKash, Nagad, and local cards for Bangladesh-focused SaaS products.',
  },
  {
    question: 'Can you build both web and mobile apps for our SaaS product?',
    answer:
      'Yes. We build responsive Next.js/React web platforms alongside cross-platform (Flutter/React Native) or native mobile apps that share the same backend APIs, authentication, and data models.',
  },
  {
    question: 'How long does it take to launch a SaaS MVP?',
    answer:
      'A focused SaaS MVP typically takes 10 to 14 weeks from initial discovery through architecture, design, development, billing integration, and production deployment.',
  },
  {
    question: 'Do you help with cloud infrastructure and scaling?',
    answer:
      'Yes. We architect infrastructure on AWS, Google Cloud, or DigitalOcean using Docker containers, managed databases, Redis caching, CI/CD pipelines, and automated backups.',
  },
  {
    question: 'Who owns the source code and cloud infrastructure?',
    answer:
      'You have 100% intellectual property ownership. All source code, Git repositories, cloud accounts, database credentials, and documentation are handed over to you.',
  },
  {
    question: 'Do you provide ongoing support after the SaaS launches?',
    answer:
      'Yes. We offer dedicated SLA maintenance packages covering bug fixes, dependency updates, infrastructure monitoring, billing support, and continuous feature development.',
  },
]

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)
  const faqList =
    service?.faqs && service.faqs.length > 0 ? service.faqs : defaultFaqs

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  // Schema.org FAQPage JSON-LD
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
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Frequently Asked Questions.
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
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D0D0F] transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 sm:p-7 text-left transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.02] text-zinc-400 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 text-purple-400 border-purple-500/40 bg-purple-500/10'
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

        <div className="relative mx-auto mt-12 max-w-4xl rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-6 text-center before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="flex items-center justify-center gap-2 text-zinc-400 font-mono text-xs">
            <HelpCircle className="h-4 w-4 text-purple-600" />
            <span>Have a technical SaaS question not answered here?</span>
            <a
              href="/contact"
              className="text-purple-400 underline underline-offset-4 hover:text-white transition-colors ml-1"
            >
              Talk directly with our SaaS engineering team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
