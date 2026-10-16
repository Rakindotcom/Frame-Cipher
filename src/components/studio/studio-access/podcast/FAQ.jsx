'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does podcast recording cost in Dhaka?",
    "answer": "At FrameCipher Studio, an audio session with mastering is ৳8,000. A 3-camera 4K video session is ৳18,000, and a full record-to-published episode with edit, grade, subtitles and 3 vertical clips is ৳35,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "How many people can record at the same time?",
    "answer": "Up to 4 speakers on discrete broadcast microphones, each tracked to an isolated channel. For larger panels or remote guests over Zoom or Riverside, we configure dedicated remote feeds."
  },
  {
    "question": "What pushes a quote from ৳8,000 toward ৳35,000?",
    "answer": "More speakers, 4K video instead of audio-only, longer sessions, full editing with grading, subtitle authoring, thumbnail packaging and the number of vertical cutdowns per episode."
  },
  {
    "question": "What is included in the audio session?",
    "answer": "Up to 2 hours of studio time, 4 broadcast dynamic microphones, engineer-monitored levels, multi-track 24-bit WAV stems, loudness mastering, raw handover same day and mastered files in 48 hours."
  },
  {
    "question": "Do you edit the episode and cut vertical clips?",
    "answer": "Yes. The Full Production Suite includes a complete multicam edit, colour grade, audio sweetening, Bangla and English subtitles, 3 captioned vertical clips and thumbnail plus metadata packaging."
  },
  {
    "question": "Can I get the raw audio and video files immediately?",
    "answer": "Yes. At the end of your session we transfer all WAV stems and 4K angles to your drive, or upload them to a secure cloud drive within hours."
  },
  {
    "question": "What audio and video formats do I receive?",
    "answer": "Isolated 24-bit WAV stems, a loudness-mastered MP3 for RSS feeds, a 4K 16:9 YouTube master and 1080x1920 vertical cutdowns with captions."
  },
  {
    "question": "How many revisions are included?",
    "answer": "Full Production episodes include 2 structured revision rounds through a timestamped cloud review link. Audio sessions include mastering corrections against the brief."
  },
  {
    "question": "How fast can you deliver?",
    "answer": "Raw files go the same day and mastered audio in 48 hours. Full Production episodes deliver in 3 to 5 business days. Express 48-hour turnaround adds 30%."
  },
  {
    "question": "Do you offer retainers for weekly shows?",
    "answer": "Yes. Weekly shows can reserve a monthly retainer from ৳1,20,000 for 4 episodes, with standing studio slots and the same crew learning your show format."
  },
  {
    "question": "How do I book and pay?",
    "answer": "Send your date, speaker count and format by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Costs, formats, revisions and booking — everything about podcast recording at FrameCipher Studio.
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
