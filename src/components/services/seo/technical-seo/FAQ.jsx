import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How is technical SEO different from on-page SEO?",
    "answer": "Technical SEO addresses the infrastructure that lets search engines crawl, index, and understand your site speed, structured data, architecture. On-page SEO addresses the content and metadata on individual pages. Both matter, and technical issues can undermine even strong content work."
  },
  {
    "question": "Do I need a technical SEO audit if my site looks fine to visitors?",
    "answer": "Yes, often, technical issues like poor crawlability or missing structured data are usually invisible to a regular visitor but directly affect how search engines evaluate your site."
  },
  {
    "question": "How much does site speed actually affect rankings?",
    "answer": "Page speed is a measured ranking factor, and it also affects visitor behavior directly, slow pages lose both rankings and conversions, which is why we treat it as a priority rather than a secondary concern."
  },
  {
    "question": "Can you fix technical issues on any platform, or just specific ones?",
    "answer": "We work across WordPress, Shopify, Webflow, and custom-built sites, the specific fixes vary by platform, but the diagnostic process is the same regardless of what your site runs on."
  },
  {
    "question": "Do you provide ongoing technical monitoring, or just a one-time fix?",
    "answer": "Both are available, a one-time audit and fix for sites needing a foundation reset, or ongoing monitoring for sites that want technical health tracked continuously.\n\n[Talk to Our SEO Team]"
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
