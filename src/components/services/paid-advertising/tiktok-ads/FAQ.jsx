'use client'

import React, { useState } from 'react'
import { ChevronDown, Sparkles, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'What is a TikTok Ads Management Service?',
    a: 'A TikTok Ads Management Service handles the strategy, setup, creative coordination, targeting, tracking, optimization, and reporting required to run paid advertising campaigns on TikTok. Framecipher manages these activities around business objectives such as sales, leads, website conversions, app growth, and customer acquisition.',
  },
  {
    q: 'How much does TikTok Ads management cost?',
    a: "Framecipher's TikTok Ads management starts at ৳30,000 per month for standard campaign management. The final fee depends on creative volume, campaign complexity, creator requirements, ecommerce setup, number of markets, and reporting needs. Ad spend is separate from the management fee.",
  },
  {
    q: 'Do I need TikTok videos before starting ads?',
    a: 'Not necessarily. We can work with existing content, develop new native-style concepts, coordinate UGC, or plan creator content depending on your campaign requirements. However, having enough creative variation is important for structured testing.',
  },
  {
    q: 'Do you provide UGC and creator content?',
    a: 'Yes. We can support UGC planning, creator briefing, content requirements, usage-rights coordination, and Spark Ads setup. Creator selection is based on campaign relevance and content quality rather than follower count alone.',
  },
  {
    q: 'What are Spark Ads?',
    a: 'Spark Ads allow eligible organic TikTok posts or creator content to be used in paid advertising while retaining the original post identity and associated engagement elements. We use them when existing organic or creator content provides a strong foundation for paid distribution.',
  },
  {
    q: 'Do you manage Smart+ campaigns?',
    a: 'Yes. We can manage Smart+ campaigns where they are appropriate for the campaign objective and account. TikTok currently provides Smart+ solutions across several performance objectives and allows certain campaign settings to be controlled manually depending on the campaign and account.',
  },
  {
    q: 'Can you manage TikTok Shop Ads?',
    a: 'Yes, where TikTok Shop and the relevant advertising features are available for the client\'s market and account. TikTok Shop is currently limited to selected markets, so we verify eligibility before including Shop-specific services in a campaign plan.',
  },
  {
    q: 'Can Bangladesh businesses run TikTok Ads?',
    a: 'TikTok advertising availability and specific campaign features depend on the account, registration market, targeting options, and current platform availability. We verify the available advertising setup before launching a Bangladesh campaign rather than assuming every TikTok feature is available locally.',
  },
  {
    q: 'Do you manage TikTok Ads outside Bangladesh?',
    a: 'Yes. Framecipher works with businesses targeting markets including the US, UK, Australia, Canada, UAE, and other eligible markets. Campaign structure, creative, audience strategy, and measurement are adapted to the target market.',
  },
  {
    q: 'Do you set up the TikTok Pixel and Events API?',
    a: 'Yes. We can configure TikTok Pixel, Events API, events, parameters, and related measurement requirements. Where appropriate, Pixel and Events API can be used together to improve the reliability of data shared with TikTok.',
  },
  {
    q: 'How long does it take to launch a TikTok Ads campaign?',
    a: 'Most initial setups take around one to two weeks, depending on tracking, creative production, account access, website or app requirements, and approval time. More complex creator, ecommerce, or multi-market campaigns may require additional preparation.',
  },
  {
    q: 'Do you guarantee TikTok Ads results?',
    a: 'No agency can reliably guarantee a specific ROAS, CPA, conversion rate, or viral outcome. We instead commit to proper setup, structured testing, transparent reporting, and ongoing optimization based on campaign data.',
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
            Everything you need to know about TikTok Ads management, Spark Ads, video creative variations, pixel tracking, and international campaign execution.
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
            Want to scale TikTok video creative or launch Spark Ads? Contact us, and we will audit your creative hook potential and conversion setup.
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
