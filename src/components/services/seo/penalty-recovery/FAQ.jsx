'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    q: 'How do I know if I have a Google manual action?',
    a: 'Open the Manual Actions report in Google Search Console. If Google has issued a manual action, the report will show the issue and affected areas. Manual actions are different from ordinary ranking declines and update-related traffic changes.',
  },
  {
    q: 'Is a Google core update traffic drop the same as a penalty?',
    a: 'No. A drop following a core update does not automatically mean Google issued a manual action or “penalty.” Core updates change Google’s ranking systems broadly, so recovery requires analyzing affected pages, queries, content quality, technical conditions, and competitive search results.',
  },
  {
    q: 'What if my traffic dropped but there is no manual action?',
    a: 'That is common enough that diagnosis matters. The decline could relate to a Google update, technical change, migration, indexing issue, seasonal demand, security problem, search-demand shift, or stronger competitors. Google’s traffic-drop troubleshooting guidance specifically recommends checking several of these possibilities.',
  },
  {
    q: 'Can you recover a manual action?',
    a: 'We can diagnose the manual action, implement the relevant remediation, document the changes, and prepare the reconsideration request. Google makes the final decision after reviewing the request and the site’s current condition.',
  },
  {
    q: 'Do I need to disavow all bad backlinks?',
    a: 'No. Google says most sites do not need the disavow tool. It recommends using it cautiously in specific situations, particularly where there is a considerable number of spammy or artificial links associated with a manual action or likely manual action and removal is not practical.',
  },
  {
    q: 'Can you recover an unnatural-links manual action?',
    a: 'Yes, we can investigate the link profile, identify relevant artificial or manipulative links, support removal efforts, prepare documentation, and use disavow only where appropriate. Google specifically recommends trying to remove violating links before relying on disavow.',
  },
  {
    q: 'Can you recover a thin-content or spam-related manual action?',
    a: 'We can investigate the affected content, identify the specific violation, and implement the necessary remediation. The exact work depends on what Google identified and how broadly the issue affects the site.',
  },
  {
    q: 'What happens after a reconsideration request is submitted?',
    a: 'Google reviews the request and the current condition of the site. Reconsideration reviews can take several days or weeks, and Google recommends waiting for the current review to finish rather than repeatedly submitting new requests.',
  },
  {
    q: 'Can a hacked website lose Google visibility?',
    a: 'Yes. Hacked sites can contain malware, phishing, spam, or other harmful content that creates security and search problems. Google has a separate Security Issues report for these situations, and security recovery follows a different review process from standard manual actions.',
  },
  {
    q: 'How long does Google penalty recovery take?',
    a: 'There is no single recovery timeframe. The preparation period depends on the cause and scope of the problem. Manual actions also require Google’s own review after remediation, while algorithmic recovery depends on broader improvements and subsequent reassessment.',
  },
  {
    q: 'Can you guarantee my rankings will return?',
    a: 'No. We can guarantee a documented diagnostic and remediation process within the agreed scope, but Google controls its ranking systems and manual-action decisions. We therefore do not promise a specific ranking position, traffic level, or recovery date.',
  },
  {
    q: 'Do you support businesses outside Bangladesh?',
    a: 'Yes. Framecipher provides recovery support for businesses and publishers in Bangladesh as well as international markets, including the US, UK, Australia, Canada, and UAE.',
  },
]

export default function FAQ({ service }) {
  const faqs = resolveFaqs(service, fallbackFaqs)
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  // Schema.org FAQPage Microdata
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }

  return (
    <section id="faq" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24 scroll-mt-20">
      {/* Schema.org FAQPage Microdata Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl">
        {/* Canonical Center-Aligned Header (§5.3) */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Google Penalty Recovery FAQ
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Clear answers about Google manual actions, algorithmic drops, core updates, and reconsideration reviews.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors hover:text-white"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-base sm:text-lg font-medium text-white pr-4">
                    {faq.q}
                  </h3>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-[#18181B] text-zinc-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 border-t border-white/[0.04] mt-2">
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-3">
                      {faq.a}
                    </p>
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
