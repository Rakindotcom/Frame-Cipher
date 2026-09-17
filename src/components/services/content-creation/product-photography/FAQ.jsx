import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Do you shoot in a studio, on location, or both?",
    "answer": "Both, depending on the shot type, white-background and detail shots are generally studio work, while lifestyle photography is often shot on location or in a styled set built for the product's actual use case."
  },
  {
    "question": "Can you match our product's actual color, or does that vary shoot to shoot?",
    "answer": "Color accuracy is treated as a core requirement, not a best-effort outcome, calibrated shooting and retouching are used specifically to keep displayed color consistent with the physical product, since color mismatches are a common driver of returns."
  },
  {
    "question": "Do you handle Amazon's specific image requirements?",
    "answer": "Yes, Amazon's main image and secondary image requirements are built into the shot planning from the start, coordinated with our Amazon Ads Management service where a business runs both, since listing compliance directly affects ad performance there."
  },
  {
    "question": "Can one shoot cover our website, Amazon, and social media at once?",
    "answer": "Generally yes, shot planning accounts for the different formats and crops each platform needs, so a single shoot typically produces usable files for multiple platforms rather than requiring separate sessions for each."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we shoot product photography for clients in the US, UK, Australia, and Canada.\n\n[Talk to Our Creative Team]"
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
