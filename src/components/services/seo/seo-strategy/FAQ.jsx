import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Do I need to hire you for execution if I just want a strategy?",
    "answer": "No, strategy and consulting is available as a standalone service. Some clients execute the roadmap with their own team; others move into execution with us afterward. Both are genuinely fine outcomes."
  },
  {
    "question": "What's the difference between an SEO audit and SEO strategy consulting?",
    "answer": "An audit diagnoses what's currently wrong with your site. Strategy consulting goes further, it builds a prioritized, resourced plan for what to actually do about it, sequenced around your specific business and team capacity."
  },
  {
    "question": "What is fractional SEO leadership, and who is it for?",
    "answer": "It's ongoing, senior-level strategic guidance without a full-time hire, suited to businesses with a capable internal team that lacks a dedicated SEO lead to set direction and priorities."
  },
  {
    "question": "Can you train our internal team instead of doing the work for us?",
    "answer": "Yes, team training and enablement is a specific service we offer, including documentation and workflow setup, for businesses that want to build lasting internal capability rather than ongoing dependency."
  },
  {
    "question": "Do you provide strategy consulting for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we provide SEO strategy and consulting for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our SEO Team]"
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
