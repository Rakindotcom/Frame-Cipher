import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Can you just crop our existing long-form video into Reels?",
    "answer": "We can, but a video shot for horizontal viewing often loses composition and impact when cropped to vertical, for genuinely strong short-form content, shooting vertically from the start typically performs better than adapting existing footage."
  },
  {
    "question": "How many videos come out of a single filming session?",
    "answer": "It depends on the batch size, but a single coordinated session often produces four to six or more videos, since short-form production is built around efficient, high-volume filming rather than one video per shoot."
  },
  {
    "question": "Are Reels, Shorts, and TikTok content really that different from each other?",
    "answer": "There's real overlap, but each platform has genuine differences in audience behavior and algorithm mechanics. We adapt caption strategy, tone, and sometimes editing style slightly for each, rather than posting one identical file everywhere."
  },
  {
    "question": "Do you help with the strategy, or just film and edit what we ask for?",
    "answer": "Concept and hook development is part of the process - we don't just execute a brief without input, since the concept itself is often the biggest factor in whether short-form content actually performs."
  },
  {
    "question": "Do you produce short-form video for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we produce short-form video for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Creative Team]"
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
