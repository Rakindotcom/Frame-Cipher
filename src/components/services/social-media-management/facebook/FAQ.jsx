import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Why does my Facebook content get so little organic reach?",
    "answer": "Facebook's algorithm has shifted heavily toward friends-and-family content over business Pages for years, which structurally limits organic reach regardless of content quality. Paid promotion is generally required for meaningful reach at this point, though organic content still matters for community and trust."
  },
  {
    "question": "Should my business have a Facebook Group in addition to a Page?",
    "answer": "It depends on your business model. Groups work well for businesses that can sustain genuine ongoing discussion, but a dormant Group does less for you than no Group at all. We assess fit during the initial audit."
  },
  {
    "question": "How quickly do you respond to comments and messages?",
    "answer": "Response time is part of your specific plan, with faster turnaround available on higher tiers, we're direct about setting realistic expectations based on your coverage level."
  },
  {
    "question": "Is Facebook still worth managing if organic reach is limited?",
    "answer": "Yes, for most businesses, its value now sits more in trust verification, customer service, local discovery, and reviews than in broad organic reach, which is a genuinely different but still real function."
  },
  {
    "question": "Do you manage Facebook Pages for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we manage Facebook Pages for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Social Team]"
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
