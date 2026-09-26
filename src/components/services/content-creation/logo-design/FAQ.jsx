'use client'

import { useState } from 'react'
import { SectionIntro } from '../../../Kinetic'

const fallbackFaqs = [
  {
    question: "What is included in your Logo Design Service?",
    answer: "Depending on the selected scope, the service includes discovery, competitive review, multiple concept directions, refinement, primary and secondary logo versions, color variations, vector files (AI, SVG, EPS, PDF), digital exports (PNG, JPG), favicon/app icon sets, and basic usage guidance."
  },
  {
    question: "How many logo concepts do I receive?",
    answer: "The number of initial concepts depends on the selected package. Our standard new-logo scope is based on three distinct creative directions rather than multiple minor variations of the same idea."
  },
  {
    question: "Can you redesign our existing logo?",
    answer: "Yes. We can refresh or redesign an existing logo depending on what needs to change and how much existing recognition should be preserved."
  },
  {
    question: "What is the difference between a logo refresh and redesign?",
    answer: "A refresh improves an existing mark while preserving more of its recognizable identity (refining typography, proportions, or colors). A redesign makes more substantial changes when the existing logo no longer fits the business or its current positioning."
  },
  {
    question: "What logo types do you design?",
    answer: "We develop wordmarks, lettermarks, symbol marks, combination marks, monograms, emblem-style logos, and responsive or icon versions depending on the project."
  },
  {
    question: "Will I receive vector source files?",
    answer: "Yes, vector source files are included according to the agreed project scope. Formats include AI, SVG, EPS, and high-resolution PDF for infinite scaling."
  },
  {
    question: "Do you provide black-and-white or reversed logo versions?",
    answer: "Yes. We prepare monochrome and reversed white versions so the logo works seamlessly across dark backgrounds, single-color prints, embroidery, and stamps."
  },
  {
    question: "Can you create a favicon or app icon?",
    answer: "Yes. We prepare an appropriate icon or simplified logo version for favicons, apps, social profiles, and other small digital applications."
  },
  {
    question: "Can you create a logo that works in both Bangla and English?",
    answer: "Yes. Bilingual or Bangla-English logo requirements are considered during the typography and composition stage so both language versions maintain visual harmony."
  },
  {
    question: "Do you provide brand guidelines with the logo?",
    answer: "Basic logo usage guidance is included in our standard packages. More extensive brand guidelines and broader identity systems can be developed through our extended package or separate branding service."
  },
  {
    question: "Do you provide copyright or ownership transfer?",
    answer: "Ownership and usage rights are transferred to you upon final payment according to the project agreement. Any specific copyright transfer requirements should be confirmed before the project begins."
  },
  {
    question: "Do you check whether a logo is available for trademark registration?",
    answer: "Logo design does not include legal trademark clearance. We conduct competitive visual reviews to ensure originality, but recommend completing legal review through the appropriate trademark authority if registration is planned."
  },
  {
    question: "Can you work with businesses outside Bangladesh?",
    answer: "Yes. Our design workflow supports businesses in Bangladesh as well as international clients across the US, UK, Australia, Canada, and UAE through remote collaboration."
  },
  {
    question: "How many revisions are included?",
    answer: "Revision rounds depend on the selected project scope. The included revision count is clearly confirmed in the quotation before production begins."
  },
  {
    question: "How much does logo design cost in Bangladesh?",
    answer: "Our logo design packages start from ৳15,000 for a logo redesign or refresh, ৳20,000 for a new logo design with 3 concept directions, and ৳25,000 for a logo with extended usage guidelines. Custom quotes are available for enterprise brand systems."
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
          Detailed answers covering our logo design capabilities, vector deliverables, revision workflows, and commercial ownership rights.
        </SectionIntro>

        {/* SEARCH BOX */}
        <div className="mt-8 mb-8">
          <input
            type="text"
            placeholder="Search FAQs (e.g. concepts, vector, trademark, redesign, favicon, Bangla)..."
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
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another search term or contact our design team directly.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
