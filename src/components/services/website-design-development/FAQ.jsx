const faqs = [
  {
    question: "What's the difference between a website redesign and a new build?",
    answer: "A redesign keeps your existing domain, valuable content, and established search rankings while modernizing the visual layer, mobile responsiveness, and page speed. A new build starts from scratch and is ideal when the legacy platform, architecture, or content is fundamentally outdated.",
  },
  {
    question: "Which platform is right for my business: WordPress, Shopify, Webflow, or custom Next.js?",
    answer: "It depends on your business goals: WordPress is ideal for content-heavy and editorial sites, Shopify provides scalable e-commerce infrastructure, Webflow offers rapid visual styling, and custom Next.js engineering is suited for high-performance web applications. We provide unbiased recommendations based on your goals.",
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer: "Yes. We offer ongoing maintenance retainers covering security updates, automated off-site backups, 24/7 uptime monitoring, Core Web Vitals checks, and developer hours for minor feature requests.",
  },
  {
    question: "How much does professional website development cost in Bangladesh?",
    answer: "Costs range from ৳15,000–৳30,000 for focused landing pages, ৳45,000–৳90,000 for multi-page business websites, and ৳65,000–৳180,000+ for full-scale e-commerce stores. Exact pricing is custom-quoted based on your feature scope.",
  },
  {
    question: "Do you build websites for international clients?",
    answer: "Yes. Alongside Bangladeshi businesses, we regularly build for clients across the US, UK, Canada, Australia, and the UAE, providing international payment gateway integrations, multi-currency support, and global CDN caching.",
  },
  {
    question: "What happens if I need changes after the site is delivered?",
    answer: "Minor revisions during development are handled through structured milestone review checkpoints. Once launched, additional features or routine content updates can be managed through our maintenance retainers or dedicated sprints.",
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Direct Answers / Clarity
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Direct answers about platform selection, custom development workflows, pricing models, and maintenance.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 sm:p-7 md:p-8 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg marker:content-none">
                <h3 className="pr-4">{faq.question}</h3>
                <span className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45 font-mono text-xl">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 sm:p-7 md:p-8 text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
