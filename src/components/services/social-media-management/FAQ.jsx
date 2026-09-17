import { SectionIntro } from '../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How is social media management different from paid social advertising?",
    "answer": "Social media management covers your organic, unpaid presence, content, posting, and community engagement. Paid advertising targets specific audiences with a budget behind it for faster, more controllable results. Most businesses eventually benefit from both working together."
  },
  {
    "question": "Do you create original content, or just post what we provide?",
    "answer": "Both are available, depending on your plan, some businesses provide their own photography and video for us to schedule and manage, others want full content creation included."
  },
  {
    "question": "Which platforms should my business actually be on?",
    "answer": "It depends on where your specific audience actually spends time, we help identify the right platform mix during the initial audit rather than recommending all five by default."
  },
  {
    "question": "How quickly will we see growth?",
    "answer": "Meaningful growth typically becomes visible within two to three months of consistent management, though this varies by platform, industry, and your starting point; we don't promise a guaranteed timeline since platform algorithms are outside anyone's direct control."
  },
  {
    "question": "Do you handle responding to comments and messages, or just posting?",
    "answer": "Community management, including timely responses to comments and messages, is a core part of the service, an unanswered question sitting publicly for days reflects on the business as much as the content itself."
  },
  {
    "question": "Do you serve businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we manage social media for clients in the US, UK, Australia, Canada, and UAE."
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
