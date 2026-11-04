'use client'

import React, { useState } from 'react'
import { ChevronDown, Sparkles, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'What are Remarketing Services?',
    a: 'Remarketing Services help businesses re-engage people who previously interacted with their website, products, content, ads, or brand. Framecipher manages audience segmentation, tracking, campaign setup, dynamic remarketing, suppression, creative testing, optimization, and reporting across relevant advertising platforms.',
  },
  {
    q: 'What is the difference between remarketing and retargeting?',
    a: 'The terms are often used interchangeably in paid advertising. Retargeting usually refers to advertising to people based on previous interactions such as website visits, product views, or engagement. Remarketing is often used more broadly for re-engaging previous visitors, leads, or known customer audiences. Framecipher uses Remarketing Services as the overarching service term while applying the exact audience strategy that fits each channel.',
  },
  {
    q: 'Does remarketing still work with privacy and tracking changes?',
    a: 'Yes, but audience availability and measurement depend on platform rules, consent, browser and app behavior, traffic volume, and the quality of the tracking setup. We build resilient remarketing systems utilizing first-party data, consent-aware tracking, server-side Conversion APIs (CAPI), and platform-supported audience methods where appropriate.',
  },
  {
    q: 'How much website traffic do we need for remarketing?',
    a: 'There is no universal minimum. The practical requirement depends on traffic volume, buying cycle, audience recency window, platform, and campaign objective. Very low-traffic websites may need longer audience windows or a narrower single-platform strategy before scaling.',
  },
  {
    q: 'How long should someone stay in a remarketing audience?',
    a: 'There is no universal timeframe. A short buying cycle may need a 7-day to 14-day audience window, while high-consideration products or B2B services may require 30 to 90-day windows. We calibrate audience duration based on actual customer buying behavior rather than applying one default timeframe.',
  },
  {
    q: 'Do you manage ecommerce remarketing?',
    a: 'Yes. We manage product-view, cart abandonment, checkout abandonment, past purchaser, dynamic catalog, cross-sell, upsell, and replenishment audiences across Google, Meta, TikTok, and Pinterest where relevant platform features are available.',
  },
  {
    q: 'Do you manage lead-generation remarketing?',
    a: 'Yes. We build remarketing campaigns around service-page visits, pricing-page views, form abandonment, content engagement, previous leads, and consultation page interactions, deploying tailored proof and objection-handling messaging.',
  },
  {
    q: 'Do you manage remarketing across multiple platforms?',
    a: 'Yes. We coordinate remarketing across Google (Display & YouTube), Meta (Facebook & Instagram), Pinterest, TikTok, LinkedIn, Amazon, and other relevant platforms where the required audience and campaign capabilities are available.',
  },
  {
    q: 'Do you provide dynamic product remarketing?',
    a: 'Yes. For eligible ecommerce setups, we connect product catalogs and feeds with dynamic remarketing campaigns that display the exact or complementary products a user previously viewed or added to cart.',
  },
  {
    q: 'Can you use CRM data for remarketing?',
    a: 'Yes, where the advertising platform supports customer-list audiences and the data has been collected lawfully with proper consent. We structure customer, lead, qualified-lead, and past-customer audiences for targeted inclusion or suppression.',
  },
  {
    q: 'Do you manage frequency caps?',
    a: 'Where a platform and campaign type support manual frequency caps, we configure and monitor them. Where direct frequency controls are unavailable, exposure is managed through audience windows, exclusions, campaign structure, creative rotation, budget, and sequencing to prevent ad fatigue.',
  },
  {
    q: 'Can remarketing work with low website traffic?',
    a: 'It can, but limited traffic usually means smaller audiences and slower audience accumulation. We assess traffic volume before recommending a cross-platform remarketing program, ensuring media spend is allocated where it yields measurable impact.',
  },
  {
    q: 'Can remarketing improve ROAS?',
    a: 'It can contribute to improved efficiency when the audience, offer, creative, tracking, and conversion journey are well aligned. However, we do not treat ROAS improvement as guaranteed, and we distinguish attributed conversions from broader incremental business impact where data allows.',
  },
  {
    q: 'Do you provide this service outside Bangladesh?',
    a: 'Yes. Framecipher manages remarketing campaigns for businesses in Bangladesh and international markets including the US, UK, Australia, Canada, UAE, and other eligible markets.',
  },
  {
    q: 'Do you guarantee remarketing results?',
    a: 'No. We do not guarantee a specific ROAS, CPA, conversion rate, or recovered revenue. Remarketing performance depends on audience volume, traffic quality, offer strength, product demand, and conversion rates outside any agency control. We commit to proper tracking, structured audiences, exposure management, ongoing optimization, and transparent reporting.',
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
            Everything you need to know about audience segmentation, dynamic retargeting, frequency capping, first-party data, and cross-platform setup.
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
            Have an audience list or cart drop-off issue you want to recover? Contact us, and we will structure a high-converting remarketing sequence.
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
