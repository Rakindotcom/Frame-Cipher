'use client'

import { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

const allBusinessFaqs = [
  {
    question: "What is included in a business website development project?",
    answer: "A typical project can include strategy and planning, sitemap development, UI/UX design, responsive development, content integration, lead capture forms, analytics, technical SEO foundations, testing, and launch support. Exact deliverables depend on the agreed scope."
  },
  {
    question: "What makes this different from a regular website design service?",
    answer: "A regular design service typically delivers a visually finished site. Business website development, as we scope it, includes site architecture built around your sales funnel and integration with your CRM. The site is built to function as part of your sales process."
  },
  {
    question: "How long does a business website build take?",
    answer: "Typically 4 to 8 weeks, depending on the complexity of the tech stack, custom features, and CRM integrations required."
  },
  {
    question: "Can I update the website myself after it is launched?",
    answer: "Yes, where the selected platform supports client-managed content. We can provide access and agreed handover guidance so your team can manage supported content without depending on a developer for every update."
  },
  {
    question: "Will my business website be SEO-ready?",
    answer: "We build important technical and structural SEO foundations into the development process, including clean URLs, page hierarchy, metadata, mobile usability, sitemap considerations, and other agreed technical elements. Ongoing SEO is a separate service unless included in the project scope."
  },
  {
    question: "Can you integrate our existing CRM?",
    answer: "We can integrate supported CRM and business tools where the platform, software, and available API or integration method allow it. We confirm compatibility before development begins."
  },
  {
    question: "Can you add WhatsApp, call, booking, or live chat features?",
    answer: "Yes, relevant communication and conversion tools can be integrated based on your business requirements, platform, and selected third-party services."
  },
  {
    question: "Do you provide website content?",
    answer: "Content planning and content integration can be included within the project scope. Full copywriting and ongoing content creation can also be discussed separately based on your requirements."
  },
  {
    question: "Who owns the website after development?",
    answer: "Ownership, access, source files, and handover terms are defined in the project agreement. We provide the agreed deliverables and access described in that agreement."
  },
  {
    question: "Can you redesign our existing website without damaging SEO?",
    answer: "Yes. For redesign projects, we review existing content, URLs, rankings, backlinks, and other relevant SEO assets before restructuring the website. Redirects and content preservation can be included where required."
  },
  {
    question: "What happens after the website launches?",
    answer: "We provide agreed handover guidance and can continue with maintenance, technical updates, performance checks, security work, and future improvements under a separate support scope."
  },
  {
    question: "Do you work with businesses outside Bangladesh?",
    answer: "Yes, alongside Bangladeshi businesses, we work with clients internationally, including the US, UK, Australia, Canada, and UAE."
  }
]

export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null)

  // Combine all comprehensive FAQs with any incoming service FAQs (ensuring zero question loss)
  const seen = new Set()
  const faqList = []

  for (const item of allBusinessFaqs) {
    seen.add(item.question.toLowerCase().trim())
    faqList.push(item)
  }

  if (service?.faqs && Array.isArray(service.faqs)) {
    for (const item of service.faqs) {
      const q = (item.question || item.q || '').toLowerCase().trim()
      if (q && !seen.has(q)) {
        seen.add(q)
        faqList.push({
          question: item.question || item.q,
          answer: item.answer || item.a,
        })
      }
    }
  }

  if (!faqList.length) return null

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
                "name": f.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.answer
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
            Common questions about our delivery process, technical standards, and engagement models.
          </p>
        </div>

        {/* Centered Accordion Column */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index
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
                  <h3 className="font-heading text-base sm:text-lg font-medium uppercase tracking-tight text-white">
                    {faq.question}
                  </h3>
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
                    <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                      {faq.answer}
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
