import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Is this the same as running YouTube video ads?",
    "answer": "No. This service covers organic channel management, content, SEO, and growth without ad spend. YouTube video ads run through the Google Ads platform. The two work well together, but they're separate scopes of work."
  },
  {
    "question": "How often do we actually need to upload?",
    "answer": "It depends on production capacity and goals, but a sustainable, consistent cadence generally outperforms an ambitious schedule that collapses after a few months. We set this realistically during onboarding rather than promising a number we can't actually sustain."
  },
  {
    "question": "How long before we see real growth on YouTube?",
    "answer": "Longer than most platforms, typically three to six months of consistent uploads before growth and search performance become clear, since YouTube weighs accumulated channel history more heavily than almost any other platform covered here."
  },
  {
    "question": "Do you handle both long-form videos and Shorts?",
    "answer": "Yes, and we plan them together rather than as separate strategies - Shorts for discovery and audience growth, long-form for the searchable, evergreen backbone of the channel."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we manage YouTube channels for clients in the US, UK, Australia, Canada, and UAE."
  },
  {
    "question": "Do you manage other platforms too?",
    "answer": "Yes, YouTube is one of five platforms covered under our Social Media Management services, alongside Facebook, Instagram, LinkedIn, and TikTok, plus dedicated content calendar, community management, and reporting services that can run across all of them.\n\n[Talk to Our Team]"
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
