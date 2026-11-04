'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is included in an ecommerce website development project?",
    answer: "A typical project can include store strategy, catalog architecture, product and UI/UX design, platform development, payment integration, inventory and order setup, technical SEO foundations, testing, launch support, and agreed third-party integrations."
  },
  {
    question: "Do you support bKash and Nagad?",
    answer: "Yes, supported local payment methods such as bKash and Nagad can be integrated for suitable Bangladesh-based ecommerce projects. Final compatibility depends on the selected platform and payment provider."
  },
  {
    question: "Can you integrate courier services?",
    answer: "Courier integration can be included where the selected courier provides a compatible integration method or API. We confirm the available workflow before development begins."
  },
  {
    question: "Can you integrate SSLCommerz and international payment gateways?",
    answer: "Yes, where supported by your ecommerce platform and target market. We recommend payment methods based on your business location, customer market, currency, and checkout requirements."
  },
  {
    question: "Which ecommerce platform is best for my business?",
    answer: "It depends on your catalog, budget, content needs, integrations, internal management requirements, and future plans. Shopify, WooCommerce, Magento, and custom development each suit different types of ecommerce businesses."
  },
  {
    question: "Can you migrate my existing ecommerce store?",
    answer: "Yes, store migration can be scoped for supported platforms. This may include products, categories, customers, orders, content, URLs, redirects, and other relevant data depending on the source and destination platforms."
  },
  {
    question: "Can I manage products and orders myself?",
    answer: "Yes, supported ecommerce platforms provide admin tools for managing products, inventory, orders, customers, and store content. We can provide agreed handover guidance after launch."
  },
  {
    question: "Can you build a B2B ecommerce website?",
    answer: "Yes. B2B projects may require features such as account-based pricing, bulk ordering, quote requests, approval workflows, customer-specific catalogs, or custom purchasing processes."
  },
  {
    question: "Can you build a multi-vendor marketplace?",
    answer: "Multi-vendor functionality can be developed when the project requires seller accounts, vendor management, commissions, product approvals, and marketplace workflows. These requirements are scoped separately from a standard online store."
  },
  {
    question: "Will my ecommerce website be SEO-ready?",
    answer: "We build core technical and structural SEO foundations into the development process, including product architecture, metadata, schema, URLs, mobile usability, sitemap considerations, and other agreed elements. Ongoing SEO is a separate service unless included in the project scope."
  },
  {
    question: "Can you connect my store with Google Merchant Center?",
    answer: "Where supported by the ecommerce platform and product catalog, we can prepare product feeds and related technical setup for Google Merchant Center as part of the project scope."
  },
  {
    question: "Who owns the ecommerce website after delivery?",
    answer: "Ownership, administrator access, source files, platform access, and handover terms are defined in the project agreement. We provide the agreed deliverables and access described in that agreement."
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
          <p className="text-base text-zinc-400 sm:text-lg">
            Common questions about ecommerce platforms, payment gateways, courier integrations, and project delivery.
          </p>
        </div>

        {/* Centered Accordion Column */}
        <div className="mx-auto max-w-4xl space-y-3">
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
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-medium uppercase tracking-tight text-white">
                    {q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-400 transition-transform duration-200">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-frame-accent" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-white/[0.06] px-5 pb-6 pt-4 sm:px-6 sm:pb-8">
                    <p className="text-sm leading-relaxed text-zinc-300 sm:text-base whitespace-pre-line">
                      {a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Direct Specialist Assistance Banner */}
        <div className="mx-auto mt-12 max-w-4xl rounded-xl border border-white/[0.08] bg-[#121214] p-6 text-center">
          <p className="text-sm font-medium text-zinc-400 sm:text-base">
            Have a question about gateway fees, inventory sync, or platform choice?{' '}
            <Link href="/contact" className="font-bold text-frame-accent underline hover:text-white transition-colors">
              Talk directly with our ecommerce specialists &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
