'use client'

import { useState } from 'react'

const aboutFaqs = [
  {
    question: 'What is Frame Cipher’s vision as a multinational tech company based in Bangladesh?',
    answer:
      'Frame Cipher was established to redefine how global business regards technology and creative capability from Bangladesh. Our vision is to build a sovereign, tier-one multinational powerhouse headquartered in Dhaka, providing end-to-end software engineering, cinematic media production, brand strategy, and algorithmic performance marketing to ambitious brands across North America, Europe, the Middle East, and Asia-Pacific. We prove that Bangladeshi engineering talent competes on equal footing with elite consultancies in Silicon Valley, London, and Singapore.',
  },
  {
    question: 'How do international clients in the US, UK, Canada, and UAE collaborate with Frame Cipher?',
    answer:
      'We operate on an asynchronous, follow-the-sun model with intentional daily timezone overlaps. For US clients (EST/CST/PST), UK/European clients (GMT/CET), and Middle Eastern clients (GST), we provide dedicated Slack/Teams communication channels, weekly sprint reviews, and overlapping working hours. Work requested at the close of business in New York or London is frequently built, tested, and staged by the time their teams start the following morning.',
  },
  {
    question: 'What software engineering stacks and technical frameworks does Frame Cipher specialize in?',
    answer:
      'Our primary development stack centers on modern, cloud-native technologies: Next.js (App Router), React, TypeScript, Node.js, Python (FastAPI), Tailwind CSS, PostgreSQL, Docker, Redis, and Supabase. We build serverless and containerized systems deployed to Vercel Edge networks and AWS, achieving sub-second Largest Contentful Paint (LCP), 95+ Core Web Vitals, and military-grade web security (OWASP Top 10 compliant).',
  },
  {
    question: 'How does Frame Cipher protect client intellectual property, code security, and confidentiality?',
    answer:
      'From day one, clients retain 100% ownership of all intellectual property, including GitHub repositories, custom codebases, design Figma files, raw 4K video assets, and advertising platform data. We sign enforceable international Non-Disclosure Agreements (NDAs) and IP assignment contracts. We enforce strict role-based access control, encrypted key management, and zero vendor lock-in.',
  },
  {
    question: 'Why should global brands partner with Frame Cipher over traditional IT outsourcing firms?',
    answer:
      'Traditional IT outsourcing firms in South Asia are transactional code-shops or low-tier link builders that operate in silos without business empathy. Frame Cipher is a unified growth operating system: our software engineers write code that is natively optimized for SEO and conversion rate, our video directors create cinematic media engineered specifically to reduce ad CAC, and our media buyers manage paid auctions with mathematical rigor. You get an elite multidisciplinary executive team, not fragmented outsourced freelancers.',
  },
  {
    question: 'Does Frame Cipher provide dedicated in-house teams or rely on third-party freelancers?',
    answer:
      'Frame Cipher maintains an absolute Zero-Outsourcing Policy. 100% of our software architects, UI/UX designers, copywriters, video production crew, technical SEO specialists, and media buyers are verified in-house professionals working from our Dhaka headquarters and dedicated production studios. We do not gamble with your brand reputation or security by passing work to unvetted third parties.',
  },
  {
    question: 'What services are unified within Frame Cipher’s 360 Marketing and Technology ecosystem?',
    answer:
      'Frame Cipher delivers 74+ capabilities grouped into 7 core pillars: 360 Marketing Architecture, Website Design & Development, Custom App & Software Engineering, Search Engine Optimization (SEO), Paid Advertising & PPC, Social Media Management, and Cinematic Content Creation (video production, photography, branding). We also build proprietary tools such as our 10 Auction-Calibrated Ads Calculators and the Frame Growth OS™.',
  },
  {
    question: 'Where is Frame Cipher physically located and how can we schedule an executive consultation?',
    answer:
      'Frame Cipher is headquartered at Ecb Chattar, Matikata, Khan Polli Mosque, Dhaka-1206, Bangladesh. We welcome prospective enterprise partners and founders to visit our physical studio and engineering campus in Dhaka. For international and remote clients, we provide executive video consultations via Google Meet, Zoom, or direct phone at +880 1768-146650 or email at teamframecipher@gmail.com.',
  },
]

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Schema.org FAQPage JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: aboutFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-24 md:px-8 md:py-32">
      {/* Schema.org FAQPage Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-[95vw]">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            Due Diligence / Frequently Asked Questions
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            Everything You Need to Know.
          </h2>
          <p className="mt-6 text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            Direct, transparent answers regarding our multinational operational structure, engineering standards, global client collaboration, and company vision.
          </p>
        </div>

        {/* Accordion FAQ Grid */}
        <div className="space-y-4">
          {aboutFaqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="border-2 border-frame-border bg-frame-card transition-colors duration-200 hover:border-frame-accent"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left sm:p-8"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4 pr-4">
                    <span className="font-mono text-xs font-bold text-frame-accent sm:text-sm">
                      0{index + 1}
                    </span>
                    <span className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg sm:text-xl md:text-2xl">
                      {faq.question}
                    </span>
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-frame-border bg-frame-bg font-mono text-sm font-bold text-frame-fg transition-transform duration-200">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-frame-border/80 px-6 pb-6 pt-4 sm:px-8 sm:pb-8">
                    <p className="max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg sm:text-base">
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
