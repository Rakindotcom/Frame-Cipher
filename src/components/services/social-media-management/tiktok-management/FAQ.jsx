'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { resolveFaqs } from '../../../../lib/seo/faq'
import { AutoLinks } from '../../../seo/AutoLinks'

const fallbackFaqs = [
  {
    question: 'What Does a TikTok Management Service Include?',
    answer:
      'A TikTok Management Service can include strategy, audience research, content planning, video production, TikTok SEO, publishing, community management, trend research, creator coordination, reporting, testing, and ongoing optimization.\n\nThe exact scope depends on the selected plan.',
  },
  {
    question: 'How Much Does TikTok Management Cost in Bangladesh?',
    answer:
      'Framecipher\'s TikTok management plans start at ৳25,000 per month.\n\nOur Growth plan is ৳40,000 per month, while larger or combined organic and paid programs are customized according to scope.',
  },
  {
    question: 'How Many TikTok Videos Should a Business Post Each Week?',
    answer:
      'There is no universal number that works for every business.\n\nThe right publishing frequency depends on your production capacity, content quality, audience, goals, and available resources.\n\nOur Standard plan includes 8 videos per month. Growth includes 16 videos per month.',
  },
  {
    question: 'Do You Create TikTok Videos?',
    answer:
      'Yes.\n\nOur TikTok management service can include short-form video concepts, scripting, hooks, editing, captions, on-screen text, and other agreed production requirements.\n\nFilming requirements are discussed separately when needed.',
  },
  {
    question: 'Do You Write TikTok Scripts?',
    answer:
      'Yes.\n\nWe can develop scripts, talking points, hooks, educational structures, product demonstrations, founder-led content, and other formats based on the agreed strategy.',
  },
  {
    question: 'Do You Provide TikTok SEO?',
    answer:
      'Yes.\n\nOur TikTok SEO approach includes topic research, search-aware content planning, captions, relevant terminology, on-screen context, profile optimization, pinned-content planning, and discoverability improvements.\n\nWe do not promise specific rankings because TikTok visibility depends on platform and audience behavior.',
  },
  {
    question: 'Do You Manage TikTok Comments and DMs?',
    answer:
      'Yes.\n\nCommunity management can include comment monitoring, responses, customer questions, and DM handling within the selected scope.\n\nResponse volume, monitoring frequency, and escalation procedures are defined in your service plan.',
  },
  {
    question: 'Do You Research TikTok Trends?',
    answer:
      'Yes.\n\nWe monitor relevant trends, formats, topics, sounds, and cultural opportunities.\n\nWe then decide which opportunities fit your brand and audience.\n\nWe do not recommend copying every trend simply because it is popular.',
  },
  {
    question: 'Do I Need to Provide Video Footage?',
    answer:
      'Not always.\n\nDepending on your plan, we can work with existing footage, client-supplied assets, creator content, UGC, planned production, and edited raw footage.\n\nIf on-location filming is required, the production scope is agreed separately.',
  },
  {
    question: 'Can You Film TikTok Content for My Business?',
    answer:
      'Filming availability depends on location and project requirements.\n\nFor Bangladesh-based production, we can discuss filming requirements, locations, talent, equipment, and production scope during onboarding.\n\nFor international businesses, remote production, supplied footage, creator content, or other agreed production models may be used.',
  },
  {
    question: 'Can You Manage an Existing TikTok Account?',
    answer:
      'Yes.\n\nWe can manage an existing TikTok account without requiring you to start over.\n\nWe first review the current profile, content history, audience, performance, and positioning before recommending changes.\n\nExisting account data can help inform the new content strategy.',
  },
  {
    question: 'Do You Manage TikTok LIVE?',
    answer:
      'TikTok LIVE support can be included where the account and market are eligible, and the service scope requires it.\n\nOur standard support focuses on planning, content preparation, promotional content, talking points, and audience-question planning.\n\nFull LIVE hosting, technical production, or real-time moderation can be scoped separately.',
  },
  {
    question: 'Do You Manage TikTok Shop?',
    answer:
      'TikTok Shop support can be discussed for eligible markets and businesses.\n\nDepending on the agreed scope, this may include Shop-focused content planning, product content, creator or affiliate coordination, and promotional content.\n\nThe exact service depends on market availability, account eligibility, product requirements, and the agreed scope.',
  },
  {
    question: 'Do You Manage TikTok Ads?',
    answer:
      'Yes, but TikTok Ads Management is separate from standard organic TikTok management.\n\nWe can coordinate organic content with paid campaigns when both services are included.\n\nAd spend is separate from management fees.',
  },
  {
    question: 'Can You Manage TikTok for Businesses Outside Bangladesh?',
    answer:
      'Yes.\n\nFramecipher supports businesses targeting international markets, including the US, UK, Australia, Canada, and UAE.\n\nContent strategy is adapted to the target market, audience, language, cultural context, and business objectives.',
  },
  {
    question: 'How Long Does TikTok Management Take to Start?',
    answer:
      'After onboarding and receiving the required account and brand information, we begin with an account and business review.\n\nThe first strategy and content cycle is then prepared according to the agreed scope and approval process.',
  },
  {
    question: 'What Do You Need From Me Before TikTok Management Starts?',
    answer:
      'Depending on the project, we may request TikTok account access, brand guidelines, product or service information, existing content assets, target audience information, website or landing-page information, previous performance data, brand references, and a content approval contact.\n\nWe keep the onboarding requirements relevant to the actual scope.',
  },
  {
    question: 'How Does the TikTok Content Approval Process Work?',
    answer:
      'We define the approval process during onboarding.\n\nDepending on the selected workflow, content may be reviewed before publishing or managed through an agreed pre-approved content framework.\n\nThe service scope defines revision rounds, approval deadlines, and publishing responsibilities.',
  },
  {
    question: 'Do You Guarantee TikTok Followers or Viral Videos?',
    answer:
      'No.\n\nWe do not guarantee follower numbers, views, viral videos, or specific TikTok visibility.\n\nWe focus on strategy, content quality, consistent publishing, community management, measurement, testing, and continuous optimization.',
  },
]

