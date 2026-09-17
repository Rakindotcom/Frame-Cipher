import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "What's the difference between TikTok Management and TikTok Ads Management?",
    "answer": "This service covers organic content, posting, and community management without ad spend. TikTok Ads Management covers paid campaigns, Spark Ads, and TikTok Shop advertising. Many businesses use both, coordinated together, but they're separate scopes of work."
  },
  {
    "question": "How many videos do we actually need to post per week?",
    "answer": "It depends on production capacity and goals, but consistency matters more than raw volume, a business reliably posting twice a week generally outperforms one posting five times one week and nothing the next three."
  },
  {
    "question": "How long does organic TikTok growth actually take?",
    "answer": "Meaningfully longer than paid - most accounts need two to three months of consistent posting before real growth and engagement patterns become clear, and building a genuinely engaged audience organically is usually a longer game than that."
  },
  {
    "question": "Do you write scripts, or do we need to provide our own content ideas?",
    "answer": "We handle content pillar development, scripting, and production planning as part of the service, the business's input and expertise inform the content, but the day-to-day production planning doesn't need to be handled internally."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we manage TikTok accounts for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Team]"
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
