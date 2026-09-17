import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How is website content writing different from blog writing?",
    "answer": "Website content writing focuses on core, evergreen pages home, about, service pages, built around clarity and conversion within seconds. Blog writing is built around ranking and reader engagement over a longer read, with different structure and goals entirely."
  },
  {
    "question": "Can you rewrite just our homepage, or does it have to be the whole site?",
    "answer": "Single-page rewrites are available, some businesses just need their homepage or one underperforming service page addressed, rather than a full site rewrite."
  },
  {
    "question": "How do you make sure the copy actually sounds like our business?",
    "answer": "We start with discovery to understand your existing tone and audience, develop voice guidelines from that, and build in a revision process specifically to refine tone until it genuinely matches."
  },
  {
    "question": "Will new copy require a website redesign too?",
    "answer": "Not necessarily, copy can often be implemented into an existing design. If the current structure genuinely isn't supporting the copy well, we'll tell you honestly and can point you toward our website redesign services if needed."
  },
  {
    "question": "Do you write website content for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we write website content for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Content Team]"
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
