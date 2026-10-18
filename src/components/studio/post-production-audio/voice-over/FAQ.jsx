'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does voice over recording cost in Dhaka?",
    "answer": "At FrameCipher Studio, a Short Read up to 2 minutes is ৳4,500. A Commercial VO with direction, timing to picture and usage rights is ৳9,500, and series or course narration runs ৳28,000 per 60 minutes. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "Do you have native Bangla and English voice artists?",
    "answer": "Yes. The roster covers male and female voices in shuddho Bangla, conversational Bangla, neutral English and British or American accent options, matched to your script before the session."
  },
  {
    "question": "Can we direct the talent live during recording?",
    "answer": "Yes. Direct in person from our studio lounge or remotely over Zoom or Google Meet, giving inflection and pacing guidance while the talent performs."
  },
  {
    "question": "What pushes a quote from ৳4,500 toward ৳9,500?",
    "answer": "Longer scripts, higher-profile talent, commercial broadcast usage rights, bilingual delivery, timing and sync to locked picture, and priority turnaround."
  },
  {
    "question": "What should we send before the session?",
    "answer": "The final script as editable text with pronunciations for brand names and technical terms marked, tone references, and — for sync work — the locked video with timecodes."
  },
  {
    "question": "Are recordings delivered broadcast-ready?",
    "answer": "Yes. Masters are 24-bit 48kHz WAV files with de-breathing, de-essing, EQ, compression and loudness matching. Raw unprocessed tracks are available on request."
  },
  {
    "question": "Can the narration be synced to our video?",
    "answer": "Yes. Commercial VO includes timing the performance to your locked picture, and we can deliver a finished synced video track alongside the audio masters."
  },
  {
    "question": "How fast can you deliver?",
    "answer": "Short reads deliver in 24–48 hours from script confirmation. Commercial VO follows your picture-lock schedule, and series narration runs on agreed multi-session calendars. Priority lanes add 30%."
  },
  {
    "question": "What if a line needs re-recording?",
    "answer": "Pickup and correction windows are included on full scopes, re-recorded in the same booth setup so replacement lines match seamlessly. Masters are archived for 60 days."
  },
  {
    "question": "How do we book and pay?",
    "answer": "Send your script, language and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the session, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Costs, talent, direction, sync and booking — everything about voice over at FrameCipher Studio.
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
