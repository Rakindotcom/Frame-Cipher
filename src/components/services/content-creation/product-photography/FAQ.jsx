'use client'

import { useState } from 'react'
import { SectionIntro, PosterButton } from '../../../Kinetic'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    category: "Capabilities",
    question: "What types of products do you photograph?",
    answer: "We can photograph a wide range of consumer and commercial products, including ecommerce products, fashion and apparel, accessories, beauty products, packaged goods, lifestyle products, and other physical products. The required setup depends on the product's size, material, shape, and intended use."
  },
  {
    category: "Capabilities",
    question: "Do you offer white-background product photography?",
    answer: "Yes. We provide studio and white-background photography for ecommerce stores, catalogs, and marketplace listings."
  },
  {
    category: "Capabilities",
    question: "Do you provide lifestyle product photography?",
    answer: "Yes. Lifestyle photography can be produced in a studio, styled environment, or suitable location depending on the product and creative direction."
  },
  {
    category: "Marketplaces",
    question: "Can you photograph products for Amazon and Daraz?",
    answer: "Yes. We can plan product photography around Amazon, Daraz, and other marketplace requirements. Platform requirements can change, so current specifications are checked during project planning."
  },
  {
    category: "Marketplaces",
    question: "Can one shoot cover multiple platforms?",
    answer: "Yes. When planned properly, one photography session can produce assets for an ecommerce website, marketplace listings, social media, and advertising. The shot list and framing should account for the required formats before production."
  },
  {
    category: "Post-Production",
    question: "Do you provide product retouching?",
    answer: "Yes. Retouching and color correction can include background cleanup, exposure adjustment, color correction, dust removal, edge cleanup, and consistent treatment across a product set."
  },
  {
    category: "Production",
    question: "Can you handle large product catalogs?",
    answer: "Yes. Larger catalogs can be planned as batch productions. We establish a consistent shot list, lighting approach, framing standard, and editing style before scaling across the catalog."
  },
  {
    category: "Production",
    question: "Do I need to provide models or props?",
    answer: "It depends on the project. Studio product photography may require no models or props. Lifestyle photography may require models, props, locations, or styling, which can be included in the project scope when needed."
  },
  {
    category: "Logistics",
    question: "Can you photograph products sent to your studio?",
    answer: "Yes, where the product category and production requirements are suitable. Product shipping, receiving, storage, and return arrangements should be confirmed before the project begins."
  },
  {
    category: "Timeline",
    question: "How long does product photography take?",
    answer: "Small studio shoots can often be completed within a few business days. Larger catalogs, lifestyle shoots, and more complex productions usually require additional planning and post-production time."
  },
  {
    category: "Pricing",
    question: "How much does product photography cost in Bangladesh?",
    answer: "Pricing depends on the number of products, images per product, photography style, styling, location, and editing requirements. Framecipher product photography starts from approximately ৳1,000–৳1,500 per product for selected studio packages, while lifestyle and more comprehensive shoots are priced separately."
  },
  {
    category: "Logistics",
    question: "Do you work with international clients?",
    answer: "Yes. Framecipher works with businesses in Bangladesh and international markets, including the United States, United Kingdom, Australia, and Canada, subject to product logistics and production requirements."
  }
]

const categories = ["All", "Capabilities", "Marketplaces", "Post-Production", "Production", "Pricing", "Logistics", "Timeline"]

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
          Common questions about our commercial studio workflows, marketplace compliance, turnaround times, and sample logistics.
        </SectionIntro>

        {/* INTERACTIVE CONTROLS: SEARCH & CATEGORIES */}
        <div className="mt-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., Amazon, retouching, pricing, shipping)..."
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
              Have a Specific Product or Shoot Question?
            </h4>
            <p className="text-xs font-medium text-frame-muted-fg mt-0.5">
              Our studio directors will clarify logistics, lighting requirements, and platform guidelines.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Ask Our Studio Team &rarr;
            </PosterButton>
          </div>
        </div>

      </div>
    </section>
  )
}
