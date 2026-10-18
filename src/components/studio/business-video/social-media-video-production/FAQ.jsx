'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does social media video cost in Dhaka?",
    "answer": "At FrameCipher Studio, a Batch-10 pack with 10 finished captioned verticals is ৳32,000. A Batch-20 pack with 20 clips and a posting calendar is ৳62,000, and the monthly engine with 30 or more clips is ৳1,15,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "What pushes a quote from ৳32,000 toward ৳62,000?",
    "answer": "Doubling the clip count, a mid-session styling and backdrop change, b-roll overlays and product inserts, hook variants on priority topics, and the 30-day posting calendar with caption drafts."
  },
  {
    "question": "Can we batch-record multiple shorts in one studio visit?",
    "answer": "Yes. Our batch workflow lets creators, brands and executives record 10 scripted verticals in a single 4-hour session, or up to 20 in a full-day session at Matikata ECB Chattar."
  },
  {
    "question": "How many reels or TikToks fit in a single session?",
    "answer": "A half-day session of 4 hours typically yields 10 finished clips. A full-day session of 8 hours captures up to 20 vertical videos of 15 to 60 seconds each."
  },
  {
    "question": "Are kinetic captions and trending audio included?",
    "answer": "Yes. Every clip includes dynamic subtitles with highlighted keyword styling in English or Bangla, sound-effect cues, and licensed background music."
  },
  {
    "question": "Do you provide hook scripting and trend guidance?",
    "answer": "Yes. We review your scripts before recording so every video hooks viewers in the first 2 seconds, and the monthly engine adds trend-jacking scripts written for your niche."
  },
  {
    "question": "What formats will we receive?",
    "answer": "Platform-ready 9:16 MP4s for Reels, Shorts and TikTok, custom cover frames and thumbnail stills, and SRT caption files with every clip."
  },
  {
    "question": "How many revisions are included?",
    "answer": "Revision rounds are set in your written quote for each tier. Review runs through a timestamped cloud link covering every clip before caption finishing."
  },
  {
    "question": "How fast can you deliver?",
    "answer": "Batch-10 packs deliver in 3 to 5 working days; Batch-20 packs in 5 to 7 working days. A 48-hour rush edit lane is available at a 25% priority fee, and raw captures are available within 24 hours."
  },
  {
    "question": "How do I book and pay?",
    "answer": "Send your platforms, clip count and scripts by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Costs, formats, revisions and booking — everything about social video at FrameCipher Studio.
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
              <div className="border-t-2 border-frame-border p-6 md:p-8 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg wide:text-lg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
