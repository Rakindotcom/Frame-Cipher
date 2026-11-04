'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle, ShieldCheck, ChevronUp, Sparkles } from 'lucide-react'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    question: 'What is Meta Ads management?',
    answer: 'Meta Ads management is the ongoing process of planning, launching, monitoring, testing, measuring, and optimizing advertising campaigns across Meta’s advertising ecosystem, including Facebook and Instagram. It includes campaign strategy, creative development, audience inputs, Pixel and Conversions API measurement, retargeting, budget management, and performance reporting.',
  },
  {
    question: 'Is Meta Ads the same as Facebook Ads?',
    answer: "Facebook Ads are part of Meta's broader advertising ecosystem. Meta Ads reach users across Facebook, Instagram, Messenger, and Audience Network depending on the campaign setup and placement optimization.",
  },
  {
    question: 'How much does Meta Ads management cost in Bangladesh?',
    answer: "Framecipher's indicative Meta Ads management plans start at ৳15,000 per month for focused accounts (Starter Tier), ৳25,000 per month for multi-format growth (Growth Tier), and ৳40,000 per month for creative-intensive eCommerce and scaling brands. Enterprise and multi-country campaigns receive custom quotes. Your media budget is paid directly to Meta and is completely separate from our management fee.",
  },
  {
    question: 'Do you manage Instagram Ads as well?',
    answer: 'Yes. Instagram advertising is fully integrated within Meta Ads management, including Instagram Feed, Stories, Reels, Explore, and Search placements tailored with native vertical video and high-aesthetic imagery.',
  },
  {
    question: 'Do you create Meta ad creatives?',
    answer: 'Yes. Depending on the engagement scope, creative support can include static image ads, carousels, short-form video concepts, UGC-style Reels, Story assets, conversion copywriting variations, and ongoing creative testing to prevent ad fatigue.',
  },
  {
    question: 'Do you use Advantage+ campaigns?',
    answer: "Where appropriate, yes. We evaluate Advantage+ sales, leads, audience, placements, and creative automation features based on campaign objectives and historical data volume rather than enabling automation without a clear hypothesis. Meta positions Advantage+ as an AI-driven suite that excels when paired with high-quality creative assets.",
  },
  {
    question: 'Do you set up Meta Pixel and Conversions API (CAPI)?',
    answer: 'Yes. We configure and audit both client-side Meta Pixel and server-side Conversions API (CAPI) using Google Tag Manager or direct server integrations. This bypasses iOS tracking restrictions, ad-blockers, and browser cookie loss to deliver high Event Match Quality (EMQ) scores back to Meta.',
  },
  {
    question: 'Do you run Facebook and Instagram retargeting?',
    answer: 'Yes. Retargeting uses website visits, abandoned cart signals, product catalogue views, video viewers, and first-party customer lists to re-engage prospective buyers who have already interacted with your brand.',
  },
  {
    question: 'Do you manage Meta Ads outside Bangladesh?',
    answer: 'Yes. Framecipher manages Meta Ads for businesses in Bangladesh and international markets including the US, UK, Australia, Canada, and UAE. Campaigns are localized for regional buyer psychology, cultural resonance, and platform usage habits.',
  },
  {
    question: 'How much budget do I need for Meta Ads?',
    answer: 'There is no universal budget that fits every campaign. A practical starting budget depends on your market competition, average order value, target audience size, and sales cycle. In Bangladesh, initial campaigns frequently test with ৳15,000 to ৳50,000+ monthly in media spend, while international markets generally require $1,500 to $5,000+ per month to generate adequate conversion events.',
  },
  {
    question: 'How does Meta Ads differ from Google Search Ads?',
    answer: 'Google Search captures active intent—reaching users already looking for a specific solution. Meta Ads creates demand—interrupting users browsing feeds or Reels with compelling visual creative and offers before they actively begin searching. Combining both channels creates a full-funnel acquisition engine.',
  },
  {
    question: 'What is the difference between Custom Audiences and Lookalike Audiences?',
    answer: 'Custom Audiences are created from people who have already interacted with your business (website visitors, customer lists, video watchers). Lookalike Audiences use Meta’s machine learning to find new users whose demographics and online behavior closely mirror your existing highest-value customers.',
  },
  {
    question: 'Who pays Meta for the advertising spend — do we pay you or Meta directly?',
    answer: 'You pay Meta directly. Your Meta Business Manager and Ad Account are connected to your own corporate credit card or approved payment method. Framecipher never marks up ad spend or hides media costs inside agency retainers, guaranteeing 100% financial transparency.',
  },
]


import PosterButton from '../../../home/PosterButton'

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
            Clear, actionable answers regarding Facebook and Instagram ads management fees in Bangladesh, account ownership, creative production, tracking, and scaling.
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
            Ready to turn Facebook & Instagram into a predictable acquisition channel? Contact us, and we will map out your creative testing sprint.
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
