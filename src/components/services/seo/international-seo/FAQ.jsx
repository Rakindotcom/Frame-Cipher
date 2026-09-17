import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Should I use separate country domains, subdirectories, or subdomains for different markets?",
    "answer": "It depends on your resources, brand strategy, and how many markets you're targeting. Subdirectories are generally easier to maintain and build authority for; separate ccTLDs offer the strongest local signal but require more resources to maintain individually. We recommend it based on your specific situation."
  },
  {
    "question": "What is hreflang, and do I actually need it?",
    "answer": "Hreflang is a tag that tells search engines which page version to show to visitors based on their language or location. If you have multiple versions of similar content targeting different markets, it's necessary to prevent those pages from being treated as duplicates or shown to the wrong audience."
  },
  {
    "question": "Is translating my content enough for international SEO?",
    "answer": "No, translation alone often misses the actual keywords and search intent local audiences use, and it doesn't address the technical signals search engines need to correctly target each market."
  },
  {
    "question": "Can you help a Bangladeshi business expand into international markets?",
    "answer": "Yes, this is a common use case for us, structuring a site so a business's existing Bangladeshi and Bangla-language presence doesn't compete against a new international-facing market."
  },
  {
    "question": "Do you work with businesses already operating internationally?",
    "answer": "Yes, alongside businesses expanding for the first time, we work with established international clients across the US, UK, Australia, Canada, and UAE refining their existing multi-market structure.\n\n[Talk to Our SEO Team]"
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
