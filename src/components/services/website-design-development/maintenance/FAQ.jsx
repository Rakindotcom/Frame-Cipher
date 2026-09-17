import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Do I need maintenance if my site was just built and is working fine?",
    "answer": "Yes, a site that works fine today can develop security vulnerabilities or performance issues over time as software ages and goes unpatched. Maintenance is preventive, catching issues before they cause visible problems, not a service for sites that are already broken."
  },
  {
    "question": "What happens if something breaks on my site?",
    "answer": "Depending on your plan, we respond to urgent issues with priority turnaround, using tested backups to restore quickly if needed. Response time commitments are confirmed as part of your specific maintenance plan."
  },
  {
    "question": "Do you maintain sites you didn't originally build?",
    "answer": "Yes, we provide maintenance for sites built by other developers or agencies, starting with an initial assessment to understand the current setup before ongoing maintenance begins."
  },
  {
    "question": "Is maintenance different for an ecommerce store versus a blog?",
    "answer": "Yes, an ecommerce store needs closer monitoring of payment integrations, inventory systems, and traffic spikes, while a blog's maintenance needs are usually lighter, focused on updates and content support. We scope the plan to match."
  },
  {
    "question": "Do you provide maintenance for clients outside Bangladesh?",
    "answer": "Yes, we maintain websites for businesses across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Support Team]"
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
