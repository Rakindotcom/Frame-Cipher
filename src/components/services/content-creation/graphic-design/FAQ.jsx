'use client'

import { useState } from 'react'
import { SectionIntro } from '../../../Kinetic'

const fallbackFaqs = [
  {
    question: "What is included in your graphic design service?",
    answer: "Our graphic design service covers presentations, pitch decks, company profiles, brochures, catalogues, corporate publications, print collateral, packaging, digital advertising creatives, sales materials, internal communication assets, infographics, and supporting visual assets."
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer: "Yes. You can provide your existing brand guidelines, logo files, fonts, colors, image guidelines, templates, and other approved brand assets. We use these materials as the foundation for the new design."
  },
  {
    question: "Can you design a company profile from our existing content?",
    answer: "Yes. We can structure approved company information into a professional company profile and develop the visual layout around the required sections. Substantial copywriting or content development can be handled separately when required."
  },
  {
    question: "Can you redesign an existing pitch deck?",
    answer: "Yes. We can redesign an existing presentation while keeping the approved information, or develop a new visual system around the supplied content."
  },
  {
    question: "Do you design investor pitch decks?",
    answer: "Yes. We can design investor and startup pitch decks using approved information such as product details, market information, business model, competitive information, financial data, team information, and other relevant sections. We do not create or verify business claims on behalf of the client."
  },
  {
    question: "Can you design brochures and catalogues for print?",
    answer: "Yes. We design multi-page brochures, product catalogues, service catalogues, corporate publications, and other print documents. Final artwork can be prepared according to the printer's supplied specifications."
  },
  {
    question: "Can you design packaging from a dieline?",
    answer: "Yes. We can build packaging artwork around supplied dimensions and dielines. Multiple product variants can also be developed within a consistent visual system."
  },
  {
    question: "Do you provide print-ready files?",
    answer: "Yes. When print production is included in the project scope, we prepare final artwork according to the agreed production specifications."
  },
  {
    question: "Do you provide editable source files?",
    answer: "Editable source files can be included when agreed in the project scope. The exact working format depends on the type of design and the production workflow."
  },
  {
    question: "Can you provide both print and digital versions?",
    answer: "Yes. We can prepare separate print-ready and digital versions when both are required. Each version is adapted to its intended technical environment."
  },
  {
    question: "Can you create infographics and data visualizations?",
    answer: "Yes. We design infographics, process diagrams, comparison graphics, timelines, data visualizations, statistics graphics, and other information-focused visual assets."
  },
  {
    question: "Do you offer ongoing graphic design support?",
    answer: "Yes. Businesses with recurring design requirements can use a monthly design retainer based on an agreed scope and workflow."
  },
  {
    question: "How many revisions are included?",
    answer: "Revision rounds depend on the selected project scope. The number of included revisions is confirmed before production begins."
  },
  {
    question: "Can you handle urgent graphic design projects?",
    answer: "Rush projects may be possible depending on our production schedule, project complexity, and the availability of complete content and brand assets. Urgent requirements should be discussed before the project is confirmed."
  },
  {
    question: "How much does graphic design cost in Bangladesh?",
    answer: "Our graphic design projects currently start from around ৳5,000 for a single design piece. Pitch decks, company profiles, print collateral, packaging, catalogues, and ongoing design support are priced according to their specific scope."
  }
]

export default function FAQ({ service }) {
  const faqs = service?.faqs?.length ? service.faqs : fallbackFaqs
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Clarity"
          title="Frequently Asked Questions"
        >
          Comprehensive answers regarding our graphic design capabilities, deliverables, production guidelines, and commercial engagement terms.
        </SectionIntro>

        {/* SEARCH BOX */}
        <div className="mt-8 mb-8">
          <input
            type="text"
            placeholder="Search FAQs (e.g. pitch deck, dieline, print-ready, pricing, source files)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border-2 border-frame-border bg-frame-bg p-4 text-xs sm:text-sm font-medium text-frame-fg placeholder:text-frame-muted-fg focus:border-frame-accent focus:outline-none"
          />
        </div>

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <details
                key={index}
                className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg marker:content-none">
                  <span>{faq.question}</span>
                  <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45 font-mono text-lg">
                    +
                  </span>
                </summary>
                <div className="border-t-2 border-frame-border p-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {faq.answer}
                </div>
              </details>
            ))
          ) : (
            <div className="border-2 border-dashed border-frame-border p-8 text-center text-sm font-medium text-frame-muted-fg">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another search term or contact us directly.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
