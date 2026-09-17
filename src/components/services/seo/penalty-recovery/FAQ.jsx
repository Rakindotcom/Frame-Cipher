import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How do I know if I have a manual action or an algorithmic penalty?",
    "answer": "Check Google Search Console under Manual Actions, if a notice appears there, it's a manual action with a specific, named violation. If nothing appears but traffic still dropped, it's more likely algorithmic, technical, or something else entirely, which we help diagnose."
  },
  {
    "question": "How long does penalty recovery actually take?",
    "answer": "It depends heavily on the type. Manual action remediation and reconsideration typically takes weeks before submission, plus Google's own review time after. Algorithmic recovery generally takes longer, often months, since it depends on genuine quality improvement and reassessment."
  },
  {
    "question": "Can you guarantee my reconsideration request will be approved?",
    "answer": "No, the decision belongs to Google, and no provider can guarantee it. We build the strongest possible evidence-based request addressing exactly what was flagged, which meaningfully improves the odds, but the final call isn't ours to make."
  },
  {
    "question": "What if my traffic dropped but I don't actually have a penalty?",
    "answer": "This happens more often than people expect, a migration issue, a technical error, or even a legitimate competitor improvement can look like a penalty. Diagnosis rules this out before any unnecessary remediation work begins."
  },
  {
    "question": "Do you help businesses outside Bangladesh with penalty recovery?",
    "answer": "Yes, alongside Bangladeshi businesses, we support penalty recovery for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our SEO Team]"
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
