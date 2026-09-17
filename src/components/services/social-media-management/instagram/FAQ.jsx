import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Do I really need to post Reels, or can I stick with photos?",
    "answer": "Reels currently carry the most reach potential on Instagram, since the algorithm favors short-form video heavily. A photo-only strategy can still work for community and credibility, but it structurally limits how many new people are likely to discover your content."
  },
  {
    "question": "Why does a save matter more than a like?",
    "answer": "Saves and shares signal genuine value to Instagram's algorithm, which weighs them more heavily than likes when deciding how far to distribute content, a like is a low-effort action that carries comparatively little signal."
  },
  {
    "question": "Do you handle Instagram DMs, or just posting content?",
    "answer": "DM management is part of the service, Instagram's direct messages function as a real inquiry and sales channel for a lot of businesses, and unmonitored DMs often mean missed opportunities."
  },
  {
    "question": "How much does video production actually matter for results?",
    "answer": "Significantly, since Reels currently drive most organic reach, the quality and strategy behind video content has an outsized impact on results compared to static posts alone."
  },
  {
    "question": "Do you manage Instagram for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we manage Instagram for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Social Team]"
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
