'use client'

import { useState } from 'react'
import { SectionIntro } from '../../../Kinetic'

const fallbackFaqs = [
  {
    question: "What is included in a branding service?",
    answer: "A branding project can include brand strategy, positioning, visual identity, logo integration or development, color, typography, imagery direction, brand voice, messaging, brand guidelines, and agreed brand applications. The exact scope depends on the selected project."
  },
  {
    question: "Is branding the same as logo design?",
    answer: "No. Logo design focuses on the visual mark. Branding establishes the broader strategic, visual, and verbal system around the business. A logo can be part of a branding project, but a logo alone does not define the entire brand."
  },
  {
    question: "Can you build a brand around our existing logo?",
    answer: "Yes. If your existing logo is still appropriate, we can develop the broader brand system around it. That can include color, typography, imagery, voice, messaging, graphic elements, and guidelines."
  },
  {
    question: "Do you design the logo as part of branding?",
    answer: "Yes, when included in the selected branding scope. If you already have a suitable logo, we can also build the identity system around it without redesigning the mark unnecessarily."
  },
  {
    question: "What is included in brand guidelines?",
    answer: "Depending on scope, guidelines can cover logo usage, color, typography, imagery, graphic elements, voice, messaging, correct usage, incorrect usage, and digital or print application guidance."
  },
  {
    question: "Why do businesses need brand guidelines?",
    answer: "Guidelines give your team and external collaborators a common reference. They reduce guesswork, protect consistency, and make future creative production easier."
  },
  {
    question: "Do brand guidelines include social media templates?",
    answer: "They can, if templates are included in the agreed scope. A guideline document establishes the rules. Specific social media template design is usually scoped according to the business's content requirements."
  },
  {
    question: "Can you rebrand an existing business?",
    answer: "Yes. We can review the current identity, positioning, customer-facing materials, and competitive environment before recommending whether the business needs a refresh, repositioning, or broader rebrand."
  },
  {
    question: "What is the difference between a brand refresh and a rebrand?",
    answer: "A brand refresh usually updates selected parts of an existing identity while preserving more of its recognition. A rebrand can involve bigger changes to positioning, identity, messaging, and how the business presents itself. The appropriate approach depends on what the existing brand needs to achieve."
  },
  {
    question: "Do you provide brand strategy before designing?",
    answer: "Yes. For projects requiring strategic work, discovery and positioning come before the visual identity system. This helps ensure the design direction has a business reason behind it."
  },
  {
    question: "Can branding include brand voice and messaging?",
    answer: "Yes. Brand voice and messaging can be developed alongside the visual identity so the business has consistent verbal and visual direction."
  },
  {
    question: "Do you provide editable source files?",
    answer: "Editable source files for applicable design assets can be included in the final handoff according to the agreed project scope."
  },
  {
    question: "Do you provide vector logo files?",
    answer: "Where logo development is included, agreed production-ready vector files can be provided as part of the final asset handoff."
  },
  {
    question: "Can you create branding for Bangladeshi businesses using both Bangla and English?",
    answer: "Yes. Where bilingual communication is relevant, the brand voice, typography, messaging, and application requirements can account for both Bangla and English."
  },
  {
    question: "Can you work with businesses outside Bangladesh?",
    answer: "Yes. Framecipher works with businesses in Bangladesh and international markets, including the US, UK, Australia, and Canada."
  },
  {
    question: "How much does branding cost in Bangladesh?",
    answer: "Branding costs depend on the scope. Framecipher's current starting reference is ৳40,000+ for a Brand Identity Starter and ৳70,000+ for a Full Brand Identity System, while rebranding and larger projects are quoted based on requirements."
  },
  {
    question: "How long does a branding project take?",
    answer: "A complete branding project generally takes around 4–6 weeks. Smaller projects may take less time, while complex rebrands and larger identity systems can require longer."
  },
  {
    question: "Can you help apply the brand after the branding project?",
    answer: "Yes. Depending on the requirement, Framecipher can continue applying the brand system through graphic design, content writing, video, motion graphics, and other creative services."
  },
  {
    question: "Does branding include trademark registration?",
    answer: "No. Branding can include creative differentiation and competitive review, but trademark availability, registration, and legal clearance should be handled with the appropriate legal or trademark professional."
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
          Detailed answers explaining our branding methodology, deliverables, brand voice frameworks, and commercial engagement terms.
        </SectionIntro>

        {/* SEARCH BOX */}
        <div className="mt-8 mb-8">
          <input
            type="text"
            placeholder="Search FAQs (e.g. guidelines, rebrand, voice, strategy, timeline, Bangla, logo)..."
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
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another search term or contact our branding team directly.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
