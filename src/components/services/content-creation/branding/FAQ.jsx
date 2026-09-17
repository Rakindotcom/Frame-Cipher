import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Do we need a new logo, or can we build branding around our existing one?",
    "answer": "Branding can be built around an existing logo if it's working well, or can include new logo development if a redesign makes sense as part of the broader project, this gets scoped directly during discovery."
  },
  {
    "question": "What's actually in the final guidelines document?",
    "answer": "Logo usage rules, color values, typography specifications, imagery direction, voice guidelines, and usage examples showing both correct application and common mistakes, a working reference, not just a visual showcase."
  },
  {
    "question": "How is this different from just hiring a graphic designer?",
    "answer": "A graphic designer executes individual pieces. Branding establishes the underlying system strategy, visual rules, and voice, that any designer, including ours through Graphic Design, builds future work against consistently."
  },
  {
    "question": "We already have a brand, when does a rebrand actually make sense?",
    "answer": "Generally when a brand audit shows real inconsistency across materials, when the business has genuinely outgrown its current positioning, or when a strategic shift (new market, new audience) makes the existing identity a poor fit, not simply because a design style has gone out of fashion."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we build brand systems for clients in the US, UK, Australia, and Canada.\n\n[Talk to Our Creative Team]"
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
