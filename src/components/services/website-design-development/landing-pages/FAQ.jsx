'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How is a landing page different from a regular website page?",
    answer: "A landing page is built around one single goal and has no navigation menu pulling visitors away from that action. A regular website page is part of a broader site structure meant for browsing multiple topics or products."
  },
  {
    question: "Can you connect the landing page to the ad platform we're using?",
    answer: "In most cases, yes, conversion tracking and pixel integration for common ad platforms is part of the build. Specific compatibility depends on the platform, so we confirm this during the initial consultation."
  },
  {
    question: "How fast can a landing page actually be built?",
    answer: "A single-offer page typically takes 3 to 5 days once copy and brand assets are ready. More complex pages with multiple integrations or A/B variants take up to 2 weeks."
  },
  {
    question: "Do you write the copy for the landing page too?",
    answer: "Landing page copywriting can be scoped in separately; this service covers strategy, design, and development. Let us know during consultation if you need copywriting included."
  },
  {
    question: "Do you build landing pages for clients outside Bangladesh?",
    answer: "Yes, we build landing pages for businesses across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE."
  },
  {
    question: "Can you build landing pages for Google Ads and Meta Ads?",
    answer: "Yes. We can structure landing pages around the traffic source, campaign message, audience, and conversion goal. Tracking setup can also be included where technically supported."
  },
  {
    question: "Can you integrate Meta Pixel, GA4, or Google Ads tracking?",
    answer: "Yes, relevant analytics, pixels, and conversion events can be implemented based on your campaign platforms and project scope."
  },
  {
    question: "Can you create A/B test variants?",
    answer: "Yes, A/B test-ready structures or additional variants can be included when the campaign requires experimentation. The exact testing setup depends on the tools and scope."
  },
  {
    question: "Do you provide landing page copywriting?",
    answer: "Landing page copywriting can be included as part of the project scope. We can also work with your existing copy and structure it for the landing-page experience."
  },
  {
    question: "Can you connect the landing page to our CRM?",
    answer: "Yes, supported CRM and marketing platforms can be connected to lead forms when the required integration method or API is available."
  },
  {
    question: "Can you build landing pages for international campaigns?",
    answer: "Yes. We build landing pages for businesses targeting Bangladesh as well as international markets, adapting messaging, traffic-source requirements, language, and campaign objectives as needed."
  }
]

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)

  const localQuestions = new Set(faqs.map(f => f.question.trim().toLowerCase()))
  const incoming = (service?.faqs && Array.isArray(service.faqs)) ? service.faqs : []
  const faqList = incoming.length >= faqs.length ? incoming : [
    ...faqs,
    ...incoming.filter(f => !localQuestions.has((f.question || f.q || '').trim().toLowerCase()))
  ]
  if (!faqList?.length) return null

  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Schema.org FAQPage JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqList.map((f) => ({
                "@type": "Question",
                "name": f.question || f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.answer || f.a
                }
              }))
            }).replaceAll('<', '\\u003c')
          }}
        />

        {/* Centered Header Block */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Common questions about landing page architecture, turnaround times, ad tracking, and CRM integrations.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index
            const q = faq.question || faq.q
            const a = faq.answer || faq.a

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 hover:border-white/[0.14]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left font-heading text-lg font-medium uppercase tracking-tight text-white transition-colors duration-200 hover:text-frame-accent focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-[#09090B] text-zinc-400">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-frame-accent" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-zinc-400" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.08] px-6 py-5 text-sm sm:text-base leading-relaxed text-zinc-300 whitespace-pre-line">
                    {a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Consultation Assistance */}
        <div className="mx-auto mt-12 max-w-4xl rounded-xl border border-white/[0.08] bg-[#121214] p-6 text-center">
          <p className="text-sm font-normal text-zinc-300">
            Have a question about your campaign timeline or traffic tracking?{' '}
            <Link
              href="/contact"
              className="font-mono text-xs uppercase tracking-wider text-frame-accent underline transition-colors duration-200 hover:text-white ml-1"
            >
              Talk directly with our campaign engineering team &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
