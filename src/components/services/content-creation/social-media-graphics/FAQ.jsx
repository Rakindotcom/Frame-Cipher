'use client'

import { useState } from 'react'
import { SectionIntro, PosterButton } from '../../../Kinetic'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    category: "Scope",
    question: "What is included in your Social Media Graphics Service?",
    answer: "Depending on your scope, we can design feed posts, Stories, carousels, product and service graphics, promotional campaigns, Reel covers, video covers, templates, and platform-specific adaptations."
  },
  {
    category: "Scope",
    question: "What is the difference between Social Media Graphics and Graphic Design?",
    answer: "Graphic Design covers a broader range of business and marketing design like presentations, company profiles, brochures, and packaging. Social Media Graphics focuses specifically on content created for social-platform formats, publishing requirements, recurring content, and platform adaptation."
  },
  {
    category: "Platforms",
    question: "Do you design graphics for Instagram and Facebook?",
    answer: "Yes. We create feed posts, Stories, carousels, promotional graphics, campaign visuals, and other social assets tailored to the layout constraints of Facebook and Instagram."
  },
  {
    category: "Platforms",
    question: "Can you design LinkedIn graphics for B2B businesses?",
    answer: "Yes. We design LinkedIn graphics for thought leadership, company updates, research reports, case studies, announcements, and B2B events."
  },
  {
    category: "Templates",
    question: "Can you create reusable social media templates?",
    answer: "Yes. We can create reusable templates in Figma or Canva for recurring content types. Editable delivery is included in our Template System and custom retainer packages."
  },
  {
    category: "Carousels",
    question: "Do you design carousels as one complete sequence?",
    answer: "Yes. We approach carousel projects as connected visual sequences, including the opening hook, sequential progression, slide consistency, and closing CTA where required."
  },
  {
    category: "Adaptation",
    question: "Can you adapt one design for multiple platforms?",
    answer: "Yes. We can create platform-specific versions and recompose the layout when different aspect ratios (e.g. 1:1 feed to 9:16 Story) require more than simple resizing."
  },
  {
    category: "Video Stills",
    question: "Do you design Reel covers and video thumbnails?",
    answer: "Yes. Reel covers, short-form video covers, YouTube thumbnails, and related static video graphics can be included within your project scope."
  },
  {
    category: "Copywriting",
    question: "Do you provide captions with the graphics?",
    answer: "Social graphic design and copywriting are separate services. You can provide the final artwork copy, or we can coordinate copywriting support through our Content Writing service if your project requires it."
  },
  {
    category: "Retainers",
    question: "Can you handle monthly social media graphics?",
    answer: "Yes. Monthly graphics retainers are available for businesses that need consistent social creative production throughout the month with dedicated turnaround queues."
  },
  {
    category: "Logistics",
    question: "Do you work with businesses outside Bangladesh?",
    answer: "Yes. Framecipher works with businesses in Bangladesh and international markets through remote briefing, online review, approval, and digital delivery."
  }
]

const categories = ["All", "Scope", "Platforms", "Carousels", "Templates", "Adaptation", "Video Stills", "Copywriting", "Retainers", "Logistics"]

export default function FAQ({ service }) {
  const faqs = resolveFaqs(service, fallbackFaqs)
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        
        {/* SECTION HEADER */}
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
          align="center"
        >
          Common questions about our social media graphics deliverables, platform adaptations, template systems, and monthly retainers.
        </SectionIntro>

        {/* INTERACTIVE CONTROLS: SEARCH & CATEGORIES */}
        <div className="mt-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., templates, carousels, LinkedIn, pricing)..."
              className="w-full border-2 border-frame-border bg-frame-bg px-4 py-3 text-xs md:text-sm font-mono placeholder:text-frame-muted-fg focus:border-frame-accent focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs font-bold text-frame-muted-fg hover:text-frame-fg"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`border-2 px-3 py-1 font-mono text-xs font-bold uppercase transition ${
                  activeCategory === cat
                    ? 'border-frame-accent bg-frame-accent text-frame-accent-fg'
                    : 'border-frame-border bg-frame-bg text-frame-muted-fg hover:border-frame-fg hover:text-frame-fg'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ACCORDION FAQ LIST */}
        <div className="mt-8 space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <details
                key={index}
                className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between p-6 font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg marker:content-none text-left">
                  <span className="flex items-start gap-3">
                    <span className="font-mono text-xs text-frame-accent border border-frame-accent/40 px-1.5 py-0.5 shrink-0 hidden sm:inline-block mt-0.5">
                      {faq.category}
                    </span>
                    <span className="leading-snug">{faq.question}</span>
                  </span>
                  <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45 mt-0.5">
                    +
                  </span>
                </summary>
                <div className="border-t border-frame-border/80 p-6 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {faq.answer}
                </div>
              </details>
            ))
          ) : (
            <div className="border-2 border-frame-border bg-frame-muted/20 p-8 text-center">
              <p className="font-mono text-xs text-frame-muted-fg">
                No matching questions found for &ldquo;{searchQuery}&rdquo;.
              </p>
            </div>
          )}
        </div>

        {/* CONTACT PROMPT */}
        <div className="mt-12 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-heading text-base font-bold uppercase tracking-tight text-frame-fg">
              Have Specific Channel Or Campaign Requirements?
            </h4>
            <p className="text-xs font-medium text-frame-muted-fg mt-0.5">
              Talk directly with our creative team about custom volume retainers and template design.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Talk to Our Creative Team &rarr;
            </PosterButton>
          </div>
        </div>

      </div>
    </section>
  )
}
