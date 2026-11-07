'use client'

import React, { useState } from 'react'
import { Plus, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'
import { resolveFaqs } from '../../../lib/seo/faq'

const fallbackFaqs = [
  {
    question: 'How much should I budget for paid advertising?',
    answer: 'There is no universal advertising budget. The right starting point depends on your industry, market size, customer acquisition economics, competition, conversion rate, average order value, sales cycle, and the value of a new customer. We recommend a realistic starting budget after reviewing those factors rather than assigning an arbitrary number.',
  },
  {
    question: "What's the difference between your management fee and my ad spend?",
    answer: 'The management fee pays Framecipher for strategy, setup, campaign management, optimization, reporting, and other agreed services. Your ad spend is paid separately to the advertising platform. Keeping the two separate makes the total cost of advertising easier to understand and manage.',
  },
  {
    question: 'Which paid advertising platform should my business use?',
    answer: 'That depends on where your customers search, browse, compare, and make decisions. A local service business may need a different media mix from an ecommerce brand, B2B company, SaaS business, or international brand. We select platforms based on business fit rather than recommending every channel by default.',
  },
  {
    question: 'Can you manage an existing Google or Meta Ads account?',
    answer: 'Yes. We can audit an existing account, identify structural and performance issues, and then manage the campaign under an agreed scope. We can also build campaigns from scratch when there is no existing account structure worth retaining.',
  },
  {
    question: 'Do you create the ad creatives?',
    answer: 'Creative support depends on the engagement scope. Where creative is included, we can coordinate ad copy, static concepts, short-form formats, product-focused creative, testing variations, and platform-specific messaging. The objective is to create assets that support performance rather than simply make the ads look attractive.',
  },
  {
    question: 'Do you set up conversion tracking?',
    answer: 'Where tracking is included in the engagement, we configure and validate the agreed conversion events using the available website, analytics, tag-management, CRM, and advertising-platform infrastructure. The exact implementation depends on your website and technology stack.',
  },
  {
    question: 'Can you improve my landing page as part of the campaign?',
    answer: 'Yes, where included in scope. We can review ad-to-landing-page alignment, offer clarity, forms, checkout flow, mobile experience, calls to action, trust signals, and other conversion barriers. Framecipher can also support landing-page and development work when the campaign requires changes beyond the ad platform.',
  },
  {
    question: 'How do you measure lead quality?',
    answer: 'We do not treat every lead as equal. Where the business has a suitable sales or CRM process, campaign analysis can consider qualified leads, booked calls, opportunities, purchases, or other downstream outcomes rather than stopping at the initial form submission.',
  },
  {
    question: 'Do you guarantee ROAS?',
    answer: 'No. A specific return depends on your offer, price, margins, market competition, customer demand, conversion rate, website performance, and many other variables. We focus on accurate tracking, structured testing, optimization, and transparent reporting instead of promising a number that cannot be controlled.',
  },
  {
    question: 'Can you manage multiple advertising platforms at once?',
    answer: 'Yes, when the business has a clear reason to use multiple channels. We coordinate the channels as part of one media strategy instead of treating every platform as a separate campaign universe.',
  },
  {
    question: 'Do you manage remarketing campaigns?',
    answer: 'Yes. Remarketing can be used to reconnect with relevant audiences who have already interacted with your business, subject to the available platform features, audience data, consent requirements, and campaign objective.',
  },
  {
    question: 'Are ChatGPT Ads available for every business?',
    answer: "No. ChatGPT Ads and Ads Manager access depend on the advertiser's country and eligibility, and availability can change as the platform expands. We assess access and suitability before including the channel in a media plan.",
  },
  {
    question: 'Do you serve businesses outside Bangladesh?',
    answer: 'Yes. Framecipher works with businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE. Campaign structure, targeting, budget, and messaging can be adapted for the specific market rather than copied from a single-region strategy.',
  },
]


import PosterButton from '../../home/PosterButton'

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)
  const faqList = (service?.faqs && service.faqs.length > 0) ? service.faqs : fallbackFaqs

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
            Common questions about paid advertising budgets, tracking, platforms, and how engagement works across all channels.
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
            Have a specific paid media goal or ad spend budget in mind? Contact us, and we will give you a straight answer on what fits.
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
