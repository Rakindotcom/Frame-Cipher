'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does post-production cost in Dhaka?",
    "answer": "At FrameCipher Studio, an Essential Finish up to 5 minutes is ৳12,000. A Commercial Grade up to 10 minutes with cinematic colour and sound design is ৳45,000, and feature or series finishing starts from ৳1,25,000 on a scoped quote. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "Can you finish footage filmed outside your studio?",
    "answer": "Yes. Most post-production work starts from external footage. Deliver camera originals on a portable SSD at ECB Chattar or by Google Drive or Dropbox link, and we verify every file with checksums before the first cut."
  },
  {
    "question": "What file formats and LOG profiles do you grade?",
    "answer": "We grade all major camera profiles in DaVinci Resolve Studio: Sony S-Log3 and S-Gamut3.Cine, Canon C-Log2 and C-Log3, ARRI LogC, Blackmagic RAW, REDCODE RAW and Apple ProRes, on colour-calibrated monitors."
  },
  {
    "question": "What pushes a quote from ৳12,000 toward ৳45,000?",
    "answer": "Longer runtime and more raw footage to conform, multi-camera sync, LOG rescue work, motion graphics and VFX cleanup, more aspect ratios and subtitle languages, extra revision rounds and priority turnaround."
  },
  {
    "question": "How do we review cuts and leave feedback?",
    "answer": "We share secure timestamped cloud review links where your team comments frame-accurately on the player. Full scopes include 2 structured revision rounds; Essential Finish includes 1."
  },
  {
    "question": "What sound work is included?",
    "answer": "Dialogue cleanup with spectral de-noise, de-reverb and de-click, EQ and compression, plus sound-effect design, music beds and loudness compliance on Commercial Grade and above. Finished stems (dialogue, music, effects) ship with Feature Finish."
  },
  {
    "question": "Do you add Bangla and English subtitles?",
    "answer": "Yes. Timed SRT and VTT subtitle files in Bangla or English are included in every tier, synced to the locked cut."
  },
  {
    "question": "How fast can you deliver?",
    "answer": "Standard finishing delivers in 5–10 working days from verified intake. Express 48–72 hour finishing adds 30%, and raw or proxy files are available within 24 hours."
  },
  {
    "question": "What happens to our files after delivery?",
    "answer": "Finished masters are archived for 60 days with free re-exports to new aspect ratios. Feature Finish adds archive-grade uncompressed preservation copies."
  },
  {
    "question": "How do we book and pay?",
    "answer": "Send your footage details, goal and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the finishing slot, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Costs, handoffs, formats, revisions and booking — everything about post-production at FrameCipher Studio.
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
