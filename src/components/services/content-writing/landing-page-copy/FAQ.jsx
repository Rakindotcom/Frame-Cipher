import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "What's the difference between a landing page and a regular website page?",
    "answer": "A website page is built to inform and rank in search, with navigation and multiple purposes. A landing page has one goal and no distractions from it, see the \"Why a Landing Page Isn't a Website Page\" section above for the full distinction. Most businesses need both, used for different purposes."
  },
  {
    "question": "Do you also design the page, or just write the copy?",
    "answer": "This service covers copywriting and content structure, headline, body, CTA placement, and objection sequencing. Visual design and development are typically handled separately, though we write with a clear structural brief so a designer or developer can build against it directly."
  },
  {
    "question": "Can you write a copy that matches ads we're already running?",
    "answer": "Yes, we review the specific ad, email, or campaign sending traffic to the page as part of the research phase, so the page's messaging picks up directly from what already earned the click."
  },
  {
    "question": "Do you handle A/B testing setup, or just the copy for it?",
    "answer": "We write the variant copy and help frame what's actually being tested; setting up the test itself in an ad platform or testing tool is typically handled by whoever manages the campaign, though we coordinate directly with that person."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we write landing page copy for clients in the US, UK, Australia, and Canada.\n\n[Talk to Our Content Team]"
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
