'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { resolveFaqs } from '../../../../lib/seo/faq'
import { AutoLinks } from '../../../seo/AutoLinks'

const fallbackFaqs = [
  {
    question: 'What Does an Instagram Management Service Include?',
    answer:
      'An Instagram Management Service can include strategy, audience and competitor research, profile optimization, Instagram SEO, content planning, Reels, Feed posts, Carousels, Stories, publishing, community management, DMs, reporting, and ongoing optimization.\n\nThe exact scope depends on the selected management plan.',
  },
  {
    question: 'How Much Does Instagram Management Cost in Bangladesh?',
    answer:
      'Framecipher Instagram management plans start from ৳15,000 per month.\n\nHigher plans can include more content, Reels production, community management, reporting, and broader strategic support. Final pricing depends on your required scope, content volume, production requirements, and management coverage.',
  },
  {
    question: 'Do You Create Instagram Reels?',
    answer:
      'Yes. Depending on the selected package, Reels can include concept development, hooks, scripts, editing, captions, on-screen text, covers, and publishing preparation.',
  },
  {
    question: 'Do You Create Instagram Posts and Carousels?',
    answer:
      'Yes. We can create Feed posts, educational Carousels, product content, promotional graphics, social-proof content, and other branded content based on your strategy.',
  },
  {
    question: 'Do You Manage Instagram Stories?',
    answer:
      'Yes. Stories can cover product updates, promotions, FAQs, polls, questions, behind-the-scenes content, customer feedback, announcements, and other interactive formats.',
  },
  {
    question: 'Do You Manage Instagram DMs and Comments?',
    answer:
      'Yes. Community management can include comments, DMs, Story replies, basic customer questions, and inquiry escalation according to your selected plan.\n\nFor complex customer-service or sales situations, we follow an agreed escalation process.',
  },
  {
    question: 'Do You Optimize Instagram Profiles?',
    answer:
      'Yes. Profile optimization can include your username, profile name, bio, category, contact information, link strategy, highlights, pinned posts, and calls to action.',
  },
  {
    question: 'Do You Provide Instagram SEO?',
    answer:
      'Yes. We consider Instagram search and discoverability when optimizing profile information, content topics, captions, and other relevant account elements.\n\nThe goal is to make your account and content clearer and more relevant to the searches and discovery behavior of your target audience.',
  },
  {
    question: 'Do I Need to Provide Photos or Videos?',
    answer:
      'It depends on the package and production requirements. If your business can provide product images, footage, brand assets, or raw video, we can incorporate them into the content workflow.\n\nFor packages that include broader production support, we can also discuss available content-production options.',
  },
  {
    question: 'Can You Manage an Existing Instagram Account?',
    answer:
      'Yes. We can manage an existing account after reviewing its current profile, content, audience, performance, access structure, and business goals.\n\nThe process usually begins with an account audit and business discovery.',
  },
  {
    question: 'Can You Manage Instagram for Ecommerce Businesses?',
    answer:
      'Yes. Ecommerce Instagram management can include product-focused Reels, Carousels, Stories, product education, launches, UGC, social proof, customer inquiries, and other product-discovery content.\n\nWhere eligible and available, relevant Instagram commerce features can also be incorporated into the strategy.',
  },
  {
    question: 'Do You Manage Instagram Ads?',
    answer:
      'Paid Instagram advertising is a separate service from organic Instagram management.\n\nIf you need paid campaigns, creative testing, audience targeting, conversion tracking, or Meta Ads management, we can scope those requirements separately.',
  },
  {
    question: 'Do You Manage Instagram Accounts Outside Bangladesh?',
    answer:
      'Yes. Framecipher supports businesses in Bangladesh and international markets.\n\nInternational campaigns are planned around the target market, audience, language, cultural context, content requirements, and business objectives.',
  },
  {
    question: 'How Quickly Can Instagram Management Start?',
    answer:
      'The timeline depends on account access, discovery, content requirements, production needs, and approval speed.\n\nAfter onboarding, we begin with account and business discovery, followed by strategy, content planning, production, approval, and publishing.',
  },
  {
    question: 'What Is the Difference Between Instagram Management and Instagram Marketing?',
    answer:
      'Instagram management focuses on the ongoing operation of your Instagram presence, including strategy, content, publishing, community management, profile optimization, and reporting.\n\nInstagram marketing can include those activities plus broader promotional campaigns, creator partnerships, paid advertising, launches, and other growth activities. Framecipher can scope organic Instagram management separately from paid advertising and broader campaign requirements.',
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
            <span className="italic text-frame-accent">Instagram Management.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Straight answers about scope, pricing, Reels production, community management, and what an organic management engagement can realistically deliver.
          </p>
        </div>

        {/* 15 Accordion Items */}
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
                    <h3 className="font-heading text-base sm:text-lg font-medium uppercase tracking-tight text-white">
                      {faq.question}
                    </h3>
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
                        <AutoLinks currentPath="/services/social-media-management/instagram" allowed={["/services/paid-advertising"]}>
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
              Have a Specific Question About Your Account?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Speak directly with an Instagram strategist to review your account and content scope.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Request Custom Strategy Call
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
