import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "Is Microsoft Ads worth running if we're already on Google Ads?",
    "answer": "Generally yes for most B2B or B2C and higher-consideration categories, since Microsoft Ads usually adds incremental reach at a lower cost per click than Google, without competing for the same budget line, though the right call depends on how much genuine search volume exists for the business's category on Bing specifically."
  },
  {
    "question": "Is LinkedIn Profile Targeting the same as running ads on LinkedIn directly?",
    "answer": "No. LinkedIn Profile Targeting layers LinkedIn's company and job-title data onto Microsoft's search campaigns, it targets people searching on Bing based on their LinkedIn profile attributes, not people scrolling their LinkedIn feed. Running ads directly on LinkedIn is a separate service; see our LinkedIn Ads Management page for that."
  },
  {
    "question": "Can you import our existing Google Ads account directly?",
    "answer": "Yes, using Microsoft's built-in import tool, though we always run a cleanup and audit afterward rather than leaving an imported account to run as-is, since bid strategies and match types built for Google's auction don't automatically perform the same way here."
  },
  {
    "question": "How much search volume does Microsoft Ads actually have compared to Google?",
    "answer": "It's meaningfully smaller in most markets and categories, which is exactly why we treat it as an additive channel to an existing Google Ads strategy rather than pitching it as a replacement, we'll tell you upfront if a category doesn't have enough Bing volume to justify a dedicated budget."
  },
  {
    "question": "Do you provide this service for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we manage Microsoft Ads for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Ads Team]"
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
