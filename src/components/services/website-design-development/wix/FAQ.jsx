import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Is Wix a good choice for my business, or should I go with WordPress?",
    "answer": "It depends on your needs. Wix suits businesses wanting a fast, straightforward launch with simple self-editing afterward. WordPress suits businesses needing more content flexibility or complex custom functionality. We'll recommend based on your actual requirements during consultation."
  },
  {
    "question": "Can I edit the site myself after you build it?",
    "answer": "Yes, Wix's editor is built for self-editing, and part of our process includes handoff and basic training so you're comfortable making updates without needing a developer for every change."
  },
  {
    "question": "Does Wix work well for SEO?",
    "answer": "Wix has improved significantly for SEO but has some real limitations compared to more flexible platforms. We configure everything controllable meta tags, structure, speed settings, and are upfront about what Wix can't do compared to custom development."
  },
  {
    "question": "Can I sell products through my Wix site?",
    "answer": "Yes, Wix Stores supports small to medium product catalogs with built-in payment processing. For larger or more complex catalogs, we may recommend Shopify or WooCommerce instead, which we cover under our Ecommerce Website Development service."
  },
  {
    "question": "Do you work with clients outside Bangladesh?",
    "answer": "Yes, we build Wix sites for small businesses across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Build Team]"
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
