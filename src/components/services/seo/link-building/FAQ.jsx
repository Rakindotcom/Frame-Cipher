'use client'

import React, { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const allLinkBuildingFaqs = [
  {
    question: 'What is off-page SEO?',
    answer:
      'Off-page SEO refers to activities performed outside your website that can support its visibility, authority, reputation, and discovery. Link building is one major part of off-page SEO, but the broader work can also include digital PR, relevant citations, brand mentions, and other authority-building activities.',
  },
  {
    question: 'What is link building?',
    answer:
      'Link building is the process of earning or acquiring relevant external links that point from other websites to your website. The quality and context of those links matter far more than simply increasing the total number of backlinks.',
  },
  {
    question: 'Do you buy backlinks?',
    answer:
      'No. We do not use bulk backlink packages, link networks (PBNs), automated link creation, or mass placements designed primarily to manipulate rankings. Google’s spam policies specifically identify buying or selling links for ranking purposes as link spam.',
  },
  {
    question: 'How do you decide whether a website is worth targeting?',
    answer:
      'We consider topical relevance, editorial quality, audience fit, organic visibility where available, geographic relevance, outbound-link behavior, content standards, and potential placement context. A high third-party authority score alone is not enough.',
  },
  {
    question: 'Do you use guest posting?',
    answer:
      'Yes, where guest content genuinely fits the publication and audience. We develop useful content and pursue editorial opportunities instead of creating thin articles solely to insert backlinks.',
  },
  {
    question: 'How many backlinks do I need each month?',
    answer:
      'There is no reliable universal number. The appropriate campaign scope depends on your industry, competitors, current backlink profile, target pages, publisher opportunities, content assets, and market. We focus on relevant opportunities rather than setting an arbitrary backlink quota.',
  },
  {
    question: 'Can you build links to service and product pages?',
    answer:
      'Yes. Where the context supports it, backlinks can point to service pages, product or category pages, research assets, guides, and other valuable resources. We decide the destination based on relevance instead of sending every link to the homepage.',
  },
  {
    question: 'Do you build local backlinks in Bangladesh?',
    answer:
      'Yes. Depending on the business, this can include relevant Bangladeshi directories, industry organizations, local publications, regional websites, and other appropriate sources. The exact opportunity set depends on the business and location.',
  },
  {
    question: 'How do you measure link-building results?',
    answer:
      'We track earned links, referring domains, target pages, placement coverage, referral traffic where available, and organic search metrics such as impressions and clicks. Where conversion tracking exists, we also review leads, enquiries, sales, or other business outcomes.',
  },
  {
    question: 'What happens if my website already has spammy backlinks?',
    answer:
      'We review the existing backlink profile and separate ordinary low-quality or irrelevant links from links that may warrant further action. We do not automatically classify every unwanted link as harmful. Where a genuine artificial-link issue exists, we assist with removal outreach and provide disavow guidance where warranted in line with Google recommendations.',
  },
  {
    question: 'How long does link building take?',
    answer:
      'Link acquisition usually takes place over time because publisher research, outreach, editorial review, content creation, and publication happen on different schedules. The right campaign length depends on the industry, market, content requirements, competition, and available opportunities.',
  },
  {
    question: 'Do you guarantee Google rankings?',
    answer:
      'No. Search rankings depend on many factors beyond backlinks, so no responsible agency can guarantee a specific Google position from link building alone. We focus on building relevant authority and reporting the work and performance transparently.',
  },
  {
    question: 'Do you guarantee placement on specific high-authority sites?',
    answer:
      'No. Publication decisions belong to the sites we pitch, not to us. We pursue genuinely relevant, high-quality targets, but final acceptance is always the publisher’s call. What we guarantee is genuine, manual outreach to relevant sites rather than manufactured placements.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Section Header - Strictly Centered per Design System */}
        <div className="space-y-4 text-center mx-auto max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <HelpCircle className="h-3.5 w-3.5 text-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Direct Answers // {allLinkBuildingFaqs.length} Essential Questions
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Common questions about off-page SEO, link building methods, timelines, pricing, and campaign expectations.
          </p>
        </div>

        {/* Accordion List with Hairline Architectural Borders */}
        <div className="mt-12 space-y-3">
          {allLinkBuildingFaqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors"
                >
                  <span className="font-heading text-base sm:text-lg font-medium uppercase tracking-tight text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-zinc-300 transition-colors ${
                      isOpen ? 'border-frame-accent/40 bg-frame-accent/15 text-frame-accent' : ''
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 border-t border-white/[0.06] text-sm sm:text-base text-zinc-300 leading-relaxed mt-2 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
