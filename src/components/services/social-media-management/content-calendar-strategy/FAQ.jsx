import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Is this the same as the content strategy work included in your platform-specific pages?",
    "answer": "No, and this is worth being clear about. Each platform page's content strategy work is scoped to that platform alone, what to post on Instagram, for instance. This service is the coordination layer above all of them, making sure those individual plans work together as one business story rather than five disconnected ones."
  },
  {
    "question": "Do we need this if we're only active on one platform?",
    "answer": "Generally not as a separate service, a single platform's own content strategy work covers what's needed. This becomes valuable once a second or third platform enters the picture and nobody's tracking how they relate to each other."
  },
  {
    "question": "Can this work alongside our in-house social media team?",
    "answer": "Yes, the Setup Only option is built specifically for businesses that want the calendar and framework built professionally, then maintained internally by an existing team."
  },
  {
    "question": "How is this different from just using a scheduling tool?",
    "answer": "A scheduling tool handles when something posts. This service decides what should be said, on which platform, in what order, and how one idea should be adapted differently across five different audiences, the strategic layer a tool alone doesn't provide."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we build Content Calendar & Strategy systems for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Team]"
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
