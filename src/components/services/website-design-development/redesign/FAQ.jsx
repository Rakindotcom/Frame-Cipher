import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Will a redesign hurt my current Google rankings?",
    "answer": "It can, if redirects and content migration aren't handled carefully, this is the most common redesign mistake. We build a 301 redirect strategy and preserve ranking content specifically to protect your existing rankings through the process."
  },
  {
    "question": "Do you only redesign business websites?",
    "answer": "No, we redesign any type of site, including ecommerce stores, blogs, portfolios, membership sites, and directories. The audit and fixes are scoped around what that specific site type needs, not a generic business-site template applied regardless of purpose."
  },
  {
    "question": "Do I need a full rebuild, or just a visual refresh?",
    "answer": "It depends on what the audit finds. If your site's structure and platform are sound but the design is outdated, a visual refresh is usually enough. If the platform itself is the bottleneck, a deeper rebuild or migration is the better investment, we'll tell you honestly which situation you're in."
  },
  {
    "question": "How long does a website redesign take?",
    "answer": "Typically 2 to 14+ weeks, depending on how much of the site needs rebuilding, whether a platform migration is involved, and the size of your existing content."
  },
  {
    "question": "Can you redesign a site that isn't built on WordPress or a platform you specialize in?",
    "answer": "In most cases, yes, we can audit and redesign sites on most platforms, and will recommend migrating to a better-suited platform if the current one is genuinely holding the site back."
  },
  {
    "question": "Do you work with businesses outside Bangladesh?",
    "answer": "Yes, we redesign websites for businesses across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Build Team]"
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
