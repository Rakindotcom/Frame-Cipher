import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Why does creative matter more on Meta than on Google Ads?",
    "answer": "Search ads reach people who've already expressed intent through their query. Meta ads have to generate interest from people who weren't necessarily looking for you, which puts more of the persuasive burden on the creative itself."
  },
  {
    "question": "How often does ad creative actually need to change?",
    "answer": "It depends on spend level and audience size, but creative fatigue typically sets in within two to four weeks at meaningful spend, we monitor frequency and performance signals to know when to refresh rather than working off a fixed calendar alone."
  },
  {
    "question": "What's the difference between custom audiences and lookalike audiences?",
    "answer": "Custom audiences target people who've already interacted with your business, site visitors, past customers. Lookalike audiences find new people who resemble your best existing customers, built from that same data."
  },
  {
    "question": "Do I need a large budget to run Meta Ads effectively?",
    "answer": "Meaningful results are possible at moderate budgets, but very small daily budgets can limit the algorithm's ability to gather enough data to optimize efficiently, we help calculate a realistic starting point during the account audit."
  },
  {
    "question": "Do you manage Meta Ads for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we manage Meta Ads for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Ads Team]"
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
