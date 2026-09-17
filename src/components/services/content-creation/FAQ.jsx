import { SectionIntro } from '../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Do you handle both video and photography, or should we hire separately for each?",
    "answer": "We handle both under one team, which keeps visual style consistent across formats, a genuine advantage over piecing together separate specialists who've never coordinated on your brand identity."
  },
  {
    "question": "Can you produce content specifically for Instagram Reels or TikTok?",
    "answer": "Yes, short-form vertical video is a core part of the service, built specifically for how those platforms distribute content, not a repurposed long-form video cropped down."
  },
  {
    "question": "Do you offer branding and logo design for a completely new business?",
    "answer": "Yes, branding and logo design are available as standalone services or as the foundation for a broader content production relationship."
  },
  {
    "question": "How do you make sure video and photography match our existing brand look?",
    "answer": "We review your existing brand identity, or help establish one if it doesn't exist yet, and every production decision is made against that reference rather than independently per project."
  },
  {
    "question": "Do you serve businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we produce content for clients in the US, UK, Australia, Canada, and UAE."
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