export default function FAQ({ service }) {
  const faqs = resolveFaqs(service, fallbackFaqs)
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/\n\n/g, '<br/><br/>'),
      },
    })),
  }

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="mx-auto max-w-5xl">
        {/* Section Intro */}
        <div className="mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Knowledge Base · FAQs
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Frequently Asked Questions About{' '}
            <span className="italic text-frame-accent">TikTok Management.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Straight answers about scope, pricing, publishing frequency, production, trends, LIVE, Shop,
            ads, and what TikTok management can realistically deliver.
          </p>
        </div>

        {/* 19 Accordion Items */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen
                    ? 'border-purple-500/40 bg-[#15121c]'
                    : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3.5 sm:gap-4">
                    <span className="font-mono text-xs font-semibold text-frame-accent shrink-0">
                      Q{String(index + 1).padStart(2, '0')} · </span>
                    <span className="font-heading text-base sm:text-lg font-medium uppercase tracking-tight text-white">
                      {faq.question}
                    </span>
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-300 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-frame-accent border-purple-500/40' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.06] p-5 sm:p-6 pt-3 sm:pt-4">
                    {faq.answer.split('\n\n').map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className={`text-xs sm:text-sm font-normal leading-relaxed text-zinc-300 ${
                          pIdx > 0 ? 'mt-3' : ''
                        }`}
                      >
                        <AutoLinks currentPath="/services/social-media-management/tiktok-management" allowed={["/services/paid-advertising"]}>
                          {paragraph}
                        </AutoLinks>
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Additional Questions Strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Have a Specific Question About Your TikTok Channel?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Speak directly with a short-form video strategist to review your content workflow and production goals.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Request Custom Strategy Call
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
