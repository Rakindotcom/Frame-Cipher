import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Why does a personal profile reach more people than our company page?",
    "answer": "LinkedIn's algorithm consistently favors content from individual profiles over company pages, since the platform is fundamentally built around people and professional relationships, not brand accounts."
  },
  {
    "question": "How does ghostwriting actually work, will it sound like me?",
    "answer": "We start with voice development, understanding how you actually think and communicate, and every draft goes through your review before publishing, the goal is content that sounds genuinely like you, not a generic template with your name attached."
  },
  {
    "question": "Should we focus on the company page or an executive's personal profile?",
    "answer": "Both serve different purposes, the company page builds legitimacy and searchability, while a personal profile drives the reach LinkedIn's algorithm actually rewards. Most businesses benefit from investing in both."
  },
  {
    "question": "How is this different from LinkedIn Ads Management?",
    "answer": "This covers organic, unpaid content and presence. LinkedIn Ads Management covers paid campaigns targeting specific audiences with a budget behind it, the two work well together, since organic credibility strengthens how paid campaigns perform."
  },
  {
    "question": "Do you manage LinkedIn presence for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we manage LinkedIn presence for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Social Team]"
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
