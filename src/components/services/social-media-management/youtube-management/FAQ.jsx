'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { resolveFaqs } from '../../../../lib/seo/faq'
import { AutoLinks } from '../../../seo/AutoLinks'

const fallbackFaqs = [
  {
    question: 'What Does a YouTube Management Service Include?',
    answer:
      'YouTube management can include channel strategy, content planning, scripting, video production, editing, YouTube SEO, thumbnails, publishing, Shorts, community management, analytics, and ongoing optimization.\n\nThe exact scope depends on the selected package.',
  },
  {
    question: 'How Much Does YouTube Management Cost in Bangladesh?',
    answer:
      'Framecipher\'s YouTube management plans start at ৳30,000 per month for the Standard package.\n\nGrowth management is ৳50,000 per month, while larger or more specialized channels can receive a custom proposal.',
  },
  {
    question: 'Do You Create YouTube Videos?',
    answer:
      'Yes.\n\nVideo production and editing can be included within the agreed service scope.\n\nThe exact production requirements depend on the package and the type of content you need.',
  },
  {
    question: 'Do You Write YouTube Scripts?',
    answer:
      'Yes.\n\nScript development can be included for suitable content formats.\n\nWe structure scripts around the topic, audience, video objective, and intended viewer experience.',
  },
  {
    question: 'Do You Design YouTube Thumbnails?',
    answer:
      'Yes.\n\nThumbnail design is included in our management packages according to the agreed monthly content volume.',
  },
  {
    question: 'Do You Provide YouTube SEO?',
    answer:
      'Yes.\n\nYouTube SEO can include topic research, titles, descriptions, relevant metadata, content optimization, playlists, and other discovery-focused improvements.',
  },
  {
    question: 'Do You Manage YouTube Shorts?',
    answer:
      'Yes.\n\nShorts can be included through repurposing, dedicated Shorts production, or a custom content strategy depending on the package.',
  },
  {
    question: 'Do You Optimize Existing YouTube Videos?',
    answer:
      'Yes.\n\nWe can audit existing videos and identify opportunities involving titles, thumbnails, descriptions, organization, content connections, and other relevant optimization areas.',
  },
  {
    question: 'Can You Manage an Existing YouTube Channel?',
    answer:
      'Yes.\n\nWe can work with existing channels as well as new channels.\n\nExisting channels typically begin with an audit so we understand the current content, audience, performance, and opportunities.',
  },
  {
    question: 'Do You Manage YouTube Comments?',
    answer:
      'Community management can be included depending on the selected package.\n\nThe scope can cover comment monitoring, responses, audience questions, and community feedback.',
  },
  {
    question: 'Do You Manage YouTube Playlists?',
    answer:
      'Yes.\n\nPlaylist planning and organization can be included as part of channel management.',
  },
  {
    question: 'Do You Manage YouTube Ads?',
    answer:
      'YouTube Ads are a separate paid advertising service from organic YouTube management.\n\nThey can be coordinated with your organic strategy when paid media management is included in the project scope.',
  },
  {
    question: 'Can You Manage YouTube Channels Outside Bangladesh?',
    answer:
      'Yes.\n\nFramecipher works with businesses targeting international markets, including the US, UK, Australia, Canada, and UAE.',
  },
  {
    question: 'Do You Need Me to Provide Video Footage?',
    answer:
      'It depends on the production scope.\n\nYou may provide existing footage, recordings, product materials, screen recordings, or other assets.\n\nFull production requirements can also be scoped separately.',
  },
  {
    question: 'Can You Film Videos for My Business?',
    answer:
      'Filming requirements can be discussed as part of a custom production scope.\n\nLocation, travel, equipment, talent, studio requirements, and production complexity can affect the final quotation.',
  },
  {
    question: 'How Long Does YouTube Management Take to Start?',
    answer:
      'Initial setup and the first content batch can typically take around 2–3 weeks, depending on strategy, content requirements, production, and client approvals.',
  },
  {
    question: 'Do You Guarantee YouTube Views or Subscribers?',
    answer:
      'No.\n\nWe do not guarantee specific views, subscribers, rankings, viral results, leads, or revenue.\n\nWe control the strategy, production, optimization, publishing, and reporting work. Audience response and platform distribution cannot be guaranteed.',
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
            <span className="italic text-frame-accent">YouTube Management.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Straight answers about scope, pricing, video production, YouTube SEO, thumbnails, and what channel management can realistically deliver.
          </p>
        </div>

        {/* 17 Accordion Items */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? 'border-purple-500/40 bg-[#15121C]'
                    : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors"
                >
                  <span className="flex items-center gap-3.5 pr-4">
                    <span className="font-mono text-xs text-frame-accent font-semibold shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-heading text-base sm:text-lg font-medium uppercase text-white tracking-tight">
                      {faq.question}
                    </span>
                  </span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-frame-accent border-purple-500/30' : ''
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
                        <AutoLinks currentPath="/services/social-media-management/youtube-management" allowed={["/services/paid-advertising", "/services/content-creation"]}>
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
              Have a Specific Question About Your Channel?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Speak directly with our video strategy team during a consultation to review your channel and goals.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Get a Free Consultation
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
