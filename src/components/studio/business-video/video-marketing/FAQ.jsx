'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does video marketing cost in Dhaka?",
    "answer": "At FrameCipher Studio, a funnel starter with 3 videos and a distribution map is ৳55,000. A 30-day growth sprint with 8 assets and hook testing is ৳1,25,000, and the always-on monthly engine is ৳2,40,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "How does video marketing differ from standard video production?",
    "answer": "Standard production focuses on filming. Video marketing adds audience research, funnel positioning, search-query targeting, conversion-focused scripting and a distribution map your media team can run."
  },
  {
    "question": "What pushes a quote from ৳55,000 toward ৳1,25,000?",
    "answer": "More assets and funnel stages, more hook variants, landing-page embeds with CRO notes, retargeting sequences, and the day-30 metrics review with a scaling playbook."
  },
  {
    "question": "Do you create multiple opening hooks for A/B creative testing?",
    "answer": "Yes. We film 3 to 5 alternative opening hooks for the same core video, so you can test which angle delivers the highest thumb-stop rate and lowest cost per lead."
  },
  {
    "question": "How do you optimise videos for YouTube search?",
    "answer": "We write keyword-led titles, rich descriptions, search tags and chapter timestamps, and design high-CTR thumbnail artwork for every video."
  },
  {
    "question": "Can you help distribute videos across Meta and Google Ads?",
    "answer": "We hand your team a distribution and placement guide for Meta, YouTube and TikTok with specs for every asset. Media buying itself stays with your team, supported by our scaling playbook on sprint tiers."
  },
  {
    "question": "What formats will we receive?",
    "answer": "Masters in 16:9 for YouTube and landing pages, plus 1:1 and 9:16 versions for feeds, Reels, Shorts and TikTok, each with captions and safe-zone calibration."
  },
  {
    "question": "Do you add Bangla subtitles?",
    "answer": "Yes. We produce English and Bangla captions with SRT files on every asset, plus burned-in versions for sound-off autoplay placements."
  },
  {
    "question": "How fast can you deliver?",
    "answer": "Asset batches deliver in 5 to 10 working days from the shoot. Sprints run on a fixed 30-day calendar. Express 48 to 72-hour delivery is available at a 30% priority fee, and raw captures are available within 24 hours."
  },
  {
    "question": "How do I book and pay?",
    "answer": "Send your funnel goal and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Costs, formats, revisions and booking — everything about video marketing at FrameCipher Studio.
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
