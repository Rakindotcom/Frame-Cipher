import { SectionIntro, PosterButton } from '../../Kinetic'

const faqs = [
  {
    "question": "What's the difference between a website redesign and a new build?",
    "answer": "A redesign keeps your existing domain and often your content and SEO rankings while rebuilding the design and structure. A new build starts from scratch and makes sense when the current site's foundation, platform, structure, or content isn't worth preserving."
  },
  {
    "question": "Which platform is right for my business: WordPress, Shopify, or custom development?",
    "answer": "It depends on your needs: WordPress suits content-heavy sites needing ongoing control, Shopify suits straightforward e-commerce, and custom development suits businesses with specific performance or integration needs a template can't meet. We recommend based on your actual requirements, not a default platform."
  },
  {
    "question": "Do you provide website maintenance after launch?",
    "answer": "Yes, ongoing updates, security monitoring, and technical fixes are available as a separate maintenance service. This doesn't include content or SEO strategy work, which are handled under our marketing services."
  },
  {
    "question": "How much does a website cost in Bangladesh?",
    "answer": "Cost depends on platform, page count, custom functionality, and whether e-commerce or ongoing maintenance is included. A free consultation gives you a specific quote based on your actual requirements rather than a generic package price."
  },
  {
    "question": "Do you build websites for international clients?",
    "answer": "Yes, alongside Bangladeshi businesses, we work with clients in the US, UK, Australia, and Canada, adjusting for different market expectations and platform preferences as needed."
  },
  {
    "question": "What happens if I need changes after the site is delivered?",
    "answer": "Minor revisions during the build are handled through the review and approval process at each stage. Changes requested after launch fall under either a maintenance plan or a separate scope of work, depending on what's needed."
  }
]

export default function FAQ({ service }) {
  const faqList = (service?.faqs && service.faqs.length > 0) ? service.faqs : faqs
  if (!faqList?.length) return null

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
          {faqList.map((faq, index) => (
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
              <div className="border-t-2 border-frame-border p-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg whitespace-pre-line">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* CONTACT PROMPT */}
        <div className="mt-12 border-2 border-frame-border bg-frame-muted/30 p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-base md:text-lg font-bold text-frame-fg max-w-xl">
            Have a specific platform or budget in mind? Contact us, and we&apos;ll give you a straight answer on what fits.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Talk to Our Dev Team &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
