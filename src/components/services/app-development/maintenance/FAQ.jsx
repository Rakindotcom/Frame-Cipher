import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Do I need maintenance if my app just launched and is working fine?",
    "answer": "Yes, a working app today can break with the next OS update if nothing's actively monitoring compatibility. Maintenance is preventive, not a service reserved for apps that are already broken."
  },
  {
    "question": "What happens if my app crashes or something breaks?",
    "answer": "Depending on your plan, we respond to urgent issues with priority turnaround, drawing on a team already familiar with your app's codebase. Specific response time commitments are confirmed as part of your maintenance plan."
  },
  {
    "question": "Do you maintain apps you didn't originally build?",
    "answer": "Yes, we provide maintenance for apps built by other developers or agencies, starting with an initial codebase assessment to understand the current setup before ongoing maintenance begins."
  },
  {
    "question": "Is maintenance different for a SaaS app versus a native mobile app?",
    "answer": "Yes, a SaaS product needs closer monitoring of tenant-level issues and billing integrations, while a native app's maintenance centers more on OS compatibility and store policy compliance. We scope the plan to match your app's actual platform."
  },
  {
    "question": "Do you provide maintenance for apps outside Bangladesh?",
    "answer": "Yes, we maintain apps for businesses across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Support Team]"
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
