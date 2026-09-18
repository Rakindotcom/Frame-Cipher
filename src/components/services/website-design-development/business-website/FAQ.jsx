const faqs = [
  {
    question: 'What is included in a business website development project?',
    answer: 'A typical project includes strategy and planning, sitemap development, UI/UX design, responsive development, content integration, lead capture forms, analytics, technical SEO foundations, testing, and launch support. Exact deliverables depend on the agreed scope.',
  },
  {
    question: 'Can I update the website myself after it is launched?',
    answer: 'Yes, where the selected platform supports client-managed content. We provide access and agreed handover guidance so your team can manage supported content without depending on a developer for every update.',
  },
  {
    question: 'Will my business website be SEO-ready?',
    answer: 'We build important technical and structural SEO foundations into the development process, including clean URLs, page hierarchy, metadata, mobile usability, sitemap considerations, and other agreed technical elements.',
  },
  {
    question: 'Can you integrate our existing CRM?',
    answer: 'We can integrate supported CRM and business tools where the platform, software, and available API allow it. We confirm compatibility before development begins.',
  },
  {
    question: 'Can you add WhatsApp, call, booking, or live chat features?',
    answer: 'Yes, relevant communication and conversion tools can be integrated based on your business requirements, platform, and selected third-party services.',
  },
  {
    question: 'Do you provide website content?',
    answer: 'Content planning and content integration are included within the project scope. Full copywriting and ongoing content creation can also be discussed separately based on your requirements.',
  },
  {
    question: 'Who owns the website after development?',
    answer: 'Ownership, access, source files, and handover terms are defined in the project agreement. We provide the agreed deliverables and full administrative access described in that agreement.',
  },
  {
    question: 'Can you redesign our existing website without damaging SEO?',
    answer: 'Yes. For redesign projects, we review existing content, URLs, rankings, backlinks, and other relevant SEO assets before restructuring the website. Redirects and content preservation are included where required.',
  },
  {
    question: 'What happens after the website launches?',
    answer: 'We provide agreed handover guidance and can continue with maintenance, technical updates, performance checks, security work, and future improvements under a separate support scope.',
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
            Everything you need to know about our business website development workflow, ownership, and integrations.
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
