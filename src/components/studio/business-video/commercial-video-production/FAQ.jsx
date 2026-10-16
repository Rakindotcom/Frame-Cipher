'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does a commercial video cost in Dhaka?",
    "answer": "At FrameCipher Studio, a performance-built digital OVC with 15s, 30s and 60s cutdowns plus verticals is ৳88,000. A broadcast TVC with casting, styling and art direction starts from ৳3,60,000, and national multi-film campaigns start from ৳12,50,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "What pushes a quote from ৳88,000 toward ৳3,60,000?",
    "answer": "Casting and talent fees, wardrobe and makeup artistry, art direction and set design, specialty optics, more shoot days and locations, motion graphics, and broadcast compliance mastering."
  },
  {
    "question": "Do you produce television-compliant commercials (TVC)?",
    "answer": "Yes. We deliver commercials formatted and mastered to the technical and audio loudness specifications required by Bangladesh television broadcast networks and cinema screens."
  },
  {
    "question": "What aspect ratios and formats do you deliver for digital advertising?",
    "answer": "Custom exports in 16:9 for TV and YouTube, 1:1 square for Facebook feeds, and 9:16 vertical for Reels and TikTok ads, with safe-zone margin calibration on every version."
  },
  {
    "question": "How does FrameCipher handle casting, actors and styling?",
    "answer": "We manage complete talent casting, wardrobe coordination and professional on-set makeup artistry tailored to your brand persona and target demographic, each line itemised in the quote."
  },
  {
    "question": "What is the standard production timeline for a commercial?",
    "answer": "Commercial campaigns typically take 7 to 10 working days from storyboard approval to final masters. Express 48 to 72-hour delivery is available at a 30% priority fee, and raw captures are available within 24 hours."
  },
  {
    "question": "Do you add Bangla voiceovers and subtitles?",
    "answer": "Yes. The broadcast tier includes a Bangla voiceover recording session in our vocal booth, and subtitled versions in Bangla and English are available on every tier."
  },
  {
    "question": "How many revisions are included?",
    "answer": "Revision rounds are set in your written quote for each tier. Review runs through a timestamped cloud link covering the hero cut and each cutdown before finishing."
  },
  {
    "question": "Can one shoot cover both TV and digital campaigns?",
    "answer": "Yes. We produce integrated TVC-plus-OVC packages from a single production, with one art direction across the broadcast master and every digital cutdown."
  },
  {
    "question": "How do I book and pay?",
    "answer": "Send your offer, placements and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Costs, formats, revisions and booking — everything about commercial video at FrameCipher Studio.
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
