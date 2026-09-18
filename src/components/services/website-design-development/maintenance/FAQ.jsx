export default function FAQ({ service }) {
  const faqs = service?.faqs || [
    {
      question: "Do I need maintenance if my site was just built and is working fine?",
      answer: "Yes. A site that works fine today can develop security vulnerabilities or performance issues as software dependencies age and go unpatched. Maintenance is preventive—catching issues before they cause visible disruptions or security breaches, rather than reacting after something breaks."
    },
    {
      question: "What happens if something breaks on my site?",
      answer: "Depending on your plan, our team responds with prioritized SLA turnaround, using tested off-site backups to restore full functionality quickly. Critical outages trigger immediate escalation to senior engineers."
    },
    {
      question: "Do you maintain sites you didn't originally build?",
      answer: "Yes. We maintain sites built by other developers or agencies. We start with an initial technical and security audit to understand the existing setup, clean up legacy issues, and stabilize the codebase before ongoing maintenance begins."
    },
    {
      question: "Is maintenance different for an ecommerce store versus a blog?",
      answer: "Yes. An ecommerce store requires continuous auditing of checkout flows, payment webhooks, inventory sync, and traffic spike capacity. A content blog or portfolio site typically needs lighter monitoring focused on software patching and monthly backups."
    },
    {
      question: "Do you provide maintenance for clients outside Bangladesh?",
      answer: "Yes. We manage and maintain websites for businesses across Bangladesh as well as international brands in the US, UK, Canada, Australia, and UAE with 24/7 automated endpoint monitoring."
    }
  ]

  if (!faqs?.length) return null

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
            Direct answers about our website maintenance retainers, response SLAs, security audits, and backups.
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
