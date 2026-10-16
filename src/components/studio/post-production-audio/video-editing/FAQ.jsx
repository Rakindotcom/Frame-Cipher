'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does video editing cost in Dhaka?",
    "answer": "At FrameCipher Studio, a Shorts Pack of 5 captioned verticals is ৳9,500. A Creator Edit up to 15 minutes with grade and 2 cutdowns is ৳22,000, and a Studio Suite up to 30 minutes with a motion package is ৳48,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "Can you edit footage we filmed ourselves?",
    "answer": "Yes. Most edits start from external footage. Deliver camera originals on a portable SSD at ECB Chattar or by Google Drive or Dropbox link with full-resolution files, and we verify every clip before cutting."
  },
  {
    "question": "What pushes a quote from ৳9,500 toward ৳48,000?",
    "answer": "Longer runtime and more raw footage to ingest, multi-camera sync, LOG rescue and audio repair, motion graphics and caption packaging, more cutdowns and aspect ratios, and priority turnaround."
  },
  {
    "question": "Can you cut long videos into vertical shorts?",
    "answer": "Yes. We ingest 1–2 hour podcasts or webinars and extract hook-first 9:16 cutdowns with kinetic subtitles, zoom cuts and sound effects for Reels, TikTok and YouTube Shorts."
  },
  {
    "question": "Is the background music copyright-safe?",
    "answer": "Yes. All tracks, risers and sound effects are commercially licensed, so your video carries zero copyright-strike risk on YouTube, Facebook or Instagram."
  },
  {
    "question": "How do revisions work?",
    "answer": "Every project includes 2 structured revision rounds through timestamped cloud review links, so stakeholders comment frame-accurately instead of over chat screenshots."
  },
  {
    "question": "How fast can you deliver?",
    "answer": "Standard edits deliver in 3–5 working days from verified intake. Express 48-hour delivery is available at a 30% priority fee, and proxy previews are available within 24 hours."
  },
  {
    "question": "Do you add Bangla and English captions?",
    "answer": "Yes. Kinetic captions plus SRT caption files in Bangla or English are included in every tier, timed to the locked cut."
  },
  {
    "question": "What happens to our files after delivery?",
    "answer": "Finished masters are archived for 60 days with free re-exports to new aspect ratios, so later platform versions do not need a re-edit from scratch."
  },
  {
    "question": "How do we book and pay?",
    "answer": "Send your footage details, target runtime and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the edit slot, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
          index="07"
        >
          Costs, handoffs, cutdowns, revisions and booking — everything about video editing at FrameCipher Studio.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 md:p-8 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg marker:content-none select-none hover:text-frame-accent transition-colors">
                <span className="pr-4">{faq.question}</span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45 font-bold">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 md:p-8 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
