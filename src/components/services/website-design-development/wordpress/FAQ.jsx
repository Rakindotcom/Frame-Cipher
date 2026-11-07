'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "Why choose custom WordPress development over a pre-built theme?",
    answer: "A pre-built theme can be faster to launch, but it may include unnecessary functionality and limit design or structural flexibility. Custom WordPress development allows the theme and website architecture to be built around your actual content, brand, and functionality requirements."
  },
  {
    question: "Do you use Elementor or Gutenberg?",
    answer: "Yes. We can work with Gutenberg, Elementor, or other suitable page-building approaches based on your editing workflow, design requirements, performance needs, and long-term maintenance plans."
  },
  {
    question: "Can you build custom WordPress plugins?",
    answer: "Yes. We can develop custom plugins and functionality for business workflows, APIs, admin tools, custom blocks, structured content, and other requirements that existing plugins cannot handle effectively."
  },
  {
    question: "Can you build WooCommerce websites?",
    answer: "Yes. We build WooCommerce stores with product catalogs, variations, checkout, payment integration, inventory, order management, product SEO, and custom functionality based on the project scope."
  },
  {
    question: "Can you migrate our existing website to WordPress?",
    answer: "Yes. We can migrate websites from platforms such as Wix, Webflow, Joomla, Drupal, or older WordPress installations. Depending on the project, migration can include content, media, URLs, metadata, redirects, and SEO preservation."
  },
  {
    question: "Can you optimize an existing slow WordPress website?",
    answer: "Yes. We can review caching, images, plugins, scripts, database performance, hosting configuration, and other technical factors that may affect WordPress speed and usability."
  },
  {
    question: "Will my WordPress website be SEO-ready?",
    answer: "We build important technical and structural SEO foundations into the development process, including website architecture, URLs, headings, metadata, schema, sitemap considerations, internal linking, and mobile usability. Ongoing SEO is a separate service unless included in the project scope."
  },
  {
    question: "Can you build membership, directory, or LMS websites?",
    answer: "Yes. WordPress can support membership, directory, education, and other specialized website models when the required plugin architecture and custom functionality are properly planned."
  },
  {
    question: "Will I have WordPress admin access after launch?",
    answer: "Yes. Access and ownership terms are defined in the project agreement. We can also provide editorial handover and training so your team can manage supported content after launch."
  },
  {
    question: "Do you provide ongoing WordPress maintenance?",
    answer: "Yes. WordPress updates, security checks, backups, technical fixes, performance work, and future improvements can be provided through an ongoing maintenance scope."
  },
  {
    question: "Do you work with clients outside Bangladesh?",
    answer: "Yes. We work with businesses across Bangladesh as well as international clients, including projects serving markets in the UAE, US, UK, Australia, Canada, and other regions."
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

        {/* Centered Header Block (Center-Only FAQ Standard) */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Frequently Asked{' '}
            <span className="italic text-frame-accent">Questions.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Common questions about our delivery process, technical standards, and engagement models.
          </p>
        </div>

        {/* Centered Accordion Stack */}
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
                  <h3 className="font-heading text-base sm:text-lg font-medium tracking-tight text-white pr-4">{q}</h3>
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

        {/* Centered Consultation Assistance */}
        <div className="mx-auto mt-12 max-w-4xl rounded-xl border border-white/[0.08] bg-[#121214] p-6 text-center">
          <p className="text-sm font-normal text-zinc-300">
            Have a question about custom plugins, multisite, or page builder choice?{' '}
            <Link
              href="/contact"
              className="font-mono text-xs uppercase tracking-wider text-frame-accent underline transition-colors duration-200 hover:text-white ml-1"
            >
              Talk directly with our WordPress engineering team &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
