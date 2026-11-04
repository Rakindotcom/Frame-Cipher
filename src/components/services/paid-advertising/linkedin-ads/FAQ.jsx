'use client'

import React, { useState } from 'react'
import { HelpCircle, Plus, Minus, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'

const faqs = [
  {
    question: 'What is LinkedIn Ads management?',
    answer:
      'LinkedIn Ads management is the process of planning, launching, measuring, testing, and optimizing LinkedIn advertising campaigns around defined B2B marketing and sales objectives. It can include ICP research, professional audience targeting, Sponsored Content, Lead Gen Forms, Sponsored Messaging, account-based marketing, retargeting, conversion tracking, CRM measurement, and reporting.',
  },
  {
    question: 'Why should a B2B company use LinkedIn Ads?',
    answer:
      'LinkedIn can be useful when your target audience can be clearly defined by professional characteristics such as company, industry, job function, seniority, or other professional attributes. Whether it makes commercial sense depends on your deal value, audience availability, sales cycle, offer, and ability to convert qualified prospects.',
  },
  {
    question: 'Are LinkedIn Ads suitable for small B2B businesses?',
    answer:
      'They can be, but audience size and deal economics matter. We evaluate your ICP, customer value, sales cycle, target-market size, and realistic advertising budget before recommending LinkedIn as an acquisition channel.',
  },
  {
    question: 'What is the difference between LinkedIn Lead Gen Forms and website lead forms?',
    answer:
      'LinkedIn Lead Gen Forms collect information directly within LinkedIn and can use pre-filled member profile information. Website forms send the prospect to your own website before completing the conversion. The appropriate option depends on the offer, qualification requirements, landing page, sales process, and measurement setup.',
  },
  {
    question: 'What is account-based marketing on LinkedIn?',
    answer:
      'Account-based marketing focuses advertising around a defined list of target companies and the professional roles involved in buying from them. It is particularly relevant for businesses selling high-value products or services to a smaller number of strategic accounts.',
  },
  {
    question: 'What are Buyer Groups on LinkedIn?',
    answer:
      'Buyer Groups are an AI-powered LinkedIn audience option designed to help advertisers reach decision-makers and key stakeholders involved in purchasing decisions within companies. They can be considered as part of a broader audience strategy alongside company, role, geographic, first-party, and other relevant signals.',
  },
  {
    question: 'Do you integrate LinkedIn Ads with CRM systems?',
    answer:
      'Where the technical setup supports it, yes. We can connect available CRM or conversion data to help measure qualified leads and downstream sales outcomes. LinkedIn currently supports CRM-connected conversion data and qualified-lead optimization through supported CRM and Conversions API setups.',
  },
  {
    question: 'Do you use LinkedIn Conversions API?',
    answer:
      'Yes, where appropriate. Conversions API can help connect business conversion data with LinkedIn measurement and optimization. We assess the available technical setup before determining the appropriate implementation.',
  },
  {
    question: 'Do you manage LinkedIn Ads outside Bangladesh?',
    answer:
      'Yes. Framecipher manages LinkedIn Ads for businesses targeting Bangladesh as well as international B2B markets such as the US, UK, Australia, Canada, UAE, and other regions.',
  },
  {
    question: 'How much should I budget for LinkedIn Ads?',
    answer:
      'There is no universal budget that works for every B2B campaign. A practical starting budget depends on audience size, market competition, deal value, expected conversion rate, sales cycle, target-account scope, and the amount of data needed to evaluate performance. We recommend planning the media budget around your sales economics rather than choosing an arbitrary monthly figure.',
  },
]


import PosterButton from '../../../home/PosterButton'

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)
  const faqList = (service?.faqs && service.faqs.length > 0) ? service.faqs : faqs

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((faq) => ({
      '@type': 'Question',
      name: faq.question || faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer || faq.a,
      },
    })),
  }

  return (
    <section id="faqs" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Strictly Centered Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Frequently Asked{' '}
            <span className="italic font-normal text-frame-accent">Questions.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-2xl mx-auto">
            Direct, transparent answers regarding LinkedIn B2B ad budgets, minimum spend, audience targeting, account ownership, and lead tracking.
          </p>
        </div>

        {/* Centered Accordion Column */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx
            const qText = faq.question || faq.q
            const aText = faq.answer || faq.a
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 hover:border-white/[0.14] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg sm:text-xl font-medium leading-snug tracking-tight text-white pr-4">
                    {qText}
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
                      {aText}
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
            Targeting specific accounts, industries, or job titles on LinkedIn? Contact us, and we will evaluate your buying committee strategy.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="accent">
              Request Consultation
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
