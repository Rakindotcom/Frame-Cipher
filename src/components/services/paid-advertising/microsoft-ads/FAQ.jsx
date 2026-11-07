'use client'

import React, { useState } from 'react'
import { ChevronDown, Sparkles, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'What is a Microsoft Ads Management Service?',
    a: 'A Microsoft Ads Management Service covers the strategy, setup, targeting, tracking, optimization, and reporting required to run Microsoft Advertising campaigns. Framecipher manages Microsoft Search, Shopping, audience campaigns, LinkedIn Profile Targeting, remarketing, conversion tracking, and ongoing optimization around business goals.',
  },
  {
    q: 'Is Microsoft Ads worth running if we already use Google Ads?',
    a: 'It can be, when Microsoft has meaningful search demand for your market and category. For some businesses, Microsoft Ads can provide incremental search reach and additional conversions alongside Google Ads. The opportunity depends on the target market, search volume, audience, budget, and business model.',
  },
  {
    q: 'Is Microsoft Ads the same as Bing Ads?',
    a: 'Microsoft Ads is the broader advertising platform. Bing is one of the key search environments within Microsoft\'s advertising ecosystem, alongside partner distribution and other Microsoft advertising properties.',
  },
  {
    q: 'Do you manage Bing Ads?',
    a: 'Yes. Microsoft Ads includes campaigns that reach users searching on Bing and Microsoft\'s wider search network.',
  },
  {
    q: 'Is LinkedIn Profile Targeting the same as LinkedIn Ads?',
    a: 'No. LinkedIn Profile Targeting is a Microsoft Advertising capability that uses professional profile information such as company, industry, and job function to refine eligible Microsoft advertising campaigns. It is different from advertising directly inside the LinkedIn feed.',
  },
  {
    q: 'What LinkedIn targeting options are available?',
    a: 'Depending on campaign type and market availability, Microsoft Advertising supports professional targeting signals such as company, industry, job function, and Job Seniority.',
  },
  {
    q: 'Can you import our Google Ads account?',
    a: 'Yes. Microsoft Advertising provides an official Google Ads import workflow. We use it when appropriate, then review and adapt the imported campaigns before launch.',
  },
  {
    q: 'Do you provide Microsoft Shopping Ads management?',
    a: 'Yes. We can manage Microsoft Shopping campaigns, product feeds, product-group structure, ecommerce tracking, performance monitoring, and ongoing optimization where the required features are available.',
  },
  {
    q: 'Do you manage Microsoft Audience Ads and remarketing?',
    a: 'Yes. We can support audience campaigns, remarketing, audience exclusions, and other available audience strategies based on the campaign objective and account setup.',
  },
  {
    q: 'Do you manage Performance Max on Microsoft Ads?',
    a: 'Yes. We can manage Performance Max campaigns where the campaign objective, conversion data, assets, and account setup make the format appropriate. Microsoft describes Performance Max as an AI-powered campaign solution designed to optimize across Microsoft inventory.',
  },
  {
    q: 'What is AI Max for Search?',
    a: 'AI Max for Search is a Microsoft Advertising capability that brings AI-powered features into standard Search campaigns, including search-term matching, text customization, and final URL expansion. Availability and controls can vary by campaign and market.',
  },
  {
    q: 'Do you set up UET and conversion tracking?',
    a: 'Yes. We can configure Universal Event Tracking, conversion goals, events, and related remarketing requirements. Microsoft describes UET as a core component for conversion tracking and remarketing.',
  },
  {
    q: 'How much does Microsoft Ads management cost?',
    a: "Framecipher's Microsoft Ads management starts at ৳20,000 per month for standard management. Full-account management starts at ৳30,000 per month, while Google Ads migration starts at ৳15,000 one time, plus the applicable management fee. Ad spend is separate.",
  },
  {
    q: 'Do you manage Microsoft Ads outside Bangladesh?',
    a: 'Yes. Framecipher manages campaigns for businesses targeting Bangladesh as well as international markets such as the US, UK, Australia, Canada, UAE, and other eligible markets.',
  },
  {
    q: 'How long does Microsoft Ads setup take?',
    a: 'Most initial setups take around one to two weeks. Migration, Shopping, tracking, multi-market, and more complex campaigns may require additional preparation.',
  },
  {
    q: 'Do you guarantee Microsoft Ads results?',
    a: 'No. We do not guarantee a specific CPC, CPA, conversion rate, traffic volume, or revenue outcome. We commit to proper setup, accurate tracking, structured optimization, transparent reporting, and recommendations based on actual campaign data.',
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
            Everything you need to know about Microsoft Advertising, Bing search, LinkedIn Profile Targeting, and Google Ads account migration.
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
                  <h3 className="font-heading text-lg sm:text-xl font-medium leading-snug tracking-tight text-white pr-4">
                    {qText}
                  </h3>
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
            Looking to expand beyond Google Search or capture high-income desktop audiences? Contact us, and we will evaluate your Microsoft Ads opportunity.
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
