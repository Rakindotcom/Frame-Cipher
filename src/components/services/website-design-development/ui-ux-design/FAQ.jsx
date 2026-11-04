'use client'

import React from 'react'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    question: "What's the difference between UI design and UX design?",
    answer: "UX design focuses on how a product works, how users move through it, and how easily they complete tasks. UI design focuses on the visual interface, including typography, colors, spacing, components, and screen appearance. We handle both as part of one connected design process.",
  },
  {
    question: "Do I need UI/UX design if I'm using WordPress or Shopify?",
    answer: "Yes. Platforms provide a technical foundation, but user flow, information architecture, navigation, visual customization, and usability still need to be considered.",
  },
  {
    question: "Can you redesign an existing website or app?",
    answer: "Yes. We can audit the current experience, identify usability problems, improve important flows, and redesign selected areas or the full product based on project scope.",
  },
  {
    question: "Do you provide UX audits?",
    answer: "Yes. UX audits can review navigation, user flows, usability, mobile experience, forms, checkout, interaction patterns, accessibility concerns, and available user behavior data.",
  },
  {
    question: "Do you conduct usability testing with real users?",
    answer: "Yes, when testing is included in the project scope. We can test prototypes with real or representative users to identify friction before development.",
  },
  {
    question: "Can you design for a mobile app?",
    answer: "Yes. We apply research, flow mapping, wireframing, and UI design principles while adapting the experience to mobile interaction patterns and platform conventions.",
  },
  {
    question: "Do you design SaaS dashboards and web applications?",
    answer: "Yes. We design SaaS products, dashboards, customer portals, internal tools, web applications, and other digital products with more complex workflows and multiple user roles.",
  },
  {
    question: "Will developers receive Figma files and design specifications?",
    answer: "Yes. Depending on the project scope, handoff can include organized Figma files, reusable components, prototypes, responsive layouts, interaction states, design-system references, assets, and development notes.",
  },
  {
    question: "What will I receive at the end of a UI/UX project?",
    answer: "Typical deliverables can include user flows, wireframes, high-fidelity UI screens, interactive prototypes, design systems, organized design files, and development-ready specifications.",
  },
  {
    question: "How is UI/UX design different from web design?",
    answer: "UI/UX design focuses more deeply on user behavior, task flows, interaction, usability, and product structure. Web design focuses more on page layout, branding, content presentation, and website communication. Many projects benefit from both.",
  },
  {
    question: "Does UI/UX design include development?",
    answer: "UI/UX design and development are separate services. However, Framecipher can support the transition from approved design into website or application development where required.",
  },
  {
    question: "Can you work with our existing development team?",
    answer: "Yes. We can provide design files, prototypes, specifications, and handoff documentation for internal developers or external development teams.",
  },
  {
    question: "Do you work with clients outside Bangladesh?",
    answer: "Yes. We provide UI/UX design for businesses and digital products in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.",
  },
  {
    question: "How long does a UI/UX design project take?",
    answer: "The timeline depends on the number of screens, flows, research requirements, testing, complexity, and review cycles. Smaller projects may take around one week, while complex products can take several weeks or longer.",
  },
]

export default function FAQ({ service }) {
  const faqs = (service?.faqs && service.faqs.length >= fallbackFaqs.length) ? resolveFaqs(service, fallbackFaqs) : fallbackFaqs

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Strictly Center-Aligned Header (§5.3 Standard) */}
        <div className="mx-auto mb-14 max-w-3xl text-center space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Clear answers regarding our UI/UX design process, Figma deliverables, usability testing, and developer handoff.
          </p>
        </div>

        {/* Center-Aligned Accordion Container (max-w-4xl) */}
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-xl border border-white/[0.08] bg-[#121214] transition-colors open:border-white/[0.14]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-base sm:text-lg md:text-xl font-medium uppercase tracking-tight text-white marker:content-none">
                <span>{faq.question}</span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] font-mono text-sm text-frame-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-white/[0.08] p-6 text-sm md:text-base font-normal leading-relaxed text-zinc-300 whitespace-pre-line">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
