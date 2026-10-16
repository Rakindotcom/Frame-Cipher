'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does a promotional video cost in Dhaka?",
    "answer": "At FrameCipher Studio, a single launch promo of 30 to 60 seconds with a story cut is ৳28,000. A coordinated campaign pack with a hero video, two hook variants and teaser cuts is ৳58,000, and seasonal blitz coverage is ৳1,25,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "How is a promotional video different from a commercial?",
    "answer": "A commercial is built around a paid ad placement with strict time limits, whereas a promotional video often serves broader objectives such as website launches, seasonal sales, product demonstrations or social campaigns."
  },
  {
    "question": "What pushes a quote from ৳28,000 toward ৳58,000?",
    "answer": "More hook variants and teaser cuts, presenter or talent direction, animated offer badges in two languages, more aspect ratios, and a showroom field-shoot day add-on."
  },
  {
    "question": "Can you shoot product promotional videos in your studio?",
    "answer": "Yes. Our Dhaka studio has product staging tables, high-CRI continuous lighting grids, macro lenses and coloured backdrops calibrated for product reveal reels."
  },
  {
    "question": "Do you provide on-screen actors, models or voiceover artists?",
    "answer": "Yes. Depending on scope, we coordinate bilingual voiceover artists in Bangla and English and on-screen presenters or models suited to your brand category."
  },
  {
    "question": "How long does a promotional video project take?",
    "answer": "Simple social promos take 3 to 5 working days from brief to delivery. Comprehensive launch campaigns with multi-ratio deliverables take 1 to 2 weeks. Express 48-hour delivery is available for flash sales at a 25% priority fee."
  },
  {
    "question": "What video formats will we receive?",
    "answer": "High-bitrate masters in 16:9 for YouTube and websites, 1:1 square for social feeds, and 9:16 vertical for Reels, TikTok and Shorts, with burned-in subtitles and SRT files."
  },
  {
    "question": "Do you add Bangla subtitles and offer badges?",
    "answer": "Yes. We animate offer badges, prices and deadlines in Bangla and English, with burned-in subtitles for sound-off mobile browsing."
  },
  {
    "question": "How many revisions are included?",
    "answer": "Revision rounds are set in your written quote for each tier. Review runs through a timestamped cloud link covering the hero and each cutdown before finishing."
  },
  {
    "question": "How do I book and pay?",
    "answer": "Send your offer, launch date and audience by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Costs, formats, revisions and booking — everything about promotional video at FrameCipher Studio.
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
