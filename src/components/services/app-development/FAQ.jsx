'use client'

import React from 'react'
import { resolveFaqs } from '../../../lib/seo/faq'

const fallbackFaqs = [
  {
    question: 'What types of apps can you develop?',
    answer: 'We develop Android, iOS, cross-platform, SaaS, web, MVP, enterprise, ecommerce, booking, logistics, marketplace, customer, and internal business applications based on project requirements.',
  },
  {
    question: 'Should I build native or cross-platform?',
    answer: 'It depends on your required features, target users, performance needs, budget, timeline, and long-term roadmap. We assess those factors before recommending the appropriate approach.',
  },
  {
    question: 'Can you build an app for our existing website or business system?',
    answer: 'Yes. We can connect an application with an existing website, backend, CRM, database, ecommerce system, or other business software where the required integration is technically available.',
  },
  {
    question: 'Do you develop the backend and admin dashboard too?',
    answer: 'Yes. Where required, we can develop backend services, APIs, databases, authentication, business logic, and admin systems that support the application.',
  },
  {
    question: 'Can you integrate bKash, Nagad, payment gateways, or CRM systems?',
    answer: 'Yes, where the required provider API or integration method is available. The exact implementation depends on the provider and project requirements.',
  },
  {
    question: 'Do you design the app UI/UX too?',
    answer: 'Yes. UI/UX can include user flows, wireframes, prototypes, high-fidelity interface design, design systems, and usability testing where included in the project.',
  },
  {
    question: 'Do you test apps on real devices?',
    answer: 'Testing can include supported real devices and operating-system environments relevant to the target users and project scope.',
  },
  {
    question: 'Can you modernize an existing app?',
    answer: 'Yes. We can assess the existing codebase, architecture, dependencies, integrations, performance, and UX before recommending a modernization or redevelopment approach.',
  },
  {
    question: 'Can you build an MVP first?',
    answer: 'Yes. An MVP can be appropriate when you want to validate a product idea with real users before investing in a larger feature set.',
  },
  {
    question: 'Do you submit apps to Google Play and Apple App Store?',
    answer: 'Yes. Store submission support can be included in the project. Final approval remains under the control of Google and Apple.',
  },
  {
    question: 'Do you provide support after launch?',
    answer: 'Yes. Post-launch support can include bug fixes, OS compatibility updates, dependency maintenance, performance work, integrations, and new development depending on the agreed scope.',
  },
  {
    question: 'Can you work with our existing development team?',
    answer: 'Yes. We can provide application development, backend development, UI/UX, or technical support alongside an existing internal or external team where the project structure allows it.',
  },
  {
    question: 'How long does app development take?',
    answer: 'The timeline depends on the platform, number of features, backend complexity, integrations, testing requirements, and review cycles. Smaller MVPs may take several weeks, while larger SaaS or enterprise products can take several months.',
  },
]

export default function FAQ({ service }) {
  const faqs = (service?.faqs && service.faqs.length >= fallbackFaqs.length) ? resolveFaqs(service, fallbackFaqs) : fallbackFaqs

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
    <section id="faq" className="border-b border-white/[0.08] bg-[#09090B] px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 md:px-8 md:pt-28 md:pb-16 scroll-mt-20">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Strictly Center-Aligned Header (§5.3 Standard) */}
        <div className="mx-auto mb-14 max-w-3xl text-center space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Frequently Asked Questions.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Common questions about our app development process, platform choices, backend infrastructure, and ongoing support.
          </p>
        </div>

        {/* Center-Aligned Accordion Container (max-w-4xl) */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-xl border border-white/[0.08] bg-[#121214] transition-colors open:border-white/[0.18] hover:border-white/[0.18]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-base sm:text-lg md:text-xl font-medium tracking-tight text-white marker:content-none">
                <h3 className="font-heading text-base sm:text-lg font-medium tracking-tight text-white pr-4">{faq.question}</h3>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] font-mono text-sm text-purple-600 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-white/[0.08] p-6 text-sm md:text-base font-normal leading-relaxed text-zinc-300 whitespace-pre-line">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
