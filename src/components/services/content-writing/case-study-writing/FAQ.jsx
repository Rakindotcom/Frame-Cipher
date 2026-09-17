import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "What if our client is willing to be a reference but doesn't want to do a formal interview?",
    "answer": "We can work with shorter conversations, written responses, or existing feedback where a full interview isn't possible, though a genuine conversation typically surfaces more usable, specific detail than a written questionnaire alone."
  },
  {
    "question": "How do you handle client approval before publishing?",
    "answer": "Approval coordination is part of the process, we build in review time and manage the sign-off conversation, so the finished piece is confirmed as ready to use before it goes live anywhere."
  },
  {
    "question": "Can you turn one case study into multiple formats?",
    "answer": "Yes, a single research and interview effort can produce a long-form version, a short summary, and social-ready snippets, which is usually more efficient than researching a new piece for every format."
  },
  {
    "question": "How do you decide which client stories are worth turning into case studies?",
    "answer": "We look at which results best address the objections and use cases that come up most often in your actual sales conversations, rather than just picking the most impressive-sounding number."
  },
  {
    "question": "Do you write case studies for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we write case studies for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Content Team]"
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
