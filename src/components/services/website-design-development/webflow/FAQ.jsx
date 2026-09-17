import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How is Webflow different from WordPress or Wix?",
    "answer": "Webflow gives more precise visual design control than WordPress's theme-based system or Wix's drag-and-drop editor, while still including genuine content management through its CMS. It suits brands prioritizing design precision alongside structured content."
  },
  {
    "question": "Can my team update content ourselves after launch?",
    "answer": "Yes, Webflow's CMS is built for content editing without touching the design, and part of our process includes handoff and training so your team can add or update content confidently."
  },
  {
    "question": "Does Webflow support ecommerce?",
    "answer": "Yes, for small to medium catalogs with design-forward requirements. For larger catalogs or complex inventory needs, we typically recommend Shopify, WooCommerce, or Magento instead, covered under our Ecommerce Website Development service."
  },
  {
    "question": "Will custom animations slow down my site?",
    "answer": "They can if not managed carefully. We optimize image loading, code structure, and animation performance so visually rich pages still load quickly, and we test performance specifically on mobile devices."
  },
  {
    "question": "Do you work with brands outside Bangladesh?",
    "answer": "Yes, we build Webflow sites for brands across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Build Team]"
  }
]
  if (!faqs?.length) return null

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
        >
          Common questions about our delivery process, technical standards, and engagement models.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg marker:content-none">
                <span>{faq.question}</span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
