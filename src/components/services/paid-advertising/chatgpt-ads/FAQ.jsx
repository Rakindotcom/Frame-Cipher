'use client'

import React, { useState } from 'react'
import { HelpCircle, Plus, Minus, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'

const faqs = [
  {
    question: 'What is ChatGPT Ads management?',
    answer:
      'ChatGPT Ads management covers the planning, setup, launch, monitoring, testing, optimization, tracking, and reporting of advertising campaigns within ChatGPT. The exact scope depends on the campaign objective and business requirements.',
  },
  {
    question: 'How do ChatGPT Ads work?',
    answer:
      'ChatGPT Ads operate within the conversational experience and can use signals such as the context and intent of the current conversation, ad information, landing-page content, advertiser-provided context hints, and, where applicable, selected signals from a user’s broader ChatGPT experience. This makes relevance and context important parts of campaign strategy.',
  },
  {
    question: 'How does targeting work in ChatGPT Ads?',
    answer:
      'ChatGPT Ads use campaign and ad-group settings together with contextual signals. Advertisers can provide context hints describing when a product or service may be relevant. These hints help guide ad matching but are not exact-match keywords and do not guarantee delivery for specific conversations.',
  },
  {
    question: 'Where do ChatGPT Ads appear?',
    answer:
      'ChatGPT Ads appear below ChatGPT responses and are clearly labeled as advertisements. They remain separate from the generated answer itself.',
  },
  {
    question: 'What does your ChatGPT Ads Management Service include?',
    answer:
      'Our service can include campaign strategy, account and campaign setup, ad-group structure, context targeting, creative development, conversion tracking, ongoing optimization, and performance reporting. The final scope depends on the campaign requirements.',
  },
  {
    question: 'Can ChatGPT Ads be optimized for conversions?',
    answer:
      'Yes. OpenAI supports conversion-optimized campaigns for eligible advertisers. Supported conversion events can include actions such as purchases, sign-ups, and lead submissions.',
  },
  {
    question: 'Do you provide ChatGPT Ads management from Bangladesh?',
    answer:
      'Yes. Framecipher is based in Dhaka and can manage campaigns for businesses targeting eligible advertising markets. Bangladesh is not currently listed as an OpenAI Ads Manager self-service advertiser country, so we verify the advertiser entity and target market before recommending a campaign.',
  },
  {
    question: 'Can a Bangladeshi business target customers in other countries?',
    answer:
      'Yes, where the advertiser entity and target market meet the current platform requirements. We assess eligibility, target-country availability, campaign requirements, landing-page readiness, and business objectives before launch.',
  },
  {
    question: 'How is ChatGPT Ads different from Google Ads?',
    answer:
      'Google Ads and ChatGPT Ads operate in different advertising environments. Google Search can target explicit search behavior around queries and keywords. ChatGPT Ads operate inside conversations, where contextual intent can play an important role in ad matching. The two channels can therefore serve different roles within a broader paid media strategy.',
  },
  {
    question: 'Do you provide AEO/GEO with ChatGPT Ads management?',
    answer:
      'AEO/GEO can be provided as a separate or combined service. Paid ChatGPT Ads and organic AI search visibility are different disciplines, but coordinating both can create a broader AI visibility strategy.',
  },
  {
    question: 'What is the difference between ChatGPT Ads and Sponsored Agents?',
    answer:
      'Sponsored Agents are a newer advertising format that allows people to chat with an AI representative of a business after interacting with an ad. OpenAI currently describes Sponsored Agents as a limited alpha test available only to selected advertisers. Availability may expand or change as the product develops.',
  },
  {
    question: 'How much does ChatGPT Ads management cost?',
    answer:
      'Our ChatGPT Ads management starts at ৳15,000 per month, while setup starts at ৳12,000 one-time. International and multi-market campaigns start at ৳40,000+ per month, depending on scope. Advertising spend is separate from management fees.',
  },
  {
    question: 'Do you guarantee ChatGPT Ads results?',
    answer:
      'No agency can responsibly guarantee a specific CPC, conversion rate, ROAS, or revenue outcome. We focus on sound campaign structure, reliable measurement, disciplined testing, and transparent reporting.',
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
            Clear, direct answers regarding OpenAI Ads Manager availability, conversational intent targeting, early eligibility, and attribution measurement.
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
            Want to prepare your brand for conversational AI advertising and sponsored placements? Contact us, and we will assess your market readiness.
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
