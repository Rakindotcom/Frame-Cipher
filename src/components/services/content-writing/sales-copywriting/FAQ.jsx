import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How is Sales Copywriting different from Landing Page Copywriting?",
    "answer": "Landing Page Copywriting is a specific page format, structured for one traffic source. Sales Copywriting is the underlying persuasion argument, which can live on a landing page but also in a proposal, deck, script, or printed piece, see the section above for the full distinction. Most landing pages need sales copy written into them, so the two frequently work together."
  },
  {
    "question": "Will you use urgency and scarcity tactics to increase conversions?",
    "answer": "Only where they're genuinely real, an actual deadline, actual limited availability. We won't write manufactured urgency, since it tends to cost more in long-term trust than it gains in short-term conversion, and we'll say so directly if a request moves in that direction."
  },
  {
    "question": "Do you write for B2B sales, not just consumer offers?",
    "answer": "Yes, proposal and pitch deck copywriting follows the same underlying persuasion structure adapted for a B2B decision-maker, not a separate, unrelated skill set."
  },
  {
    "question": "Can you write a video sales letter script if we're filming it ourselves?",
    "answer": "Yes, we write the full script with pacing and visual notes included, so it can be filmed by an in-house team or a separate video production service."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we write sales copy for clients in the US, UK, Australia, and Canada.\n\n[Talk to Our Content Team]"
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
